import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { Footer } from "./Footer/Footer";
//import {Navbar} from "./Navbar/Navbar";
import Navigation from "./Navigation";

// Removed import for styles since we're using Tailwind classes directly

import { Inter } from "next/font/google";
import Container from "../common/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = "Fraser Nutrition" }: Props) => (
    // Applied Tailwind utility classes directly
    <div className="flex flex-col min-h-screen">
        <Head>
            <title>{title}</title>
        </Head>
        <header className="bg-gray-100">
            <Navigation />
        </header>
        <main className="flex-1">
            {children}
        </main>
        <footer className="bg-gray-200 mt-auto">
            <Footer />
        </footer>
    </div>
);

export default Layout;
