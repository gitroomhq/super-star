import Link from "next/link";
import { FC, ReactNode } from "react";
import FooterComponent from "@github20k/components/home/footer.component";

export const BlogLayout: FC<{
  stargazers_count: number;
  image: string;
  children: ReactNode;
}> = (props) => {
  const { stargazers_count, image, children } = props;
  return (
    <>
      <div className="container mx-auto max-w-[800px] px-4 pb-10">
        <nav className="text-white flex">
          <div className="container pb-4 pt-4 mx-auto flex-1">
            <ul className="flex items-center">
              <li className="mr-4">
                <Link href="/" className="font-semibold">
                  Home
                </Link>
              </li>
              <li className="mr-4">
                <Link href="/blog" className="font-semibold">
                  Blog
                </Link>
              </li>
              <li className="mr-4">
                <Link
                  href="https://docs.github20k.com"
                  target="_blank"
                  className="font-semibold"
                >
                  Docs
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <a
              target="_blank"
              href={`https://github.com/${process.env.GITHUB_REPO}`}
            >
              GitHub Stars: {stargazers_count}
            </a>
          </div>
        </nav>
        {!!image && (
          <div className="relative h-[358px] mb-10">
            <img
              className="w-full h-full object-cover"
              src={image} // Replace with actual path to header image
              alt="Blog Header"
            />
          </div>
        )}
        {children}
      </div>
      <FooterComponent newsletter={true} hidePurchase={true} />
    </>
  );
};
