import Link from 'next/link'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import clsx from 'clsx'

export const SocialMedia = ({ className, iconStyle }) => {
  return (
    <div
      className={clsx(
        className && className,
        'mx-8 flex gap-6 sm:-mt-6 sm:mb-10'
      )}
    >
      <SocialLink
        iconStyle={iconStyle}
        href="https://twitter.com/amitkehar"
        aria-label="Follow on Twitter"
        icon={TwitterIcon}
      />
      <SocialLink
        iconStyle={iconStyle}
        href="https://instagram.com/amitkehar"
        aria-label="Follow on Instagram"
        icon={InstagramIcon}
      />

      <SocialLink
        iconStyle={iconStyle}
        href="https://linkedin.com/amitkehar"
        aria-label="Follow on LinkedIn"
        icon={LinkedInIcon}
      />
    </div>
  )
}

function SocialLink({ icon: Icon, iconStyle, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon
        className={clsx(
          iconStyle && iconStyle,
          'fill-inactive-icon-500 group-hover:fill-inactive-icon-600 dark:fill-inactive-icon-300 dark:fill-inactive-icon-400 dark:group-hover:fill-inactive-icon-300 h-6 w-6 transition dark:fill-slate-300 dark:hover:fill-orange-400'
        )}
      />
    </Link>
  )
}
