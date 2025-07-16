import type { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  cta?: string;
  onClick?: () => void;
  icon?: LucideIcon;
}
