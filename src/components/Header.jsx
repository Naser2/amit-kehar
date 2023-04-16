import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import avatarImage from '../../public/amit-avatar.jpg'

import { Fragment, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ToggleICon from './ToggleIcon'
import { SocialMedia } from './SocialMedia'

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  )
}

const transparent =
  'group flex items-center rounded-sm px-4 py-2 text-sm font-medium    backdrop-blur dark:text-zinc-200  dark:hover:ring-white/20'
function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Popover.Button className="group  flex items-center rounded-sm px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg   backdrop-blur dark:text-zinc-200  dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="border-slate-700 text-sm font-medium text-zinc-600 dark:border dark:border-zinc-100 dark:text-zinc-400 dark:ring-1">
                Menu
              </h2>
            </div>
            <nav id="mobile-navigation" className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem href="/">Home</MobileNavItem>
                <MobileNavItem href="/motion">Motion</MobileNavItem>
                <MobileNavItem href="/art">Art</MobileNavItem>
                <MobileNavItem href="/still">Stills</MobileNavItem>
                <MobileNavItem href="/contact">Contact</MobileNavItem>{' '}
                <MobileNavItem href="/about">About</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem({ href, children }) {
  let isActive = useRouter().pathname === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-pink-500 dark:text-teal-400'
            : 'hover:text-pink-500 dark:hover:text-teal-400'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(props) {
  return (
    <nav {...props} id="desktop-navigation">
      <ul className="flex rounded-sm bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-400/5 backdrop-blur   hover:shadow-zinc-900/5 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/motion">Motion</NavItem>
        <NavItem href="/art">Art</NavItem>
        <NavItem href="/still">Stills</NavItem>
        <NavItem href="/contact">Contact</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/music">Music</NavItem>
        <NavItem href="/">Home</NavItem>
      </ul>
    </nav>
  )
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <div
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full px-0.5 py-0 backdrop-blur transition 
     "
      onClick={toggleMode}
    >
      <ToggleICon />
    </div>
  )
}

