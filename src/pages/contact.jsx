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
      {/* <Title title={'CONTACT'} /> */}
      {/* <SimpleLayout
        containerPadding={' items-center'}
        title="SAY HELLO"
        intro="Thank you for visiting my website and exploring my work. Whether you're interested in booking a photoshoot or a film project, I would love to hear from you. Don't hesitate to reach out with any questions, ideas or inquiries you may have. Let's collaborate and create something beautiful together.
         Please do not hesitate to get in touch. Use  my email below or reach on my social medias handles."
      /> */}

      <Container className="items-cente 4 s:mt-24 relative relative  mx-auto mt-20 mt-36 max-w-3xl items-center px-4 sm:mx-64  sm:mt-44 xl:mx-64 xl:mt-64">
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
        </h1>{' '}
        <h2>Have a great day! 📣🐢</h2>
        <div id="LANDING-SOCIAL-MEDIA" className="ml-4 mt-4">
          <SocialMedia
            className={'mx-4 mb-10 flex gap-x-2 gap-y-4'}
            iconStyle="h-14 w-14 sm:h-20 sm:w-20 sm:mt-8"
          />
        </div>
      </Container>
      <Container className="sm:mt-2"></Container>
    </>
  )
}
