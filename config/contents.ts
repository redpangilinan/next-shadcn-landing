import { HeroHeader, Cards } from "@/types/contents"

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file`
-- Example: `/header-image.jpg`
-- Leave blank `` if you don't want to put texts or images
 ==================== */

export const heroHeader: HeroHeader = {
  headline: `Landing page made easy`,
  subheader: `Easy to setup. Customizable. Quick. Responsive. Built with reusability in mind.`,
  image: `https://picsum.photos/1280/720`,
  button: {
    text: `Get started`,
    route: `/docs`,
  },
}

export const featureCards: Cards = {
  header: ``,
  subheader: ``,
  content: [
    {
      text: `SEO Optimized`,
      subtext: `Improved website visibility on search engines`,
      image: `https://picsum.photos/600/400`,
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
