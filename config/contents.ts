import { HeroHeader, ContentSection } from "@/types/contents"

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
 ==================== */

export const heroHeader: HeroHeader = {
  header: `Landing pages made easy`,
  subheader: `Easy to setup. Customizable. Quick. Responsive.`,
  image: `/hero-img.webp`,
}

export const featureCards: ContentSection = {
  header: `Powered by`,
  subheader: `What makes Next Landing possible`,
  content: [
    {
      text: `Next.js`,
      subtext: `The React Framework`,
      image: `/next.svg`,
    },
    {
      text: `shadcn/ui`,
      subtext: `Beautifully designed components`,
      image: `/shadcn-ui.svg`,
    },
    {
      text: `Vercel`,
      subtext: `Develop. Preview. Ship.`,
      image: `/vercel.svg`,
    },
  ],
}

export const features: ContentSection = {
  header: `Features`,
  subheader: `Why use Next Landing?`,
  image: `/features-img.webp`,
  content: [
    {
      text: `SEO Optimized`,
      subtext: `Improved website visibility on search engines`,
      image: `/seo.svg`,
    },
    {
      text: `Highly Performant`,
      subtext: `Fast loading times and smooth performance`,
      image: `/performant.svg`,
    },
    {
      text: `Easy Customizability`,
      subtext: `Change your content and layout with little effort`,
      image: `/customize.svg`,
    },
  ],
}
