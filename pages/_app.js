import React from "react";
import VK, { CommunityMessages } from "react-vk";
import App, { Container } from "next/app";
import Router from "next/router";
import Head from "next/head";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import { getAssetsPrefix } from "../shared/utils";
import { GA_TRACKING_ID, pageview } from "../shared/gtag";
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

Router.events.on("routeChangeComplete", url => pageview(url));

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width" />
          <title>Визовый туристический центр</title>
          <meta
            name="description"
            content="Поможем получить визу шенген и в другие страны. Запись на мобильную биометрию или оформление без личного присутствия. Минимум документов! Туры и авиабилеты. Страхование. Фото на визу в подарок."
          />
          <meta
            name="keywords"
            content="визы, туры, автобусные туры, шенгенская виза в сыктывкаре, визовый центр сыктывкар, получить визу, визы быстро"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href={`${getAssetsPrefix()}/static/images/favicon.ico`}
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `
            }}
          />
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
            <VK>
              <CommunityMessages groupId={"168595754"} />
            </VK>
          </Layout>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
