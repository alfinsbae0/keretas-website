'use client';

import { Disclosure, Button, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Blogs", href: "#" },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const pathname = usePathname();

    return (
        <Disclosure as="nav" className="bg-white relative">
            {({ open }) => (
                <>
                    <div className="w-auto mx-4 md:mx-14 py-5">
                        <div className="relative flex h-20 items-center justify-between">
                            <div className="py-8 h-36 w-36">
                                <Link href="/">
                                    <img
                                        src="https://cdn.prod.website-files.com/65ae58f365086a5b55b30a7d/664a75fdd1514bc81cfd52c5_Keretas%20Logo%20Type%20Tagline.png"
                                        alt="Logo"
                                        className="cursor-pointer"
                                    />
                                </Link>
                            </div>

                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-10 items-center">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                pathname === item.href
                                                    ? 'text-green-700 font-bold'
                                                    : 'text-black hover:text-green-600 transition-colors',
                                                'px-2 py-2 text-lg'
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <Button className="rounded-full bg-green-700 text-white h-10 px-6 hover:bg-green-800 transition-colors">
                                        Let's Talk
                                    </Button>
                                </div>
                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:text-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-inset z-50">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <X className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <AlignJustify className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40">
                        <div className="space-y-1 px-6 py-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        pathname === item.href
                                            ? ' text-green-700 font-bold'
                                            : 'text-black hover:bg-gray-50 hover:text-green-600',
                                        'block rounded-md px-3 py-2 text-md transition-colors'
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="px-3 py-2 pt-4">
                                <Button className="w-full rounded-full bg-green-700 text-white h-10 hover:bg-green-800 transition-colors">
                                    Let's Talk
                                </Button>
                            </div>
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}
