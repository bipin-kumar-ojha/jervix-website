import './FourBlock.scss';

const FourBlock = () => {
  const features = [
    {
      id: 'lifecycle',
      icon: '/assets/jervix-icon/lifecycle-icon.jpg',
      title: 'Complete Employee Lifecycle',
      description:
        'Manage every stage of an employee’s journey — from onboarding to exit — in one structured and organized system.',
    },
    {
      id: 'structure',
      icon: '/assets/jervix-icon/structure-icon.png',
      title: 'Clear Organizational Structure',
      description:
        'Define reporting managers, build multi-level roles, and maintain a clear hierarchy that reflects your real organization.',
    },
    {
      id: 'tasks',
      icon: '/assets/jervix-icon/tasks-icon.jpg',
      title: 'Task & Issue Management',
      description:
        'Create, assign, and track tasks or internal issues with full visibility and timely follow-ups.',
    },
    {
      id: 'transparency',
      icon: '/assets/jervix-icon/transparency-icon.png',
      title: 'Action Transparency',
      description:
        'Know who did what and when. Every important action is recorded for better accountability and reporting.',
    },
  ];

  return (
    <section className="features">
      <div className="features__container">
        <div className="features__header">
          <div className="features__badge">Why Jervix</div>
          <h2 className="features__title">
            Built for Structured, Growing Organizations
          </h2>
          <p className="features__subtitle">
            Jervix helps organizations bring clarity to employee management, 
            strengthen internal accountability, and simplify daily operations 
            — all within one unified platform.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature) => (
            <div key={feature.id} className={`features__card features__card--${feature.id}`}>
              <div className={`features__card-icon features__card-icon--${feature.id}`}>
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className="features__card-title">{feature.title}</h3>
              <p className="features__card-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourBlock;