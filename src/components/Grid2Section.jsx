// import personal from '@/images/personal.jpg'
import avatarImage from '../../public/amit-index-images/ami-profile.jpeg'
import { Container } from './Container'
import { SocialMedia } from './SocialMedia'
export function TwoGridSection({ right, left, socialMedia }) {
  const { title1, title2, content1, content2, content3, content4 } = right
  const imageContent = left
  console.log(
    'CONTENT',
    title1,
    title2,
    content1,
    content2,
    'RIGHT & LEFTY:',
    right,
    left
  )
  const artist = title2.split(' ')[0]
  const bio = title2.split(' ')[1]
  console.log('ARTIST', artist, 'BIO, ' + bio, 'ARtist b iop', title2)
  return (
    <div
      id="intro-personal"
      className="max-w-8xl grid grid-cols-1 gap-y-10 px-4 pt-20 sm:px-14 sm:py-36 sm:pt-32  min-[1190px]:grid-cols-2 xl:gap-x-0 xl:px-56 min-[1500px]:mx-[14px] 
      min-[1600px]:mx-[24px]"
    >
      {/* <img
        id="SM"
        alt=""
        loading="lazy"
        decoding="async"
        src={imageContent.props.src}
        className="md::w-[20rem] max-[766px]:hidden w-full  rounded-lg rounded-xl bg-slate-100 shadow-xl md:w-[30.1666666rem] lg:sr-only lg:ml-8 lg:block lg:flex-none"
      /> */}
      <Container>
        <div id="CONTENT-1" className="relative px-4 ">
          {/* <p className="headline typography-headline  large-centered max-w-2xl pb-4 dark:text-slate-100 sm:pb-10 sm:pl-4 ">
          {title1}
        </p> */}
          <p className="col-start-1 row-start-3 mt-4 max-w-lg py-3 text-xl font-bold text-slate-700 dark:text-slate-200 sm:pl-4">
            {title1}
            <br class="small" />
          </p>
          {/* <p className="headline typography-headline  large-centered max-w-2xl pb-4 dark:text-slate-100 sm:pb-10 sm:pl-4 ">
          {title2}
        </p> */}
          <p className="amits-paragraph col-start-1 row-start-3 mt-4 max-w-lg  pb-6 dark:text-slate-200 sm:pb-0 sm:pl-4">
            {content1}
          </p>{' '}
          <br class="small" />
          <p className="amits-paragraph col-start-1 row-start-3 mt-4 max-w-lg  pb-6 dark:text-slate-200 sm:pb-0 sm:pl-4">
            {content2}
          </p>
          <img
            id="SM"
            alt=""
            loading="lazy"
            decoding="async"
            src={imageContent.props.src}
            className="md::w-[20rem] w-full    bg-slate-100 shadow-xl sm:mb-14 sm:mt-10 md:w-[33.1666666rem] lg:sr-only lg:ml-8 lg:block lg:flex-none "
          />
          <p className="col-start-1 row-start-3 mt-14  max-w-lg text-xl font-bold text-slate-700 dark:text-slate-200 sm:mt-10  sm:pl-4">
            {artist}
            <span className="px-1"></span> {bio}
          </p>
          <p className="amits-paragraph col-start-1 row-start-3 mt-4 max-w-lg  dark:text-slate-200 sm:pl-4">
            {content3}
          </p>
          <br class="small" />
          <p className="amits-paragraph col-start-1 row-start-3 mt-4 max-w-lg  dark:text-slate-200 sm:pl-4">
            {content4}
          </p>
        </div>{' '}
      </Container>

      <div id="CONTENT-2" className="relative sm:mt-6">
        {/* <imageContent /> */}
        <img
          id="LG"
          alt=""
          loading="lazy"
          decoding="async"
          src={imageContent.props.src}
          className="sr-only absolute w-[14.1666666rem] w-full bg-slate-100 shadow-xl shadow-xl lg:ml-8  lg:mt-10  lg:block lg:flex-none min-[1190px]:not-sr-only min-[1400px]:w-[32.1666666rem] min-[1500px]:w-[37.1666666rem] 
          "
        />
        {socialMedia && (
          <div className="absolute mt-14 max-[1100px]:hidden">
            <SocialMedia />
          </div>
        )}
      </div>
      {socialMedia && (
        <div
          id="bottom-social-media"
          className="mx-auto  px-4 sm:px-8 lg:px-1   lg:px-8 min-[1099px]:hidden"
        >
          <SocialMedia />
        </div>
      )}
    </div>
  )
}
