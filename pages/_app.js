import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import Layout from "../components/layout";

const theme = {
  colors: {
    white: "#fff",
    grey: "#fafafa",
    darkGrey: "#a9a9a9",
    black: "#000",
    blue: "#1e8edd",
    orange: "#ff9818",
    darkOrange: "#ff8e00"
  },
  breakpoints: {
    lg: "1229px",
    md: "939px",
    sm: "723px",
    xs: "400px"
  }
};

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    font-family: 'PT Sans', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width" />
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
