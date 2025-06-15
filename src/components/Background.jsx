import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-transparent">
      {/* Gradasi background kuning-pink */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-pink-50 to-yellow-50 opacity-80"></div>

      {/* Blob animasi kuning besar kiri atas */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-yellow-400 opacity-25 filter blur-[100px] animate-blob"
        style={{ animation: "blobMove 12s ease-in-out infinite" }}
      ></div>

      {/* Blob animasi pink kecil kanan tengah */}
      <div
        className="absolute top-[30%] right-[-50px] w-[300px] h-[300px] rounded-full bg-pink-400 opacity-30 filter blur-[80px] animate-blob"
        style={{ animation: "blobMove 10s ease-in-out infinite reverse" }}
      ></div>

      {/* Blob animasi kuning kecil bawah tengah */}
      <div
        className="absolute bottom-[-80px] left-[40%] w-[250px] h-[250px] rounded-full bg-yellow-300 opacity-20 filter blur-[60px] animate-blob"
        style={{ animation: "blobMove 14s ease-in-out infinite" }}
      ></div>

      {/* Efek glow bintik-bintik kartun */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIxIiBmaWxsPSIjZmFjYzE1IiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=')] bg-repeat opacity-10 animate-twinkle"></div>
      </div>

      {/* Overlay gradasi transparan untuk softening */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent via-pink-50/30 to-transparent"></div>

      {/* Keyframes untuk animasi blob */}
      <style jsx>{`
        @keyframes blobMove {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(50px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 40px) scale(0.9);
          }
          75% {
            transform: translate(30px, 20px) scale(1.05);
          }
        }
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }
        .animate-blob {
          animation: blobMove var(--animation-duration) ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;