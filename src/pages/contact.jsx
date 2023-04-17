import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { SocialMedia } from '@/components/SocialMedia'
import { Title } from '@/components/Title'

export default function Contact() {
  return (
    <>
      <Head>
        <title>You’re subscribed - Amit Kehar</title>
        <meta
          name="description"
          content="Thanks for subscribing to my newsletter."
        />
      </Head>

      {/* <Container className="items-center 4 s:mt-24 relative relative  mx-auto mt-20 mt-36 max-w-3xl items-center px-4 sm:mx-64  sm:mt-44 xl:mx-64 xl:mt-64"> */}
      <div
        id="aboput-image"
        className="max-w-10xl mt-24 grid  grid-cols-1  gap-y-10 px-4 pt-20 sm:px-14 sm:py-36 sm:pt-32  min-[1190px]:grid-cols-2 xl:gap-x-0 xl:px-56 min-[1500px]:mx-[14px] 
      min-[1600px]:mx-[24px]"
      >
        {/* <Container> */}
        <div id="CONTENT-1" className="relative px-4  ">
          <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            SAY HELLO 👋
          </h1>
          <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Thank you for visiting my website and exploring my work. Whether you
            &apost; re interested in booking a photoshoot or a film project, I
            would love to hear from you. Don &apost;t hesitate to reach out with
            any questions, ideas or inquiries you may have. Let&apost;s
            collaborate and create something beautiful together. Please do not
            hesitate to get in touch. Use my email below or reach on my social
            medias handles.
          </p>
          <h1 className=" relative mx-auto py-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100  sm:text-5xl">
            KEHARAMIT@GMAIL.COM
          </h1>
          <h2 className="text-lg text-zinc-800 dark:text-zinc-100 ">
            - Have a great day!<span className="px-2">📣</span>
            <span className="px-0">🐢</span>
          </h2>
          <SocialMedia
            className={'-ml-0.5 mb-10  flex gap-x-2 gap-y-4 pt-10 md:-ml-4'}
            iconStyle="h-14 w-14 sm:h-20 sm:w-20 sm:mt-8"
          />
        </div>
        {/* </Container> */}

        <div id="CONTENT-2" className="relative sm:mt-6">
          <div id="LANDING-SOCIAL-MEDIA" className="relative ml-4 mt-4 flex">
            <img
              id="LG"
              alt=""
              loading="lazy"
              decoding="async"
              src={'/amit-contact.jpeg'}
              className="sr-only absolute w-[14.1666666rem] w-full bg-slate-100 shadow-xl shadow-xl lg:ml-8  lg:mt-10  lg:block lg:flex-none min-[1190px]:not-sr-only min-[1400px]:w-[32.1666666rem] min-[1500px]:w-[37.1666666rem] 
          "
            />
          </div>{' '}
        </div>
      </div>
      {/* </Container> */}
    </>
  )
}
