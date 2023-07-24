import Image from "next/image"
import HeadingText from "@/components/heading-text"
import { featureCards } from "@/config/contents"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function FeatureCards() {
  return (
    <section className="space-y-8 px-8 py-16 text-center md:px-0 lg:py-20">
      <HeadingText subtext={featureCards.subheader}>
        {featureCards.header}
      </HeadingText>
      <div className="flex flex-wrap justify-center gap-4">
        {featureCards.content.map((cards) => (
          <Card
            key={cards.text}
            className="flex flex-grow flex-col items-center justify-between"
          >
            <CardHeader>
              {cards.image !== "" ? (
                <div className="flex flex-1">
                  <Image
                    src={cards.image}
                    width={100}
                    height={100}
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
