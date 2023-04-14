import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArts } from '@/lib/getAllArts'
import { ArtPageLayout } from '@/components/ArtPageLayout'
import { Galery } from '@/components/Gallery'
import Link from 'next/link'

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
      <div class="mx-auto  mt-20 max-w-7xl px-6   md:px-14  lg:px-44  xl:px-24">
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
            {/* <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              ART
            </h1> */}
          </div>
        </div>
      </div>
      {/* <Galery contents={artprojects} clicable /> */}
      <Galery contents={artprojects} clicable />
      {/* {artprojects.map((project) => (
        <div key={project.id} className="flex flex-col sm:flex-row">
          <div className="order-2 mt-6 sm:mt-0 sm:ml-16">
            <h3 className="text-sm font-medium text-gray-900">
              {project.title}
            </h3>
            <h1>{project.title}</h1>
            <div
              className="mt-3 space-y-6 text-sm text-gray-600  "
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          </div>

          <div className="order-1 flex items-center sm:flex-col sm:items-start">
            <div className="ml-4 sm:ml-0 sm:mt-4">
              <div className="mt-2 flex items-center">
                <></>
              </div>
            </div>
          </div>
        </div>
      ))} */}
      {/* <SimpleLayout
        title="Welcome to my art page, where I get to share my personal hobby with you."
        intro="Photography and filmmaking are my professions, but drawing and doodling have always been my passion. This page is a glimpse into my creative mind and the ideas that I explore outside of my commercial work. I hope that my art will inspire you or make you smile, and that you'll find something that speaks to you. Art is an essential part of my life, and I believe that it can connect us all. Thank you for taking the time to explore my doodles and drawings, and feel free to reach out if you have any questions or comments. Let's appreciate the beauty of art together."
      >
        <div className="mx-4 space-y-20">
          <SpeakingSection title="Conferences">
            <Appearance
              href="#"
              title="In space, no one can watch you stream — until now"
              description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
              event="SysConf 2021"
              cta="Watch video"
            />
       
      </SimpleLayout> */}
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
