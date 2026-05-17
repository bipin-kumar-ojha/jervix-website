import './FourBlock.scss';

const FourBlock = () => {
  const features = [
    {
      id: 'organization',
      icon: '/assets/jervix-icon/lifecycle-icon.jpg',
      title: 'Organization Setup',
      description:
        'Register your organization and create departments, designations, teams, users, and roles in one structured workspace.',
    },
    {
      id: 'structure',
      icon: '/assets/jervix-icon/structure-icon.png',
      title: 'Departments, Teams & Roles',
      description:
        'Build clear internal structure with department-level teams, role permissions, and designation-based responsibilities.',
    },
    {
      id: 'tasks',
      icon: '/assets/jervix-icon/tasks-icon.jpg',
      title: 'Project Task Assignment',
      description:
        'Create projects, assign tasks to employees, monitor progress, and keep every responsibility visible.',
    },
    {
      id: 'performance',
      icon: '/assets/jervix-icon/transparency-icon.png',
      title: 'Budget & Performance Tracking',
      description:
        'Track project budgets, employee work progress, and performance signals to improve delivery control.',
    },
  ];

  return (
    <section className="features">
      <div className="features__container">
        <div className="features__header">
          <div className="features__badge">Why Jervix</div>
          <h2 className="features__title">
            Built for Organized Business Operations
          </h2>
          <p className="features__subtitle">
            Jervix helps organizations set up their company structure, manage
            people, assign project work, and track budgets and performance from
            one unified platform.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature, index) => (
            <div key={feature.id} className={`features__card features__card--${feature.id}`}>
              <div className="features__card-top">
                <span className="features__card-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className={`features__card-icon features__card-icon--${feature.id}`}>
                  <img src={feature.icon} alt="" />
                </div>
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
