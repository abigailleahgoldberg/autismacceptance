import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop for Acceptance | Autism Acceptance World",
  description:
    "Adult autism acceptance merch from WeBearish. Every purchase funds autism acceptance programs. 100% of profits reinvested. No puzzle pieces. No blue. No cure narratives.",
  keywords:
    "autism acceptance merch, autistic adult clothing, neurodivergent apparel, autism acceptance hoodie, stimming shirt, actually autistic",
  openGraph: {
    title: "Shop for Acceptance | Autism Acceptance World",
    description:
      "Adult autism acceptance merch. 100% of profits reinvested into autism acceptance programs.",
    url: "https://autismacceptance.world/shop",
    siteName: "Autism Acceptance World",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop for Acceptance | Autism Acceptance World",
    description:
      "Adult autism acceptance merch. 100% of profits reinvested. No puzzle pieces. No blue. Just acceptance.",
  },
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
