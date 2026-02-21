import React from "react";
import "./blog.scss";

const blogPosts = [
  {
    category: "Security",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f1a56?auto=format&fit=crop&w=800&q=80",
    title: "Complete Guide to Zero Trust Architecture",
    desc: "Learn how to implement zero trust security principles in your organization with our comprehensive guide.",
    date: "Feb 15, 2026",
    readTime: "8 min read",
  },
  {
    category: "Compliance",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    title: "SOC 2 Compliance Checklist for 2026",
    desc: "Everything you need to know about achieving SOC 2 Type II certification for your SaaS platform.",
    date: "Feb 10, 2026",
    readTime: "12 min read",
  },
  {
    category: "Best Practices",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    title: "Top 10 Security Threats in Enterprise SaaS",
    desc: "Understand the latest security threats facing enterprise organizations and how to protect against them.",
    date: "Feb 5, 2026",
    readTime: "6 min read",
  },
];

const Blog = () => (
  <section className="blog">
    <div className="blog__header">
      <span className="blog__badge">Resources</span>
      <h2 className="blog__title">Latest Insights</h2>
      <p className="blog__subtitle">
        Expert guidance on security, compliance, and best practices
      </p>
      <button className="blog__all-btn">View All Resources <span>→</span></button>
    </div>
    <div className="blog__posts">
      {blogPosts.map((post, idx) => (
        <div className="blog__post" key={idx}>
          <div className="blog__image-wrapper">
            <img src={post.image} alt={post.title} className="blog__image" />
            <span className="blog__category">{post.category}</span>
          </div>
          <div className="blog__content">
            <h3 className="blog__post-title">{post.title}</h3>
            <p className="blog__post-desc">{post.desc}</p>
            <div className="blog__meta">
              <span className="blog__date">{post.date}</span>
              <span className="blog__read-time">{post.readTime}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Blog;
