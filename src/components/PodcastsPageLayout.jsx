import { Fragment, useId, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

// import { AudioPlayer } from './player/AudioPlayer'
// import posterImage from '@/images/projectImages/podcast/podcast-header-duplicate.png'
import { useRouter } from 'next/router'
import YoutubeVideo from './YoutubeVideo'
import { Container } from './Container'
// import { LoggedInUserIcon } from '../icons/LoggedInUserIcon'

function randomBetween(min, max, seed = 1) {
  return () => {
    let rand = Math.sin(seed++) * 10000
    rand = rand - Math.floor(rand)
    return Math.floor(rand * (max - min + 1) + min)
  }
}

function Waveform(props) {
  let id = useId()
  let bars = {
    total: 100,
    width: 2,
    gap: 2,
    minHeight: 40,
    maxHeight: 100,
  }

  let barHeights = Array.from(
    { length: bars.total },
    randomBetween(bars.minHeight, bars.maxHeight)
  )

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <linearGradient id={`${id}-fade`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="40%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </linearGradient>
        <linearGradient id={`${id}-gradient`}>
          <stop offset="0%" stopColor="#4989E8" />
          <stop offset="50%" stopColor="#6159DA" />
          <stop offset="100%" stopColor="#FF54AD" />
        </linearGradient>
        <mask id={`${id}-mask`}>
          <rect width="100%" height="100%" fill={`url(#${id}-pattern)`} />
        </mask>
        <pattern
          id={`${id}-pattern`}
          width={bars.total * bars.width + bars.total * bars.gap}
          height="100%"
          patternUnits="userSpaceOnUse"
        >
          {Array.from({ length: bars.total }, (_, index) => (
            <rect
              key={index}
              width={bars.width}
              height={`${barHeights[index]}%`}
              x={bars.gap * (index + 1) + bars.width * index}
              fill={`url(#${id}-fade)`}
            />
          ))}
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-gradient)`}
        mask={`url(#${id}-mask)`}
        opacity="0.25"
      />
    </svg>
  )
}

export function TinyWaveFormIcon({ colors = [], ...props }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" {...props}>
      <path
        d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
        className={colors[0]}
      />
      <path
        d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
        className={colors[1]}
      />
    </svg>
  )
}

export function SpotifyIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" {...props}>
      <path d="M15.8 3a12.8 12.8 0 1 0 0 25.6 12.8 12.8 0 0 0 0-25.6Zm5.87 18.461a.8.8 0 0 1-1.097.266c-3.006-1.837-6.787-2.252-11.244-1.234a.796.796 0 1 1-.355-1.555c4.875-1.115 9.058-.635 12.432 1.427a.8.8 0 0 1 .265 1.096Zm1.565-3.485a.999.999 0 0 1-1.371.33c-3.44-2.116-8.685-2.728-12.755-1.493a1 1 0 0 1-.58-1.91c4.65-1.41 10.428-.726 14.378 1.7a1 1 0 0 1 .33 1.375l-.002-.002Zm.137-3.629c-4.127-2.45-10.933-2.675-14.871-1.478a1.196 1.196 0 1 1-.695-2.291c4.52-1.374 12.037-1.107 16.785 1.711a1.197 1.197 0 1 1-1.221 2.06" />
    </svg>
  )
}

