
'use client'; // Required for using hooks in the App Router

import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation'; // Hook for App Router
import { PropsWithChildren } from 'react';

type NavLinkProps = LinkProps & {
  activeClassName?: string;
  className?: string;
}

export const NavLink = (props: PropsWithChildren<NavLinkProps>) => {
  const { href, children, activeClassName, className, ...otherProps } = props;

  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        className,
        isActive && activeClassName
      )} {...otherProps}
    >
      {children}
    </Link>
  )
}
