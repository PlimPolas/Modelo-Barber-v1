'use client';

import { cn } from '@/lib/utils';
import { LANGUAGE_ORDER, useI18n } from '@/i18n';

interface LanguageSwitcherProps {
  className?: string;
}

const codeLabels = { pt: 'PT', en: 'EN', es: 'ES' } as const;

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.switcherLabel}
      className={cn(
        'inline-flex items-center gap-px border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-1',
        className,
      )}
    >
      {LANGUAGE_ORDER.map((code) => {
        const active = code === language;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLanguage(code)}
            aria-pressed={active}
            aria-label={t.languageNames[code]}
            className={cn(
              'type-eyebrow motion-level-1 inline-flex min-h-9 items-center justify-center px-[var(--space-2)] transition-colors sm:min-h-11 sm:px-[var(--space-3)]',
              active
                ? 'border border-[var(--brand-accent)] text-[var(--brand-accent)]'
                : 'border border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]',
            )}
          >
            {codeLabels[code]}
          </button>
        );
      })}
    </div>
  );
}
