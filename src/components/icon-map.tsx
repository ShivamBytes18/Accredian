import {
  BadgeIndianRupee,
  Brain,
  Globe2,
  Lightbulb,
  LucideIcon,
  Settings,
  Users2,
  BarChart3,
} from "lucide-react";
import type { EdgeProgram } from "@/data/content";

export const EDGE_ICON_MAP: Record<EdgeProgram["icon"], LucideIcon> = {
  bulb: Lightbulb,
  brain: Brain,
  people: Users2,
  chart: BarChart3,
  gear: Settings,
  globe: Globe2,
  card: BadgeIndianRupee,
};
