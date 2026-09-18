'use client';

import { ArrowRight, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from '@/lib/app-link';

import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n';

import { LanguageSwitcher } from './language-switcher';

import { ActionLink } from '@/components/actions';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import type { Brand } from '@/types';

interface NavigationLink {
  label: string;
  href: string;
}

interface SiteNavbarProps {
  brand: Brand;
  links: readonly NavigationLink[];
  bookingLabel: string;
  menuLabel: string;
}

export function SiteNavbar({ brand, links, bookingLabel, menuLabel }: SiteNavbarProps) {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'motion-level-1 fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200',
        scrolled
          ? 'border-white/10 bg-[rgb(11_12_12/86%)] backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex min-h-16 max-w-[var(--container-wide)] items-center justify-between gap-[var(--space-3)] px-[var(--page-gutter)] md:min-h-[4.5rem]">
        <a href="#inicio" className="group inline-flex min-h-12 items-center gap-[var(--space-3)]" aria-label={`${brand.name}, ${t.navigation.homeLabel}`}>
          <span className="grid size-9 place-items-center border border-[var(--brand-accent)] font-bold text-[var(--brand-accent)] transition-colors group-hover:bg-[var(--brand-accent)] group-hover:text-[var(--text-on-accent)]">
            {brand.shortName}
          </span>
          <span className="type-label hidden sm:block">{brand.name}</span>
        </a>

        <nav aria-label={t.navigation.mainNavLabel} className="hidden items-center gap-[var(--space-5)] lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="type-small motion-level-1 inline-flex min-h-11 items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-[var(--space-2)]">
          <LanguageSwitcher />
          <ActionLink href="/booking" aria-label={bookingLabel} className="px-[var(--space-4)] sm:px-[var(--space-5)]">
            <span className="sm:hidden">{t.navigation.bookingLabelShort}</span>
            <span className="hidden sm:inline">{bookingLabel}</span>
            <ArrowRight aria-hidden="true" className="hidden sm:block" />
          </ActionLink>

          <Sheet>
            <SheetTrigger
              render={
                <button
                  type="button"
                  aria-label={menuLabel}
                  className="grid size-12 place-items-center border border-[var(--border-strong)] text-[var(--text-primary)] lg:hidden"
                />
              }
            >
              <Menu aria-hidden="true" className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(88vw,24rem)] border-[var(--border-subtle)] bg-[var(--background-secondary)] p-0"
            >
              <SheetHeader className="border-b border-[var(--border-subtle)] p-[var(--space-5)] pr-16">
                <SheetTitle className="type-h3">{brand.name}</SheetTitle>
                <SheetDescription>{t.brandTagline}</SheetDescription>
              </SheetHeader>
              <nav aria-label={t.navigation.mobileNavLabel} className="flex flex-1 flex-col px-[var(--space-5)] py-[var(--space-6)]">
                {links.map((link, index) => (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={
                      <a
                        href={link.href}
                        aria-label={link.label}
                        className="type-h3 flex min-h-16 items-center justify-between border-b border-[var(--border-subtle)]"
                      />
                    }
                  >
                    <span>{link.label}</span>
                    <span className="type-eyebrow text-[var(--text-muted)]">0{index + 1}</span>
                  </SheetClose>
                ))}
              </nav>
              <div className="flex items-center justify-between border-t border-[var(--border-subtle)] px-[var(--space-5)] py-[var(--space-2)] sm:hidden">
                <span className="type-eyebrow text-[var(--text-muted)]">{t.switcherLabel}</span>
                <LanguageSwitcher />
              </div>
              <div className="p-[var(--space-5)]">
                <SheetClose
                  nativeButton={false}
                  render={
                    <Link
                      href="/booking"
                      aria-label={bookingLabel}
                      className="type-button flex min-h-14 w-full items-center justify-center gap-[var(--space-2)] bg-[var(--brand-accent)] px-[var(--space-5)] text-[var(--text-on-accent)]"
                    />
                  }
                >
                  {bookingLabel}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
