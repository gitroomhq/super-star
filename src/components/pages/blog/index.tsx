import BlogHeader from "./Header";
import PostSection from "./PostSection";
import { StayInformedSubscribeSection } from "../home";

const BlogPageContent = () => {
  return (
    <div className="relative">
      <div className="bg-star-background w-full h-full max-w-[1440px] absolute z-[0] top-0 left-[50%] -translate-x-[50%]" />
      <BlogHeader />
      <PostSection />
      <StayInformedSubscribeSection />
    </div>
  );
};

export default BlogPageContent;
