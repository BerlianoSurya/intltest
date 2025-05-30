'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Progress} from '@/components/ui/progress';
import {ChevronLeft, ChevronRight, RotateCcw, CheckCircle} from 'lucide-react';

interface StoryReaderProps {
  storyKey: string;
}

export default function StoryReader({storyKey}: StoryReaderProps) {
  const t = useTranslations();
  const [currentChunk, setCurrentChunk] = useState(0);

  const storyContent = t.raw(`stories.${storyKey}.content`) as string[];
  const totalChunks = storyContent.length;
  const progress = ((currentChunk + 1) / totalChunks) * 100;

  const handlePrevious = () => {
    if (currentChunk > 0) {
      setCurrentChunk(currentChunk - 1);
    }
  };

  const handleNext = () => {
    if (currentChunk < totalChunks - 1) {
      setCurrentChunk(currentChunk + 1);
    }
  };

  const handleReset = () => {
    setCurrentChunk(0);
  };

  const isCompleted = currentChunk === totalChunks - 1;

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white/90 backdrop-blur-sm shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-amber-900">
            {t(`stories.${storyKey}.title`)}
          </CardTitle>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-amber-700">
              <span>
                {t('reader.progress')}: {currentChunk + 1} {t('reader.of')}{' '}
                {totalChunks}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            <p className="text-justify whitespace-pre-line">
              {storyContent[currentChunk]}
            </p>
          </div>

          {isCompleted && (
            <div className="text-center py-6 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {t('reader.completed')}
              </h3>
            </div>
          )}

          <div className="flex justify-between items-center pt-4 border-t">
            <Button
              onClick={handlePrevious}
              disabled={currentChunk === 0}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              {t('reader.previous')}
            </Button>

            <Button
              onClick={handleReset}
              variant="outline"
              className="flex items-center gap-2 text-amber-700 border-amber-300 hover:bg-amber-50"
            >
              <RotateCcw className="w-4 h-4" />
              {isCompleted ? t('reader.startOver') : t('reader.reset')}
            </Button>

            <Button
              onClick={handleNext}
              disabled={currentChunk === totalChunks - 1}
              className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700"
            >
              {t('reader.next')}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
