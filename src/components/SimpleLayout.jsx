import { Container } from '@/components/Container'
import clsx from 'clsx'

export function SimpleLayout({
  title,
  intro,
  className,
  containerMax,
  containerPadding,
  innerContainerClassName,
  children,
}) {
  console.log('SIMPLE LAYOUT containerPadding', containerPadding)
  return (
    <Container
      containerMax={containerMax}
      containerpadding={containerPadding}
      innerContainerClassName={innerContainerClassName}
      className="mt-16 sm:mt-14"
    >
      <header className={clsx(className && className, 'max-w-2xl')}>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      <div
        className={clsx(containerPadding ? containerPadding : 'mt-16 sm:mt-20')}
      >
        {children}
      </div>
    </Container>
  )
}
