/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useState} from 'react';

const START_TIPS = [
  {
    step: '01',
    title: '나와 닮은 캐릭터 찾기',
    description:
      '나와 닮은 캐릭터에서 출발하면 부담 없이 새로운 모습에 다가갈 수 있다.',
  },
  {
    step: '02',
    title: '친구들과 함께하기',
    description: '친구들과 함께 캐릭터를 나누어 특별한 추억 만들기',
  },
  {
    step: '03',
    title: '일상 속 소품 활용하기',
    description: '평소 입는 옷과 간단한 소품으로 가볍게 시작하기',
  },
] as const;

export default function App() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#aec8fa_0%,#c7ddfe_38%,#d5e6ff_72%,#e4efff_100%)]">
      {/* Seamless Sky Frame Layering */}
      {!imageError ? (
        <>
          {/* Top Sky, Balloons & Curved Arch */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute inset-x-0 top-0 z-0 aspect-[857/680] w-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
          >
            <img
              src="/assets/aistudio/IMG_3099_5c8c980f.png"
              alt=""
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="block h-full w-full object-cover object-top"
            />
          </div>

          {/* Continuous Inner Hairline Frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute inset-y-0 left-[3.2%] right-[3.2%] z-0 border-x border-white/55"
          />

          {/* Bottom Balloons, Clouds & Ribbons */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute inset-x-0 bottom-0 z-0 aspect-[857/420] w-full overflow-hidden [mask-image:linear-gradient(to_top,black_68%,transparent_100%)]"
          >
            <img
              src="/assets/aistudio/IMG_3099_5c8c980f.png"
              alt=""
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="block h-full w-full object-cover object-bottom"
            />
          </div>
        </>
      ) : (
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 z-0 bg-[linear-gradient(180deg,#649cf7_0%,#a9cafc_32%,#c8ddff_68%,#dceaff_100%)]"
        />
      )}

      {/* Top Display Title Centered in the Upper Sky Zone */}
      <header className="absolute inset-x-0 top-0 z-20 px-2 sm:px-4 pt-[14.5vw] text-center">
        <h1 className="font-poster-display mx-auto block w-full text-center text-[clamp(2.3rem,11.5vw,10.5rem)] leading-[1.08] font-normal tracking-tight whitespace-nowrap select-none [text-shadow:0_3px_0_rgba(45,88,176,0.45),0_8px_22px_rgba(24,58,136,0.38)]">
          <span className="text-white">코</span>
          <span className="mx-[0.03em] inline-block align-baseline text-[0.44em] tracking-normal">
            <span className="text-white">(스프레 </span>
            <span className="text-[#ffb7d0]">고)</span>
          </span>
          <span className="text-white">민</span>
          <span className="ml-[0.22em] text-[#ffb7d0]">상담소</span>
        </h1>
      </header>

      {/* Main Content Area Inside the Light-Blue Sky Frame */}
      <main
        aria-label="상담소 본문 영역"
        className="relative z-10 mx-auto w-full max-w-5xl px-7 sm:px-12 pt-[56vw] pb-[30vw]"
      >
        {/* Lead Headline */}
        <section className="text-center mb-10 sm:mb-14">
          <h2 className="font-poster-display text-balance text-[clamp(1.85rem,4.4vw,3.35rem)] leading-[1.2] font-normal text-[#193066] [text-shadow:0_2px_0_rgba(255,255,255,0.75)]">
            코스프레, <span className="text-[#d45081]">어렵지 않아요!</span>
          </h2>
        </section>

        <div className="space-y-6 sm:space-y-8">
          {/* Sections 1 & 2: Reason & Hesitation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 items-stretch">
            <article className="rounded-2xl bg-white/75 backdrop-blur-md border border-white/90 p-6 sm:p-8 shadow-[0_10px_30px_rgba(43,82,163,0.08)]">
              <div className="flex items-baseline gap-2.5">
                <span className="text-xs font-bold tabular-nums text-[#d45081]">
                  01
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#182b5c] text-balance">
                  코스프레를 선택한 이유
                </h3>
              </div>
              <p className="mt-4 text-[15px] sm:text-base leading-[1.85] text-[#283d70]">
                반복되는 일상 속에서 가끔은 평소와 다른 특별한 경험을 해보고 싶을
                때가 있다. 우리 조는 그런 경험 중 하나인 코스프레에 주목했다.
                좋아하는 캐릭터가 되어 평소의 나와는 다른 모습을 경험할 수 있다는
                점이 코스프레의 매력이라고 생각했다.
              </p>
            </article>

            <article className="rounded-2xl bg-white/75 backdrop-blur-md border border-white/90 p-6 sm:p-8 shadow-[0_10px_30px_rgba(43,82,163,0.08)]">
              <div className="flex items-baseline gap-2.5">
                <span className="text-xs font-bold tabular-nums text-[#d45081]">
                  02
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#182b5c] text-balance">
                  코스프레, 왜 망설일까?
                </h3>
              </div>
              <p className="mt-4 text-[15px] sm:text-base leading-[1.85] text-[#283d70]">
                코스프레에 관심은 있지만 비싼 의상과 소품, 어려운 메이크업,
                다른 사람들의 시선 때문에 쉽게 도전하지 못하는 경우가 많다. 우리는
                이러한 고민을 조금이나마 덜어주고 싶었다.
              </p>
            </article>
          </div>

          {/* Section 3: Introducing Comin Resolution Center */}
          <section className="rounded-2xl bg-[#1f3b7d]/92 text-white border border-white/40 p-7 sm:p-10 shadow-[0_14px_38px_rgba(25,48,102,0.16)]">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold tabular-nums tracking-wider text-[#ffb7d0]">
                03 · 코(스프레 고)민 해결소
              </p>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white text-balance">
                코민 해결소를 소개합니다!
              </h3>
              <p className="mt-4 text-[15.5px] sm:text-[17px] leading-[1.85] text-white/90">
                ‘코(스프레 고)민 해결소’는 코스프레를 하고 싶지만 망설이는 사람들을
                위한 공간이다. 각자의 고민과 상황에 맞는 캐릭터와 코스프레 방법을
                추천해 누구나 부담 없이 시작할 수 있도록 도와준다.
              </p>
            </div>
          </section>

          {/* Section 4: How to Start */}
          <section className="rounded-2xl bg-white/75 backdrop-blur-md border border-white/90 p-6 sm:p-9 shadow-[0_10px_30px_rgba(43,82,163,0.08)]">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs font-bold tabular-nums text-[#d45081]">04</p>
              <h3 className="mt-1 text-xl sm:text-2xl font-bold text-[#182b5c] text-balance">
                코스프레, 이렇게 시작해 보세요!
              </h3>
            </div>

            <div className="mt-6 sm:mt-7 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#96b8f5]/45 border-y border-[#96b8f5]/45">
              {START_TIPS.map((tip) => (
                <div key={tip.step} className="py-5 md:py-6 md:px-6 first:md:pl-2 last:md:pr-2">
                  <span className="text-xs font-bold tabular-nums text-[#d45081]">
                    {tip.step}
                  </span>
                  <h4 className="mt-1.5 text-base sm:text-[17px] font-bold text-[#182b5c]">
                    {tip.title}
                  </h4>
                  <p className="mt-2 text-[14.5px] sm:text-[15px] leading-[1.75] text-[#2c4378]">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-[15px] sm:text-base font-medium leading-[1.8] text-[#1f3770] max-w-2xl mx-auto">
              꼭 비싼 의상이나 완벽한 분장이 필요한 것은 아니다. 자신만의 방식으로
              캐릭터를 표현하는 것만으로도 충분하다.
            </p>
          </section>

          {/* Sections 5 & 6: Familiar Experience & Our Message */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-7 items-stretch">
            <article className="md:col-span-5 rounded-2xl bg-white/75 backdrop-blur-md border border-white/90 p-6 sm:p-8 shadow-[0_10px_30px_rgba(43,82,163,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-xs font-bold tabular-nums text-[#d45081]">
                    05
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#182b5c] text-balance">
                    사실 우리도 코스프레를 경험하고 있었어요!
                  </h3>
                </div>
                <p className="mt-4 text-[15px] sm:text-base leading-[1.85] text-[#283d70]">
                  졸업사진이나 할로윈, 테마파크에서 평소와 다른 옷을 입고 특별한
                  하루를 보낸 경험이 있을 것이다.
                </p>
              </div>
              <p className="mt-5 pt-4 border-t border-[#96b8f5]/40 text-[15px] font-semibold text-[#1f3b7d]">
                코스프레는 생각보다 우리에게 익숙한 경험이다.
              </p>
            </article>

            <article className="md:col-span-7 rounded-2xl bg-white/82 backdrop-blur-md border border-white/95 p-6 sm:p-8 shadow-[0_10px_30px_rgba(43,82,163,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-xs font-bold tabular-nums text-[#d45081]">
                    06
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#182b5c] text-balance">
                    우리가 전하고 싶은 이야기
                  </h3>
                </div>
                <p className="mt-4 text-[15px] sm:text-base leading-[1.85] text-[#283d70]">
                  코스프레는 특별한 사람들만 즐기는 어려운 활동이 아니다. 좋아하는
                  캐릭터를 표현하고 새로운 모습에 도전하는 것만으로도 충분히 즐길
                  수 있다.
                </p>
                <p className="mt-3 text-[15px] sm:text-base leading-[1.85] text-[#283d70]">
                  완벽하게 똑같아지는 것보다 중요한 것은 나만의 방식으로 즐기는
                  것이다.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#96b8f5]/40">
                <p className="text-base sm:text-lg font-bold text-[#d45081] text-balance">
                  코스프레, 어렵게 생각하지 말고 한번 도전해 보세요!
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
