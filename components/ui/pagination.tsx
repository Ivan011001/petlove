import * as React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  ChevronsLeft,
} from "lucide-react";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { ButtonProps } from "@/components/ui/button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
  disabled?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"button">;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  disabled,
  ...props
}: PaginationLinkProps) => (
  <button
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full border border-neutral-800 border-opacity-5 text-sm md:text-lg font-bold leading-none md:leading-shug hover:bg-accent hover:border-accent hover:text-white duration-300 transition-all",
      className,
      isActive && "bg-accent border-accent text-white",
      disabled && "pointer-events-none"
    )}
    {...props}
  ></button>
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    disabled={disabled}
    className={cn("group flex items-center justify-center", className)}
    {...props}
  >
    <ChevronLeft
      className={cn(
        "group-hover:stroke-white h-5 w-5 md:w-6 md:h-6 stroke-neutral-800 duration-300 transition-all",
        disabled && "opacity-30"
      )}
    />
    <span className="sr-only">Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationDoublePrevious = ({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous pages"
    size="default"
    disabled={disabled}
    className={cn("group flex items-center justify-center", className)}
    {...props}
  >
    <ChevronsLeft
      className={cn(
        "group-hover:stroke-white h-5 w-5 md:w-6 md:h-6 stroke-neutral-800 duration-300 transition-all",
        disabled && "opacity-30"
      )}
    />
    <span className="sr-only">Previous</span>
  </PaginationLink>
);
PaginationDoublePrevious.displayName = "PaginationDoublePrevious";

const PaginationNext = ({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    disabled={disabled}
    className={cn("group flex items-center justify-center", className)}
    {...props}
  >
    <span className="sr-only">Next</span>
    <ChevronRight
      className={cn(
        "group-hover:stroke-white h-5 w-5 md:w-6 md:h-6 stroke-neutral-800 duration-300 transition-all",
        disabled && "opacity-30"
      )}
    />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationDoubleNext = ({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next pages"
    size="default"
    disabled={disabled}
    className={cn("group flex items-center justify-center", className)}
    {...props}
  >
    <span className="sr-only">Next</span>
    <ChevronsRight
      className={cn(
        "group-hover:stroke-white h-5 w-5 md:w-6 md:h-6 stroke-neutral-800 duration-300 transition-all",
        disabled && "opacity-30"
      )}
    />
  </PaginationLink>
);
PaginationDoubleNext.displayName = "PaginationDoubleNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn(
      "flex items-center justify-center w-10 md:w-11 h-10 md:h-11 rounded-full border border-neutral-800 border-opacity-5 text-sm md:text-lg font-bold leading-none md:leading-shug",
      className
    )}
    {...props}
  >
    ...
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationDoubleNext,
  PaginationPrevious,
  PaginationDoublePrevious,
};
