import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { getAllProjects } from '@/lib/getAllProjects'
import { Galery } from '@/components/Gallery'
import { SocialMedia } from '@/components/SocialMedia'
import { getAllArts } from '@/lib/getAllArts'
import { Title } from '@/components/Title'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function Photos({ artprojects }) {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {artprojects.map((image, imageIndex) => (
          <div
            key={image.name + imageIndex.id}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image.source}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles, allprojects, artprojects }) {
  return (
    <>
      <Head>
        <title>
          Amit Kehar Director, Cinematographer & Visual Media Artist
        </title>
        <meta
          name="description"
          content="I’m Amit Kehar, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Container className=" mt-20 sm:mt-44">
        <div className="mx-16 max-w-lg">
          <div
            className="text-left text-4xl  font-bold tracking-tight 
          text-zinc-800 dark:text-zinc-100 max-[700px]:hidden sm:text-5xl"
          >
            <div className="introTitle  mt-4">
              <h1
                className=" text-left dark:text-white"
                style={{ letterSpacing: '0.0740741em' }}
              >
                <span id="intro-title">The love of photograpgy</span>
              </h1>

              <h2 className="logo-subtitle text-left">
                Collection of great things
              </h2>
            </div>{' '}
            {/*  Amit Kehar Director, Cinematographer & Visual Media Artist */}
          </div>{' '}
        </div>{' '}
      </Container>
      <section className="section section-subhero ">
        <div className="full-width-tile-wrapper row">
          <div className="tile-wrapper tile-guided-tour large-12">
            <div id="guided-tour" className="guided-tour">
              <div className="row">
                <div className="background-container large-12  small-order-1">
                  {/* <figure className="sm:rounded-3xl sm:px-2"> */}
                  <div className="w-full flex-none " id="FEATURED VIDEO">
                    <Image
                      alt="Featured Project Image"
                      sizes="100vw"
                      src="/amit-index-images/gallery-img-17.jpg"
                      width="2658"
                      height="1660"
                      decoding="async"
                      className=" mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0 "
                      // loading="lazy"
                      style={{ color: 'transparent' }}
                      priority
                    />
                  </div>
                  {/* </figure> */}
                </div>
                <div className="content-container large-12 small-order-0">
                  <div className="content-wrapper sr-only sm:not-sr-only ">
                    <h2>
                      <span className="typography-subhero-eyebrow tile-copy large-12">
                        Tapis rouge a Paris
                      </span>
                      <span className="typography-subhero-headline tile-headline large-12">
                        La plus Belle <br />
                        Femme
                      </span>
                    </h2>
                    <div id="WHITE_BTN" className="guided-tours-triggers">
                      <Link
                        href="/featured"
                        aria-label="Watch the Guided Tour film."
                        id="film-guided-tour-chapters"
                        className="icon-wrapper film-link"
                        data-films-modal-link=""
                        role="button"
                        data-analytics-id="film-guided-tour-chapters"
                      >
                        <span className="icon-copy">Watch the video</span>
                        <span className="icon icon-after icon icon-playcircle"></span>
                      </Link>{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Galery
        galleryId={'Landing'}
        contents={allprojects}
        clicable={true}
        gap="gap-y-0"
        imgMarginY="-my-3"
        roundedMd={false}
      />
      <p className="text-md mx-4 mt-2 rounded-lg bg-slate-200 px-8 py-2 leading-6 text-slate-700 dark:text-gray-700 sm:px-0">
        Currently viewing [MVP] in native mobile screen as in in mobile app .
      </p>
      <Container>
        <div
          data-content-field="site-title"
          className=" relative mx-auto -mt-14  max-w-7xl items-center sm:-mt-0"
        >
          {/* <span id="site-title" className="dark:text-white"> */}
          <Title title="Art" />
          {/* </span> */}

          <h2 className="logo-subtitle text-center">
            Drawing and doodling have always been my passion
          </h2>
        </div>
      </Container>

      <Photos artprojects={artprojects} />

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          {/* <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div> */}
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            {/* <Resume /> */}
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
      allprojects: (await getAllProjects()).map(
        ({ component, ...meta }) => meta
      ),
      artprojects: (await getAllArts()).map(({ component, ...meta }) => meta),
    },
  }
}
