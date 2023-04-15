import Head from 'next/head'

// import { Card } from '@/components/Card'
// import { Section } from '@/components/Section'
// import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllMotions } from '@/lib/getAllMotions'
// import { ArtPageLayout } from '@/components/ArtPageLayout'
import { Galery } from '@/components/Gallery'
import { Container } from '@/components/Container'
import Link from 'next/link'
import { SocialMedia } from '@/components/SocialMedia'
import { DirectorCredentials } from '@/components/DirectorCredentials'

export default function Art({ motions }) {
  return (
    <>
      <Head>
        <title>MOTION - Amit Kehar</title>
        <meta
          name="description"
          content="Amit Kehar art's Director videographer and filmaker and artist"
        />
      </Head>
      <Container
        containerMax={'lg:max-w-10xl'}
        className={'max-w-8xl  xl:mt-34  mt-14 sm:mx-4 sm:mt-20'}
      >
        <div className="meta mx-4  my-24 text-center  sm:my-32  sm:px-20 ">
          <h1 style={{ fontSize: '37px' }} className="dark:text-white">
            MOTIONS
          </h1>
          <h2 class="logo-subtitle">A collection of motions</h2>

          <div class="share-like">
            <span
              class="squarespace-social-buttons inline-style"
              data-system-data-id="5c3f565f4d7a9c53a5c8575a"
              data-asset-url="https://images.squarespace-cdn.com/content/v1/54f7714de4b06065f8a0bfcd/1547654389418-2RGWJAIWR1DQNAKHLG5K/10454227_10152184343750938_1474450006593014404_o.jpg"
              data-record-type=""
              data-full-url="/doodlesillustrations"
              data-title="Doodles/Illustrations"
            >
              <div
                id="social-yui_3_17_2_1_1681400427717_594"
                class="yui3-widget yui3-socialbutton"
              >
                <div
                  id="yui_3_17_2_1_1681400427717_615"
                  class="yui3-socialbutton-content"
                >
                  <div class="ss-social-button-wrapper">
                    <div class="ss-social-button">
                      <span className="ss-social-button-icon dark:text-slate-100"></span>
                      Share
                    </div>
                  </div>
                  <div class="ss-social-list-wrapper">
                    <div class="ss-social-button-list"></div>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>{' '}
        <DirectorCredentials />
      </Container>
      <Galery contents={motions} clicable />
    </>
  )
}

export async function getStaticProps() {
  // if (process.env.NODE_ENV === 'production') {
  //   await generateRssFeed()
  // }

  return {
    props: {
      motions: (await getAllMotions()).map(({ component, ...meta }) => meta),
    },
  }
}
