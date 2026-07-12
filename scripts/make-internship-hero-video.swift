import AVFoundation
import CoreGraphics
import Foundation
import ImageIO

let root = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let inputURL = root.appendingPathComponent("public/assets/jervix-internship-career-video-still.jpg")
let outputURL = root.appendingPathComponent("public/assets/jervix-internship-career-hero.mp4")

try? FileManager.default.removeItem(at: outputURL)

guard
  let imageSource = CGImageSourceCreateWithURL(inputURL as CFURL, nil),
  let sourceImage = CGImageSourceCreateImageAtIndex(imageSource, 0, nil)
else {
  fatalError("Unable to read hero source image")
}

let width = 1280
let height = 720
let fps = 24
let durationSeconds = 8
let totalFrames = fps * durationSeconds

let writer = try AVAssetWriter(outputURL: outputURL, fileType: .mp4)
let settings: [String: Any] = [
  AVVideoCodecKey: AVVideoCodecType.h264,
  AVVideoWidthKey: width,
  AVVideoHeightKey: height,
  AVVideoCompressionPropertiesKey: [
    AVVideoAverageBitRateKey: 1_150_000,
    AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel,
  ],
]

let input = AVAssetWriterInput(mediaType: .video, outputSettings: settings)
input.expectsMediaDataInRealTime = false

let pixelBufferAttributes: [String: Any] = [
  kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32ARGB,
  kCVPixelBufferWidthKey as String: width,
  kCVPixelBufferHeightKey as String: height,
]
let adaptor = AVAssetWriterInputPixelBufferAdaptor(
  assetWriterInput: input,
  sourcePixelBufferAttributes: pixelBufferAttributes
)

guard writer.canAdd(input) else {
  fatalError("Unable to add video input")
}
writer.add(input)
writer.startWriting()
writer.startSession(atSourceTime: .zero)

let colorSpace = CGColorSpaceCreateDeviceRGB()
let imageAspect = CGFloat(sourceImage.width) / CGFloat(sourceImage.height)
let videoAspect = CGFloat(width) / CGFloat(height)

func makeBuffer(frame: Int) -> CVPixelBuffer {
  var pixelBuffer: CVPixelBuffer?
  CVPixelBufferCreate(
    kCFAllocatorDefault,
    width,
    height,
    kCVPixelFormatType_32ARGB,
    pixelBufferAttributes as CFDictionary,
    &pixelBuffer
  )

  guard let buffer = pixelBuffer else {
    fatalError("Unable to create pixel buffer")
  }

  CVPixelBufferLockBaseAddress(buffer, [])
  defer { CVPixelBufferUnlockBaseAddress(buffer, []) }

  guard
    let baseAddress = CVPixelBufferGetBaseAddress(buffer),
    let context = CGContext(
      data: baseAddress,
      width: width,
      height: height,
      bitsPerComponent: 8,
      bytesPerRow: CVPixelBufferGetBytesPerRow(buffer),
      space: colorSpace,
      bitmapInfo: CGImageAlphaInfo.noneSkipFirst.rawValue
    )
  else {
    fatalError("Unable to create drawing context")
  }

  let t = CGFloat(frame) / CGFloat(totalFrames - 1)
  let loop = sin(t * .pi * 2)
  let drift = sin(t * .pi * 2 + 0.7)
  let baseScale: CGFloat = imageAspect > videoAspect
    ? CGFloat(height) / CGFloat(sourceImage.height)
    : CGFloat(width) / CGFloat(sourceImage.width)
  let zoom = baseScale * (1.08 + 0.035 * (1 + loop))
  let drawWidth = CGFloat(sourceImage.width) * zoom
  let drawHeight = CGFloat(sourceImage.height) * zoom
  let x = (CGFloat(width) - drawWidth) / 2 + drift * 24
  let y = (CGFloat(height) - drawHeight) / 2 + loop * 10

  context.interpolationQuality = .high
  context.setFillColor(CGColor(red: 0.04, green: 0.07, blue: 0.1, alpha: 1))
  context.fill(CGRect(x: 0, y: 0, width: width, height: height))
  context.draw(sourceImage, in: CGRect(x: x, y: y, width: drawWidth, height: drawHeight))

  let leftOverlay = CGGradient(
    colorsSpace: colorSpace,
    colors: [
      CGColor(red: 0.02, green: 0.04, blue: 0.06, alpha: 0.82),
      CGColor(red: 0.02, green: 0.04, blue: 0.06, alpha: 0.56),
      CGColor(red: 0.02, green: 0.04, blue: 0.06, alpha: 0.12),
      CGColor(red: 0.02, green: 0.04, blue: 0.06, alpha: 0.0),
    ] as CFArray,
    locations: [0, 0.38, 0.75, 1]
  )!
  context.drawLinearGradient(
    leftOverlay,
    start: CGPoint(x: 0, y: 0),
    end: CGPoint(x: width, y: 0),
    options: []
  )

  let topOverlay = CGGradient(
    colorsSpace: colorSpace,
    colors: [
      CGColor(red: 0.01, green: 0.02, blue: 0.03, alpha: 0.28),
      CGColor(red: 0.01, green: 0.02, blue: 0.03, alpha: 0.0),
      CGColor(red: 0.01, green: 0.02, blue: 0.03, alpha: 0.44),
    ] as CFArray,
    locations: [0, 0.55, 1]
  )!
  context.drawLinearGradient(
    topOverlay,
    start: CGPoint(x: 0, y: 0),
    end: CGPoint(x: 0, y: height),
    options: []
  )

  context.setFillColor(CGColor(red: 1, green: 0.82, blue: 0.36, alpha: 0.09 + 0.04 * (1 + loop)))
  context.fillEllipse(in: CGRect(x: 860 + drift * 18, y: 70 + loop * 10, width: 360, height: 210))

  return buffer
}

let frameDuration = CMTime(value: 1, timescale: CMTimeScale(fps))
var frame = 0

while frame < totalFrames {
  if input.isReadyForMoreMediaData {
    let buffer = makeBuffer(frame: frame)
    let time = CMTimeMultiply(frameDuration, multiplier: Int32(frame))
    adaptor.append(buffer, withPresentationTime: time)
    frame += 1
  } else {
    Thread.sleep(forTimeInterval: 0.01)
  }
}

input.markAsFinished()
writer.finishWriting {
  if writer.status == .failed {
    fatalError(writer.error?.localizedDescription ?? "Failed to write hero video")
  }
}

while writer.status == .writing {
  Thread.sleep(forTimeInterval: 0.05)
}
