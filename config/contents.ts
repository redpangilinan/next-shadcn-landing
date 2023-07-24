import { HeroHeader, ContentSection } from "@/types/contents"

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Leave blank `` if you don't want to put texts or images
 ==================== */

export const heroHeader: HeroHeader = {
  header: `Landing page made easy`,
  subheader: `Easy to setup. Customizable. Quick. Responsive. Built with reusability in mind.`,
  image: `https://picsum.photos/1280/720`,
}

export const featureCards: ContentSection = {
  header: ``,
  subheader: ``,
  content: [
    {
      text: `SEO Optimized`,
      subtext: `Improved website visibility on search engines`,
      image: `https://picsum.photos/300/300`,
    },
    {
      text: `Highly Performant`,
      subtext: `Fast loading times and smooth performance`,
      image: `https://picsum.photos/300/300`,
    },
    {
      text: `Easy Customizability`,
      subtext: `Change your content and layout with little effort`,
      image: `https://picsum.photos/300/300`,
    },
  ],
}

export const features: ContentSection = {
  header: `Features`,
  subheader: `Why choose Next Landing?`,
  content: [
    {
      text: `Fast performance`,
      subtext: `Improved website visibility on search engines`,
      image: `https://picsum.photos/400/400`,
    },
    {
      text: `Easy to use`,
      subtext: `Fast loading times and smooth performance`,
      image: `https://picsum.photos/400/400`,
    },
    {
      text: `Instant landing pages`,
      subtext: `Change your content and layout with little effort`,
      image: `https://picsum.photos/400/400`,
    },
  ],
}
