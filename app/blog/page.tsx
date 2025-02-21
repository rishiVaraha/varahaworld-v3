import React from "react";
import { Metadata } from "next";
import { sanitizeString } from "@/lib/utils";
import Link from "next/link";
import Image from "next/legacy/image";
import Wrapper from "@/components/wrapper";

interface ArticleContent {
  id: string;
  content_html: string;
}

export interface BlogProps {
  ID: number;
  author: string;
  content: ArticleContent[];
  heritageverse: boolean;
  image: string;
  last_updated_on: string;
  published: boolean;
  published_on: string;
  title: string;
  uuid: string;
  varahaheritage: boolean;
}

export const metadata: Metadata = {
  title: "Blogs",
  description: "Explore the world of heritage and culture through our blogs",
};

async function fetchData() {
  const res = await fetch("https://api.museumverse.net/api2/blogs-vheritage", {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

export default async function Page() {
  const blogs = await fetchData();

  return (
    <div className="bg-background relative z-10 lg:min-h-screen">
      <Wrapper className="mx-0 mb-4 mt-8 flex min-h-screen flex-col gap-4 bg-background px-4 lg:mb-8 lg:gap-10">
        <div>
          <h1 className="font-playfair text-sm md:text-base lg:text-xl">
            Blog
          </h1>

          {/* border */}
          <div className="h-[1px] w-full bg-foreground/50" />
        </div>

        <h1 className="font-playfair text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Latest news & events
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-3 2xl:gap-16">
          {blogs.map((blog: BlogProps) => (
            <Link
              key={blog?.published_on}
              href={`/blog/${sanitizeString(blog.title)}-${blog.ID}`}
            >
              <div>
                <div className="relative h-48 overflow-hidden md:h-52 xl:h-[305px]">
                  <Image
                    src={blog?.image}
                    alt="BlogImage"
                    className="h-full w-full object-cover"
                    layout="fill"
                  />
                </div>

                <div className="flex w-full justify-between py-4">
                  <div className="line-clamp-1 flex-[3]">
                    <p className="... truncate text-base md:text-lg xl:text-xl">
                      {blog.title}
                    </p>
                    <span className="mr-1 text-xs text-[#BABABA] md:text-sm">
                      {new Date(blog?.published_on).getDate()}
                    </span>
                    <span className="text-xs text-[#BABABA] md:text-sm">
                      {new Date(blog?.published_on).toLocaleString("default", {
                        month: "long",
                      })}
                      ,{new Date(blog?.published_on).getFullYear()}
                    </span>
                  </div>
                  <div className="flex-1 text-end">
                    <span className="text-xs text-[#BABABA] md:text-sm">
                      5 min read
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
