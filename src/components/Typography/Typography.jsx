import React from 'react'

const Typography = ({
  variant = 'span',
  component,
  className: customClassName,
  children,
}) => {
  let Component = 'span'
  let className = ''

  switch (variant) {
    case 'h1':
      Component = component || 'h1'
      className =
        'font-Plus-Jakarta-Sans text-gray-900 dark:text-white text-[2rem] md:text-[4rem] font-bold leading-[1.2] md:leading-none'
      break
    case 'h2':
      Component = component || 'h2'
      className =
        'font-Plus-Jakarta-Sans text-gray-900 dark:text-white text-2xl md:text-[2rem] font-bold md:leading-tight'
      break
    case 'h3':
      Component = component || 'h3'
      className =
        'font-montserrat text-gray-900 dark:text-white font-semibold text-lg'
      break
    case 'h4':
      Component = component || 'h4'
      className =
        'font-montserrat font-bold text-[0.8125rem] md:text-base leading-loose-light md:leading-loose-light'
      break
    case 'p':
      Component = component || 'p'
      className =
        'font-montserrat text-gray-900 dark:text-white text-base md:text-lg leading-loose-light md:leading-loose-strong'
      break
    case 'p.link':
      Component = component || 'p'
      className =
        'font-montserrat hover:text-purple-800 font-medium text-gray-800 dark:text-white text-base md:text-base leading-loose-light md:leading-loose-strong'
      break
    case 'p.medium':
      Component = component || 'p'
      className =
        'font-montserrat font-medium text-[0.8125rem] text-gray-800 dark:text-white md:text-sm leading-loose-strong md:leading-loose-strong'
      break
    case 'p.small':
      Component = component || 'p'
      className =
        'font-montserrat font-medium text-gray-800 dark:text-white text-xs leading-loose-light'
      break
    case 'span':
      Component = component || 'span'
      className = ''
      break
    case 'label':
      Component = component || 'label'
      className = 'font-montserrat text-[0.8125rem] md:text-sm block'
      break
    default:
      Component = component || 'span'
      className = ''
  }

  const combinedClassNames =
    (customClassName ? `${className} ${customClassName}` : className) ||
    undefined

  return React.createElement(
    Component,
    { className: combinedClassNames },
    children
  )
}

export default Typography
