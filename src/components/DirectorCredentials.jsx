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
          <span id="site-title" className="w-4 dark:text-slate-300/80">
            Amit
            <br />
          </span>
        </Link>
        <Link href="/" className="justify-end dark:text-slate-300/80">
          <span id="site-title">Kehar</span>
        </Link>
      </h1>

      <h2 className="logo-subtitle sm:w-64">Visual Media Artist </h2>
      <div id="page-social-edia" className="ml-8 justify-end sm:ml-6 sm:mt-8">
        <SocialMedia />
      </div>
    </div>
  )
}
