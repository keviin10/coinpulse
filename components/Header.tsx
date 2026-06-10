'use client';

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const Header = () => {
    const pathname = usePathname();

    return (
        <header>
            <div className="main-container inner">
                <Link href="/">
                    <span className="flex items-center gap-2">
                        <Image src="/logo.svg" alt="CoinPulse logo" width={32} height={32} />
                        <h1 className="text-2xl font-bold">CoinPulse</h1>
                    </span>
                </Link>

                <nav>
                    <Link href="/" className={cn('nav-link' , {
                        'is-active': pathname === '/',
                        'is-home' : true
                    })}>Home</Link>

                    <p>Search Modal</p>

                    <Link href="/coins" className={cn('nav-link' , {
                        'is-active': pathname === '/coins',
                    })}>All Coins</Link>
                </nav>
            </div>
        </header>
    )
}
export default Header
