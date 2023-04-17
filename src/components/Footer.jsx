import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-pink-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

// if Path is not or include 'art/ or motion/ home or Contac set position fixed or hide
export function Footer() {
  return (
    <footer className="relative mt-32 mt-32 xl:mt-64 xl:mt-64">
      <Container.Outer>
        <div className="xl:mt-54 border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40 lg:mt-44">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/motion">Motion</NavLink>
                <NavLink href="/still">Stills</NavLink>
                <NavLink href="/art">Art</NavLink>
                <NavLink href="/music">Videos</NavLink>
                <NavLink href="/contact">Contacts</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Amit Kehar. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
