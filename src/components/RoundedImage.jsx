import Image from 'next/image'

export const RoundedImage = () => {
  return (
    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
      <Image src={project.logo} alt="" className="h-8 w-8" unoptimized />
    </div>
  )
}
