import { IconKeys } from "@/components/icons"

export type HeroHeader = {
  header: string
  subheader: string
  image: string
}

export type Content = {
  text: string
  subtext: string
  icon?: IconKeys
}

export type ContentSection = {
  header: string
  subheader: string
  image?: string
  content: Array<Content>
}
