import { useRef, useState } from "react";

export const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      // Modern browsers return a promise from play()
      audio.play()
        .then(() => {
          setPlaying(true);
        })
        .catch((error) => {
          console.error("Failed to play audio:", error);
          setPlaying(false);
        });
    }
  };

  const audioSrc = "/music.mp3";

  return (
    <>
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />
      <button
        onClick={toggleMusic}
        aria-label={playing ? "Pause music" : "Play music"}
        className="fixed right-5 bottom-8 z-50 flex items-center justify-center w-14 h-14 rounded-full border border-white/15 bg-black/60 backdrop-blur-md text-white/50 hover:text-white/80 hover:border-white/30 transition-all duration-300 shadow-lg"
      >
        <svg className="w-[26px] h-[18px]" viewBox="0 0 26 18" fill="currentColor">
          <rect x="0"    y="7"  width="2.5" height="4"  rx="1.25" opacity="0.5"  className={playing ? "music-bar-7" : ""} />
          <rect x="4"    y="4"  width="2.5" height="10" rx="1.25" opacity="0.7"  className={playing ? "music-bar-6" : ""} />
          <rect x="8"    y="1"  width="2.5" height="16" rx="1.25"                className={playing ? "music-bar-3" : ""} />
          <rect x="12"   y="5"  width="2.5" height="8"  rx="1.25" opacity="0.8"  className={playing ? "music-bar-4" : ""} />
          <rect x="16"   y="2"  width="2.5" height="14" rx="1.25" opacity="0.9"  className={playing ? "music-bar-2" : ""} />
          <rect x="20"   y="6"  width="2.5" height="6"  rx="1.25" opacity="0.65" className={playing ? "music-bar-5" : ""} />
          <rect x="23.5" y="8"  width="2.5" height="2"  rx="1"    opacity="0.4"  className={playing ? "music-bar-1" : ""} />
        </svg>
      </button>
    </>
  );
};
