import { Fragment, useId, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { PageBottomNavigation } from '@/components/PageBottomNavigation'
// import posterImage from '@/images/projectImages/podcast/podcast-header-duplicate.png'
import { useRouter } from 'next/router'
// import { LoggedInUserIcon } from '../icons/LoggedInUserIcon'
import { PageAside } from '@/components/PageAside'
import YoutubeVideo from '@/components/YoutubeVideo'
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
        <span className="ml-2.5 text-2xl dark:text-slate-200">About</span>
        <span className="ml-4 text-lg dark:text-sky-500">
          {showAbout ? 'Close' : 'Read'}
        </span>
      </button>
      {showAbout && (
        <>
          <p
            className={clsx(
              'mt-2 px-8 pt-4 text-base leading-7 text-slate-700 dark:text-slate-200/80  sm:px-6 md:px-4 lg:px-8 xl:px-12',
              !isExpanded && 'lg:line-clamp-4'
            )}
          >
            In this show, Lars and Serena dig deep to get to the facts with
            guests who have been labeled Poet by a society quick to judge,
            without actually getting the full story. Tune in every Thursday to
            get to the truth with another misunderstood outcast as they share
            the missing context in their tragic tale.
          </p>
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
      )}
    </section>
  )
}
{
  /* {!router.pathname.includes(isEpisodeRoute) && ( */
}

