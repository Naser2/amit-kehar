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
// import { Header } from '@/components/Header'
const languages = ['en', 'fr', 'hn']

const GoBack = () => {
  const router = useRouter()
  return (
    <>
      <div className="transparent sm:fro-gray-100 absolute right-0 z-[100] hidden h-[40px] w-[70%] w-full flex-col items-center  text-base sm:flex-row sm:bg-gradient-to-r sm:bg-gradient-to-r sm:from-gray-100  sm:to-gray-500 sm:to-gray-100 sm:py-0 md:text-lg lg:flex">
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

export default function ArtPage({ art }) {
  console.log('Art in Comp-->', art)
  return (
    <>
      {/* <PodcastsPageLayout className="hidden"> */}
      <Head>
        <title>{`${art.name} - Their Side`}</title>
        <meta name="description" content={art.description} />
      </Head>
      <article
        id="project-page"
        className="lg:border-t-0-16  border-t border-b  border-slate-500 md:border-t md:py-0 "
      >
        <GoBack />

        {/* <div id="podcast-bg" className=" -mt-10"></div> */}

        {/* <Container className={'mt-10  md:mt-20  md:py-0 '}> */}
        <PodcastsPageLayout contents={art} />
        {/* <ArtPageLayout content={art} /> */}
        {/* <div className="prose-slate prose mt-14 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5"></div> */}
        {/* </Container> */}
      </article>
      {/* </PodcastsPageLayout> */}
    </>
  )
}

export async function getStaticProps({ params }) {
  // const item = await getArt()

  // console.log('ARTS IN [ARTS].JSX -->]', item)
  console.log('PARAMS-IN-[EPISODE]', params.artId)
  // let paramsId = params.artId
  let item = await getArt(params.artId)

  console.log('ART-ITEM-IN-STATIC', item)

  return {
    props: {
      art: await getArt(params.artId),
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  let items = await getAllArts()
  // console.log('ARTS IN [ARTS].JSX -->]', items)

  return {
    paths: items.map(({ id }) => ({
      params: {
        artId: id.toString(),
      },
    })),
    fallback: 'blocking',
  }
}

const content = `   <div
id="podcast-aside-header-main"
className={clsx(
  'dark:black-2-bg  z-10 mx-auto grid  md:max-w-xl  lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 '
)}
>
<div id="podcast-aside-header-child" className="pb-4 pb-20 sm:px-0">
  <div
    id="podcast-aside-header-grand-child"
    className="min-h-100 min-w-2xl min-h-64 max-w-3xl rounded-md rounded-t  "
  >
    <div
      id="podcasts-aside-brwose-user"
      class="group relative relative my-0 flex-col overflow-hidden   text-center  hover:bg-gray-700 "
    >
      <div
        id="podcast-aside-header-bar"
        class="to-blue-500,z-[100] hidden items-center justify-center bg-gray-100 bg-gradient-to-r bg-gradient-to-r from-black from-sky-500 to-indigo-500 md:flex"
      >
        <div
          role="list"
          class=" mt-0.5 flex h-[40px] gap-10 pl-4 text-4xl text-base font-medium leading-7 leading-7 text-slate-100 text-slate-700 dark:text-slate-300 sm:gap-8 md:pl-6 md:text-left lg:gap-4 xl:pl-32 "
        />
      </div>
      <div
        id="podcast-aside-header-great-grand-child browse-episode"
        class="flex items-center justify-between gap-x-14 bg-black pt-10 sm:pt-0"
      >
        <span class="block flex-shrink-0 px-4 pt-10 ">
          <div class="mx-auto -ml-5 px-0 pt-1 pb-1 text-4xl font-bold leading-7 text-white dark:text-slate-100 md:max-w-2xl md:max-w-2xl">
            Browse
          </div>
          <div class="tmx-auto  pb-6 text-4xl font-bold leading-7 text-slate-500 dark:text-slate-300 md:max-w-2xl md:max-w-2xl">
            Episodes
          </div>
        </span>
        <span class="flex items-stretch justify-end space-x-12 rounded-t-[10px] px-2 py-1 md:left-auto md:m-1 md:m-1">
          <div
            id="podcast-logged-in-user"
            class="justify-end  text-base text-teal-400"
          >
            {/* <LoggedInUserIcon /> */}
          </div>
        </span>
      </div>
    </div>
  </div>

  <div
    id="podcast-intro"
    className="pt-10  text-center sm:px-6  sm:px-6 sm:pt-4 md:px-4 md:pt-14 lg:mt-2 lg:px-8 lg:pt-12 lg:text-left xl:px-12"
  >
    <p className="text-4xl font-bold text-slate-900 dark:text-slate-200 sm:text-3xl">
      <Link href="/">Content</Link>
    </p>
    <p className="mt-6 mb-10 px-6 text-lg  font-medium leading-8 text-slate-700 dark:text-slate-200/80 md:px-0 lg:mb-0">
      Conversations with the most tragically misunderstood people of our
      time. Lars Gaudin ia Doctor and a parttime respected podcast
      authors.
    </p>
    <div className="meta static">
      <h1 data-shrink-original-size="42">From Home to Anywhere</h1>

      <div class="body">
        <p
          class=""
          // style="white-space:pre-wrap;"
        >
          Every journey begins with a starting point. It is with the
          nurturing support of our home, our cocoon, that we can then
          excel and reach our fullest potential. From Home to Anywhere
          is an Art Installation that invites passers-by to step up to
          it and experience the cocoon for themselves, serving as a
          reminder that while our world is a big place, home begins with
          where you are.
        </p>
        <p
          class=""
          data-rte-preserve-empty="true"
          //   style="white-space:pre-wrap;"
        ></p>
        <p
          class=""
          // style="white-space:pre-wrap;"
        >
          Upon entering a nest, participants will be surrounded by birds
          fluttering overhead and invited to project their hopes and
          desires onto the birds flying above them, taking a moment to
          imagine how they would feel if they too could fly.
        </p>
        <p
          class=""
          data-rte-preserve-empty="true"
          //   style="white-space:pre-wrap;"
        ></p>
        <p
          class=""
          // style="white-space:pre-wrap;"
        >
          From Home to Anywhere encourages human interactions that are
          designed to inspire connection and to evoke the sentiment of
          possibility and hope. This body of work is particularly
          relevant today where we are displaced from our realities and
          caught up in our daily routines. Where our relentless pursuit
          of ‘success’ comes at the expense of forgotten aspirations and
          dreams. This Installation grounds participants in the current
          moment, giving them an escape from the chaos to rekindle and
          reimagine possibilities. The act of simply looking at these
          birds is a prompt for mindful reflection and presence.
        </p>
        <p
          class=""
          data-rte-preserve-empty="true"
          //   style="white-space:pre-wrap;"
        ></p>
        <p
          class=""
          // style="white-space:pre-wrap;"
        >
          Participants are encouraged to take a moment to reflect on
          possibilities and share their visions with the world using
          #fromhometoanywhere
        </p>
        <p
          class=""
          data-rte-preserve-empty="true"
          //   style="white-space:pre-wrap;"
        ></p>
        <p
          class=""
          //  style="white-space:pre-wrap;"
        >
          ______________________
        </p>
        <p
          class=""
          data-rte-preserve-empty="true"
          //   style="white-space:pre-wrap;"
        ></p>
        <p
          class=""
          // style="white-space:pre-wrap;"
        >
          Amit and Kanika collaboratively realize Installations that
          push the boundaries of their individual practices.They intend
          for all collaborations to embody themes of hope and unity.
        </p>
        <p
          class=""
          data-rte-preserve-empty="true"
          //   style="white-space:pre-wrap;"
        ></p>
        <p
          class=""

          // style="white-space:pre-wrap;"
        >
          This installation is produced in collaboration with Kelly
          Robinson and Navnith Ravindran.
        </p>
      </div>
      <div class="share-like">
        <span
          className="squarespace-social-buttons inline-style"
          data-system-data-id="5f36d182d280a4643947af82"
          data-asset-url="https://images.squarespace-cdn.com/content/v1/54f7714de4b06065f8a0bfcd/1580484822299-BJKYE2LSYA5UKN6XQUMF/image-asset.jpeg"
          data-record-type=""
          data-full-url="/from-home-to-anywhere"
          data-title="From Home to Anywhere"
        >
          <div
            id="social-yui_3_17_2_1_1681307686195_489"
            class="yui3-widget yui3-socialbutton"
          >
            <div
              id="yui_3_17_2_1_1681307686195_536"
              class="yui3-socialbutton-content"
            >
              <div class="ss-social-button-wrapper">
                <div class="ss-social-button">
                  <span class="ss-social-button-icon"></span>Share
                </div>
              </div>
              <div class="ss-social-list-wrapper">
                <div class="ss-social-button-list"></div>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
</div>

{/* <AboutSection className="hidden border-t border-slate-500 lg:-mt-32 lg:mb-20 lg:block " /> */}
<div className="relative md:hidden">
  <div
    className="z-[100] flex h-[40px] w-full flex-col items-center justify-center 
justify-center bg-gray-100 bg-gradient-to-r bg-gradient-to-r from-black from-sky-500 to-blue-500 to-indigo-500 py-2 text-base dark:bg-gray-700 sm:flex-row sm:py-0 md:text-lg lg:flex"
  >
    <div className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
      <div id="available-on" className="mr-4 inline-flex  w-full px-4 ">
        {/* <TinyWaveFormIcon
          colors={['fill-indigo-300', 'fill-blue-300']}
          className="mt-2 h-2.5 w-2.5"
        /> */}
        <span className="ml-2.5 flex text-white ">Also on</span>
      </div>
      <ul
        id="mobile-available-platforms"
        role="list"
        className="to-blue-500,z-[100] mt-0.4 flex flex h-[40px] w-full items-center justify-center gap-4  bg-gray-100 bg-gradient-to-r bg-gradient-to-r 
    from-black from-sky-500 to-indigo-500 px-4 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
      >
        {[
          ['Spotify', SpotifyIcon],
          ['Apple Podcast', ApplePodcastIcon],
          ['Overcast', OvercastIcon],
          ['RSS Feed', RSSIcon],
        ].map(([label, Icon]) => (
          <li key={label} className="flex">
            <Link
              href="/"
              className="group flex items-center"
              aria-label={label}
            >
              <Icon className="h-8 w-8 fill-white group-hover:fill-slate-600" />
              <span className="hidden sm:ml-3 sm:block">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
</div>`
