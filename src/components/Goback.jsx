import { useRouter } from 'next/router'

export const GobackRound = () => {
  const router = useRouter()
  return (
    <div className="relative -mt-24 flex" id="GO_BACK_ROUND">
      <div className="group flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-600/5 ring-1 ring-zinc-600/5 transition dark:border dark:border-zinc-700/50 dark:bg-black dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-1 lg:ml-8 lg:mt-24 lg:h-16 lg:w-16 xl:-top-4 xl:left-0 xl:mt-14">
        <button
          onClick={() => router.back()}
          id="go-back"
          type="button"
          className="w-23 group absolute top-0 mt-1.5 flex h-10 flex-shrink-0
             items-center justify-center px-2 py-1 text-slate-100 hover:text-white focus:outline-none focus:ring dark:text-white lg:h-11 lg:w-24 "
          aria-label="go-back"
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className="h-10 w-10 rotate-180  font-bold md:h-10 md:w-10"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
            ></path>
          </svg>
          {/* Back */}
        </button>
      </div>
      <div
        id="GO-BACK-ARROW"
        className="transparent z-[100] w-full flex-row flex-col items-center rounded-full pt-10  text-base md:hidden"
      >
        <button
          onClick={() => router.back()}
          id="podcast-go-backkk"
          x
          type="button"
          className="w-23 group absolute top-0 flex h-10 flex-shrink-0  items-center justify-center px-2 py-2 text-slate-900 hover:text-sky-500 focus:outline-none focus:ring dark:text-white lg:h-11 lg:w-24 "
          aria-label="go-back"
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className="h-10 w-10 rotate-180 font-bold  text-black dark:text-white md:h-14 md:w-14"
          >
            <path
              className="text-black dark:text-white"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
            ></path>
          </svg>
          {/* Back */}
        </button>
      </div>
    </div>
  )
}

export const GoBackArrow = () => {
  const router = useRouter()
  return (
    <>
      <div
        id="Goback-Arrow"
        className="transparent relative z-[40] mt-24 flex h-[40px] w-[90px] items-center bg-pink-300/60 text-base 
       
        sm:-mt-8 sm:mt-14 sm:flex-row sm:py-0 md:text-lg lg:flex "
      >
        <button
          onClick={() => router.back()}
          id="podcastss-go-back"
          type="button"
          className="w-23 group absolute top-0 flex h-10 flex-shrink-0 items-center justify-center px-2 py-2 text-slate-100 hover:text-white focus:outline-none focus:ring dark:text-slate-300/90 dark:text-white lg:h-11 lg:w-24 "
          aria-label="go-back"
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className="h-10 w-10 rotate-180 font-bold  md:h-14 md:w-14"
          >
            <path
              stroke="currentcolor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
            ></path>
          </svg>
          {/* Back */}
        </button>
      </div>
      {/* <div
        id="episode-mobile-go-back-bar"
        className="transparent z-[100] w-full flex-row flex-col items-center rounded-full pt-10  text-base md:hidden"
      >
        <button
          onClick={() => router.back()}
          id="podcast-go-back"
          type="button"
          className="w-23 group absolute top-0 flex h-10 flex-shrink-0  items-center justify-center px-2 py-2 text-slate-900 hover:text-sky-500 focus:outline-none focus:ring dark:text-white lg:h-11 lg:w-24 "
          aria-label="go-back"
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className="h-10 w-10 rotate-180 font-bold  text-black dark:text-white md:h-14 md:w-14"
          >
            <path
              className="text-black dark:text-pink-400"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
            ></path>
          </svg>
     
        </button>
      </div> */}
    </>
  )
}
