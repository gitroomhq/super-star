import React, { useState } from "react";
import clsx from "clsx";
import ReactPaginate from "react-paginate";
import Image from "next/image";

import CommunityDealsCard from "./CommunityDealsCard";
import FilterContainer from "@/components/common/FilterContainer";
import { ICommunityCard } from "@/types";

interface Props {
  onSelectCommunity: Function;
  communityCards: ICommunityCard[];
}

const CommunityDealsCardContainer: React.FC<Props> = ({
  onSelectCommunity,
  communityCards,
}) => {
  const [curPage, setCurPage] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(100);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurPage(selectedItem.selected);
  };

  return (
    <div className={clsx("git-room-container", "flex flex-col z-[1]")}>
      <FilterContainer />
      <div
        className={clsx(
          "w-full flex flex-row flex-wrap gap-[10px]",
          "mt-6 md:mt-10"
        )}
      >
        {communityCards.map((item: ICommunityCard, idx: number) => (
          <CommunityDealsCard
            key={idx}
            cardInfo={item}
            customClasses={clsx(
              "w-full",
              "h-[362px]",
              "sm:w-[calc(50%-5px)] lg:w-[635px] lg:h-[350px]"
            )}
            onApply={() => {
              onSelectCommunity(item.id);
            }}
          />
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
          breakLabel="..."
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

export default CommunityDealsCardContainer;
