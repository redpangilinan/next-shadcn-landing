import Image from "next/image"
import HeadingText from "@/components/heading-text"
import { features } from "@/config/contents"

export default function Features() {
  const bgUrl = "https://picsum.photos/1920/1080"

  return (
    <section className="container space-y-8 py-16 lg:py-20" id="features">
      <HeadingText subtext={features.subheader} className="text-center">
        {features.header}
      </HeadingText>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="grid grid-cols-1 gap-8">
          {features.content.map((cards) => (
            <div
              key={cards.text}
              className="flex flex-col items-center gap-2 text-center md:flex-row md:gap-8 md:text-left"
            >
              {cards.image !== "" ? (
                <div className="flex">
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
              <div className="flex-1">
                <p className="md:text4xl text-2xl font-semibold">
                  {cards.text}
                </p>
                <p className="font-light text-muted-foreground md:text-lg">
                  {cards.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            backgroundImage: `url(${bgUrl})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        ></div>
      </div>
    </section>
  )
}
