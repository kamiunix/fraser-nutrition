"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../../../common/Button";
import {Label} from "semantic-ui-react";

const Logo = () => {
    return (
        <>
            <Link href="/" style={{ display: "block" }}>
                <Label>
                    <Image
                        src="/darklogo.png"
                        alt=""
                        width={150}
                        height={150}
                        className="relative"
                    />
                </Label>
            </Link>
        </>
    );
};

export default Logo;