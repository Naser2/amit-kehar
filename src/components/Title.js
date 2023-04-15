import clsx from 'clsx'
import Link from 'next/link'

export const Title = ({ title, description, className }) => {
  return (
    <div
      className={clsx(
        className && className,
        'meta-paddings  items-cente 4 relative relative mx-auto mx-auto mt-20 max-w-7xl max-w-7xl  items-center'
      )}
    >
      <h1
        className="h1-custom mb-4 text-center dark:text-slate-200 "
        style={{ letterSpacing: '0.0740741em' }}
      >
        <span id="site-title">{title}</span>
      </h1>
      <h2 className="subtitle px-6 text-center dark:text-slate-300">
        {description}
      </h2>
    </div>
  )
}
// sm:px-20  lg:px-4
