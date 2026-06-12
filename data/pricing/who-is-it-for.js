import {
  Store,
  Stethoscope,
  Building2,
  Briefcase,
  LayoutDashboard,
  GraduationCap,
  Hotel,
  Wrench,
} from "lucide-react";

export const WHO_IS_IT_FOR = [
  {
    title: "Starter",
    description:
      "For local businesses getting online for the first time.",
    icon: Store,
    businesses: [
      "Restaurants & Cafés",
      "Salons & Spas",
      "Local Shops",
      "Gyms & Fitness Studios",
    ],
    accent: "starter",
  },

  {
    title: "Business Growth",
    description:
      "For businesses that want more enquiries, visibility and credibility.",
    icon: Stethoscope,
    businesses: [
      "Clinics & Dentists",
      "Architects",
      "Interior Designers",
      "Consultants",
    ],
    accent: "growth",
  },

  {
    title: "Business Pro",
    description:
      "For established businesses ready to scale operations.",
    icon: Building2,
    businesses: [
      "Construction Companies",
      "Educational Institutes",
      "Hotels & Resorts",
      "Multi-Service Businesses",
    ],
    accent: "pro",
  },

  {
    title: "Custom Solution",
    description:
      "For advanced requirements and custom workflows.",
    icon: LayoutDashboard,
    businesses: [
      "Client Portals",
      "Booking Systems",
      "Dashboards",
      "Internal Tools",
    ],
    accent: "custom",
  },
];