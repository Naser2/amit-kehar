import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArts } from '@/lib/getAllArts'
import { ArtPageLayout } from '@/components/ArtPageLayout'
import { Galery } from '@/components/Gallery'
import Link from 'next/link'
import { Title } from '@/components/Title'
import { DirectorCredentials } from '@/components/DirectorCredentials'
import { Container } from '@/components/Container'

export default function Art({ artprojects }) {
  return (
    <>
      <Head>
        <title>ART - Amit Kehar</title>
        <meta
          name="description"
          content="Amit Kehar art's Director videographer and filmaker and artist"
        />
      </Head>
      {/* <div class="mx-auto  mt-20 max-w-7xl px-6   md:px-14  lg:px-44  xl:px-24">
        <div class="relative px-4 sm:px-8 lg:px-12">
          <div class=" mx-auto max-w-2xl lg:max-w-5xl  ">
            <div data-content-field="site-title" className="siteTitle ">
              <h1
                className=" dark:text-white"
                style={{ letterSpacing: '0.0740741em' }}
              >
                <Link href="/">
                  <span id="site-title">ART</span>
                </Link>
              </h1>

              <h2 className="logo-subtitle text-left">
                Colletion of great things
              </h2>
            </div>{' '}
          </div>
        </div>
      </div> */}
      <div id="wrap" className="my-24 sm:my-32 ">
        {' '}
        <Title title="ART" />
        <h2 className="logo-subtitle  text-center">
          A catalogue of some of my art.{' '}
        </h2>
      </div>
      <Container
        containerMax={'lg:max-w-10xl'}
        className={'xl:mt-34 mt-14 sm:mx-4 sm:mt-20'}
      >
        {' '}
        <DirectorCredentials />
      </Container>

      <Galery contents={artprojects} clicable roundedMd />
    </>
  )
}

export async function getStaticProps() {
  // if (process.env.NODE_ENV === 'production') {
  //   await generateRssFeed()
  // }

  return {
    props: {
      artprojects: (await getAllArts()).map(({ component, ...meta }) => meta),
    },
  }
}
