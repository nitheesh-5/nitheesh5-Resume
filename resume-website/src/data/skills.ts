export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["C#"],
  },
  {
    title: "Frontend",
    skills: [
      "Angular (v14–19)",
      "TypeScript",
      "RxJs",
      "NgRx",
      "HTML",
      "CSS",
      "Angular Material",
      "Kendo UI",
      "NgBootstrap",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      ".NET Core",
      "ASP.NET Web API",
      "REST APIs",
      "Hangfire",
      "Repository Design Pattern",
    ],
  },
  {
    title: "Auth & Security",
    skills: ["Auth0", "RBAC", "JWT"],
  },
  {
    title: "Databases",
    skills: ["SQL Server", "MySQL"],
  },
  {
    title: "Testing",
    skills: ["Jasmine", "Karma", "Jest", "xUnit"],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Azure DevOps",
      "CI/CD Pipelines",
      "Git",
      "Jenkins",
      "Postman",
      "Visual Studio",
      "VS Code",
      "SSMS",
    ],
  },
  {
    title: "Methodologies",
    skills: ["Agile (Scrum)", "Waterfall"],
  },
];
