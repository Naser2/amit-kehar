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
import Image from 'next/image'

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
      {/* <Image
        src="/stillsMain.png"
        alt=""
        sizes="(min-width: 640px) 18rem, 11rem"
        className="absolute inset-0 h-full w-full object-cover"
        height={2900}
        width={2700}
      /> */}
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
      <div id="wrap" className="my-14 px-2 sm:mt-32 ">
        {' '}
        <Title title="ART" />
        <h2 className="logo-subtitle  text-center">
          A catalogue of some of my art.{' '}
        </h2>
      </div>
      <Container
        containerPadding="mt-6 mb-20 xl:mt-0 "
        containerMax={'lg:max-w-10xl'}
        className={'xl:mt-34 mb-8 mt-14 sm:mx-4 sm:mt-20 xl:mx-24'}
      >
        <DirectorCredentials />
      </Container>

      <Galery
        contents={artprojects}
        clicable
        roundedMd
        mt="mx-2 md:mx-0  xl:mx-24"
        gap="gap-y-4 gap-x-2"
        imgMarginY="my-[-0.85rem] mx-0"
        mx="mx-0"
      />
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
