import { Link as RouterLink } from "@tanstack/react-router";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children?: ReactNode;
};

/**
 * Drop-in replacement for next/link in the migrated codebase.
 * Renders a TanStack router link for internal routes (SPA navigation)
 * and a plain anchor for hash links and external URLs.
 */
export function Link({ href, children, ...rest }: AppLinkProps) {
  const [rawPathname = href, query = ""] = href.split("?");
  const pathname = rawPathname || "/";

  if (href.startsWith("/") && !href.startsWith("//")) {
    const search = query
      ? (Object.fromEntries(new URLSearchParams(query)) as Record<string, string>)
      : undefined;
    return (
      <RouterLink
        to={pathname}
        search={search as never}
        {...(rest as Record<string, never>)}
      >
        {children}
      </RouterLink>
    );
  }

  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
