import Link from 'next/link'

export const Title = ({ title, description }) => {
  return (
    <div className="meta-paddings items-cente 4 relative relative mx-auto mx-auto max-w-7xl max-w-7xl  items-center">
      <h1
        className="h1-custom text-center dark:text-slate-200"
        style={{ letterSpacing: '0.0740741em' }}
      >
        <Link href="/">
          <span id="site-title">{title}</span>
        </Link>
      </h1>
      <h2 className="logo-subtitle px-6 text-center dark:text-slate-300">
        {description}
      </h2>
    </div>
  )
}
// sm:px-20  lg:px-4
