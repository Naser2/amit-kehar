import Image from 'next/image'
// import nocontent from '@/images/noContent.webp'
import clsx from 'clsx'
export default function NoContent({ message }) {
  return (
    <div
      id="nocontent-main-WRAPPER"
      className={clsx(message.theme ?? 'marigold relative')}
    >
      <div className="nocontent-image grid grid-cols-1 sm:grid-cols-2">
        <div className="mx-2 mt-10 flex items-center py-2 sm:sr-only sm:mt-44">
          <h1 className="nocontent-code dark:text-slate-400 ">
            {message.code}
          </h1>
          <h2 className="nocontent-text-h1 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl">
            {message.text}
          </h2>
        </div>
        {/* <div class="mt-10 flex items-center sm:sr-only sm:mt-44">
          <h1 class="inline-block text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl">
            Oooops -This Page is undergoing development. Come back soon.
          </h1>
        </div> */}
        <Image
          src={'/noContent.webp'}
          alt="No Content"
          height={400}
          width={500}
        />
        <div>
          <div className="sr-only mt-10 flex items-center sm:not-sr-only sm:mt-44">
            <h1 className="nocontent-code ">{message.code}</h1>
            <h2 className="nocontent-text-h1 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl">
              {message.text}
            </h2>
          </div>
          {/* <div class="sr-only mt-10 flex items-center sm:not-sr-only sm:mt-44">
            <h1 class="inline-block text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl">
              Oooops -This Page is undergoing development. Come back soon.
            </h1>
          </div> */}
        </div>
      </div>
    </div>
  )
}
