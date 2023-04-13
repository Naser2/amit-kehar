import clsx from 'clsx'
import Link from 'next/link'
// import Suitcase from './icons/Suitcase'
// import { Properties } from './mdx'
import istaImg1 from '../../public/amit-index-images/gallery-img-1.jpeg'
import istaImg2 from '../../public/amit-index-images/gallery-img-2.png'
import istaImg3 from '../../public/amit-index-images/gallery-img-3.jpeg'
import istaImg4 from '../../public/amit-index-images/gallery-img-4.png'
import istaImg5 from '../../public/amit-index-images/gallery-img-5.jpeg'
import istaImg6 from '../../public/amit-index-images/gallery-img-6.jpeg'
import istaImg7 from '../../public/amit-index-images/gallery-img-7.png'
import istaImg8 from '../../public/amit-index-images/gallery-img-8.png'
import istaImg9 from '../../public/amit-index-images/gallery-img-9.jpg'
import istaImg10 from '../../public/amit-index-images/gallery-img-10.jpeg'
import istaImg11 from '../../public/amit-index-images/gallery-img-11.jpg'
import istaImg12 from '../../public/amit-index-images/gallery-img-12.jpeg'
import istaImg13 from '../../public/amit-index-images/gallery-img-13.jpeg'
import istaImg14 from '../../public/amit-index-images/gallery-img-14.png'
///////
import istaImg15 from '../../public/amit-index-images/gallery-img-15.jpeg'
import istaImg16 from '../../public/amit-index-images/gallery-img-16.png'
import istaImg17 from '../../public/amit-index-images/gallery-img-17.jpg'
import istaImg18 from '../../public/amit-index-images/gallery-img-18.jpeg'
import istaImg19 from '../../public/amit-index-images/gallery-img-19.jpeg'
import istaImg20 from '../../public/amit-index-images/gallery-img-20.png'
import istaImg21 from '../../public/amit-index-images/gallery-img-21.jpeg'
import istaImg22 from '../../public/amit-index-images/gallery-img-22.png'
import istaImg23 from '../../public/amit-index-images/gallery-img-23.png'
import istaImg24 from '../../public/amit-index-images/gallery-img-24.jpeg'
import istaImg25 from '../../public/amit-index-images/gallery-img-25.jpeg'
import istaImgChelsea from '../../public/amit-index-images/gallery-Img-chelsea.jpeg'
import istaImgVelour from '../../public/amit-index-images/gallery-velour.png'
import istaImgBaby from '../../public/amit-index-images/gallery-baby.png'
import Image from 'next/image'
import { slugify } from '@/lib/slugify'
// import phoneImage from '@/images/projectImages/phone/iphone_personalization__4300bh645z62_large_2x.jpeg'
// import phoneVid from '@/images/projectImages/phone/iphone_video_cropd_gif.gif'
// import { LandingHeroTabs } from './indexComponents/LandingHeroTabs'
// import scrollToSection from '@/lib/scrollToSection'
// import { SocialMediaGalery } from './SocialMediaGalery'

export default function SocialMediaHandle({ className }) {
  return (
    <div
      id="social-media-handles"
      className=" px-auto xl:items-left relative -mt-5 flex flex items-center items-center items-center items-center gap-4 gap-4  lg:pt-1"
    >
      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="ml-2">
          <ul role="list" className=" flex items-center space-x-6">
            <li>
              <Link
                href="#"
                className="flex h-6 w-6 items-center justify-center text-blue-400 hover:text-gray-500"
              >
                <span className="sr-only">Share on Facebook</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex h-6 w-6 items-center justify-center text-orange-600 hover:text-gray-500"
              >
                <span className="sr-only">Share on Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex h-6 w-6 items-center justify-center text-sky-400 hover:text-gray-500"
              >
                <span className="sr-only">Share on Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </Link>
            </li>
            <li className=" flex">
              <Link
                className="hover:main-blue dark:hover:main-blue group flex text-sm font-medium text-zinc-800 transition dark:text-zinc-200"
                href="https/linkedin.com/nassersanou"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 flex-none fill-blue-500 transition group-hover:fill-blue-500"
                >
                  <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                </svg>
              </Link>
            </li>
          </ul>
        </span>
      </p>
    </div>
  )
}

