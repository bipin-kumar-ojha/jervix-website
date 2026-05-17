import './Featurex.scss';

const Featurex = () => {
  const features = [
    {
      id: 'organization-registration',
      icon: '/assets/jervix-icon/records-icon.png',
      title: 'Organization Registration',
      description:
        'Create your company workspace and maintain core organization details in a structured system.',
    },
    {
      id: 'department-designation',
      icon: '/assets/jervix-icon/onboarding-icon.png',
      title: 'Department & Designation Setup',
      description:
        'Define departments and designations so your teams work with clear business structure.',
    },
    {
      id: 'role-management',
      icon: '/assets/jervix-icon/role-management-icon.png',
      title: 'User & Role Management',
      description:
        'Create users, assign roles, and manage access for employees based on responsibilities.',
    },
    {
      id: 'team-management',
      icon: '/assets/jervix-icon/task-management-icon.png',
      title: 'Team Management',
      description:
        'Group employees into teams and keep team ownership simple, visible, and organized.',
    },
    {
      id: 'project-management',
      icon: '/assets/jervix-icon/incident-tracking-icon.png',
      title: 'Project Management',
      description:
        'Create projects, connect the right teams, and manage project-level details from one place.',
    },
    {
      id: 'task-assignment',
      icon: '/assets/jervix-icon/activity-logs-icon.png',
      title: 'Task Assignment',
      description:
        'Assign tasks to employees, track progress, and improve accountability across projects.',
    },
    {
      id: 'budget-tracking',
      icon: '/assets/jervix-icon/reporting-icon.png',
      title: 'Budget Tracking',
      description:
        'Monitor project budgets and keep spending visibility connected to project execution.',
    },
    {
      id: 'performance-tracking',
      icon: '/assets/jervix-icon/access-control-icon.png',
      title: 'Performance Tracking',
      description:
        'Review employee task progress and performance indicators to support better decisions.',
    },
  ];

  return (
    <section className="platform-features">
      <div className="platform-features__container">
        <div className="platform-features__header">
          <div className="platform-features__badge">Platform Features</div>
          <h2 className="platform-features__title">
            Core Tools to Manage Your Organization
          </h2>
          <p className="platform-features__subtitle">
            Jervix gives businesses the core tools to set up organization
            structure, manage users, run projects, assign tasks, and track
            budgets and performance.
          </p>
        </div>

        <div className="platform-features__content">
          <aside className="platform-features__summary">
            <span className="platform-features__summary-label">One connected system</span>
            <h3>Set up, assign, track, and improve work delivery.</h3>
            <p>
              Jervix connects your organization structure with project execution,
              budget visibility, and employee performance tracking.
            </p>
            <div className="platform-features__summary-metrics">
              <div>
                <strong>9</strong>
                <span>core modules</span>
              </div>
              <div>
                <strong>1</strong>
                <span>workspace</span>
              </div>
            </div>
          </aside>

          <div className="platform-features__list">
          {features.map((feature, index) => (
            <article key={feature.id} className="platform-features__item">
              <span className="platform-features__item-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="platform-features__item-icon">
                  <img src={feature.icon} alt="" />
              </div>
              <div className="platform-features__item-copy">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featurex;
