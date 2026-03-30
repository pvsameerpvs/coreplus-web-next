'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 min-h-[80px] flex items-center"
        style={{
          background: 'rgba(15, 44, 89, 0.95)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
        }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-core.png"
              alt="Core Plus Logo"
              width={244}
              height={60}
              className="h-auto w-[170px] sm:w-[200px] lg:w-[244px]"
              style={{ borderRadius: '10px' }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1 ml-auto">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? 'text-white bg-white/10'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2 ml-4"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 lg:hidden flex flex-col transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ background: '#0F2C59' }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/20">
          <div className="flex items-center gap-3">
            <Image src="/images/logo-core.png" alt="Core Plus Logo" width={96} height={24} style={{ borderRadius: '5px' }} />
          </div>
          <button onClick={() => setMobileOpen(false)} className="text-white/80 hover:text-white" aria-label="Close menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center py-3 px-2 text-lg border-b border-white/10 transition-colors duration-200 ${
                isActive(link.href) ? 'text-white font-bold' : 'text-white/75 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-4 py-4 text-center text-white/40 text-sm">
          &copy; 2025 CorePlus. All rights reserved.
        </div>
      </div>
    </>
  );
}
