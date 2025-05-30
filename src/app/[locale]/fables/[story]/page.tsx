'use client';

import {useTranslations} from 'next-intl';
import {notFound} from 'next/navigation';
import StoryReader from '@/components/story-reader';
// import LanguageSwitcher from "@/components/language-switcher"
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';

const validStories = ['tortoise-hare', 'lion-mouse'];

export default function StoryPage({
  params
}: {
  params: {story: string; locale: string};
}) {
  const t = useTranslations();

  if (!validStories.includes(params.story)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Link
              href={`/${params.locale}/fables`}
              className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              {t('navigation.backToSelection')}
            </Link>
            <h1 className="text-3xl font-bold text-amber-900">
              {t(`stories.${params.story}.title`)}
            </h1>
          </div>
          {/* <LanguageSwitcher /> */}
        </div>
        <StoryReader storyKey={params.story} />
      </div>
    </div>
  );
}
