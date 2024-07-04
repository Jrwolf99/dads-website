'use client';
import { MusicalNoteIcon } from '@heroicons/react/24/solid';
import React from 'react';

export default function SampleButton() {
  return (
    <div className="fixed bottom-5 right-5 flex items-center justify-center gap-2">
      <p className="text-sm text-gray-500 text-center p-1 dark:text-gray-200">
        Listen to a sample?
      </p>
      <button
        type="button"
        onClick={() => {
          console.log('Hello');
        }}
        className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full"
      >
        <MusicalNoteIcon className="h-8 w-8 text-gray-500 dark:text-gray-200" />
      </button>
    </div>
  );
}
