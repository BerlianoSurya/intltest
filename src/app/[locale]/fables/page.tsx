'use client';

import {useTranslations} from 'next-intl';
import StorySelector from '@/components/story-selector';
// import LanguageSwitcher from "@/components/language-switcher"

export default function FablesPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-amber-900">
            {t('navigation.title')}
          </h1>
          {/* <LanguageSwitcher /> */}
        </div>
        <StorySelector />
      </div>
    </div>
  );
}
