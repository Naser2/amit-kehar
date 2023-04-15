import Link from 'next/link'
import { Fragment } from 'react'

export const PageAside = ({}) => {
  let hosts = [
    'A warn Hug',
    'From Here',
    'Daylight',
    'A warn Hug',
    'From Here',
    'Daylight',
  ]

  // <div
  //         id="personal-image"
  //         className="relative max-w-[100%]  px-4 lg:max-w-[10%]"
  //       ></div>
  return (
    <div
      id="ASIDE-NAV"
      className="relative bottom-6 bg-zinc-50 max-[1000px]:absolute  max-[1000px]:w-full"
    >
      {/* <div className="meta static"> */}
      {/* <h1 data-shrink-original-size="42">From Home to Anywhere</h1> */}

      <div className="Side-Nav">
        <div
          id="page-navigation"
          className="top-4 min-[1000px]:pl-0 xl:absolute xl:left-0 "
        >
          {/* min-[1000px]:[writing-mode:horizontal-rl] */}
          <div
            className="sticky  mt-16 min-[1000px]:[writing-mode:vertical-rl]  lg:sticky lg:top-0 lg:flex lg:w-16
           lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12  lg:text-sm lg:leading-7"
          >
            {/* max-[1500px]:pl-8  */}
            <span className="sr-only pb-4 font-mono text-slate-500 sm:not-sr-only">
              Art Collections
            </span>
            <div
              id="episodes"
              className="mx-auto mx-auto bg-black px-4 sm:px-6 min-[1000px]:hidden lg:px-0 "
            >
              <h1
                className="mx-auto px-4 py-10 text-4xl font-bold  leading-7
             text-slate-100 dark:text-slate-300 sm:px-6 sm:px-6 md:max-w-2xl
             md:max-w-2xl md:px-4 md:py-12 lg:px-0 lg:px-0 xl:pl-32 "
              >
                Art collection
              </h1>
            </div>
            <div
              id="collection"
              className="flex overflow-scroll rounded-sm bg-gray-200 bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-400/5 backdrop-blur hover:shadow-zinc-900/5 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
            >
              <div className="flex flex-col items-center justify-between sm:flex-row">
                <div className=" flex gap-6 py-10 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {hosts.map((host, hostIndex) => (
                    <>
                      <Link
                        key={hostIndex}
                        href="/about"
                        className="flex-shrink-0 rounded-md bg-slate-50 p-2 dark:text-slate-600"
                      >
                        {/* {hostIndex !== 0 && (
                          <Fragment
                            aria-hidden="true"
                            className="px-2 text-slate-400"
                          >
                            /
                          </Fragment>
                        )} */}
                        {host}
                      </Link>
                    </>
                  ))}
                </div>
              </div>
            </div>{' '}
            {/* <div id="collection" className=" ">
              <Link
                href="/"
                className="flex flex-shrink-0 gap-x-6 overflow-scroll font-bold text-slate-900 sm:mt-16 sm:gap-6 "
              >
                {hosts.map((host, hostIndex) => (
                  <Fragment key={host} className="">
                    {hostIndex !== 0 && (
                      <span aria-hidden="true" className=" flex text-slate-400">
                        /
                      </span>
                    )}
                    {host}
                  </Fragment>
                ))}
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
