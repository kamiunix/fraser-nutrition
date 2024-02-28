import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "../../../common/Button";
import {ContactButton} from "../../../common/EmailButton";

const Navbar = ({ toggle }: { toggle: () => void }) => {
    const email = 'sandra@frasernutrition.com'
    const subject = 'General Inquiry'
    const body = ''
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <>
            <div className="w-full h-14 bg-emerald-800 sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <Logo />
                        <button
                            type="button"
                            className="inline-flex items-center md:hidden"
                            onClick={toggle}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#fff"
                                    d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                                />
                            </svg>
                        </button>
                        <ul className="hidden md:flex gap-x-6 text-white ">
                            <li>
                                <Link href="/about">
                                    <p
                                        className="text-lg"
                                    >
                                        About Me
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq">
                                    <p
                                        className="text-lg"
                                    >
                                        FAQ
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={mailtoLink}
                                >
                                    <p
                                        className="text-lg"
                                    >
                                        {'Contact'}
                                    </p>
                                </Link>
                            </li>
                        </ul>
                        <div className="hidden md:block">
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;