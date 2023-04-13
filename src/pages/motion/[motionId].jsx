import { useMemo } from 'react'
import Head from 'next/head'

// import { PodcastsPageLayout } from '@/components/PodcastComponents/PodcastsPageLayout.jsx'

import { Container } from '@/components/Container'

import { useRouter } from 'next/router'

// import { Eyebrow } from '@/components/siteMdxComponents'
import { ArtPageLayout } from '@/components/ArtPageLayout'
import { getAllMotions } from '@/lib/getAllMotions'
import { getMotion } from '@/lib/getMotion'

// import { Header } from '@/components/Header'
const languages = ['en', 'fr', 'hn']

const GoBack = () => {
  const router = useRouter()
  return (
    <>
      <div className="transparent z-[100] hidden h-[40px] w-full flex-col items-center text-base  sm:flex-row sm:bg-gradient-to-r sm:bg-gradient-to-r sm:from-cyan-500 sm:from-sky-500  sm:to-blue-500 sm:to-indigo-500 sm:py-0 md:text-lg lg:flex">
        <button
          onClick={() => router.back()}
          id="podcast-go-back"
          type="button"
          className="w-23 group absolute top-0 flex h-10 flex-shrink-0  items-center justify-center py-2 px-2 text-slate-100 hover:text-white focus:outline-none focus:ring dark:text-white lg:h-11 lg:w-24 "
          aria-label="go-back"
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className="h-10 w-10 rotate-180 font-bold  md:h-14 md:w-14"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
            ></path>
          </svg>
          Back
        </button>
      </div>
      <div
        id="episode-mobile-go-back-bar"
        className="transparent z-[100] w-full flex-row flex-col items-center rounded-full pt-10  text-base md:hidden"
      >
        <button
          onClick={() => router.back()}
          id="podcast-go-back"
          type="button"
          className="w-23 group absolute top-0 flex h-10 flex-shrink-0  items-center justify-center py-2 px-2 text-slate-900 hover:text-sky-500 focus:outline-none focus:ring dark:text-white lg:h-11 lg:w-24 "
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
    </>
  )
}

export default function MotionPage({ motion }) {
  console.log('Art in Comp-->', motion)
  return (
    <>
      {/* <PodcastsPageLayout className="hidden"> */}
      <Head>
        <title>{`${motion.title} - Their Side`}</title>
        <meta name="description" content={motion.description} />
      </Head>
      <article className="lg:border-t-0-16  border-t border-b  border-slate-500 md:border-t md:py-0 ">
        <GoBack />

        <div id="podcast-bg" className=" -mt-10"></div>

        <Container className={'mt-10  md:mt-20  md:py-0 '}>
          <hr className="my-12 border-gray-200" />
          <ArtPageLayout content={motion} />
          <div className="prose-slate prose mt-14 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5"></div>
        </Container>
      </article>
      {/* </PodcastsPageLayout> */}
    </>
  )
}

export async function getStaticProps({ params }) {
  console.log('PARAMS-IN-[EPISODE]', params.motionId)
  let paramsId = params.motionId
  let motion = await getMotion(paramsId)

  console.log('ART', motion)

  return {
    props: {
      motion,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  let motions = await getAllMotions()

  return {
    paths: motions.map(({ id }) => ({
      params: {
        motionId: id.toString(),
      },
    })),
    fallback: 'blocking',
  }
}
