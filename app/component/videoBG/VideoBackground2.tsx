// components/VideoBackground.tsx
export default function VideoBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-[-1]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/wallpaper3.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}
