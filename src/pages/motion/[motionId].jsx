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
import { PageAside } from '@/components/PageAside'

// import { Header } from '@/components/Header'
const languages = ['en', 'fr', 'hn']

export default function MotionPage({ motion }) {
  console.log('Art in Comp-->', motion)
  return (
    <>
      <Head>
        <title>{`${motion.title} - Their Side`}</title>
        <meta name="description" content={motion.description} />
      </Head>
      <article className="relative">
        <ProjectLayout project={motion} />
        <PageAside />
      </article>
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
