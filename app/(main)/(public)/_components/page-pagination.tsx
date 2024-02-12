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

interface IViewPaginationProps {
  meta: IMetaPagination;
  view: string;
}

export const ViewPagination = ({ meta, view }: IViewPaginationProps) => {
  const { prev: prevPage, currentPage, next: nextPage, lastPage } = meta;

  return (
    <Pagination>
      <PaginationContent className="flex items-center gap-[11px] md:gap-6">
        <div className="flex items-center gap-1.5 md:gap-2">
          <PaginationItem>
            <PaginationDoublePrevious
              disabled={!prevPage || currentPage - 5 <= 0}
              href={`/${view}?page=${currentPage - 5}`}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious
              disabled={!prevPage || currentPage - 1 <= 0}
              href={`/${view}?page=${prevPage}`}
            />
          </PaginationItem>
        </div>

        <div className="flex items-center gap-2.5">
          <PaginationItem>
            <PaginationLink isActive href="#">
              {currentPage}
            </PaginationLink>
          </PaginationItem>

          {nextPage && (
            <>
              <PaginationItem>
                <PaginationLink href={`/${view}?page=${nextPage}`}>
                  {nextPage}
                </PaginationLink>
              </PaginationItem>

              {nextPage < lastPage && (
                <PaginationItem className="hidden md:block">
                  <PaginationLink href={`/${view}?page=${nextPage + 1}`}>
                    {nextPage + 1}
                  </PaginationLink>
                </PaginationItem>
              )}

              {nextPage + 1 < lastPage && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
            </>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <PaginationItem>
            <PaginationNext
              disabled={!nextPage || currentPage + 1 > lastPage}
              href={`/${view}?page=${nextPage}`}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationDoubleNext
              disabled={!nextPage || currentPage + 5 > lastPage}
              href={`/${view}?page=${currentPage + 5}`}
            />
          </PaginationItem>
        </div>
      </PaginationContent>
    </Pagination>
  );
};

export default ViewPagination;