export function ApplePodcastIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.528 24.8c-.232.592-.768 1.424-1.536 2.016-.44.336-.968.664-1.688.88-.768.232-1.72.304-2.904.304H10.6c-1.184 0-2.128-.08-2.904-.304a4.99 4.99 0 0 1-1.688-.88c-.76-.584-1.304-1.424-1.536-2.016C4.008 23.608 4 22.256 4 21.4V10.6c0-.856.008-2.208.472-3.4.232-.592.768-1.424 1.536-2.016.44-.336.968-.664 1.688-.88C8.472 4.08 9.416 4 10.6 4h10.8c1.184 0 2.128.08 2.904.304a4.99 4.99 0 0 1 1.688.88c.76.584 1.304 1.424 1.536 2.016C28 8.392 28 9.752 28 10.6v10.8c0 .856-.008 2.208-.472 3.4Zm-9.471-6.312a1.069 1.069 0 0 0-.32-.688c-.36-.376-.992-.624-1.736-.624-.745 0-1.377.24-1.737.624-.183.2-.287.4-.32.688-.063.558-.024 1.036.04 1.807v.009c.065.736.184 1.72.336 2.712.112.712.2 1.096.28 1.368.136.448.625.832 1.4.832.776 0 1.273-.392 1.4-.832.08-.272.169-.656.28-1.368.152-1 .273-1.976.337-2.712.072-.776.104-1.256.04-1.816ZM16 16.375c1.088 0 1.968-.88 1.968-1.967 0-1.08-.88-1.968-1.968-1.968s-1.968.88-1.968 1.968.88 1.967 1.968 1.967Zm-.024-9.719c-4.592.016-8.352 3.744-8.416 8.336-.048 3.72 2.328 6.904 5.648 8.072.08.032.16-.04.152-.12a35.046 35.046 0 0 0-.041-.288c-.029-.192-.057-.384-.079-.576a.317.317 0 0 0-.168-.232 7.365 7.365 0 0 1-4.424-6.824c.04-4 3.304-7.256 7.296-7.288 4.088-.032 7.424 3.28 7.424 7.36 0 3.016-1.824 5.608-4.424 6.752a.272.272 0 0 0-.168.232l-.12.864c-.016.088.072.152.152.12a8.448 8.448 0 0 0 5.648-7.968c-.016-4.656-3.816-8.448-8.48-8.44Zm-5.624 8.376c.04-2.992 2.44-5.464 5.432-5.576 3.216-.128 5.88 2.456 5.872 5.64a5.661 5.661 0 0 1-2.472 4.672c-.08.056-.184-.008-.176-.096.016-.344.024-.648.008-.96 0-.104.04-.2.112-.272a4.584 4.584 0 0 0 1.448-3.336 4.574 4.574 0 0 0-4.752-4.568 4.585 4.585 0 0 0-4.392 4.448 4.574 4.574 0 0 0 1.448 3.456c.08.072.12.168.112.272-.016.32-.016.624.008.968 0 .088-.104.144-.176.096a5.65 5.65 0 0 1-2.472-4.744Z"
      />
    </svg>
  )
}

export function OvercastIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" {...props}>
      <path d="M16 28.8A12.77 12.77 0 0 1 3.2 16 12.77 12.77 0 0 1 16 3.2 12.77 12.77 0 0 1 28.8 16 12.77 12.77 0 0 1 16 28.8Zm0-5.067.96-.96-.96-3.68-.96 3.68.96.96Zm-1.226-.054-.48 1.814 1.12-1.12-.64-.694Zm2.453 0-.64.64 1.12 1.12-.48-1.76Zm.907 3.307L16 24.853l-2.133 2.133c.693.107 1.387.213 2.133.213.747 0 1.44-.053 2.134-.213ZM16 4.799C9.814 4.8 4.8 9.813 4.8 16c0 4.907 3.147 9.067 7.52 10.56l2.4-8.906c-.533-.374-.853-1.014-.853-1.707A2.14 2.14 0 0 1 16 13.813a2.14 2.14 0 0 1 2.134 2.133c0 .693-.32 1.28-.854 1.707l2.4 8.906A11.145 11.145 0 0 0 27.2 16c0-6.186-5.013-11.2-11.2-11.2Zm7.307 16.747c-.267.32-.747.427-1.12.16-.373-.267-.427-.747-.16-1.067 0 0 1.44-1.92 1.44-4.64 0-2.72-1.44-4.64-1.44-4.64-.267-.32-.213-.8.16-1.066.373-.267.853-.16 1.12.16.107.106 1.76 2.293 1.76 5.546 0 3.254-1.653 5.44-1.76 5.547Zm-3.893-2.08c-.32-.32-.267-.907.053-1.227 0 0 .8-.853.8-2.24 0-1.386-.8-2.186-.8-2.24-.32-.32-.32-.853-.053-1.226.32-.374.8-.374 1.12-.054.053.054 1.333 1.387 1.333 3.52 0 2.134-1.28 3.467-1.333 3.52-.32.32-.8.267-1.12-.053Zm-6.827 0c-.32.32-.8.373-1.12.053-.053-.106-1.333-1.386-1.333-3.52 0-2.133 1.28-3.413 1.333-3.52.32-.32.853-.32 1.12.054.32.32.267.906-.053 1.226 0 .054-.8.854-.8 2.24 0 1.387.8 2.24.8 2.24.32.32.373.854.053 1.227Zm-2.773 2.24c-.374.267-.854.16-1.12-.16-.107-.107-1.76-2.293-1.76-5.547 0-3.253 1.653-5.44 1.76-5.546.266-.32.746-.427 1.12-.16.373.266.426.746.16 1.066 0 0-1.44 1.92-1.44 4.64 0 2.72 1.44 4.64 1.44 4.64.266.32.16.8-.16 1.067Z" />
    </svg>
  )
}

