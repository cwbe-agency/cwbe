import {
  MessageCircle,
  Mail,
  Clock3,
} from "lucide-react";

export const CONTACT_METHODS = [
  {
    icon: MessageCircle,
    title: "Chat On WhatsApp",
    description:
      "The fastest way to reach us. Great for quick questions and project discussions.",
    action: "Start Chat",
    type: "whatsapp",
  },

  {
    icon: Mail,
    title: "Send An Email",
    description:
      "Share project details, requirements or references and we'll respond within 24 hours.",
    action: "Send Email",
    type: "email",
  },

  {
    icon: Clock3,
    title: "Free Consultation",
    description:
      "Not sure where to start? We'll help you choose the right website strategy and package.",
    action: "Book Discussion",
    type: "consultation",
  },
];