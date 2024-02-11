import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationDoubleNext,
  PaginationPrevious,
  PaginationDoublePrevious,
} from "@/components/ui/pagination";

import type { IMetaPagination } from "@/types";

interface INewsPaginationProps {
  meta: IMetaPagination;
}

export const NewsPagination = ({ meta }: INewsPaginationProps) => {
  const { currentPage, next: nextPage } = meta;

  return (
    <Pagination>
      <PaginationContent className="flex items-center gap-[11px] md:gap-6">
        <div className="flex items-center gap-1.5 md:gap-2">
          <PaginationItem>
            <PaginationDoublePrevious disabled href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious disabled href="#" />
          </PaginationItem>
        </div>

        <div className="flex items-center gap-2.5">
          <PaginationItem>
            <PaginationLink isActive href="#">
              {currentPage}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#">{nextPage}</PaginationLink>
          </PaginationItem>

          <PaginationItem className="hidden md:flex">
            <PaginationLink href="#">
              {nextPage ? nextPage + 1 : null}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        </div>

        <div className="flex items-center gap-1.5">
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationDoubleNext href="#" />
          </PaginationItem>
        </div>
      </PaginationContent>
    </Pagination>
  );
};

export default NewsPagination;