export function WorkStatus({ ...props }) {
  const { position, date } = props
  return (
    <div className="mt-1 pt-1">
      <div className="flex items-start space-x-2">
        <div className="hidden md:flex ">
          {/* <Suitcase
          large={false}
          className="dark:secondary-gray-bg-color -mt-2 bg-white"
        /> */}
        </div>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
          ></path>
          <path
            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
            className="stroke-zinc-400 dark:stroke-zinc-500"
          ></path>
        </svg>
        <p className="-ml-10 text-sm font-medium text-gray-500">
          Works in
          <Link href="#" className="px-1 text-slate-100  dark:text-slate-100">
            {position}
          </Link>
          since <time dateTime="2020-08-25"> {date}</time>
        </p>
      </div>
    </div>
  )
}

export const Galery = ({ contents }, ...props) => {
  // const intagramImgs = [
  //   {
  //     ref: aboutRef,
  //     id: 1,
  //     name: 'National Gallery of Canada - Brand Film',
  //     href: '#',
  //     source: istaImg1,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: podcastRef,
  //     id: 2,
  //     name: 'My Glimpses of India',
  //     href: '#',
  //     source: istaImg2,
  //     imageAlt: 'this podcast was built.....',
  //   },
  //   {
  //     ref: projectsRef,
  //     id: 3,
  //     name: 'The Stillness Within You',
  //     href: '#',
  //     source: istaImg3,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: blogsRef,
  //     id: 4,
  //     name: 'The Canvas Of Our Minds',
  //     href: '#',
  //     source: istaImg4,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: learnToCode,
  //     id: 5,
  //     name: 'Piaget x Ryan Reynolds',
  //     href: '#',
  //     source: istaImg5,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 6,
  //     name: 'Food in Motion',
  //     href: '#',
  //     source: istaImg6,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 7,
  //     name: 'Dancing With The Sun',
  //     href: '#',
  //     source: istaImg7,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 8,
  //     name: 'Google Maps',
  //     href: '#',
  //     source: istaImg8,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 9,
  //     name: 'Lifestyle',
  //     href: '#',
  //     source: istaImg9,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 10,
  //     name: 'National Gallery of Canada',
  //     href: '#',
  //     source: istaImg10,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 11,
  //     name: 'Arfie Lalani',
  //     href: '#',
  //     source: istaImg11,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 12,
  //     name: 'McGill Redmen',
  //     href: '#',
  //     source: istaImg12,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 12,
  //     name: 'The Shopping Channel',
  //     href: '#',
  //     source: istaImg13,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 12,
  //     name: 'Knix',
  //     href: '#',
  //     source: istaImg14,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 12,
  //     name: 'Human Touch ',
  //     href: '#',
  //     source: istaImg15,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 12,
  //     name: 'Shoppers x Dundas Square ',
  //     href: '#',
  //     source: istaImg16,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 12,
  //     name: "Hudson's Bay Company",
  //     href: '#',
  //     source: istaImg17,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 12,
  //     name: 'Chelsea',
  //     href: '#',
  //     source: istaImgChelsea,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },

  //   {
  //     ref: socialsRef,
  //     id: 12,
  //     name: 'Garnier Olia',
  //     href: '#',
  //     source: istaImg18,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },

  //   // {
  //   //   ref: socialsRef,
  //   //   id: 12,
  //   //   name: "Hudson's Bay Company",
  //   //   href: '#',
  //   //   source: istaImg16,
  //   //   imageAlt:
  //   //     'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   // },
  //   {
  //     ref: socialsRef,
  //     id: 12,
  //     name: 'Col. Chris Hadfield',
  //     href: '#',
  //     source: istaImg19,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 12,
  //     name: "Makin' A Pizza + French Fries or Onion Rings | Rap Recipe Music Videos",
  //     href: '#',
  //     source: istaImg20,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 12,
  //     name: 'Music Video',
  //     href: '#',
  //     source: istaImg21,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 12,
  //     name: 'Velour Lashes',
  //     href: '#',
  //     source: istaImgVelour,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 12,
  //     name: 'Walmart',
  //     href: '#',
  //     source: istaImgBaby,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 12,
  //     name: 'ReThink Recovery',
  //     href: '#',
  //     source: istaImg23,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 12,
  //     name: 'Reel',
  //     href: '#',
  //     source: istaImg24,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 12,
  //     name: 'ReThink Recovery',
  //     href: '#',
  //     source: istaImg15,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 12,
  //     name: 'ReThink Winners',
  //     href: '#',
  //     source: istaImg22,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  //   {
  //     ref: socialsRef,
  //     id: 12,
  //     name: 'RW & CO - P.K Subban and Karl Subban',
  //     href: '#',
  //     source: istaImg25,
  //     imageAlt:
  //       'Black machined steel pen with hexagonal grip and small white logo at top.',
  //   },
  // ]

  // console.log('GaleryCUSTOMIZE BAN PROP', projectsRef)
  return (
    <>
      <section
        id="navigation-gallery"
        className="xl:mx-34 relative mt-8 pb-4  dark:pb-0 lg:mx-20 lg:pb-12 "
        aria-labelledby="gallery-heading"
      >
        {/* <LandingHeroTabs {...props}/> */}
        {/* <div>
          <Image
            className="h-32 w-full object-cover lg:h-48"
            src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
            alt=""
          />
        </div> */}
        <div className="max-w-10xl mx-3 lg:my-4 lg:mt-8  lg:pb-12 ">
          {/* <div
            className="wax-w-2xl absolute -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:left-1/2 md:ml-20 md:ml-36 lg:-inset-y-px"
            aria-hidden="true"
          ></div> */}
          {/* <div className="OTHE">OTHER CONTENT </div> */}
          <div role="list" className="">
            <ul
              role="list"
              className="xxl:grid-cols-3 grid grid-cols-1 gap-x-4 gap-y-0 sm:gap-y-4 sm:gap-x-6 md:gap-y-8 md:gap-y-4 md:gap-x-4 lg:grid-cols-2  xl:gap-x-4"
            >
              {contents.map((item) => {
                return (
                  <li key={item.id} className="relative">
                    <div
                      className={clsx(
                        item.current
                          ? 'ring-2 ring-indigo-500 ring-offset-2 sm:rounded-xl sm:rounded-3xl'
                          : 'focus-within:ring-2 focus-within:ring-slate-900 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 ',
                        'aspect-w-10 aspect-h-7 group block w-full overflow-hidden '
                      )}
                    >
                      <Image
                        src={item.source}
                        alt=""
                        className={clsx(
                          item.current ? '' : 'group-hover:opacity-100',
                          'pointer-events-none mt-2 h-full w-full  bg-slate-100 object-cover sm:mt-10 sm:aspect-[1216/940] md:mt-0 lg:aspect-[1516/940]  lg:flex-none'
                        )}
                        sizes="100vw"
                        width="1358"
                        height="1860"
                        decoding="async"
                        loading="lazy"
                        id={item.id}
                        style={{ color: 'transparent' }}
                      />
                      {/* aspect-[4/3]  */}
                      <Link
                        // href="/"
                        href={`/${item.type + '/' + item.id}`}
                        type="button"
                        className="controlled-blur min-h-12 absolute top-1/2  left-1/2 block flex inline-flex min-w-[77%] min-w-[88%] -translate-x-1/2 -translate-y-1/2 transform items-center
                         rounded-sm px-2 text-sm font-bold 
                          tracking-tight text-white opacity-10 hover:text-white 
                          hover:opacity-100 group-hover:opacity-100 dark:text-black 
                          md:text-transparent"
                        id="TITLE_LINK_MOBILE_BTN"
                      >
                        <h2
                          id="yui_3_17_2_1_1681192592262_2502"
                          className="w-[80%] text-white"
                        >
                          {item.name}
                        </h2>

                        <span
                          className="w-[20%] bg-white text-black"
                          id="WHITE BTN MOBILE ONLY"
                        >
                          <h2
                            className="button"
                            href="/105/media/us/iphone/2022/99276d09-ab06-4d62-93b1-37c306902932/films/guided-tour/iphone-guided-tour-tpl-us-2022_16x9.m3u8"
                            role="button"
                          >
                            <span className="">View</span>
                            {props.video && (
                              <span
                                id="PLAY ICON"
                                className="icon icon-after icon icon-playcircle"
                              ></span>
                            )}
                          </h2>{' '}
                        </span>
                      </Link>
                    </div>

                    <p className="pointer-events-none block text-sm font-medium text-gray-500">
                      {item.description}
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
