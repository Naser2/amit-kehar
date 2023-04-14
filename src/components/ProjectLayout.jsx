// import personal from '@/images/personal.jpg'
import Image from 'next/image'
import YoutubeVideo from './YoutubeVideo'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { useWindowDimensions } from '@/lib/useWindowDimension.js'
import { useEffect, useMemo } from 'react'
export function ProjectLayout({ project }) {
  return (
    <div
      id="intro-personal"
      className="max-w-8xl grid grid-cols-1 gap-y-10 px-4 pt-20 sm:px-14 sm:py-36 sm:pt-32  lg:grid-cols-2 xl:px-20"
    >
      <div id="personal-text" className="relative px-4 ">
        <p className="headline typography-headline  large-centered max-w-2xl pb-4 dark:text-slate-100 sm:pb-10 sm:pl-4 ">
          {project.name}
        </p>
        <p className="col-start-1 row-start-3 mt-4 max-w-lg text-xl font-bold text-slate-700 dark:text-slate-200 sm:pl-4">
          {project.description}
        </p>
        <p
          className="col-start-1 row-start-3 mt-4 max-w-lg text-lg text-slate-700 dark:text-slate-200 sm:pl-4"
          id={`${project.name}-description`}
          aria-hidden="true"
          // className="text-sm font-medium text-zinc-900 group-aria-selected:text-emerald-500 dark:text-white"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      </div>
      <div id="personal-image" className="relative">
        {/* MEDIA */}
        <ProjectMedias mediaContent={project.medias} />
      </div>
    </div>
  )
}

function ProjectMedias({ mediaContent, hosts, classN, aspect, defaultAspect }) {
  const router = useRouter()
  console.log('yyyy', mediaContent)
  return (
    <div
      id="PAGE-MEDIA-ASIDE-CONTENT"
      className={clsx(
        ' dark::bg-black lg:grid-cols-start  relative h-full lg:fixed lg:overflow-y-auto lg:pb-44 '
      )}
    >
      {/* dark::bg-black relative h-full bg-slate-50 lg:fixed  lg:right-0 lg:flex lg:items-start lg:overflow-y-auto lg:pb-44 */}
      <div className="gallery-media-item z-10 mt-20">
        <>{ArticleMedias(mediaContent)}</>
      </div>
    </div>
  )
}

const ArticleMedias = (mediaContent, aspect, defaultAspect) => {
  // const Dimension = useEffect(() => {
  let { width, height } = useWindowDimensions()

  //   if (width >= 300) {
  //     return width
  //   }
  //   if (width >= 300 && height >= 800) {
  //     return width
  //   }
  //   if (width >= 700) {
  //     return width
  //   }
  //   if (width >= 900) {
  //     return width / 2
  //   }
  //   if (width >= 1200) {
  //     return width / 2.1
  //   }
  // })
  // let { width, height } = useWindowDimensions
  //  if(winde){
  //   const width = hasWindow ? window.innerWidth : null
  //   const height = hasWindow ? window.innerHeight : null
  //  }
  const defaultAspectRatio = 'aspect-[953/882] w-creen/2 max-w-[853px]'
  return (
    <div className="xl:mb-90 relative -mt-10  lg:-mt-20 lg:mb-64">
      {mediaContent.map((media) => {
        return media.type !== 'video' ? (
          <div key={media.source} className={clsx(`w-${width}`, 'relative')}>
            <Image
              className={clsx(
                aspect && aspect,
                defaultAspect && defaultAspectRatio,
                'is-zoomed relative  z-20 my-4  rounded-xl shadow-xl shadow-black/5 ring-slate-900/5 lg:my-10 xl:my-14'
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
            className="overflow-hiddenlg:w-auto relative mx-auto block max-w-[640px] sm:mb-10 "
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
{
  /* <img
          alt=""
          loading="lazy"
          decoding="async"
          src={personal.src}
          className="absolute rounded-lg shadow-xl"
        /> */
}