function clamp(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

function AvatarContainer({ className, homePage, ...props }) {
  return (
    <div
      className={clsx(
        className,
        !homePage ? 'h-10 w-10 ' : 'h-[6.5rem] w-[6.5rem] ',
        'rounded-full bg-transparent p-0.5 '
      )}
      {...props}
    />
  )
}

function Avatar({ large = false, className, homePage, ...props }) {
  return (
    <>
      <div
        aria-label="Home"
        className={clsx(
          className,
          'group pointer-events-auto mt-6 flex  hover:animate-bounce  sm:mt-0'
        )}
        {...props}
      >
        <Image
          id="AVATAR-LG"
          src={'/amit-avatar.jpg'}
          alt=""
          height={58}
          width={58}
          sizes={large ? '20rem' : '10.25rem'}
          className={clsx(
            !homePage ? 'h-20 w-20' : 'h-18 w-18',
            'rounded-full  object-cover  max-[400px]:hidden',
            large ? 'sm:h-16 sm:w-16' : 'h-22 w-22'
          )}
          priority
          as="image"
          // placeholder="blur"
          blurDataURL={'/amit-avatar.jpg'}
        />
        <Image
          id="AVATAR-MOBILE"
          src={'/amit-avatar.jpg'}
          alt=""
          height={19}
          width={19}
          sizes={large ? '6rem' : '4.25rem'}
          className={clsx(
            !homePage ? 'w-17 h-17' : 'h-[5.7rem] w-[5.5rem] ',
            '-mt-8 rounded-full  bg-transparent object-cover    min-[400px]:hidden'
          )}
          placeholder="/amit-avatar.jpg'"
          blurDataURL={'/amit-avatar.jpg'}
          priority
        />

        {!homePage && (
          <div
            href="/"
            id="DIRECTOR CREDENTIALS_MOBILE"
            className={clsx(
              transparent,
              'sm:text-5x flex-block -mt-9 flex min-w-[20px] flex-nowrap text-4xl font-bold tracking-tight  text-zinc-800 dark:text-zinc-100'
            )}
          >
            <div id="MOBILE-CRED" className="siteTile-SM min-[400px]:hidden">
              <div
                className="siteTitle-SM  -mt-5  px-4 text-slate-800"
                data-shrink-original-size="27"
                style={{ letterSpacing: '0.0740741em' }}
              >
                <h1 id="NAME-SM" className="flex text-left dark:text-slate-50">
                  Amit
                </h1>
                <br />
                <h1 id="NAME-SM" className="flex text-left dark:text-slate-50">
                  Kehar
                </h1>
              </div>
              <div
                id="director-position-mobile"
                className="logo-subtitle-SM -mt-1 w-64 "
              >
                <h2 className=" dark:text-slate-200/70">
                  Director, Cinematographer
                </h2>

                <h2 className="-mt-5  text-left text-base text-slate-500 dark:text-slate-200/70">
                  &amp; Visual Media Artist{' '}
                </h2>
              </div>
            </div>{' '}
            <DesktopTitle />
          </div>
        )}
      </div>
      {/* <div id="header-social-media" className="-ml-4 -mt-6">
        <SocialMedia
          className={'mx-4 flex gap-y-4 gap-x-2 sm:-mt-6 sm:mb-10'}
          iconStyle=""
        />
      </div> */}
    </>
  )
}

const DesktopTitle = () => {
  return (
    <div
      href="/"
      id="DIRECTOR_NAME_DESKTOP"
      className="inline=-flextext-4xl mt-20 flex font-bold text-zinc-800 dark:text-zinc-100 max-[400px]:hidden"
    >
      <div
        data-content-field="DESTKOOP TYITLE"
        className="director-title-Desktop  mt-6  px-4 text-slate-800"
      >
        <h1
          id="NAME-DESKTOP"
          className="flex min-w-[250px] text-left dark:text-slate-50"
        >
          Amit Kehar
        </h1>

        <div id="DESCKTOP CREDENTIALS" className="site-title mt-0">
          <h2 class="logo-subtitle">Director, Cinematographer</h2>
          <h2 class="logo-subtitle">&amp; Visual Media Artist</h2>
        </div>

        <div className="-ml-8 mt-8">
          <SocialMedia className={'flex gap-x-2 gap-y-4'} iconStyle="" />
        </div>
      </div>
      <Link
        href="/"
        // to={homePage}
        aria-label="Home"
        className={clsx(
          // className,
          'mt-6 hidden hover:flex group-hover:relative'
        )}
      >
        <p className="text-md mx-4 mt-2 rounded-lg bg-slate-200 px-8 py-2 leading-6 text-slate-700 dark:text-gray-700 sm:px-0">
          Go to home page ? .
        </p>
      </Link>
    </div>
  )
}
export function Header() {
  let isHomePage = useRouter().pathname === '/'

  let headerRef = useRef()
  let avatarRef = useRef()
  let isInitial = useRef(true)

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0
    let upDelay = 64

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      let { top, height } = headerRef.current.getBoundingClientRect()
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      )

      if (isInitial.current) {
        setProperty('--header-position', 'sticky')
      }

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed')
        removeProperty('--header-top')
        removeProperty('--avatar-top')
      } else {
        removeProperty('--header-inner-position')
        setProperty('--header-top', '0px')
        setProperty('--avatar-top', '0px')
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) {
        console.log('IS-HOMEPAGE0???', isHomePage)
        return
      }

      let fromScale = 1
      let toScale = 36 / 64
      let fromX = 0
      let toX = 2 / 16

      let scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
      scale = clamp(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = clamp(x, fromX, toX)

      setProperty(
        '--avatar-image-transform',
        `translate3d(${x}rem, 0, 0) scale(${scale})`
      )

      let borderScale = 1 / (toScale / scale)
      let borderX = (-toX + x) * borderScale
      let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

      setProperty('--avatar-border-transform', borderTransform)
      setProperty('--avatar-border-opacity', scale === toScale ? 1 : 0)
    }

    function updateStyles() {
      updateHeaderStyles()
      updateAvatarStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: true })
    window.addEventListener('resize', updateStyles)

    return () => {
      window.removeEventListener('scroll', updateStyles, { passive: true })
      window.removeEventListener('resize', updateStyles)
    }
  }, [isHomePage])

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-col"
        style={{
          height: 'var(--header-height)',
          marginBottom: 'var(--header-mb)',
        }}
      >
        {isHomePage && (
          <>
            <div
              ref={avatarRef}
              className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
            />
            <Container
              className="top-0 order-last -mb-3 pt-3"
              style={{ position: 'var(--header-position)' }}
            >
              <div
                className="top-[var(--avatar-top,theme(spacing.3))] w-full"
                style={{ position: 'var(--header-inner-position)' }}
              >
                <div className="relative">
                  <AvatarContainer
                    className="absolute left-0 top-3 origin-left transition-opacity"
                    style={{
                      opacity: 'var(--avatar-border-opacity, 0)',
                      transform: 'var(--avatar-border-transform)',
                    }}
                  />
                  <Avatar
                    large
                    className="sm:h-22 h-17 w-17 block origin-left sm:w-20"
                    style={{ transform: 'var(--avatar-image-transform)' }}
                  />
                </div>
              </div>
            </Container>
          </>
        )}
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6 "
          style={{ position: 'var(--header-position)' }}
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={{ position: 'var(--header-inner-position)' }}
          >
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                {!isHomePage && (
                  <AvatarContainer homePage={!isHomePage}>
                    <Avatar homePage={!isHomePage} />
                  </AvatarContainer>
                )}
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && <div style={{ height: 'var(--content-offset)' }} />}
    </>
  )
}
