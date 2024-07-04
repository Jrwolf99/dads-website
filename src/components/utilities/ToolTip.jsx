'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function ToolTip({
  text,
  extraClassName,
  children
}) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
            {children}
        </TooltipTrigger>
        <TooltipContent>
          <p
          className={`text-sm max-w-[400px] ${extraClassName}`}
          >{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
