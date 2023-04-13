import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function ToggleICon() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div id="THEME_TOGGLE_ICON" className="mt-2 sm:mt-4">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-slate-400/80' : 'bg-slate-700'}
        relative inline-flex h-[25px] w-[52px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors 
              duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 
               sm:h-[18px] sm:w-[42px]`}
      >
        <span className="sr-only">Theme Toggle Button</span>
        <span
          aria-hidden="true"
          className={`${enabled ? ' translate-x-5' : 'translate-x-[-2px]'}
          pointer-events-none -mt-0.5 inline-block h-[24px] w-[24px]  transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out sm:-mt-1 sm:h-[21px] sm:w-[21px]`}
        />
      </Switch>
    </div>
  )
}
