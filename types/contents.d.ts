export type HeroHeader = {
  headline: string
  subheader: string
  image: string
  button: {
    text: string
    route: string
  }
}

export type Card = {
  text: string
  subtext: string
  image: string
}

export type Cards = {
  header: string
  subheader: string
  content: Array<Card>
}
