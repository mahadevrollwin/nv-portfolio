import { site } from "@/lib/content";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    alternateName: site.name,
    url: site.url,
    email: site.email,
    jobTitle: "Product Designer & Full-Stack Engineer",
    sameAs: [site.github],
    description: site.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
