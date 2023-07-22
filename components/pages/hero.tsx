import Link from "next/link"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { header } from "@/config/contents"

export default function Hero() {
  let layout, direction
  if (header.layout === "right") {
    layout = "flex-row-reverse md:items-center"
    direction = "md:text-left"
  } else if (header.layout === "center") {
    layout = "flex-col-reverse md:text-center md:items-center"
    direction = "md:text-center md:items-center"
  } else {
    layout = "flex-row md:items-center"
    direction = "md:text-left md:justify-start"
  }

  return (
    <header className="md:container">
      <div
        className={`flex gap-8 px-8 py-16 text-center md:items-start md:px-0 lg:py-32 ${layout}`}
      >
        <div
          className={`flex flex-1 flex-col gap-8 text-center md:items-start ${direction}`}
        >
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">{header.content.headline}</h1>
            <h2 className="text-lg font-light text-muted-foreground lg:text-xl">
              {header.content.subheader}
            </h2>
          </div>
          <Link
            href="/contact"
            className={`w-[10rem] ${cn(buttonVariants({ size: "sm" }))}`}
          >
            Get Started
          </Link>
        </div>
        {header.content.image !== "" ? (
          <div className="flex flex-1 justify-center">
            <Image
              src={header.content.image}
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
