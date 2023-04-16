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
import { GoBackArrow, Goback } from '@/components/Goback'
import { getAllStills } from '@/lib/getAllStills'
import { getStill } from '@/lib/getStill'
import { Galery } from '@/components/Gallery'
import { Title } from '@/components/Title'
import { DirectorCredentials } from '@/components/DirectorCredentials'
// import { Header } from '@/components/Header'
const languages = ['en', 'fr', 'hn']

export default function ArtPage({ still }) {
  console.log('Art in Comp-->', still)
  return (
    <>
      {/* <PodcastsPageLayout className="hidden"> */}
      <Head>
        <title>{`${still.name} - Their Side`}</title>
        <meta name="description" content={still.description} />
      </Head>
      <article
        id="project-page"
        className="lg:border-t-0-16   border-slate-500 md:py-0 "
      >
        {/* <GoBackArrow /> */}
        {/* CATEGORY -  */}
        <div id="still-title" className="mt-24 sm:mb-20 sm:mt-44">
          <Title
            title={still.name}
            // description={
            //   'A collection of stills a gathered over the last 10 years.'
            // }
          />
        </div>
        <div
          id="direct"
          className="float-r relative mx-auto -mb-6 pr-2 sm:-mb-0 sm:px-24"
        >
          <DirectorCredentials />
        </div>

        <Galery contents={still} clicable={false} gap="gay-x-0 gap-y-0" />
      </article>
    </>
  )
}

export async function getStaticProps({ params }) {
  // const item = await getArt()

  // console.log('ARTS IN [ARTS].JSX -->]', item)
  console.log('PARAMS-STILL]', params.stillId)
  // let paramsId = params.stillId
  let item = await getStill(params.stillId)

  console.log('STILL oON CLIENT SIDE', item)

  return {
    props: {
      still: await getStill(params.stillId),
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  let items = await getAllStills()
  // console.log('ARTS IN [ARTS].JSX -->]', items)

  return {
    paths: items.map(({ id }) => ({
      params: {
        stillId: id.toString(),
      },
    })),
    fallback: 'blocking',
  }
}
