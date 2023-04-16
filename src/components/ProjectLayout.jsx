// import personal from '@/images/personal.jpg'
import Image from 'next/image'
import YoutubeVideo from './YoutubeVideo'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { useWindowDimensions } from '@/lib/useWindowDimension.js'
import { useEffect, useMemo } from 'react'
import { PageAside } from './PageAside'
import { GoBackArrow } from './Goback'
export function ProjectLayout({ project, hosts, aspect, defaultAspect }) {
  return (
    <>
      <GoBackArrow />
      {/* <PageAside /> */}
      <div id="PROJECT_LAYOUT" className="page relative">
        <div
          id="PROJECT GRID"
          className="max-w-10xl block gap-y-10  pt-6 sm:px-14 sm:py-36 sm:pt-32 md:pt-20 lg:flex lg:grid lg:grid-cols-3 xl:px-36"
        >
          <div
            id="PROJECT_TEXT"
            className="meta relative px-5 "
            // lg:max-w-[25%] lg:max-w-[40%] xl:max-w-[65%] w-[100%]
          >
            <h1
              data-shrink-original-size="42"
              className="max-w-2xl pb-4 dark:text-slate-100 sm:pb-10 sm:pl-4 "
            >
              {project.name}
            </h1>
            <h2 className=" mt-4 max-w-lg text-xl font-bold text-slate-700 dark:text-slate-200 sm:pl-4">
              {project.description}
            </h2>
            <p
              className=" mt-4 max-w-lg text-lg text-slate-700 dark:text-slate-200 sm:pl-4"
              id={`${project.name}-description`}
              aria-hidden="false"
              // className="text-sm font-medium text-zinc-900 group-aria-selected:text-emerald-500 dark:text-white"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          </div>
          <div
            id="PROJECT_MEDIA"
            className="meta flex-block lg:cols-span- relative sm:-mt-10 sm:mb-10 md:-mt-16 md:px-0 xl:mb-64"
            //  sm:max-w-[600%] lg:max-w-[75%]
          >
            <ProjectMedias
              mediaContent={project.medias}
              aspect={aspect}
              defaultAspect={defaultAspect}
            />{' '}
            <div id="hidden small-foolter" className="hidden">
              <PageAside />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function ProjectMedias({ mediaContent, hosts, classN, aspect, defaultAspect }) {
  const router = useRouter()
  console.log('yyyy', mediaContent)
  return (
    <div
      id="PAGE-MEDIA-ASIDE-CONTENT"
      className={clsx(' dark::bg-black lg:grid-cols-start  relative lg:pb-44 ')}
    >
      {/* dark::bg-black relative h-full bg-slate-50 lg:fixed  lg:right-0 lg:flex lg:items-start lg:overflow-y-auto lg:pb-44 */}
      <div className="gallery-media-item z-10 xl:mt-20">
        <>{ArticleMedias(mediaContent)}</>
      </div>
    </div>
  )
}

const ArticleMedias = (mediaContent, aspect, defaultAspect) => {
  // const Dimension = useEffect(() => {
  let { width, height } = useWindowDimensions()
  console.log('MEDIA  PROVIDER=', mediaContent)
  //  }
  const defaultAspectRatio = 'aspect-[953/882] w-creen/2 max-w-[853px]'
  return (
    <div className=" dark:bg-dark sm:-mt-436 relative -mt-14 -mt-6 rounded-md pb-20 pt-4 md:-mt-0  lg:mb-64 lg:w-[500px] xl:-mt-24 xl:mb-64 xl:px-4">
      {mediaContent.map((media) => {
        return media.type !== 'video' ? (
          <div
            key={media.source}
            className={clsx(`w-${width}`, 'relative  md:pt-6')}
          >
            <Image
              // iframe
              className={clsx(
                aspect && aspect,
                defaultAspect && defaultAspectRatio,
                media.defaultAspect
                  ? 'deafultAspect overflow-hiddden px-2'
                  : 'aspect-[285/166] md:mx-4 md:aspect-[953/498]',
                'md:w-creen/2 is-zoomed  relative z-20 mx-0.5 my-4    rounded-md shadow-xl  shadow-black/5 ring-slate-900/5 dark:backdrop-blur  md:max-w-[788px] md:px-0  xl:my-14'
              )}
              // lg:w-[600px]lg:my-10  min-w-[340px] min-[1267px]:min-w-[736px]
              // sm:min-w-[640px]
              // className="gallery-item relative z-20 -mb-36 aspect-[953/882] w-full max-w-[853px] rounded-xl bg-slate-200 shadow-xl shadow-black/5 ring-1 ring-slate-900/5 sm:-mb-16 lg:-mb-8 xl:-mb-16"
              id={`${media.title}-_IMAGE-${media.title}`}
              // className="w-full "
              src={media.source}
              // src={media.source}
              alt=""
              height={1900}
              width={1900}
              // sizes="(width:140px) 4rem, ( max-width: 1024px) 20rem, (width: 140px) 16rem, 12rem"
              priority
            />
            {/* <div className="insetx-0 absolute rounded-md ring-1 ring-inset ring-black/10 dark:sm:rounded-xl dark:lg:rounded-2xl" /> */}
          </div>
        ) : (
          <>
            {media.provider && media.provider === 'vimeo' ? (
              <div
                id="YOUTUBE_VIDEO"
                className={clsx(
                  defaultAspectRatio,
                  'relative mx-auto  min-h-[326px] min-w-[200px] min-w-[300px] rounded-md px-2 pt-4  sm:mb-14 md:mb-14  lg:mb-24 lg:max-h-[600px] lg:max-w-[800]'
                )}
              >
                {/* <img
                  dataLoad="false"
                  data-src="https://images.squarespace-cdn.com/content/v1/54f7714de4b06065f8a0bfcd/1549894044362-48VZ634FW28NDHX8CLUU/image-asset.jpeg"
                  data-image-dimensions="640x360"
                  data-image-focal-point="0.5,0.5"
                  data-parent-ratio="1.8"
                  style={{
                    left: '0px',
                    top: '-0.03125px',
                    width: '681px',
                    height: '383.062px',
                    position: 'relative',
                    opacity: dataLoad ? 0 : 1,
                  }}
                  className="loaded"
                  data-image-resolution="2500w"
                  src="https://images.squarespace-cdn.com/content/v1/54f7714de4b06065f8a0bfcd/1549894044362-48VZ634FW28NDHX8CLUU/image-asset.jpeg?format=2500w"
                ></img>
                <div
                  className="sqs-video-icon"
                  tabindex="0"
                  role="button"
                  aria-label="Play"
                  id="yui_3_17_2_1_1681670889054_4501"
                  style={{ opacity: 1 }}
                  // style=""
                ></div> */}
                <iframe
                  allow="utoplay: fullscreen"
                  allowfullscreen=""
                  src={media.source}
                  width="320"
                  height="180"
                  frameborder="0"
                  title="The Stillness Within You"
                  thumbnail="https://images.squarespace-cdn.com/content/v1/54f7714de4b06065f8a0bfcd/1549894044362-48VZ634FW28NDHX8CLUU/image-asset.jpeg"
                  placeholder="https://images.squarespace-cdn.com/content/v1/54f7714de4b06065f8a0bfcd/1538581105184-M12M7SO3XFD4985BJA2M/image-asset.jpeg"
                  id={media.title}
                  // style={{
                  //   opacity: 1,
                  //   minWidth: '361px',
                  //   minHeight: '293.062px',
                  //   width: '681px',
                  //   height: '383.062px',
                  // }}
                ></iframe>
              </div>
            ) : (
              <div
                id={`${media.title}-ARTICLE_VIDEO`}
                className="relative mx-auto mb-6  mt-4 block max-w-[840px] sm:mt-10 lg:mt-14 lg:w-auto xl:mt-10 "
                // className="relative mx-auto mx-8 block overflow-hidden bg-black shadow-xl shadow-slate-200 dark:sm:rounded-xl lg:w-auto dark:lg:rounded-2xl"
                // aria-label="gallery-media-item"
              >
                <YoutubeVideo videoID={media.source} />

                {/* <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-black/10 dark:sm:rounded-xl dark:lg:rounded-2xl" /> */}
              </div>
            )}
          </>
        )
      })}
    </div>
  )
}
{
  /* <img
          alt=""
          loading="lazy"
          decoding="async"
          src={personal.src}
          className="absolute rounded-lg shadow-xl"
        /> */
}
