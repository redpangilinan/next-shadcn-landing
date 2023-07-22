import { Header } from "@/types"

/* ====================
[> CUSTOMIZING YOUR WEBSITE <]
SETTING UP IMAGES
-- Setup image by typing `/image-name.file`
-- Example: `/header-image.jpg`
-- Leave blank `` if you don't want to put images

LAYOUT OPTIONS
-- Change layout direction: left, right, center
 ==================== */

export const header: Header = {
  content: {
    headline: `Landing page made easy`,
    subheader: `Easy to setup. Customizable. Quick. Built with reusability in mind.`,
    image: `https://picsum.photos/1280/720`,
  },
  layout: `left`,
}
