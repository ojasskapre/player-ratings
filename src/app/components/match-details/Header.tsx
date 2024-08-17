'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

type MatchHeaderProps = {
  leagueName: string;
};

const MatchHeader: React.FC<MatchHeaderProps> = ({ leagueName }) => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between p-4 border-b border-b-border">
      <button
        onClick={() => router.back()}
        className="text-foreground hover:bg-muted rounded-full p-2"
        aria-label="Go back"
      >
        &lt;
      </button>
      <div className="text-xl font-bold text-foreground">{leagueName}</div>
      <div className="invisible">Back</div>{' '}
      {/* This invisible element balances the layout */}
    </div>
  );
};

export default MatchHeader;
