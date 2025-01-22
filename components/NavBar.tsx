"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
				isSticky
					? "bg-white/70 backdrop-blur-md shadow-sm py-2"
					: "bg-transparent py-4"
			}`}
		>
			<div className="container mx-auto px-[140px] ">
				<div className="flex justify-between items-center">
					<Link href="/" className="text-2xl font-bold text-blue-600">
						<Image
							src="/images/TRIOE_LOGO.png"
							alt="logo"
							width={35}
							height={35}
						/>
					</Link>
					<ul className="flex space-x-4">
						<li>
							<Link href="/" className="text-gray-700 hover:text-primary">
								Home
							</Link>
						</li>
					</ul>
					<div></div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
