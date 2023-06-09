import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllStills } from '@/lib/getAllStills'
import Image from 'next/image'
import clsx from 'clsx'
import { Title } from '@/components/Title'
import Link from 'next/link'
import { FancyImageClicabletitle } from '@/components/Gallery'
import { SocialMedia } from '@/components/SocialMedia'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Stills({ stills }) {
  return (
    <>
      <Head>
        <title>Speaking - Amit Kehar</title>
        <meta
          name="description"
          content="Photos I captured throughout this journey.."
        />
      </Head>

      <Title
        className="mt-24 sm:mt-14"
        title="STILLS"
        description=" One of my favorite ways to share love is to take a chance a capturing
        moments, where there’s so much more communication bandwidth than
        there is in writing. These are some stills."
      />
      <SimpleLayout
        containerPadding="mt-6 "
        containerMax={'lg:max-w-10xl sm:mx-14 xl:mx-18 '}
        className={'sm:mx-4 sm:mt-0 xl:-mt-4'}
        // containerPadding={'max-w-9xl lg:max-w-10xl my-24 sm:my-32 '}
        // title="Photos I captured throughout this journey.."
        // intro="One of my favorite ways to share love is to take a chace a capturing moments, where there’s so much more communication bandwidth than there is in writing. These are some stills."
      >
        {stills.map((still) => {
          return (
            <FancyImageClicabletitle
              key={still.source}
              item={still}
              name={still.name}
              cta={'View Page'}
              // cta={`View ${still.name}`}
            />
          )
        })}
        <div id="LANDING-SOCIAL-MEDIA" className="ml-4 mt-4">
          <SocialMedia
            className={'mx-4 mb-10 flex gap-x-2 gap-y-4'}
            iconStyle=""
          />
        </div>
        <div className="space-y-20">
          {/* 
            <Appearance
              href="#"
              title="In space, no one can watch you stream — until now"
              description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
              event="SysConf 2021"
              cta="Watch video"
            />
            <Appearance
              href="#"
              title="Lessons learned from our first product recall"
              description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
              event="Business of Startups 2020"
              cta="Watch video"
            />
          </SpeakingSection>
          <SpeakingSection title="Podcasts">
            <Appearance
              href="#"
              title="Using design as a competitive advantage"
              description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
              event="Encoding Design, July 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Bootstrapping an aerospace company to $17M ARR"
              description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
              event="The Escape Velocity Show, March 2022"
              cta="Listen to podcast"
            />*/}
          {/* <SpeakingSection title="Conferences">
            {' '}
            <Appearance
              href="#"
              title="Programming your company operating system"
              description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
              event="How They Work Radio, September 2021"
              cta="Listen to podcast"
            />
          </SpeakingSection> */}
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  // if (process.env.NODE_ENV === 'production') {
  //   await generateRssFeed()
  // }

  return {
    props: {
      stills: (await getAllStills()).map(({ component, ...meta }) => meta),
    },
  }
}
