import { SiteConfig } from "@/types"

/* ====================
[> WEBSITE CONFIG <]
-- Fill the details about your website
 ==================== */

const baseUrl = "http://localhost:3000"

export const siteConfig: SiteConfig = {
  name: "Next Landing",
  author: "redpangilinan",
  description: "Landing page template built in Next.js with shadcn/ui.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Radix UI",
    "shadcn/ui",
    "Landing Page",
    "Template",
  ],
  url: {
    base: baseUrl,
    author: "https://redpangilinan.live",
  },
  ogImage: `${baseUrl}/og.jpg`,
}
