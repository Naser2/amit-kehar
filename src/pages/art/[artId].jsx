import { useMemo } from 'react'
import Head from 'next/head'

// import { PodcastsPageLayout } from '@/components/PodcastComponents/PodcastsPageLayout.jsx'

import { Container } from '@/components/Container'

import { useRouter } from 'next/router'

import Image from 'next/image'

import { ArtPageLayout } from '@/components/ArtPageLayout'
import { getArt } from '@/lib/getArt'
import { getMotion } from '@/lib/getMotion'
import { PodcastsPageLayout } from '@/components/PodcastsPageLayout'
import { getAllArts } from '@/lib/getAllArts'
import { GoBackArrow } from '@/components/Goback'
import { ProjectLayout } from '@/components/ProjectLayout'
// import { Header } from '@/components/Header'
const languages = ['en', 'fr', 'hn']

export default function ArtPage({ art }) {
  console.log('Art in ART CLIENT', art)
  return (
    <>
      {/* <PodcastsPageLayout className="hidden"> */}
      <Head>
        <title>{`${art.name} - Their Side`}</title>
        <meta name="description" content={art.description} />
      </Head>
      <article
        id="project-page"
        className="lg:border-t-0-16   border-slate-500 md:py-0 "
      >
        <GoBackArrow />

        {/* <div id="podcast-bg" className=" -mt-10"></div> */}

        {/* <Container className={'mt-10  md:mt-20  md:py-0 '}> */}
        <PodcastsPageLayout contents={art} />
        {/* <ProjectLayout project={art} /> */}
        {/* <ArtPageLayout content={art} /> */}
        {/* <div className="prose-slate prose mt-14 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5"></div> */}
        {/* </Container> */}
      </article>
      {/* </PodcastsPageLayout> */}
    </>
  )
}

export async function getStaticProps({ params }) {
  console.log('PARAMS-IN-[ART]', params.artId)

  let item = await getArt(params.artId)

  return {
    props: {
      art: await getArt(params.artId),
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  let items = await getAllArts()

  return {
    paths: items.map(({ id }) => ({
      params: {
        artId: id.toString(),
      },
    })),
    fallback: 'blocking',
  }
}