export function RSSIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 4h15A4.5 4.5 0 0 1 28 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 4 23.5v-15A4.5 4.5 0 0 1 8.5 4ZM13 22a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-6-6a9 9 0 0 1 9 9h3A12 12 0 0 0 7 13v3Zm5.74-4.858A15 15 0 0 0 7 10V7a18 18 0 0 1 18 18h-3a15 15 0 0 0-9.26-13.858Z"
      />
    </svg>
  )
}

export function PersonIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 11 12" {...props}>
      <path d="M5.019 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm3.29 7c1.175 0 2.12-1.046 1.567-2.083A5.5 5.5 0 0 0 5.019 7 5.5 5.5 0 0 0 .162 9.917C-.39 10.954.554 12 1.73 12h6.578Z" />
    </svg>
  )
}

function AboutSection(props) {
  let [isExpanded, setIsExpanded] = useState(false)
  let [showAbout, setShowAbout] = useState(false)
  // console.log('PODCAST About Section', props)
  // let podcastAbout = props.episodes.map((episode) => {
  //   return <>{episode.description}</>
  // })
  return (
    <section {...props} className="pb-14">
      <button
        onClick={() => setShowAbout(!showAbout)}
        className={
          '  mx-10 inline-flex items-center px-8 font-mono text-sm font-medium leading-7 text-slate-900 sm:mx-12 md:px-4 lg:px-8 lg:px-8 xl:px-12 xl:px-12'
        }
      >
        <TinyWaveFormIcon
          colors={['fill-violet-300', 'fill-pink-300']}
          className="h-2.5 w-2.5"
        />
        <span className="ml-2.5 text-2xl dark:text-slate-200">About</span>
      </button>

      <>
        <p
          className={clsx(
            'mt-2 px-8 pt-4 text-base leading-7 text-slate-700 dark:text-slate-200/80  sm:px-6 md:px-4 lg:px-8 xl:px-12',
            !isExpanded && 'lg:line-clamp-4'
          )}
        >
          In this show, Lars and Serena dig deep to get to the facts with guests
          who have been labeled Poet by a society quick to judge, without
          actually getting the full story. Tune in every Thursday to get to the
          truth with another misunderstood outcast as they share the missing
          context in their tragic tale.
        </p>
        {isExpanded && (
          <p
            className={clsx(
              'mt-2 px-8 pt-4 text-base leading-7 text-slate-700 dark:text-slate-200/80  sm:px-6 md:px-4 lg:px-8 xl:px-12',
              !isExpanded && 'lg:line-clamp-4'
            )}
          >
            mMore COntent truth with another misunderstood outcast as they share
            the missing context in their tragic tale.
          </p>
        )}
        {!isExpanded && (
          <button
            type="button"
            className="px-8 text-sm font-bold leading-6 text-blue-500 hover:text-blue-700 active:text-blue-900  md:px-4 lg:inline-block lg:px-8 xl:px-12"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            Show more
          </button>
        )}
        {isExpanded && (
          <button
            type="button"
            className=" px-8 text-sm font-bold leading-6 text-blue-500 hover:text-blue-700 active:text-blue-900  md:px-4 lg:inline-block lg:px-8 xl:px-12"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            Show less
          </button>
        )}
      </>
    </section>
  )
}
{
  /* {!router.pathname.includes(isEpisodeRoute) && ( */
}
const articleMedias = (mediaContent, aspect, defaultAspect) => {
  const defaultAspectRatio = 'aspect-[953/882] w-full max-w-[853px]'
  return (
    <div className="xl:mb-90 relative -mt-10 lg:-mt-20 lg:mb-64">
      {mediaContent.map((media) => {
        return media.type !== 'video' ? (
          <div key={media.source} className="CULPRIT">
            <Image
              className={clsx(
                aspect && aspect,
                defaultAspect && defaultAspectRatio,
                'is-zoomed lg:w-[800px]relative z-20 mx-2 my-6 w-[375px]  rounded-xl shadow-xl shadow-black/5 ring-slate-900/5 sm:w-[700px] lg:my-10 xl:my-14'
              )}
              // className="gallery-item relative z-20 -mb-36 aspect-[953/882] w-full max-w-[853px] rounded-xl bg-slate-200 shadow-xl shadow-black/5 ring-1 ring-slate-900/5 sm:-mb-16 lg:-mb-8 xl:-mb-16"
              id={`${media.title}-_IMAGE-${media.title}`}
              // className="w-full "
              src={media.source}
              // src={media.source}
              alt=""
              height={900}
              width={900}
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
              priority
            />
            {/* <div className="insetx-0 absolute rounded-md ring-1 ring-inset ring-black/10 dark:sm:rounded-xl dark:lg:rounded-2xl" /> */}
          </div>
        ) : (
          <div
            id={`${media.title}-ARTICLE_VIDEO`}
            className="overflow-hiddenlg:w-auto relative mx-4 mx-auto block max-w-[640px] sm:mb-10 "
            // className="relative mx-auto mx-8 block overflow-hidden bg-black shadow-xl shadow-slate-200 dark:sm:rounded-xl lg:w-auto dark:lg:rounded-2xl"
            aria-label="gallery-media-item"
          >
            <YoutubeVideo videoID={media.source} />

            {/* <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-black/10 dark:sm:rounded-xl dark:lg:rounded-2xl" /> */}
          </div>
        )
      })}
    </div>
  )
}
function PodcastAside({ mediaContent, hosts, classN, aspect, defaultAspect }) {
  const router = useRouter()
  console.log('yyyy', mediaContent)
  return (
    <div
      id="PAGE-MEDIA-ASIDE-CONTENT"
      className={clsx(
        'dark::bg-black lg:grid-cols-start  relative h-full lg:fixed lg:-mt-24 lg:overflow-y-auto  lg:pb-44'
      )}
    >
      {/* dark::bg-black relative h-full bg-slate-50 lg:fixed  lg:right-0 lg:flex lg:items-start lg:overflow-y-auto lg:pb-44 */}
      <div className="gallery-media-item z-10 mt-20">
        <>{articleMedias(mediaContent)}</>
      </div>
    </div>
  )
}

