export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "Integra Connect",
    role: "Senior Software Engineer",
    location: "Bengaluru, India",
    period: "May 2021 – Present",
    highlights: [
      "Built and maintained scalable healthcare SPAs using Angular (v14–19), TypeScript, and Angular Material for enterprise applications including TIC and ARRO.",
      "Designed and optimized RESTful APIs using .NET Web API, improving frontend integration and overall system performance.",
      "Led secure authentication and authorization implementation using Auth0 with Role-Based Access Control (RBAC) across multiple applications.",
      "Developed a Queue Management System using Angular and Hangfire, improving background task execution reliability and team productivity.",
      "Built a custom Auth0 Admin Portal for user, role, and organization management, extending Auth0 dashboard capabilities.",
      "Took ownership of complex features end-to-end, from requirement analysis and design to production rollout.",
      "Achieved 90%+ unit test coverage using Jasmine, Karma, Jest, and xUnit, significantly reducing production defects.",
      "Implemented CI/CD pipelines using Azure DevOps, enabling automated testing and seamless deployments.",
      "Worked extensively with SQL Server and MySQL for schema design, query optimization, and large data transformations.",
      "Led code reviews and mentored junior engineers, contributing to a clean and maintainable codebase.",
    ],
  },
];
