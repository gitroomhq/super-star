import Image from "next/image";
import dynamic from "next/dynamic";
import clsx from "clsx";

import { ChevLeftSvg } from "@/components/svgs";
import RelatedPost from "./RelatedPost";
import { StayInformedSubscribeSection } from "../home";
import dayjs from "dayjs";
import { NextSeo } from "next-seo";
import Link from "next/link";

const PurpleShadow = () => (
  <div className="hidden md:block">
    {/* First One1 */}
    <div
      className={clsx(
        "absolute left-[100%] top-[0%]",
        "-translate-x-[50%] -translate-y-[50%]",
        "absolute w-[1000px] h-[1000px] md:w-[1200px] md:h-[1200px] z-[0]"
      )}
    >
      <div
        className={clsx(
          "-translate-y-[120px]",
          "absolute w-[1000px] h-[1000px] md:w-[1200px] md:h-[1200px] opacity-20 scale-x-[66%]"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #9378FF, transparent 70%)",
        }}
      />

      <div
        className={clsx(
          "-translate-y-[120px]",
          "absolute w-[1000px] h-[1000px] md:w-[1200px] md:h-[1200px] opacity-20 scale-x-[66%]"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #4517FF, transparent 70%)",
        }}
      />

      <div
        className={clsx(
          "-translate-y-[120px]",
          "absolute w-[1000px] h-[1000px] md:w-[1200px] md:h-[1200px] opacity-20 scale-x-[75%]"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #9917FF, transparent 75%)",
        }}
      />
    </div>

    {/* Second One */}
    <div
      className={clsx(
        "absolute -left-[175px] top-[620px]",
        "-translate-x-[50%] -translate-y-[50%]",
        "absolute w-[1000px] h-[1000px] md:w-[1200px] md:h-[1200px] z-[0]"
      )}
    >
      <div
        className={clsx(
          "absolute w-[1000px] h-[1000px] md:w-[1200px] md:h-[1200px] opacity-10"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #7B4CFF, transparent 60%)",
        }}
      />

      <div
        className={clsx(
          "absolute w-[1000px] h-[1000px] md:w-[1200px] md:h-[1200px] opacity-10"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #4517FF, transparent 70%)",
        }}
      />
    </div>

    {/* Third One */}
    <div
      className={clsx(
        "absolute left-[100%] top-[50%]",
        "-translate-x-[calc(50%-100px)] -translate-y-[50%]",
        "absolute w-[1000px] h-[1000px] md:w-[1200px] md:h-[1200px] z-[0]"
      )}
    >
      <div
        className={clsx(
          "absolute w-[1000px] h-[1000px] md:w-[1200px] md:h-[1200px] opacity-10"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #7B4CFF, transparent 60%)",
        }}
      />

      <div
        className={clsx(
          "absolute w-[1000px] h-[1000px] md:w-[1200px] md:h-[1200px] opacity-10"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #4517FF, transparent 70%)",
        }}
      />
    </div>

    {/* Last One */}
    <div
      className={clsx(
        "absolute -left-[250px] top-[75%]",
        "-translate-x-[50%] -translate-y-[50%]",
        "absolute w-[1000px] h-[1000px] md:w-[1200px] md:h-[1200px] z-[0]"
      )}
    >
      <div
        className={clsx(
          "-translate-y-[120px]",
          "absolute w-[1000px] h-[1000px] md:w-[1200px] md:h-[1200px] opacity-10 scale-x-[66%]"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #9378FF, transparent 70%)",
        }}
      />

      <div
        className={clsx(
          "-translate-y-[120px]",
          "absolute w-[1000px] h-[1000px] md:w-[1200px] md:h-[1200px] opacity-10 scale-x-[66%]"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #4517FF, transparent 70%)",
        }}
      />

      <div
        className={clsx(
          "-translate-y-[120px]",
          "absolute w-[1000px] h-[1000px] md:w-[1200px] md:h-[1200px] opacity-10 scale-x-[75%]"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #9917FF, transparent 75%)",
        }}
      />
    </div>
  </div>
);

