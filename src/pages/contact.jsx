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
      <Title title={'CONTACT'} />
      <SimpleLayout
        containerPadding={
          'xl:mx-44 px-4 items-cente 4 relative relative mx-auto mx-auto mt-20 max-w-7xl max-w-7xl  items-center'
        }
        title="SAY HELLO"
        intro="Thank you for visiting my website and exploring my work. Whether you're interested in booking a photoshoot or a film project, I would love to hear from you. Don't hesitate to reach out with any questions, ideas or inquiries you may have. Let's collaborate and create something beautiful together.
         Please do not hesitate to get in touch. Use  my email below or reach on my social medias handles."
      />

      <Container className="items-cente 4  relative relative mx-auto mt-20  max-w-7xl max-w-7xl items-center px-4  xl:mx-44">
        {' '}
        <h1 className=" relative mx-auto py-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100  sm:text-5xl">
          KEHARAMIT@GMAIL.COM
        </h1>{' '}
        <SocialMedia
          iconStyle="h-14 w-14 sm:h-20 sm:w-20 sm:mt-8"
          className="sm:-ml-4"
        />
      </Container>
      <Container className="sm:mt-2"></Container>
    </>
  )
}
