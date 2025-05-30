'use client';

import {useTranslations} from 'next-intl';
import {useParams, useRouter} from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {BookOpen} from 'lucide-react';

const stories = ['tortoise-hare', 'lion-mouse'];

export default function StorySelector() {
  const t = useTranslations();
  const router = useRouter();
  const params = useParams();

  const handleStorySelect = (storyKey: string) => {
    router.push(`/${params.locale}/fables/${storyKey}`);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">
          {t('navigation.selectStory')}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {stories.map((storyKey) => (
          <Card
            key={storyKey}
            className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-900">
                <BookOpen className="w-5 h-5" />
                {t(`stories.${storyKey}.title`)}
              </CardTitle>
              <CardDescription className="text-amber-700">
                {t(`stories.${storyKey}.description`)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleStorySelect(storyKey)}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
              >
                Read Story
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
