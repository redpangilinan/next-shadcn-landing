import Link from "next/link"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { heroHeader } from "@/config/contents"
import { layout } from "@/config/layout"

export default function HeroHeader() {
  let format, direction
  if (layout.heroHeader === "right") {
    format = "md:flex-row-reverse md:items-center"
    direction = "md:text-left"
  } else if (layout.heroHeader === "center") {
    format = "md:flex-col-reverse md:text-center md:items-center"
    direction = "md:text-center md:items-center"
  } else {
    format = "md:flex-row md:items-center"
    direction = "md:text-left md:justify-start"
  }

  return (
    <header className="md:container">
      <div
        className={`flex flex-col-reverse gap-8 px-8 py-16 text-center md:items-start md:px-0 lg:py-28 ${format}`}
      >
        <div
          className={`flex flex-1 flex-col items-center gap-8 text-center md:items-start ${direction}`}
        >
          <div className="space-y-2">
            <h1 className="text-4xl font-bold md:text-5xl">
              {heroHeader.headline}
            </h1>
            <h2 className="text-lg font-light text-muted-foreground lg:text-xl">
              {heroHeader.subheader}
            </h2>
          </div>
          <Link
            href={heroHeader.button.route}
            className={`w-[8rem] ${cn(buttonVariants({ size: "sm" }))}`}
          >
            {heroHeader.button.text}
          </Link>
        </div>
        {heroHeader.image !== "" ? (
          <div className="flex flex-1 justify-center">
            <Image
              src={heroHeader.image}
              width={600}
              height={600}
              alt="Header image"
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  )
}