const Newsletter = dynamic(() => import("./Newsletter"), {
  ssr: false,
});

interface Props {
  blog: any;
  relatedPosts: any[];
}

const BlogDetailsPageContent: React.FC<Props> = ({ blog, relatedPosts }) => {
  return (
    <>
        <NextSeo
          title={process.env.COURSE_NAME! + ' Blog - ' + blog.title}
          description={`Blog - ${blog.title}`}
          canonical={process.env.COURSE_URL + '/blog/' + blog.slug}
          openGraph={{
            url: process.env.COURSE_URL,
            title: process.env.COURSE_NAME,
            description: blog.subtitle || 'Learn the best tips and trick to grow your GitHub library',
            images: [{
              url: blog.picture,
              alt: process.env.COURSE_NAME,
              type: "image/png",
            }],
            siteName: process.env.COURSE_NAME,
          }}
          twitter={{
            handle: "@nevodavid",
            site: "@nevodavid",
            cardType: "summary_large_image",
          }}
      />
      <div className="relative">
        <div className="bg-star-background w-full h-full max-w-[1440px] absolute z-[0] top-0 left-[50%] -translate-x-[50%]" />

        <div
          className={clsx(
            "git-room-container z-[1]",
            "mt-[104px] md:mt-[136px] relative"
          )}
        >
          <PurpleShadow />

          <Link href="/blog"
            className={clsx(
              "hidden",
              "absolute left-[20px] top-0 z-[1]",
              "md:flex items-center cursor-pointer transition-all",
              "font-matter text-white font-[500]",
              "text-[18px] leading-[21.6px]",
              "hover:text-[rgb(179,133,255)]"
            )}
          >
            <div className={clsx("w-4 h-4 mr-1")}>
              <ChevLeftSvg />
            </div>
            Back
          </Link>

          <div
            className={clsx("flex flex-col z-[1] max-w-[800px] mx-auto bg-black")}
          >
            <div
              className={clsx(
                "font-[700] font-chakra-petch text-[rgba(142,167,255,1)]",
                "text-base leading-[17.6px]",
                "md:text-[20px] md:leading-[22px]"
              )}
            >
              LATEST POST
            </div>
            <h1
              className={clsx(
                "font-[500] text-white font-ibm-plex-sans",
                "mt-5 text-[28px] leading-[30.8px]",
                "md:mt-6 md:text-[44px] md:leading-[48.4px]"
              )}
            >
              {blog.title}
            </h1>
            <div className={clsx("flex items-center mt-5 md:mt-6")}>
              <div
                className={clsx(
                  "rounded-full bg-center bg-contain",
                  "w-[34px] h-[34px]",
                  "lg:w-[35.06px] lg:h-[35.06px]"
                )}
                style={{ backgroundImage: "url(/pngs/avatar.png)" }}
              ></div>
              <div
                className={clsx(
                  "font-[500] text-[rgba(255,255,255,0.8)]",
                  "ml-[9.64px] text-sm leading-[18.2px]",
                  "lg:text-base lg:leading-[20.8px]"
                )}
              >
                {blog.author.name}
              </div>
              <div
                className={clsx(
                  "mx-[17.53px] w-[1px] h-4 bg-[rgba(255,255,255,0.4)]"
                )}
              ></div>
              <div
                className={clsx(
                  "font-[500] text-[rgba(255,255,255,0.6)]",
                  "text-sm leading-[18.2px]",
                  "lg:text-base lg:leading-[20.8px]"
                )}
              >
                {dayjs.unix(blog.created).format("MMM DD, YYYY")}
              </div>
            </div>
            <Image
              src={blog.picture}
              width={800}
              height={478}
              alt=""
              className="mt-6"
            />
            <div
              dangerouslySetInnerHTML={{ __html: blog.description }}
              className="text-white mt-10 font-matter content"
            />
          </div>
          <Newsletter />
        </div>
        <RelatedPost relatedPosts={relatedPosts} />
        <StayInformedSubscribeSection />
      </div>
    </>
  );
};

export default BlogDetailsPageContent;
