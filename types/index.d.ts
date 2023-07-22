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

export type Layout = {
  heroHeader: string
  headers: {
    featureCards: string
  }
}
