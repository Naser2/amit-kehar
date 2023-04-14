import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import avatarImage from '../../public/amit-index-images/ami-profile.jpeg'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import { TwoGridSection } from '@/components/Grid2Section'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

const title1 = 'ARTIST BIO'
const content1 =
  ' Amit Kehar’s entire artistic practice is dedicated to the art of capturing and creating emotion. As a motion director and cinematographer he brings others into worlds that tease the imagination and capture the reality of environments they otherwise would not experience.'
const title2 = 'ARTIST STATEMENT'
const content2 =
  ' Whether working with Academy Award-winning actors or undiscovered local craft-makers, Amit’s focus is to bring emotions into light, and bring into perspective the motive, as well as the storytelling to the audience. Amit holds a Bachelor in Communications, specializing in Cinema and Production. '
const content3 =
  'Each project is a journey which starts with light, the most important element in creating an image. Before I walk on set there is only darkness and everything lacks a sense of purpose and meaning. Once light falls into place, the most ordinary things come to life, and the images shine in the viewers’ eyes.  Light becomes a language that writes itself in the form of images in movement. '
const content4 =
  'Light travels through boundaries, and has the ability to touch us at the deepest level. I use this language to convey my ideas, vision and purpose, irrespective of environmental conditions, whether I am shooting with natural light, or in a controlled studio. With each project, my primary goal is to convey a vision to myself and then work towards revealing that vision to others. I strive to do justice to what I see, never compromising, to tell stories that are compelling and capture my audiences.'

const artistImage = (
  <img
    alt=""
    loading="lazy"
    decoding="async"
    src={avatarImage.src}
    className="absolute rounded-lg shadow-xl"
  />
)
export default function About() {
  return (
    <>
      <Head>
        <title>About - Amit Kehar</title>
        <meta
          name="description"
          content="I’m Amit Kehar. I live in New York City, where I design the future."
        />
      </Head>
      <div class="mx-auto -mb-20 mt-20 max-w-7xl px-6   md:px-14  lg:px-44  xl:px-24">
        <div class="relative px-4 sm:px-8 lg:px-12">
          <div class=" mx-auto max-w-2xl lg:max-w-5xl  ">
            <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              ABOUT
            </h1>
          </div>
        </div>
      </div>
      <TwoGridSection
        right={{
          title1: title1,
          content1: content1,
          title2: title2,
          content2: content2,
          content3,
          content4,
        }}
        left={artistImage}
        socialMedia
      />
    </>
  )
}
