'use client';

import { cn } from '@/lib/utils';
import { LANGUAGE_ORDER, useI18n } from '@/i18n';

interface LanguageSwitcherProps {
  className?: string;
  size?: 'compact' | 'comfortable';
}

const codeLabels = { pt: 'PT', en: 'EN', es: 'ES' } as const;

export function LanguageSwitcher({ className, size = 'compact' }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.switcherLabel}
      className={cn('flex items-center', size === 'compact' ? 'gap-[var(--space-1)]' : 'gap-[var(--space-2)]', className)}
    >
      {LANGUAGE_ORDER.map((code, index) => {
        const active = code === language;
        return (
          <div key={code} className="flex items-center">
            {index > 0 ? <span aria-hidden="true" className="h-3 w-px bg-[var(--border-subtle)]" /> : null}
            <button
              type="button"
              onClick={() => setLanguage(code)}
              aria-pressed={active}
              aria-label={t.languageNames[code]}
              className={cn(
                'type-eyebrow motion-level-1 inline-flex min-h-11 items-center px-[var(--space-3)] transition-colors',
                active
                  ? 'text-[var(--brand-accent)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]',
              )}
            >
              {codeLabels[code]}
            </button>
          </div>
        );
      })}
    </div>
  );
}
