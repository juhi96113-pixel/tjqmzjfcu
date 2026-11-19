/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useState} from 'react';

export default function App() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Full-bleed Sky Frame Background (First Uploaded Design) */}
      {!imageError ? (
        <img
          src="/assets/aistudio/IMG_3099_5c8c980f.png"
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="block w-full min-h-screen sm:h-auto object-fill sm:object-cover select-none pointer-events-none"
        />
      ) : (
        <div
          aria-hidden="true"
          className="min-h-screen w-full bg-[linear-gradient(180deg,#649cf7_0%,#a9cafc_45%,#c8ddff_100%)]"
        />
      )}

      {/* Top-most Straight Single-Line Large Display Title */}
      <header className="absolute inset-x-0 top-0 z-20 px-3 sm:px-6 pt-5 sm:pt-[5%] text-center">
        <h1 className="font-poster-display mx-auto block w-full text-center text-[clamp(2rem,10.6vw,9rem)] leading-[1.1] font-normal tracking-tight whitespace-nowrap select-none [text-shadow:0_3px_0_rgba(45,88,176,0.45),0_8px_22px_rgba(24,58,136,0.38)]">
          <span className="text-white">코</span>
          <span className="mx-[0.03em] inline-block align-baseline text-[0.44em] tracking-normal">
            <span className="text-white">(스프레 </span>
            <span className="text-[#ffb7d0]">고)</span>
          </span>
          <span className="text-white">민</span>
          <span className="ml-[0.22em] text-[#ffb7d0]">상담소</span>
        </h1>
      </header>

      {/* Empty content area reserved for future details */}
      <main aria-label="상담소 본문 영역" />
    </div>
  );
}
