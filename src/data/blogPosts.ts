export type BlogPost = {
  slug: string;
  category: string;
  image: string;
  title: string;
  desc: string;
  date: string;
  readTime: string;
  content: string[];
  highlights: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "set-up-departments-and-teams",
    category: "Organization Setup",
    image: "/assets/blog1.jpeg",
    title: "How to set up departments and teams",
    desc: "A practical guide to organizing departments, designations, teams, users, and roles for growing companies.",
    date: "Feb 15, 2026",
    readTime: "6 min read",
    content: [
      "A clear organization setup helps every employee understand where they belong, who they work with, and what responsibilities they own. Start by creating departments that match your real business functions, then add designations that define each position clearly.",
      "Once departments and designations are in place, create teams around how work actually happens. Teams can represent project groups, operations units, service delivery groups, or internal business functions. This makes task assignment and performance tracking easier later.",
      "Roles should control access and responsibility. Keep role names simple, assign users carefully, and review permissions as your organization grows. A clean structure today prevents confusion when more projects, employees, and budgets are added."
    ],
    highlights: [
      "Create departments based on real business functions",
      "Use designations to define responsibility",
      "Group employees into practical teams",
      "Assign roles based on access and ownership"
    ],
  },
  {
    slug: "assigning-project-tasks-with-clarity",
    category: "Project Operations",
    image: "/assets/blog2.jpeg",
    title: "Assigning project tasks with clarity",
    desc: "Learn how clear task ownership helps employees, managers, and teams track project progress.",
    date: "Feb 10, 2026",
    readTime: "7 min read",
    content: [
      "Project task assignment works best when every task has a clear owner, expected outcome, and visible status. This gives managers a direct view of progress and helps employees focus on the responsibilities that matter most.",
      "Before assigning tasks, connect the right team and employees to the project. This keeps work organized and prevents responsibilities from being scattered across informal messages or spreadsheets.",
      "Progress tracking should be simple enough to update regularly. When task status is visible, teams can identify delays early, rebalance workloads, and improve delivery without unnecessary follow-up."
    ],
    highlights: [
      "Connect teams and employees to each project",
      "Assign every task to a clear owner",
      "Track task progress in one place",
      "Use visibility to improve project delivery"
    ],
  },
  {
    slug: "tracking-budgets-and-performance-together",
    category: "Best Practices",
    image: "/assets/blog3.jpeg",
    title: "Tracking budgets and performance together",
    desc: "Best practices for connecting project budgets, employee tasks, and performance visibility.",
    date: "Feb 5, 2026",
    readTime: "5 min read",
    content: [
      "Budget tracking becomes more useful when it is connected to real project activity. Instead of viewing budgets separately, teams should see how spending relates to project work, task progress, and employee performance.",
      "Performance visibility should focus on practical work signals such as assigned tasks, completed work, progress updates, and project contribution. This helps managers make better decisions without relying only on manual reporting.",
      "When budgets and performance are tracked together, organizations get a clearer picture of delivery health. This makes it easier to manage project costs, support employees, and improve accountability."
    ],
    highlights: [
      "Connect budgets with project execution",
      "Review task progress alongside spend",
      "Use performance signals for better decisions",
      "Improve delivery accountability"
    ],
  },
];
