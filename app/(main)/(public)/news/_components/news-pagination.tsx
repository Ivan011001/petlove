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
  const { prev: prevPage, currentPage, next: nextPage } = meta;

  return (
    <Pagination>
      <PaginationContent className="flex items-center gap-[11px] md:gap-6">
        <div className="flex items-center gap-1.5 md:gap-2">
          <PaginationItem>
            <PaginationDoublePrevious
              disabled={!prevPage || prevPage - 1 === null}
              href={`/news?page=${prevPage ? prevPage - 1 : ""}`}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious
              disabled={!prevPage || prevPage - 1 === null}
              href={`/news?page=${prevPage}`}
            />
          </PaginationItem>
        </div>

        <div className="flex items-center gap-2.5">
          <PaginationItem>
            <PaginationLink isActive href="#">
              {currentPage}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href={`/news?page=${nextPage}`}>
              {nextPage}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem className="hidden md:flex">
            <PaginationLink href={`/news?page=${nextPage ? nextPage + 1 : ""}`}>
              {nextPage ? nextPage + 1 : null}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        </div>

        <div className="flex items-center gap-1.5">
          <PaginationItem>
            <PaginationNext
              disabled={!nextPage || nextPage + 1 === null}
              href={`/news?page=${nextPage}`}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationDoubleNext
              disabled={!nextPage || nextPage + 1 === null}
              href={`/news?page=${nextPage ? nextPage + 1 : ""}`}
            />
          </PaginationItem>
        </div>
      </PaginationContent>
    </Pagination>
  );
};

export default NewsPagination;