export function PodcastsPageLayout({ contents, children, className }) {
  const router = useRouter()
  let hosts = ['Lars Gordon', 'Serena Sial']
  // console.log('EPISODES IN LAYOUT', episodes)
  const mediaContents = contents.medias

  return (
    <div
      className="max-w-10xl relative  z-40 mx-auto  dark:bg-black sm:mx-10 sm:grid sm:grid-cols-1 lg:mt-0 lg:grid-cols-2 lg:px-8 xl:mx-14"
      id="project"
    >
      <div
        id="PAGE-ART-STUFF"
        className="lg:w-2xl xl:-ml-30 col-start-2 col-end-2 mt-28 bg-slate-200 sm:-ml-20"
      >
        <PodcastAside
          mediaContent={contents.medias && contents.medias}
          hosts={hosts}
          classN={className}
        />
      </div>

      <div
        id="PAGE-LEFT-TEXT-CONTENT"
        // className="lg:ml-112 xl:ml-120 lg:mb-28  "
      >
        <div className="col-start-2 flex lg:col-span-4 xl:ml-44">
          <div
            id="ASIDE_LEFT_TEXT-CONTENT-main"
            className={clsx(
              'dark:black-2-bg z-5  max-w-[800px] min-[1000px]:w-[800px] lg:min-h-full lg:max-w-[400px] lg:border-slate-200   min-[1500px]:max-w-[450px] '
            )}
          >
            <div
              id="ASIDE_LEFT_TEXT-CONTENT-child"
              className="pb-20 pb-4 sm:px-0 xl:max-w-[439px]"
            >
              {' '}
              <div
                id="page-navigation"
                className="top-24 max-[1500px]:hidden  xl:absolute xl:left-0"
              >
                <div className="mt-16 hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
                  <span className="font-mono text-slate-500">Hosted by</span>
                  <Link
                    href="/"
                    className="mt-16  flex gap-6 font-bold text-slate-900"
                  >
                    {hosts.map((host, hostIndex) => (
                      <Fragment key={host}>
                        {hostIndex !== 0 && (
                          <span aria-hidden="true" className="text-slate-400">
                            /
                          </span>
                        )}
                        {host}
                      </Fragment>
                    ))}
                  </Link>
                </div>
              </div>
              <div
                id="podcast-intro"
                className="meta -mt-64 min-w-[300px] pt-10 text-center sm:px-6  sm:px-6 sm:pt-4 md:px-4 md:pt-14 lg:mt-2 lg:px-8 lg:pt-12 lg:text-left xl:px-12"
              >
                <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-200 sm:text-3xl">
                  {contents.name}
                </h1>
                {/* <p className="mb-10 mt-6 px-6 text-lg  font-medium leading-8 text-slate-700 dark:text-slate-200/80 md:px-0 lg:mb-0">
                  Conversations with the most tragically misunderstood people of
                  our time. Lars Gaudin ia Doctor and a parttime respected
                  podcast authors.
                </p> */}
                <div id="MEDIA-IMAGE_SMALL" className="lg:hidden">
                  {/* {articleMedias(
                    contents.medias &&
                      contents.medias.length >= 2 &&
                      contents.medias.slice(0, 1)
                  )} */}
                </div>

                <div className="">
                  {/* <h1 data-shrink-original-size="42">
                    XXFrom Home to Anywhere
                  </h1> */}
                  <div
                    id={`${contents.id}-title`}
                    aria-hidden="true"
                    className="text-sm font-medium text-zinc-900 group-aria-selected:text-emerald-500 dark:text-white"
                    dangerouslySetInnerHTML={{ __html: contents.content }}
                  />
                  {/* <div class="body">
                    <p
                      class=""
                      // style="white-space:pre-wrap;"
                    >
                      Every journey begins with a starting point. It is with the
                      nurturing support of our home, our cocoon, that we can
                      then excel and reach our fullest potential. From Home to
                      Anywhere is an Art Installation that invites passers-by to
                      step up to it and experience the cocoon for themselves,
                      serving as a reminder that while our world is a big place,
                      home begins with where you are.
                    </p>
                    <p
                      class=""
                      data-rte-preserve-empty="true"
                      //   style="white-space:pre-wrap;"
                    ></p>
                    <p
                      class=""
                      // style="white-space:pre-wrap;"
                    >
                      Upon entering a nest, participants will be surrounded by
                      birds fluttering overhead and invited to project their
                      hopes and desires onto the birds flying above them, taking
                      a moment to imagine how they would feel if they too could
                      fly.
                    </p>

                    <p
                      class=""
                      data-rte-preserve-empty="true"
                      //   style="white-space:pre-wrap;"
                    ></p>
                    <p
                      class=""
                      // style="white-space:pre-wrap;"
                    >
                      Amit and Kanika collaboratively realize Installations that
                      push the boundaries of their individual practices.They
                      intend for all collaborations to embody themes of hope and
                      unity.
                    </p>
                    <p
                      class=""
                      data-rte-preserve-empty="true"
                      //   style="white-space:pre-wrap;"
                    ></p>
                    <p
                      class=""

                      // style="white-space:pre-wrap;"
                    >
                      This installation is produced in collaboration with Kelly
                      Robinson and Navnith Ravindran.
                    </p>
                  </div> */}
                  <div class="share-like"></div>
                </div>
              </div>
            </div>

            {/* <AboutSection className="hidden border-t border-slate-500 lg:-mt-32 lg:mb-20 lg:block " /> */}
          </div>
        </div>
      </div>
      {/* <footer className="border-t border-slate-200 bg-slate-50 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden">
        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
          <AboutSection />
          <h2 className="mt-8 flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
            <PersonIcon className="h-3 w-auto fill-slate-300" />
            <span className="ml-2.5">Hosted by</span>
          </h2>x
          <div className="mt-2 flex gap-6 text-sm font-bold leading-7 text-slate-900">
            {hosts.map((host, hostIndex) => (
              <Fragment key={host}>
                {hostIndex !== 0 && (
                  <span aria-hidden="true" className="text-slate-400">
                    /
                  </span>
                )}
                {host}
              </Fragment>
            ))}
          </div>
        </div>
      </footer> */}
    </div>
  )
}

const content = ``
