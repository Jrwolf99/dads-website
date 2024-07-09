'use client';
import React from 'react';
import { EmbeddedPost, FacebookProvider, ShareButton } from 'react-facebook';

export default function Share() {
  return (
    <FacebookProvider appId="2252397071767122">
      <ShareButton
        href="https://www.facebook.com/share/p/FxVuCYXaxD8Z3HQQ/"
        className="text-sm text-gray-700 dark:text-gray-400 underline text-start"
      >
        If you liked this, please leave us some feedback!
      </ShareButton>
    </FacebookProvider>
  );
}
