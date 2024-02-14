"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

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
}

export const ViewPagination = ({ meta }: IViewPaginationProps) => {
  const { prev: prevPage, currentPage, next: nextPage, lastPage } = meta;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | null) => {
    if (!pageNumber || pageNumber <= 0) {
      return pathname;
    }

    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const onPageChange = (pageNumber: number | null) => {
    router.push(createPageURL(pageNumber));
  };

  return (
    <Pagination>
      <PaginationContent className="flex items-center gap-[11px] md:gap-6">
        <div className="flex items-center gap-1.5 md:gap-2">
          <PaginationItem>
            <PaginationDoublePrevious
              disabled={!prevPage || currentPage - 5 <= 0}
              href={createPageURL(currentPage - 5)}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious
              disabled={!prevPage || currentPage - 1 <= 0}
              href={createPageURL(prevPage)}
            />
          </PaginationItem>
        </div>

        <div className="flex items-center gap-2.5">
          <PaginationItem>
            <PaginationLink isActive href={createPageURL(currentPage)}>
              {currentPage}
            </PaginationLink>
          </PaginationItem>

          {nextPage && (
            <>
              <PaginationItem>
                <PaginationLink href={createPageURL(nextPage)}>
                  {nextPage}
                </PaginationLink>
              </PaginationItem>

              {nextPage < lastPage && (
                <PaginationItem className="hidden md:block">
                  <PaginationLink href={createPageURL(nextPage + 1)}>
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
              href={createPageURL(nextPage)}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationDoubleNext
              disabled={!nextPage || currentPage + 5 > lastPage}
              href={createPageURL(currentPage + 5)}
            />
          </PaginationItem>
        </div>
      </PaginationContent>
    </Pagination>
  );
};

export default ViewPagination;
