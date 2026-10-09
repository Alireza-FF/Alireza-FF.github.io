'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '/', label: 'خانه' },
  { href: '/about', label: 'درباره من' },
  { href: '/projects', label: 'نمونه‌کار' },
  { href: '/blog', label: 'وبلاگ' },
  { href: '/contact', label: 'تماس' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="font-extrabold text-xl text-blue-600 dark:text-blue-400">
          علیرضا فرامرزی
        </Link>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="md:hidden w-10 h-10 border border-gray-200 dark:border-slate-700 rounded-xl"
            onClick={() => setOpen(!open)}
            aria-label="منو"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}