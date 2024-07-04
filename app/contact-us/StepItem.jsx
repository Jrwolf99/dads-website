import { ToolTip } from '@/src/components/utilities/ToolTip';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import Link from 'next/link';

export default function StepItem({
  stepNumber,
  title,
  description,
  subDescription,
  actionLink = null,
  actionLinkDescription = null,
}) {
  return (
    <div className="flex flex-row gap-6 border rounded-md shadow-sm p-6 md:min-w-[400px]">
      <div className="h-[40px] w-[40px] border-2 rounded-lg flex items-center justify-center border-secondary dark:border-primary">
        <h1 className="text-[24px] m-3 font-bold text-center">{stepNumber}</h1>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center mb-4">
          <h3 className="font-semibold text-start">{title}</h3>
          {subDescription && (
            <ToolTip
              extraClassName="text-gray-500 dark:text-gray-300"
              text={subDescription}
            >
              <InformationCircleIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </ToolTip>
          )}
        </div>
        <p className="text-gray-700 dark:text-gray-400 text-start">
          {description}
        </p>

        {actionLink && (
          <div className="w-full mt-4 flex justify-end">
            <Link href={actionLink}>
              <p className="hover:underline text-xs text-gray-500 dark:text-gray-500 cursor-pointer">
                {actionLinkDescription}
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
