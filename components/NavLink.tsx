'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={clsx(
        'font-medium py-1.5 px-5 rounded-full transition',
        {
          'bg-white text-[#1c2552] font-semibold shadow-sm hover:shadow-md': isActive,
          'text-white hover:text-gray-200': !isActive,
        }
      )}
    >
      {children}
    </Link>
  )
}
