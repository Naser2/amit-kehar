import { useMemo } from 'react'
import Head from 'next/head'

// import { PodcastsPageLayout } from '@/components/PodcastComponents/PodcastsPageLayout.jsx'

import { Container } from '@/components/Container'

import { useRouter } from 'next/router'

// import { Eyebrow } from '@/components/siteMdxComponents'
import { ArtPageLayout } from '@/components/ArtPageLayout'
import { getAllMotions } from '@/lib/getAllMotions'
import { getMotion } from '@/lib/getMotion'
import { PodcastsPageLayout } from '@/components/PodcastsPageLayout'
import { ProjectLayout } from '@/components/ProjectLayout'
import { GoBackArrow, GobackRound } from '@/components/Goback'

// import { Header } from '@/components/Header'
const languages = ['en', 'fr', 'hn']

export default function MotionPage({ motion }) {
  console.log('Art in Comp-->', motion)
  return (
    <>
      {/* <PodcastsPageLayout className="hidden"> */}
      <Head>
        <title>{`${motion.title} - Their Side`}</title>
        <meta name="description" content={motion.description} />
      </Head>
      <article className="lg:border-t-0-16  border-b border-t  border-slate-500 md:border-t md:py-0 ">
        <GoBackArrow />
        <GobackRound />

        <div id="podcast-bg" className=" -mt-10"></div>

        <Container className={'mt-10  md:mt-20  md:py-0 '}>
          <hr className="b my-12" />
          <ProjectLayout project={motion} />
          <div className="prose-slate prose mt-14 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5"></div>
        </Container>
      </article>
      {/* </PodcastsPageLayout> */}
    </>
  )
}

export async function getStaticProps({ params }) {
  // console.log('PARAMS-IN-[MOTION]', params.motionId)
  let paramsId = params.motionId
  let motion = await getMotion(paramsId)

  console.log('MMOTIOB', motion)

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
