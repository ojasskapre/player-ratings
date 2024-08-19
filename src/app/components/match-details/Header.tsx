'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

type MatchHeaderProps = {
  leagueName: string;
};

const MatchHeader: React.FC<MatchHeaderProps> = ({ leagueName }) => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between p-4 border-b border-b-neutral-200 dark:border-b-neutral-700">
      <Button
        onClick={() => router.back()}
        variant="ghost"
        size="icon"
        aria-label="Go back"
      >
        <ChevronLeft />
      </Button>
      <div className="text-xl font-bold text-foreground">{leagueName}</div>
      {/* This invisible element balances the layout */}
      <div className="invisible">Back</div>{' '}
    </div>
  );
};

export default MatchHeader;
