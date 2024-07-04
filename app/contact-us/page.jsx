import React from 'react';
import StepItem from './StepItem';

export default function ContactUsPage() {
  return (
    <div>
      <h1 className="text-[32px] font-bold text-center p-16">Contacts</h1>

      <div className="flex flex-col gap-10 items-center justify-center max-w-[600px]">
        {/* <h3 className="text-[24px] text-start w-full my-2 text-gray-700 dark:text-gray-400">
          The Process:
        </h3> */}
        <StepItem stepNumber="1" title="Bill Wolf" />

        {/* <StepItem
          stepNumber="2"
          title="Design."
          description="We will create a design mock-up based on our initial discussion and send it for your review. After receiving feedback, we'll make necessary revisions to align with your vision."
          subDescription="If all looks good, great! If more revisions are needed, we will revise once more free of charge. (any additional revisions thereafter will have a charge associated)."
          actionLink="/contact#design_revisions_form"
          actionLinkDescription="Have revision requests about a design we gave you? Let us know!"
        />

        <StepItem
          stepNumber="3"
          title="Develop."
          description="Once the design is finalized, we'll begin the development process. This includes building out the website and integrating any specific features or functionality you require."
          subDescription="If all looks good, great! If more revisions are needed, we will revise once more free of charge. (any additional revisions thereafter will have a charge associated)."
          actionLink="/contact#development_revisions_form"
          actionLinkDescription="Have revision requests about a website we built for you? Let us know!"
        />

        <StepItem
          stepNumber="4"
          title="Launch! 🎉"
          description="After development and final reviews, we'll launch your website. We'll ensure everything is running smoothly and remain available for any questions or concerns you may have."
        /> */}
      </div>
    </div>
  );
}
