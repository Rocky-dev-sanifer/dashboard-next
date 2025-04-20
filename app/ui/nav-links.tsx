"use client"
import React from 'react';
import Link from 'next/link';
import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const NavLinks = () => {

    const pathname = usePathname();

    const links = [
        {name: "Accueil", href: "/dashboard", icon: UserGroupIcon},
        {name: "Factures", href: "/dashboard/invoices", icon: DocumentDuplicateIcon},
        {name: "Clients", href: "/dashboard/customers", icon: HomeIcon}
    ]

  return (
    <>
    {
        links.map((link) => {
            const LinkIcon = link.icon;
            const isActive = pathname.startsWith(link.href);

            return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={pathname === link.href ? `bg-sky-100 text-blue-600 flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3` : 'navlink flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'}
                    >
                    {/* icône */}
                    <LinkIcon className='w-6'/>
                    <p className="hidden md:block">{link.name}</p>
            </Link>
            )
        })
    }
      

    </>
  )
}

export default NavLinks
