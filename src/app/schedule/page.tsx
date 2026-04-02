import type { Metadata } from "next";
import ScheduleClient from "@/app/schedule/schedule-client";

export const metadata: Metadata = {
  title: "Schedule a Call | Social Bloom",
  description:
    "Book a strategy call to discuss your goals and get a custom quote.",
  openGraph: {
    title: "Schedule a Call | Social Bloom",
    description:
      "Book a strategy call to discuss your goals and get a custom quote.",
    type: "website",
    url: "https://socialbloom.io/schedule",
  },
};

export default function SchedulePage() {
  return <ScheduleClient />;
}
