import EmblaCarousel from "@/components/carousel/EmblaCarousel";

export default function Impact() {
  return (
    <div className="mb-4 sm:mb-10 lg:mb-24" id="work">
      <div className="flex w-full items-center justify-center pt-5 lg:pt-10 xl:pt-20 sm:mb-4 md:mb-0">
        <div className="flex max-w-3xl flex-col items-center justify-center gap-4 text-center">
          <h2 className="mx-12 my-2 font-playfair text-[25px] text-foreground/80 md:text-3xl lg:my-8 lg:text-[35px] xl:text-[40px] 2xl:text-[50px]">
            Impact and Stories
          </h2>
          <p className="text-sm text-foreground/90 lg:text-xl">
            Why does heritage preservation matter? <br />
            Because our cultural heritage is more than just relics of the past –
            it is a living testament to our shared identity, values, and
            traditions. By digitizing and preserving these treasures, we not
            only safeguard our history but also provide future generations with
            a window into the rich tapestry of human civilization. Our mission
            is not just about preserving the past; it&apos;s about shaping the
            future.
          </p>
        </div>
      </div>
      <EmblaCarousel />
    </div>
  );
}
