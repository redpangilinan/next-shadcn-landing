export type SiteConfig = {
  name: string
  author: string
  description: string
  keywords: Array<string>
  url: {
    base: string
    author: string
  }
  ogImage: string
}

export type Settings = {
  themeToggleEnabled: boolean
}

export type Header = {
  content: {
    headline: string
    subheader: string
    image: string
  }
  layout: string
}
