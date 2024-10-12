"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const pathName = usePathname();
    const router = useRouter();

    const links = [
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Dashboard",
            path: "/dashboard"
        },
        {
            title: "Blogs",
            path: "/blogs"
        },
        {
            title: "Categories",
            path: "/categories"
        },
    ]

    const handleLogin = () => {
        router.push("/login")
    }

    if (pathName.includes("dashboard")) {
        return (
            <div className='bg-green-400'>
                Dashboard layout
            </div>
        )
    }

    return (
        <nav className="flex justify-between items-center py-7 px-5">
            <h1 className="text-2xl font-semibold">Next Hero</h1>
            <ul className="flex gap-3 justify-center">
                {
                    links.map(link => <Link
                        key={link.path}
                        href={link.path}
                        className={`${pathName === link.path ? "bg-slate-500 text-white px-5 py-1 rounded-lg" : "bg-black text-white px-5 py-1 rounded-lg"}`}
                    >
                        {link.title}
                    </Link>)
                }
            </ul>
            <button onClick={handleLogin} className="bg-black text-white py-2 px-5 rounded-lg">Login</button>
        </nav>
    );
};

export default Navbar;