import React, { useRef, useState, useEffect } from 'react';

export default function FloatingAudioButton() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const START_TIME = 115;  // 1:30 in seconds
  const END_TIME = 129;   // 2:20 in seconds

  const handleAudioToggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // If the song is outside our target loop window, snap it right to the start stamp
      if (audioRef.current.currentTime < START_TIME || audioRef.current.currentTime >= END_TIME) {
        audioRef.current.currentTime = START_TIME;
      }
      
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio playback blocked by browser engine:", err));
    }
  };

  useEffect(() => {
    const audioNode = audioRef.current;
    if (!audioNode) return;

    // Monitor the playhead position on every tick
    const handleTimeUpdate = () => {
      if (audioNode.currentTime >= END_TIME) {
        // audioNode.pause();
        audioNode.currentTime = START_TIME; // Reset back to the beginning hook segment
        // setIsPlaying(false);
      }
    };

    audioNode.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      audioNode.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <>
      {/* Hidden Audio Element Asset Node */}
      <audio
        ref={audioRef}
        src="/Work_Out.mp3"
        // src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        preload="auto"
      />

      {/* Floating Action Button Widget */}
      <button
        onClick={handleAudioToggle}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 ${
          isPlaying 
            ? 'bg-emerald-500 shadow-emerald-500/20 border border-emerald-400/30' 
            : 'bg-slate-900/80 hover:bg-slate-900 border border-white/10'
        }`}
        aria-label="Toggle Audio Track Loop"
      >
        {isPlaying ? (
          /* Pause Icon with simple live audio wave bars */
          <div className="flex items-end gap-0.5">
            <span className="w-1 h-4 bg-white rounded-full animate-pulse" />
            <span className="w-1 h-3 bg-white rounded-full animate-ping" />
            <span className="w-1 h-5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
          </div>
        ) : (
          /* Clean Minimal Speaker/Audio Icon */
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-6 h-6 text-slate-200"
          >
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.063.922-2.063 2.063v4.875c0 1.141.922 2.062 2.063 2.062h1.932l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
          </svg>
        )}
      </button>
    </>
  );
}