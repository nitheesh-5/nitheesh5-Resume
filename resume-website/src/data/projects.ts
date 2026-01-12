export interface Project {
  title: string;
  description: string;
  tech: string[];
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    title: "AI Powered Denial Assist",
    description:
      "AI-driven application simulating live payer–operations calls to analyze claim denials and guide resolution strategies in real time.",
    tech: ["Python", "FastAPI", "AI/ML", "Streamlit"],
    highlight: true,
  },
  {
    title: "Enterprise Auth & Role Management",
    description:
      "Built scalable user, role, and permission management using Auth0 Management APIs with bulk invitations and organization-based access control.",
    tech: [".NET", "C#", "Auth0", "REST APIs"],
  }
];
