import { FC, useState } from "react";
import Link from "next/link";
import { BlogLayout } from "@github20k/components/blog/blog.layout";
import { Details } from "@github20k/services/blog/blog.interface";
import { NextSeo } from "next-seo";

export const BlogComponent: FC<{
  stargazers_count: number;
  blog: Details[];
}> = (props) => {
  const { stargazers_count, blog } = props;

  return (
    <>
      <NextSeo
        title={process.env.COURSE_NAME! + ' Blog'}
        description="Learn the best tips and trick to grow your GitHub library"
        canonical={process.env.COURSE_URL}
        openGraph={{
          url: process.env.COURSE_URL,
          title: process.env.COURSE_NAME,
          description: 'Learn the best tips and trick to grow your GitHub library',
          images: [
            {
              url: process.env.COURSE_URL + "/github-blog.png",
              width: 1200,
              height: 630,
              alt: process.env.COURSE_NAME,
              type: "image/png",
            },
          ],
          siteName: process.env.COURSE_NAME,
        }}
        twitter={{
          handle: "@nevodavid",
          site: "@nevodavid",
          cardType: "summary_large_image",
        }}
      />
      <BlogLayout stargazers_count={stargazers_count} image="/github-blog.png">
        <div className="flex flex-wrap -mx-4">
          {blog.map((blogArticle) => (
            <div
              key={blogArticle.slug}
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
            >
              <div className="rounded-lg overflow-hidden">
                <Link href={`/blog/${blogArticle.slug}`}>
                  <img
                    src={blogArticle.picture}
                    alt={blogArticle.title}
                    className="w-full h-100 lg:h-[130px] xl:h-[130px] md:h-[130px] object-cover"
                  />
                </Link>
                <div className="pt-4">
                  <h2 className="text-xl font-semibold mb-2 text-[#E1DCFF]">
                    <Link href={`/blog/${blogArticle.slug}`}>
                      {blogArticle.title}
                    </Link>
                  </h2>
                  <p className="text-gray-300 text-[#E1DCFF]">
                    <Link href={`/blog/${blogArticle.slug}`}>
                      {blogArticle.description}
                    </Link>
                  </p>
                  <div className="flex items-center mt-4">
                    <img
                      src={blogArticle.author.picture}
                      alt={blogArticle.author.name}
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <p className="text-gray-300 text-[#E1DCFF]">
                      By {blogArticle.author.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlogLayout>
    </>
  );
};
