import { Metadata } from "next";
import Image from "next/legacy/image";

type Params = Promise<{ slug: string }>;

async function fetchData(id: string | undefined) {
  const res = await fetch(`https://api.museumverse.net/api2/blog/${id}`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  const id = await slug?.split("-").pop();

  // fetch data
  const res = await fetch(`https://api.museumverse.net/api2/blog/${id}`, {
    next: { revalidate: 300 },
  });

  const blog = await res.json();

  return {
    title: blog.title,
    description: blog.title,
    twitter: {
      title: blog.title,
      description: blog.title,
      images: [blog.image],
    },
    openGraph: {
      type: "website",
      url: `https://heritageverse.net/blog/${blog.uuid}`,
      siteName: "Heritageverse",
      title: blog.title,
      description: blog.title,
      images: [
        {
          url: blog.image,
          width: 800,
          height: 600,
          alt: blog.title,
        },
      ],
    },
  };
}

export default async function Page(props: { params: Params }) {
  const params = await props.params;
  const slug = params.slug;
  const id = await slug?.split("-").pop();
  const blogData = await fetchData(id);

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return null;
    return {
      day: date.getDate(),
      month: date.toLocaleString("default", { month: "long" }),
      year: date.getFullYear(),
    };
  };

  const publishedDate = blogData?.published_on
    ? formatDate(blogData.published_on)
    : null;

  return (
    <div className="flex min-h-screen relative z-10  w-full flex-col items-center justify-center bg-background">
      <div key={blogData?.ID}>
        <div className="mx-auto flex h-fit w-full px-3 py-4 sm:px-8 lg:w-full xl:w-[80%] xl:px-0">
          {/* author and date */}
          <div className="hidden w-[200px] flex-col lg:flex xl:w-1/4">
            <span className="font-nunito text-xl !leading-6 md:!leading-[16.74px]">
              By
            </span>
            <span className="text-base font-semibold md:text-xl">
              {blogData?.author}
            </span>
            {publishedDate ? (
              <>
                <span className="font-bitter text-5xl !leading-[52px] md:text-6xl">
                  {publishedDate.day}
                </span>
                <span className="font-nunito text-base !leading-6 md:text-xl md:!leading-[32.74px]">
                  {publishedDate.month}, {publishedDate.year}
                </span>
              </>
            ) : (
              <span className="font-nunito text-base !leading-6 md:text-xl">
                No published date
              </span>
            )}
          </div>

          {/* blogData content */}
          <div className=" flex w-full flex-col lg:w-3/4">
            <div className="relative mb-4 w-full h-[200px] lg:mb-0 lg:h-[400px]">
              <Image
                src={blogData?.image}
                alt="cover image"
                className="object-cover"
                layout="fill"
              />
            </div>

            <h1 className="font-bitter text-xl font-bold md:text-5xl lg:pt-8">
              {blogData?.title}
            </h1>
            {/* author and date for sm devices */}
            <div className="mt-4 flex w-full flex-col lg:hidden">
              <span className="font-nunito text-sm">
                By{" "}
                <span className="text-base font-semibold">
                  {blogData?.author}
                </span>
              </span>
              {publishedDate ? (
                <span className="font-bitter text-3xl">
                  {publishedDate.day}
                  <span className="font-nunito text-base !leading-6 md:text-xl md:!leading-[32.74px]">
                    {publishedDate.month}, {publishedDate.year}
                  </span>
                </span>
              ) : (
                <span className="font-nunito text-base !leading-6 md:text-xl">
                  No published date
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <article className="prose max-w-none text-sm text-white/80 md:prose-lg lg:prose-xl prose-h2:my-0 prose-h2:text-base prose-h2:text-white prose-h3:text-white/80 prose-p:my-4  prose-p:text-sm prose-strong:text-white/80 prose-img:mx-auto md:prose-h2:text-3xl md:prose-h3:text-lg md:prose-p:text-base">
                <div
                  className="font-nunito lg:font-bitter text-lg lg:text-xl xl:text-2xl xl:!leading-[38px]"
                  dangerouslySetInnerHTML={{
                    __html: blogData?.content_html,
                  }}
                />
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
