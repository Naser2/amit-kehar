import { forwardRef } from 'react'
import clsx from 'clsx'

const OuterContainer = forwardRef(function OuterContainer(
  { innerContainerClassName, className, children, containerPadding, ...props },

  ref
) {
  console.log('OUTER_containerPadding', containerPadding)

  return (
    <div id="OUTER_CONTAINER" ref={ref} className={clsx('sm:px-8')} {...props}>
      <div
        className={clsx(
          containerPadding && containerPadding,
          innerContainerClassName ? innerContainerClassName : 'max-w-7xl',
          'mx-auto  lg:px-8'
        )}
      >
        {children}
      </div>
    </div>
  )
})

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, innerContainerClassName, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div
        className={clsx(
          innerContainerClassName
            ? innerContainerClassName
            : ' max-w-2xl lg:max-w-5xl',
          'mx-auto  '
        )}
      >
        {children}
      </div>
    </div>
  )
})

export const Container = forwardRef(function Container(
  { children, className, containerPadding, innerContainerClassName, ...props },
  ref
) {
  console.log('CONTAINER_MAIN -containerPadding', containerPadding)
  return (
    <OuterContainer
      containerPadding={containerPadding}
      ref={ref}
      {...props}
      innerContainerClassName={innerContainerClassName}
    >
      <InnerContainer innerContainerClassName={innerContainerClassName}>
        {children}
      </InnerContainer>
    </OuterContainer>
  )
})

Container.Outer = OuterContainer
Container.Inner = InnerContainer
