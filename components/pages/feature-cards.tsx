import Image from "next/image"
import HeadingText from "@/components/heading-text"
import { featureCards } from "@/config/contents"
import { layout } from "@/config/layout"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function FeatureCards() {
  let format
  if (layout.headers.featureCards === "right") {
    format = "text-right"
  } else if (layout.headers.featureCards === "left") {
    format = "text-left"
  } else {
    format = "text-center"
  }

  return (
    <section className="space-y-8 px-8 py-16 text-center md:items-start md:px-0 lg:py-20">
      <HeadingText subtext={featureCards.subheader} className={format}>
        {featureCards.header}
      </HeadingText>
      <div className="flex flex-wrap justify-center gap-4">
        {featureCards.content.map((cards) => (
          <Card
            key={cards.text}
            className="flex w-[20rem] flex-col justify-between"
          >
            <CardHeader>
              {cards.image !== "" ? (
                <div className="flex flex-1 justify-center">
                  <Image
                    src={cards.image}
                    width={150}
                    height={150}
                    alt="Card image"
                  />
                </div>
              ) : (
                <></>
              )}
            </CardHeader>
            <CardContent className="space-y-2">
              <CardTitle>{cards.text}</CardTitle>
              <CardDescription>{cards.subtext}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
