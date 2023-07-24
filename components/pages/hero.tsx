import Link from "next/link"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { heroHeader } from "@/config/contents"

export default function HeroHeader() {
  return (
    <section className="container flex flex-col-reverse gap-8 py-12 text-center lg:flex-row lg:items-center lg:py-20">
      <div className="flex flex-1 flex-col items-center gap-8 text-center lg:items-start lg:justify-start lg:text-left">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold lg:text-5xl">
            {heroHeader.header}
          </h1>
          <h2 className="text-lg font-light text-muted-foreground lg:text-xl">
            {heroHeader.subheader}
          </h2>
        </div>
        <Link
          href="#features"
          className={`w-[10rem] ${cn(buttonVariants({ size: "lg" }))}`}
        >
          Get started
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
    </section>
  )
}
