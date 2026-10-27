import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Let's Talk",
  description: "Start a project or say hello.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
