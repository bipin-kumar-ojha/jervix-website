import './Featurex.scss';

const Featurex = () => {
  const features = [
    {
      id: 'employee-records',
      icon: '👤',
      title: 'Centralized Employee Records',
      description:
        'Maintain structured and secure employee information in one unified system for easy access and management.',
    },
    {
      id: 'onboarding',
      icon: '📝',
      title: 'Onboarding to Exit Tracking',
      description:
        'Manage the complete employee journey — including role changes, promotions, and exit processes — with clarity.',
    },
    {
      id: 'role-management',
      icon: '🏢',
      title: 'Role & Hierarchy Management',
      description:
        'Build multi-level organizational structures with clear reporting relationships and defined responsibilities.',
    },
    {
      id: 'task-management',
      icon: '📋',
      title: 'Task Assignment & Monitoring',
      description:
        'Assign tasks to individuals or teams and track progress with full visibility and status updates.',
    },
    {
      id: 'incident-tracking',
      icon: '⚡',
      title: 'Incident & Issue Tracking',
      description:
        'Create and manage internal tickets efficiently to ensure timely resolution and accountability.',
    },
    {
      id: 'activity-logs',
      icon: '📊',
      title: 'Activity Logs & Transparency',
      description:
        'Track key actions across the system and maintain clear visibility into operational activities.',
    },
    {
      id: 'reporting',
      icon: '📈',
      title: 'Operational Reports',
      description:
        'Generate structured reports to monitor employee activity, task performance, and organizational insights.',
    },
    {
      id: 'access-control',
      icon: '🔐',
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
              <div className="platform-features__card-icon">{feature.icon}</div>
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