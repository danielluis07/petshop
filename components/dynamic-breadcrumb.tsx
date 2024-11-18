"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export const DynamicBreadcrumb = () => {
  const pathname = usePathname(); // Current path, e.g., "/components/breadcrumb"
  const pathNames = pathname.split("/").filter((path) => path); // Split and remove empty strings

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Home Breadcrumb */}
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Início</BreadcrumbLink>
        </BreadcrumbItem>

        {/* Loop through path segments */}
        {pathNames.map((segment, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathNames.length - 1;

          return (
            <div className="flex items-center" key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {!isLast ? (
                  <BreadcrumbLink href={href}>
                    {capitalize(segment)}
                  </BreadcrumbLink>
                ) : (
                  <span>{capitalize(segment)}</span>
                )}
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
