import React, { FC, useState } from "react";
import clsx from "clsx";
import GithubCard from "../../home/GithubSection/GithubCard";
import styles from "../styles.module.css";

const GithubContainer: FC<{blog: any[]}> = (props) => {
  const [curPage, setCurPage] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(100);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurPage(selectedItem.selected);
  };

  return (
    <div
      className={clsx(
        "git-room-container mt-[100px] lg:mt-[120px] flex flex-col z-[1]",
        "w-full"
      )}
    >
      {/*clsx(styles.searchContainer)*/}
      <div
        className={clsx(
          "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2",
          "w-full max-w-[420px] sm:max-w-full mx-auto"
        )}
      >
        <div
          className={clsx(
            "font-chakra-petch font-[600] text-white whitespace-nowrap",
            "text-[28px] leading-[36.4px] md:text-[44px] md:leading-[57.2px]"
          )}
        >
          All posts
        </div>
        {/*<div className={clsx("w-full sm:w-[320px]")}>*/}
        {/*  <SearchInput />*/}
        {/*</div>*/}
      </div>
      <div className={"flex justify-center"}>
        <div className={clsx(styles.listContainer)}>
          {props.blog.map((item, idx: number) => (
            <GithubCard key={idx} githubInfo={item} num={idx} />
          ))}
        </div>
      </div>
      {/*<div*/}
      {/*  className={clsx(*/}
      {/*    "mt-10",*/}
      {/*    "w-full flex justify-center git-room-paginiate-wrapper"*/}
      {/*  )}*/}
      {/*>*/}
      {/*  <ReactPaginate*/}
      {/*    onPageChange={handlePageClick}*/}
      {/*    pageRangeDisplayed={1}*/}
      {/*    marginPagesDisplayed={1}*/}
      {/*    pageCount={pageCount}*/}
      {/*    renderOnZeroPageCount={null}*/}
      {/*    breakLabel="..."*/}
      {/*    nextLabel={*/}
      {/*      <div className="flex items-center">*/}
      {/*        Next*/}
      {/*        <div className="relative w-[16px] h-[16px] ml-1">*/}
      {/*          <Image*/}
      {/*            src="/svgs/ChevRight-Small.svg"*/}
      {/*            layout="fill"*/}
      {/*            objectFit="contain"*/}
      {/*            alt="pagniation right"*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    }*/}
      {/*    previousLabel={*/}
      {/*      <div className="flex items-center">*/}
      {/*        <div className="relative w-[16px] h-[16px] mr-1">*/}
      {/*          <Image*/}
      {/*            src="/svgs/ChevLeft-Small.svg"*/}
      {/*            layout="fill"*/}
      {/*            objectFit="contain"*/}
      {/*            alt="pagniation left"*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*        Back*/}
      {/*      </div>*/}
      {/*    }*/}
      {/*  />*/}
      {/*</div>*/}
    </div>
  );
};

export default GithubContainer;
