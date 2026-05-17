import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../../data/blogPosts";
import "./BlogDetail.scss";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);
  const relatedPosts = blogPosts.filter((item) => item.slug !== slug);

  if (!post) {
    return (
      <main className="blog-detail blog-detail--not-found">
        <div className="blog-detail__not-found">
          <span className="blog-detail__badge">Article not found</span>
          <h1>We could not find this resource.</h1>
          <p>The article may have moved, or the link may be incorrect.</p>
          <Link to="/" className="blog-detail__button">Back to Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="blog-detail">
      <section className="blog-detail__hero">
        <div className="blog-detail__hero-copy">
          <Link to="/#resources" className="blog-detail__back">← Back to resources</Link>
          <span className="blog-detail__badge">{post.category}</span>
          <h1>{post.title}</h1>
          <p>{post.desc}</p>
          <div className="blog-detail__meta">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
        <div className="blog-detail__hero-image">
          <img src={post.image} alt={post.title} />
        </div>
      </section>

      <section className="blog-detail__body">
        <article className="blog-detail__article">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <aside className="blog-detail__sidebar">
          <div className="blog-detail__panel">
            <span>Key takeaways</span>
            <ul>
              {post.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="blog-detail__related">
        <div className="blog-detail__related-header">
          <span className="blog-detail__badge">More resources</span>
          <h2>Continue reading</h2>
        </div>
        <div className="blog-detail__related-grid">
          {relatedPosts.map((item) => (
            <Link to={`/blog/${item.slug}`} className="blog-detail__related-card" key={item.slug}>
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogDetail;
