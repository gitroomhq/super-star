import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import ReactPaginate from "react-paginate";

import FilterContainer from "@/components/common/FilterContainer";
import OSSCard from "./OSSCard";

import { OSSCardData } from "@/mockData/ossCards";
import { IOSSCard } from "@/types";

interface Props {}

const OSSCardsContainer: React.FC<Props> = ({}) => {
  const [curPage, setCurPage] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(100);
  const [ossCards, setOSSCards] = useState<IOSSCard[]>(OSSCardData);

  const handlePageClick = (selectedItem: { selected: number }): void => {
    setCurPage(selectedItem.selected);
  };

  return (
    <div className={clsx("git-room-container", "flex flex-col z-[1]")}>
      <FilterContainer />
      <div className={clsx("mt-6 flex flex-wrap gap-2 md:gap-[10px]")}>
        {ossCards.map((item: IOSSCard, idx: number) => (
          <OSSCard key={idx} cardInfo={item} />
        ))}
      </div>
      <div
        className={clsx(
          "mt-10",
          "w-full flex justify-center git-room-paginiate-wrapper"
        )}
      >
        <ReactPaginate
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          nextLabel={
            <div className="flex items-center">
              Next
              <div className="relative w-[16px] h-[16px] ml-1">
                <Image
                  src="/svgs/ChevRight-Small.svg"
                  layout="fill"
                  objectFit="contain"
                  alt="pagniation right"
                />
              </div>
            </div>
          }
          previousLabel={
            <div className="flex items-center">
              <div className="relative w-[16px] h-[16px] mr-1">
                <Image
                  src="/svgs/ChevLeft-Small.svg"
                  layout="fill"
                  objectFit="contain"
                  alt="pagniation left"
                />
              </div>
              Back
            </div>
          }
        />
      </div>
    </div>
  );
};

export default OSSCardsContainer;
