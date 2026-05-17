import "./blog.scss";
import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blogPosts";

const Blog = () => (
  <section className="blog">
    <div className="blog__inner">
      <div className="blog__header">
        <span className="blog__badge">Resources</span>
        <h2 className="blog__title">Ideas to run work better</h2>
        <p className="blog__subtitle">
          Simple reads on structure, accountability, budgets, and team performance.
        </p>

        <a href="#resources" className="blog__all-btn">
          View all <span>→</span>
        </a>
      </div>

      <div className="blog__posts" id="resources">
        {blogPosts.map((post, idx) => (
          <Link
            to={`/blog/${post.slug}`}
            className="blog__post"
            key={post.title}
          >
            <div className="blog__image-wrapper">
              <img src={post.image} alt={post.title} className="blog__image" />
              <span className="blog__category">{post.category}</span>
            </div>

            <div className="blog__content">
              <span className="blog__index">{String(idx + 1).padStart(2, "0")}</span>
              <h3 className="blog__post-title">{post.title}</h3>
              <p className="blog__post-desc">{post.desc}</p>
              <div className="blog__meta">
                <span className="blog__date">{post.date}</span>
                <span className="blog__read-time">{post.readTime}</span>
              </div>
              <span className="blog__read-more">Read article →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
