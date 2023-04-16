const { default: Link } = require('next/link')
const { SocialMedia } = require('./SocialMedia')

export const DirectorCredentials = () => {
  return (
    <div
      data-content-field="page-credentials"
      className="page-credentials ml-auto mt-10 w-48 pr-2 sm:pr-4 "
    >
      <h1
        className="justify-end "
        data-shrink-original-size="27"
        style={{ letterSpacing: ' 0.0740741em' }}
      >
        <Link href="/" className="justify-end">
          <span id="site-title" className="dark:text-slate-250 w-4">
            Amit
            <br />
          </span>
        </Link>
        <Link href="/" className="dark:text-slate-250 justify-end">
          <span id="site-title">Kehar</span>
        </Link>
      </h1>

      <h2 className="logo-subtitle  sm:w-64">Visual Media Artist </h2>
      <div id="page-social-edia" className="ml-16 justify-end sm:ml-14 sm:mt-8">
        <SocialMedia gap="gap-2" />
      </div>
    </div>
  )
}
