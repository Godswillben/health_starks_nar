import React from 'react';

const FORUM_POSTS = [
  {
    id: 1,
    username: 'panicpete42',
    url: 'www.panicpete42-conspiracy-basement.net',
    title: '[CONFIRMED] DEADLY! | The Ultimate Truth Forum',
    body: 'it is a genetically modified, highly stealthy strain of COVID-26 that initially presents as a minor nuisance...'
  },
  {
    id: 2,
    username: 'anonymouse_99',
    url: 'www.truth-seeker-central.org',
    title: '[ALERT] Outbreak Protocols Initialized',
    body: 'Sub-level containment units are reporting localized failures across major grid nodes. Keep tabs on local scanners...'
  },
  {
    id: 3,
    username: 'cyber_specter',
    url: 'www.darknet-logs.edu',
    title: '[DECLASSIFIED] Medical Anomalies Rising',
    body: 'Patient zeros are consistently exhibiting noir-like symptoms with rapid escalation windows. The official narrative is fractured...'
  }
];

export default function LandingContentCardWheel() {
  // Duplicate the array to create a seamless anchor copy for the loop
  const doublePosts = [...FORUM_POSTS, ...FORUM_POSTS];

  return (
    <div className="flex h-22 rounded-2xl w-11/12 ml-auto items-center justify-center mt-4">
      
      {/* Outer viewport boundary container that cuts off the extra cards */}
      <div className="relative h-full w-full max-w-md overflow-hidden ">
        

        {/* 2. Moving Track Container */}
        <div className="animate-vertical-loop flex flex-col space-y-1 hover:[animation-play-state:paused]">
          {doublePosts.map((post, index) => (
            <div
              key={`${post.id}-${index}`}
              className="flex flex-col rounded-xl border border-black/5 bg-white p-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300"
            >
              {/* Header Info */}
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-[#d9d9d9] shrink-0" />
                <div className="min-w-0 flex-1">
                  <h4 className="text-[.7rem] font-bold text-slate-900 leading-tight">
                    {post.username}
                  </h4>
                  <p className="truncate text-[.6rem] text-slate-400 font-medium">
                    {post.url}
                  </p>
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-1 text-[.7rem] font-bold font-Pop text-[#00aeef] leading-snug">
                {post.title}
              </h3>

              {/* Body Content */}
              <p className="mt-1 text-[.6rem] font-Pop text-slate-500 leading-relaxed line-clamp-2">
                {post.body}
              </p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}