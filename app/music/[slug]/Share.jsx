'use client';
import React from 'react';
import { EmbeddedPost, FacebookProvider, ShareButton } from 'react-facebook';

export default function Share({ shareLink }) {
  return (
    <FacebookProvider appId="2252397071767122">
      <ShareButton
        href={shareLink}
        className="text-sm text-gray-700 dark:text-gray-400 underline text-start"
      >
        If you liked this, please leave us some feedback!
      </ShareButton>
    </FacebookProvider>
  );
}
