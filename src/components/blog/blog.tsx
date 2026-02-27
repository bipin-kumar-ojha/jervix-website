import "./blog.scss";

const blogPosts = [
  {
    category: "Workforce Management",
    image: "/assets/blog1.jpeg",
    title: "How to Build a Clear Organizational Structure",
    desc: "A practical guide to defining reporting hierarchies, roles, and responsibilities for growing teams.",
    date: "Feb 15, 2026",
    readTime: "6 min read",
  },
  {
    category: "Operations",
    image: "/assets/blog2.jpeg",
    title: "Improving Accountability in the Workplace",
    desc: "Learn how structured task assignment and activity tracking can improve team performance.",
    date: "Feb 10, 2026",
    readTime: "7 min read",
  },
  {
    category: "Best Practices",
    image: "/assets/blog3.jpeg",
    title: "Managing Employee Data Without Chaos",
    desc: "Best practices for maintaining organized employee records from onboarding to exit.",
    date: "Feb 5, 2026",
    readTime: "5 min read",
  },
];

const Blog = () => (
  <section className="blog">
    <div className="blog__badge-row">
      <span className="blog__badge">Resources</span>
    </div>

    <div className="blog__header-row">
      <div className="blog__header-left">
        <h2 className="blog__title">Insights for Growing Organizations</h2>
        <p className="blog__subtitle">
          Practical guidance on employee management, organizational structure, and operational clarity.
        </p>
      </div>

      <div className="blog__header-right">
        <button className="blog__all-btn">
          View All Articles <span>→</span>
        </button>
      </div>
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