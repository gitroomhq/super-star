import { FC } from "react";
import { BlogLayout } from "@github20k/components/blog/blog.layout";
import Link from "next/link";
import { Details } from "@github20k/services/blog/blog.interface";
import ReactHtmlParser from "react-html-parser";
import Head from "next/head";

export const BlogPostComponent: FC<{
  stargazers_count: number;
  blog: Details;
}> = (props) => {
  const { stargazers_count, blog } = props;

  return (
    <>
      {blog?.seo ? <Head>{ReactHtmlParser(blog?.seo!)}</Head> : ""}
      <BlogLayout stargazers_count={stargazers_count} image={blog.picture}>
        <div className="flex items-center mb-4">
          <Link href="/blog" className="text-white hover:underline">
            &larr; Back to Blog
          </Link>
        </div>
        <div className="flex items-center mb-4">
          <img
            className="w-12 h-12 object-cover rounded-full mr-4"
            src={blog.author.picture}
            alt={blog.author.name}
          />
          <div>
            <h1 className="text-4xl font-semibold mb-1">{blog.title}</h1>{" "}
            {/* Add title here */}
            <p className="text-gray-500">{blog.author.name}</p>{" "}
            {/* Add author name here */}
          </div>
        </div>
        <div
          className="prose max-w-none blog-container"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </BlogLayout>
    </>
  );
};
