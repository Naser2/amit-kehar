import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import React from 'react'
import ReactPlayer from 'react-player'
import { Title } from '@/components/Title'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Amit Kehar</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <Title
        title="FEATURED"
        // description=" One of my favorite ways to share love is to take a chace a capturing
        // moments, where there’s so much more communication bandwidth than
        // there is in writing. These are some stills."
      />
      <SimpleLayout
        title="FEATURED"
        // intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ReactPlayer url="https://vimeo.com/355571737" />
          {/* Https://vimeo.com/3155182  */}
          <ToolsSection title="Workstation">
            <Tool title="Hudson's Bay Company">
              A series of video that I shot, directed and edited for Hudson’s
              Bay Company for their spring campaign.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