export function ArtPageLayout({ artprojects, children, className }) {
  const router = useRouter()
  let hosts = ['Lars Gordon', 'Serena Sial']
  // console.log('EPISODES IN LAYOUT', episodes)
  const isEpisodeRoute = ['/podcasts/']

  let videoSource =
    'https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F478IDDGH7CI%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D478IDDGH7CI&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F478IDDGH7CI%2Fhqdefault.jpg&amp;key=61d05c9d54e8455ea7a9677c366be814&amp;type=text%2Fhtml&amp;schema=youtube&amp;wmode=opaque&amp;autoplay=1&amp;enablejsapi=1'
  let imageSource =
    'https://images.squarespace-cdn.com/content/v1/54f7714de4b06065f8a0bfcd/1580484822299-BJKYE2LSYA5UKN6XQUMF/image-asset.jpeg?format=2500w'

  return (
    <div id="page-wraper" className="mt-24 sm:mt-56 ">
      {/* 'mt-14 flex grid h-full grid-cols-1 dark:bg-black lg:mt-0 lg:grid-cols-2' */}
      <div
        className={
          'opacity-1 mt-14 flex grid h-full grid-cols-1 lg:mt-0 lg:grid-cols-2'
        }
        id="podcast-page-content"
      >
        {/* <div id="aside" className="lg:mb-10"> */}{' '}
        <PageAside hosts={hosts} classN={className} />
        {/* <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <div className="right relative z-0 flex h-screen flex-1 overflow-hidden"></div>
      </div> */}
        {/* </div> */}
        <div
          id="Podcast-Main-Layout"
          className="lg:ml-112 xl:ml-120 border-t border-slate-500 lg:mb-28 lg:border-t-0"
        >
          {/* <Waveform className="absolute left-0 top-0 h-20 w-full" /> */}
          <div className="relative">
            <div
              class=""
              id="detail_5e34488acfecda584de94cd2"
              data-dynamic-data-link="from-home-to-anywhere"
              //   style="min-height: 1468px;"
            >
              <ImageComponent soure={imageSource} />
              {/* {<YoutubeVideo videoID={media.source} title={artprojects}/>} */}
              <OutSourceVideo source={videoSource} />
            </div>

            {/* {children} */}
          </div>
        </div>
        {/* <footer className="border-t border-slate-200 bg-slate-50 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden">
        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
          <h2 className="mt-8 flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
            <PersonIcon className="h-3 w-auto fill-slate-300" />
            <span className="ml-2.5">Hosted by</span>
          </h2>
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

      <div className="sm: relative inset-x-0 bottom-0 z-10 w-full max-[400px]:hidden">
        <PageBottomNavigation />
      </div>
    </div>
  )
}
const ImageComponent = ({ source }) => {
  return (
    <Link href="/art" class="gallery-item" id="yui_3_17_2_1_1681307686195_639">
      <img
        data-src="https://images.squarespace-cdn.com/content/v1/54f7714de4b06065f8a0bfcd/1580484822299-BJKYE2LSYA5UKN6XQUMF/image-asset.jpeg"
        data-image="https://images.squarespace-cdn.com/content/v1/54f7714de4b06065f8a0bfcd/1580484822299-BJKYE2LSYA5UKN6XQUMF/image-asset.jpeg"
        data-image-dimensions="1639x1276"
        data-image-focal-point="0.5,0.5"
        data-image-stretch="false"
        class=""
        //   style=""
        alt="From Home to Anywhere"
        data-image-resolution="2500w"
        src={source}
      />

      <div class="sqs-spin"></div>
    </Link>
  )
}
const OutSourceVideo = ({ videoSource }) => {
  let videoSrc =
    'https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F478IDDGH7CI%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D478IDDGH7CI&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F478IDDGH7CI%2Fhqdefault.jpg&amp;key=61d05c9d54e8455ea7a9677c366be814&amp;type=text%2Fhtml&amp;schema=youtube&amp;wmode=opaque&amp;autoplay=1&amp;enablejsapi=1'

  return (
    <Link href="/" class="gallery-item" id="yui_3_17_2_1_1681307686195_415">
      <div
        class="sqs-video-wrapper video-none"
        data-html='<iframe allow="autoplay; fullscreen" scrolling="no" allowfullscreen="true" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F478IDDGH7CI%3Ffeature%3Doembed&amp;amp;display_name=YouTube&amp;amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D478IDDGH7CI&amp;amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F478IDDGH7CI%2Fhqdefault.jpg&amp;amp;key=61d05c9d54e8455ea7a9677c366be814&amp;amp;type=text%2Fhtml&amp;amp;schema=youtube&amp;amp;wmode=opaque" width="854" frameborder="0" title="YouTube embed" class="embedly-embed" height="480"></iframe>'
        data-provider-name="YouTube"
        id="yui_3_17_2_1_1681307686195_421"
      >
        <video
          tabindex="-1"
          class="video-stream html5-main-video"
          webkit-playsInline=""
          playsinline=""
          controlsList="nodownload"
          style={{
            //   width: '900px',
            //   height: ' 506px',
            left: '0px',
            top: '0px',
          }}
          src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F478IDDGH7CI%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D478IDDGH7CI&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F478IDDGH7CI%2Fhqdefault.jpg&amp;key=61d05c9d54e8455ea7a9677c366be814&amp;type=text%2Fhtml&amp;schema=youtube&amp;wmode=opaque&amp;autoplay=1&amp;enablejsapi=1"
          //   src={videoSource}
        ></video>
        {/* //// */}

        <div
          class="sqs-video-wrapper video-none"
          data-html='<iframe allow="autoplay; fullscreen" scrolling="no" allowfullscreen="true" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F478IDDGH7CI%3Ffeature%3Doembed&amp;amp;display_name=YouTube&amp;amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D478IDDGH7CI&amp;amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F478IDDGH7CI%2Fhqdefault.jpg&amp;amp;key=61d05c9d54e8455ea7a9677c366be814&amp;amp;type=text%2Fhtml&amp;amp;schema=youtube&amp;amp;wmode=opaque" width="854" frameborder="0" title="YouTube embed" class="embedly-embed" height="480"></iframe>'
          data-provider-name="YouTube"
          id="yui_3_17_2_1_1681273877572_1666"
        >
          <div class="intrinsic" id="yui_3_17_2_1_1681273877572_1881">
            <div
              class="intrinsic-inner"
              style={{ paddingBottom: '56.2061%' }}
              id="yui_3_17_2_1_1681273877572_1880"
            >
              <div
                class="sqs-video-overlay"
                //   style="opacity: 1; overflow: hidden; visibility: hidden;"
                id="yui_3_17_2_1_1681273877572_1687"
              >
                {/* <img
                  data-load="false"
                  data-src="https://images.squarespace-cdn.com/content/v1/54f7714de4b06065f8a0bfcd/1597428077742-01RX4AQ0VG9E2TTYVHCY/image-asset.jpeg"
                  data-image-dimensions="480x360"
                  data-image-focal-point="0.5,0.5"
                  data-parent-ratio="1.8"
                  // style="left: 0px; top: -84.5px; width: 900px; height: 675px; position: relative;"
                  class="loaded"
                  data-image-resolution="2500w"
                  src="https://images.squarespace-cdn.com/content/v1/54f7714de4b06065f8a0bfcd/1597428077742-01RX4AQ0VG9E2TTYVHCY/image-asset.jpeg?format=2500w"
                /> */}
                {/* <div class="sqs-video-opaque" style={{ opacity: 0 }}>
                  {' '}
                </div> */}
                {/* <div
                  class="sqs-video-icon"
                  tabindex="0"
                  role="button"
                  aria-label="Play"
                  id="yui_3_17_2_1_1681273877572_1919"
                  // style=""
                ></div> */}
              </div>
              <iframe
                allow="autoplay; fullscreen"
                scrolling="no"
                allowfullscreen="true"
                // src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F478IDDGH7CI%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D478IDDGH7CI&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F478IDDGH7CI%2Fhqdefault.jpg&amp;key=61d05c9d54e8455ea7a9677c366be814&amp;type=text%2Fhtml&amp;schema=youtube&amp;wmode=opaque&amp;autoplay=1&amp;enablejsapi=1"
                src={videoSrc}
                width="854"
                frameborder="0"
                title="YouTube embed"
                class="embedly-embed"
                height="480"
                id="yui_3_17_2_1_1681273877572_1672"
                //   style="opacity: 1;"
              ></iframe>
            </div>
          </div>
        </div>

        {/* <div class="intrinsic" id="yui_3_17_2_1_1681307686195_641">
          <div
            class="intrinsic-inner"
            //   style="padding-bottom: 56.2061%;"
            id="yui_3_17_2_1_1681307686195_640"
          >
            <div
              class="sqs-video-overlay"
              // style="opacity: 1; overflow: hidden;"
              id="yui_3_17_2_1_1681307686195_442"
            >
              <img
                data-load="false"
                data-src="https://images.squarespace-cdn.com/content/v1/54f7714de4b06065f8a0bfcd/1597428077742-01RX4AQ0VG9E2TTYVHCY/image-asset.jpeg"
                data-image-dimensions="480x360"
                data-image-focal-point="0.5,0.5"
                data-parent-ratio="1.8"
                //   style="left: 0px; top: -84.5px; width: 900px; height: 675px; position: relative;"
                class="loaded"
                data-image-resolution="2500w"
                src="https://images.squarespace-cdn.com/content/v1/54f7714de4b06065f8a0bfcd/1597428077742-01RX4AQ0VG9E2TTYVHCY/image-asset.jpeg?format=2500w"
              />
              <div class="sqs-video-opaque"> </div>
              <div
                class="sqs-video-icon"
                tabindex="0"
                role="button"
                aria-label="Play"
              ></div>
            </div>
          </div>
        </div> */}
      </div>
      <div class="sqs-spin"></div>
    </Link>
  )
}
