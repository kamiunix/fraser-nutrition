"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../../../common/Button";
import {Label} from "semantic-ui-react";

const Logo = () => {
    //update the size of the logo when the size of the screen changes
    const [width, setWidth] = useState(0);

    const updateWidth = () => {
        const newWidth = window.innerWidth;
        setWidth(newWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        updateWidth();
    }, []);

    return (
        <>
            <Link href="/" style={{ display: "block" }}>
                <Label>
                    <Image
                        src="/logo.png"
                        alt=""
                        width={width < 768 ? 150 : 200}
                        height={width < 768 ? 150 : 200}
                        className="relative"
                    />
                </Label>
            </Link>
        </>
    );
};

export default Logo;