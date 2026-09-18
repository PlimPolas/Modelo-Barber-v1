'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import { en } from './en';
import { es } from './es';
import { pt, type Dictionary } from './pt';

export type LanguageCode = 'pt' | 'en' | 'es';

export const LANGUAGE_ORDER: LanguageCode[] = ['pt', 'en', 'es'];

const dictionaries: Record<LanguageCode, Dictionary> = { pt, en, es };

const STORAGE_KEY = 'site-language';

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: string | null): value is LanguageCode {
  return value === 'pt' || value === 'en' || value === 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Sempre inicia em PT para que servidor e cliente rendam igual.
  const [language, setLanguageState] = useState<LanguageCode>('pt');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) setLanguageState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = dictionaries[language].htmlLang;
  }, [language]);

  const setLanguage = useCallback((next: LanguageCode) => {
    setLanguageState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* armazenamento indisponível: mantém apenas na sessão atual */
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, t: dictionaries[language] }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback seguro (ex.: componentes isolados no style guide).
    return { language: 'pt', setLanguage: () => {}, t: pt };
  }
  return context;
}
