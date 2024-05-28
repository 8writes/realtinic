/** @format */

const PricingBox = ({ children, variant }) => {
  let className = ''

  switch (variant) {
    case 'white':
      className =
        'grid hover:shadow-lg shadow-green-500/40 text-center transition ease-in-out delay-150 lg:hover:scale-100 duration-300 cursor-pointer scale-95  gap-10 bg-white border-2 border-green-200/75 rounded-3xl px-14 md:px-16 py-10 '
      break
    case 'purple':
      className =
        'grid hover:shadow-xl shadow-purple-500/40 text-center transition ease-in-out delay-150 lg:hover:scale-100 duration-300 cursor-pointer scale-95 gap-10 bg-white border-2 border-purple-500/75 rounded-3xl px-14  md:px-16 py-10 '
      break
    default:
      break
  }

  return <section className={className}>{children}</section>
}

export default PricingBox
