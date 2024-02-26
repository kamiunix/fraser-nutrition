import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import {Footer} from "./Footer/Footer";
import {Navbar} from "./Navbar/Navbar";
import {Container} from "semantic-ui-react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Fraser Nutrition" }: Props) => (
  <div>
    <Navbar/>
      <main
          style={{
              backgroundColor: "#FCFCFC",
              minHeight: "80vh",
          }}
      >
          <Container
              style={{
                  height: "100%",
              }}
          >
              {children}
          </Container>
      </main>
    <Footer/>
  </div>
);

export default Layout;
