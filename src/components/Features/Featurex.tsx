import './Featurex.scss';

const Featurex = () => {
  const features = [
    {
      id: 'employee-records',
      icon: '/assets/jervix-icon/records-icon.png',
      title: 'Centralized Employee Records',
      description:
        'Maintain structured and secure employee information in one unified system for easy access and management.',
    },
    {
      id: 'onboarding',
      icon: '/assets/jervix-icon/onboarding-icon.png',
      title: 'Onboarding to Exit Tracking',
      description:
        'Manage the complete employee journey — including role changes, promotions, and exit processes — with clarity.',
    },
    {
      id: 'role-management',
      icon: '/assets/jervix-icon/role-management-icon.png',
      title: 'Role & Hierarchy Management',
      description:
        'Build multi-level organizational structures with clear reporting relationships and defined responsibilities.',
    },
    {
      id: 'task-management',
      icon: '/assets/jervix-icon/task-management-icon.png',
      title: 'Task Assignment & Monitoring',
      description:
        'Assign tasks to individuals or teams and track progress with full visibility and status updates.',
    },
    {
      id: 'incident-tracking',
      icon: '/assets/jervix-icon/incident-tracking-icon.png',
      title: 'Incident & Issue Tracking',
      description:
        'Create and manage internal tickets efficiently to ensure timely resolution and accountability.',
    },
    {
      id: 'activity-logs',
      icon: '/assets/jervix-icon/activity-logs-icon.png',
      title: 'Activity Logs & Transparency',
      description:
        'Track key actions across the system and maintain clear visibility into operational activities.',
    },
    {
      id: 'reporting',
      icon: '/assets/jervix-icon/reporting-icon.png',
      title: 'Operational Reports',
      description:
        'Generate structured reports to monitor employee activity, task performance, and organizational insights.',
    },
    {
      id: 'access-control',
      icon: '/assets/jervix-icon/access-control-icon.png',
      title: 'Role-Based Access Control',
      description:
        'Ensure the right people have access to the right information based on their role within the organization.',
    },
  ];

  return (
    <section className="platform-features">
      <div className="platform-features__container">
        <div className="platform-features__header">
          <div className="platform-features__badge">Platform Features</div>
          <h2 className="platform-features__title">
            Everything You Need to Manage Your Workforce Efficiently
          </h2>
          <p className="platform-features__subtitle">
            Jervix brings structure, visibility, and accountability to employee management — helping organizations operate with clarity and confidence.
          </p>
        </div>

        <div className="platform-features__grid">
          {features.map((feature) => (
            <div key={feature.id} className="platform-features__card">
              <div className="platform-features__card-icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className="platform-features__card-title">{feature.title}</h3>
              <p className="platform-features__card-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featurex;