"use client";

import { createGlobalStyle } from "styled-components";

import FONTS, { loadFonts } from "./fonts";

const GlobalStyles = createGlobalStyle`
  ${loadFonts}

  .home-loader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: var(--cream);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(0);
  transition: transform 0.8s cubic-bezier(0.76, 0, 0.24, 1);
}

.home-loader-leaving {
  transform: translateY(-100%);
}

.home-loader-line {
  width: min(480px, calc(100vw - 72px));
  height: 4px;
  background: rgba(207, 71, 124, 0.15);
  overflow: hidden;
}

.home-loader-line span {
  display: block;
  width: 100%;
  height: 100%;
  background: var(--pink);
  transform: scaleX(0);
  transform-origin: left;
  animation: loaderLine 1.2s cubic-bezier(0.76, 0, 0.24, 1)
    forwards;
}

@keyframes loaderLine {
  to {
    transform: scaleX(1);
  }
}

  :root {
    --pink: #c94576;
    --pink-hover: #4e345e;
    --cream: #f8efeb;
    --white: #ffffff;

    --page-padding: clamp(66px, 5.2vw, 100px);
    --card-width: clamp(300px, 39vh, 414px);
    --card-gap: clamp(66px, 5.3vw, 104px);
  }

  * {
    box-sizing: border-box;
  }

  html {
    width: 100%;
    min-height: 100%;
  }

  .project-scroll {
    padding: 0;
    border: 0;
  }

  body {
    width: 100%;
    min-height: 100%;
    margin: 0;
    overflow-x: hidden;
    background: var(--cream);
    color: var(--pink);
    font-family: ${FONTS.body.regular};
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  body:has(.home) {
    height: 100svh;
    overflow: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a,
  button {
    cursor: pointer;
  }

  button {
    font: inherit;
  }

  img,
  svg {
    display: block;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* ---------------------------------
     Shared header
  --------------------------------- */

  .home-header,
  .project-header,
  .about-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .home-wordmark,
  .project-wordmark,
  .about-wordmark {
    display: block;
    margin: 0;
    font-family: ${FONTS.display.medium};
    font-size: clamp(62px, 6vw, 116px);
    line-height: 0.78;
    font-weight: 500;
    text-transform: lowercase;
  }

  .header-link {
  display: flex;
  align-items: center;
  gap: 12px;

  color: var(--pink);

  font-size: clamp(12px, 1vw, 14px);
  line-height: 1;
  font-weight: 500;
  text-transform: uppercase;

  transition: color 0.25s ease;
}

.header-link:hover {
  color: var(--pink-hover);
}

.header-link-icon {
  display: block;
  font-size: clamp(24px, 2vw, 36px);
  line-height: 0.7;

  transform-origin: center;
  transition: transform 0.35s ease;
}

.header-link:hover .header-link-icon {
  transform: rotate(45deg);
}

  .home-navigation,
  .header-link,
  .back-home {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: ${FONTS.body.medium};
    font-size: clamp(12px, 1vw, 14px);
    line-height: 1;
    font-weight: 500;
    text-transform: uppercase;
  }

  .home-navigation a,
  .header-link,
  .back-home {
    transition:
      color 0.25s ease,
      opacity 0.25s ease;
  }

  .home-navigation a:hover,
  .header-link:hover,
  .back-home:hover {
    color: var(--pink-hover);
  }

  .header-link-icon,
  .back-home-icon,
  .back-home span:last-child {
    display: block;
    font-size: clamp(24px, 2vw, 36px);
    line-height: 0.7;
    transform-origin: center;
    transition: transform 0.35s ease;
  }

  .header-link:hover .header-link-icon,
  .back-home:hover .back-home-icon,
  .back-home:hover span:last-child {
    transform: rotate(45deg);
  }

  /* ---------------------------------
     Homepage
  --------------------------------- */

  .home {
    position: relative;
    width: 100%;
    height: 100svh;
    min-height: 620px;
    overflow: hidden;
    background: var(--cream);
    color: var(--pink);
  }

  .home-hero {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 620px;
    overflow: hidden;
  }

.home-header {
  position: absolute;
  top: clamp(44px, 6.4vh, 88px);
  left: var(--page-padding);
  right: var(--page-padding);
  z-index: 20;
  width: auto;
}

.home-wordmark,
.header-link {
  pointer-events: auto;
}

  /* ---------------------------------
     Homepage carousel
  --------------------------------- */

  .home-project-window {
    position: absolute;
    inset: 0;
    z-index: 2;
    overflow: hidden;
    overscroll-behavior: none;
    touch-action: none;
  }

  .home-project-track {
    position: relative;
    width: max-content;
    min-width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    gap: var(--card-gap);
    padding:
      0
      clamp(160px, 12vw, 240px)
      0
      var(--page-padding);
    transition: transform 0.85s cubic-bezier(0.76, 0, 0.24, 1);
    will-change: transform;
  }

  .home-project-card {
    position: relative;
    flex: 0 0 var(--card-width);
    width: var(--card-width);
    min-width: var(--card-width);
    max-width: var(--card-width);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: var(--pink);
  }

  .home-project-heading {
    position: relative;
    flex: 0 0 auto;
    height: clamp(102px, 13.4vh, 145px);
    transition: color 0.25s ease;
  }

  .home-project-number {
    position: absolute;
    left: 0;
    bottom: clamp(17px, 2.2vh, 25px);
    display: block;
    font-family: ${FONTS.display.regular};
    font-size: clamp(76px, 10.6vh, 112px);
    line-height: 0.72;
    font-weight: 400;
  }

  .home-project-heading h2 {
    position: absolute;
    right: 0;
    bottom: clamp(11px, 1.4vh, 16px);
    max-width: 52%;
    margin: 0;
    font-family: ${FONTS.display.regular};
    font-size: clamp(24px, 2.6vh, 32px);
    line-height: 0.94;
    font-weight: 400;
    text-align: left;
    text-transform: lowercase;
  }

  .home-project-image {
    position: relative;
    width: 100%;
    height: clamp(400px, 55vh, 550px);
    flex: 0 0 auto;
    overflow: hidden;
    background: var(--white);
  }

  .home-project-image img {
    object-fit: cover;
    object-position: center center;
    transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .home-project-card:hover .home-project-heading {
    color: var(--pink-hover);
  }

  .home-project-card:hover .home-project-image img {
    transform: scale(1.018);
  }

  /* CMS-controlled image heights */

  .project-height-standard .home-project-image {
    height: clamp(400px, 55vh, 550px);
  }

  .project-height-tall .home-project-image {
    height: clamp(450px, 60vh, 600px);
  }

  /* CMS-controlled vertical positioning */

  .project-offset-high {
    transform: translateY(clamp(-18px, -2vh, 0px));
  }

  .project-offset-centre {
    transform: translateY(0);
  }

  .project-offset-low {
    transform: translateY(clamp(52px, 6.2vh, 72px));
  }

  .home-track-space {
    flex: 0 0 calc(100vw - var(--card-width) - var(--page-padding));
    min-width: calc(100vw - var(--card-width) - var(--page-padding));
    height: 1px;
  }

  /* ---------------------------------
     Homepage navigation arrows
  --------------------------------- */

.home-next-button,
.home-prev-button,
.project-scroll {
  color: var(--cream);
  background: var(--pink);
}

.home-next-button:hover,
.home-prev-button:hover,
.project-scroll:hover {
  background: var(--pink-hover);
}

  .home-slider-button,
  .home-next-button,
  .home-prev-button {
    position: absolute;
    bottom: clamp(250px, 31vh, 334px);
    z-index: 30;
    width: clamp(74px, 8.4vh, 90px);
    height: clamp(74px, 8.4vh, 90px);
    display: grid;
    place-items: center;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: var(--pink);
    color: var(--cream);
    font-family: ${FONTS.body.regular};
    font-size: clamp(36px, 4vh, 50px);
    line-height: 1;
    transition:
      transform 0.25s ease,
      background 0.25s ease;
  }

  .home-slider-button-next,
  .home-next-button {
    right: var(--page-padding);
  }

  .home-slider-button-previous,
  .home-prev-button {
    left: var(--page-padding);
  }

  .home-slider-button-next:hover,
  .home-next-button:hover {
    transform: translateX(6px);
    background: var(--pink-hover);
  }

  .home-slider-button-previous:hover,
  .home-prev-button:hover {
    transform: translateX(-6px);
    background: var(--pink-hover);
  }

.button-arrow {
  width: 45px;
  height: 45px;
  display: block;
  background: currentColor;

  -webkit-mask-image: url("/icons/arrow-2.svg");
  mask-image: url("/icons/arrow-2.svg");

  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  -webkit-mask-position: center;
  mask-position: center;

  -webkit-mask-size: contain;
  mask-size: contain;

  transform-origin: center;
}

.home-slider-button-previous .button-arrow,
.home-prev-button .button-arrow {
  transform: rotate(180deg);
}

.home-slider-button-next .button-arrow,
.home-next-button .button-arrow {
  transform: rotate(0deg);
}

.project-scroll .button-arrow {
  transform: rotate(90deg);
}

  /* ---------------------------------
     Project page
  --------------------------------- */

  .project-page {
    --project-padding: clamp(42px, 5.2vw, 100px);

    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    background: var(--cream);
    color: var(--pink);
  }

  .project-header {
    position: relative;
    z-index: 10;
    padding:
      clamp(38px, 5.4vw, 60px)
      var(--project-padding)
      0;
  }

  .project-header .site-logo {
    width: clamp(285px, 33vw, 540px);
    color: var(--pink);
  }

  .project-header .site-logo svg {
    width: 100%;
    height: auto;
  }

  .project-hero {
    min-height: clamp(470px, 45vw, 685px);
    display: flex;
    align-items: flex-end;
    padding:
      0
      var(--project-padding)
      clamp(70px, 7.4vw, 118px);
  }

  .project-summary {
    width: clamp(500px, 43vw, 665px);
    margin-left: auto;
    display: grid;
    grid-template-columns:
      clamp(80px, 7vw, 112px)
      minmax(235px, 1fr)
      auto;
    align-items: start;
    gap: clamp(28px, 3.2vw, 52px);
  }

  .project-number {
    display: block;
    margin: 0;
    font-family: ${FONTS.display.regular};
    font-size: clamp(52px, 4.7vw, 76px);
    line-height: 0.78;
    font-weight: 400;
  }

  .project-copy {
    min-width: 0;
    padding-top: 1px;
  }

  .project-copy h1 {
    margin: 0 0 clamp(18px, 1.8vw, 26px);
    font-family: ${FONTS.display.regular};
    font-size: clamp(35px, 3vw, 49px);
    line-height: 0.82;
    font-weight: 400;
    text-transform: lowercase;
  }

  .project-copy p {
    max-width: 290px;
    margin: 0 0 27px;
    font-family: ${FONTS.body.regular};
    font-size: clamp(15px, 1.22vw, 20px);
    line-height: 1.24;
    font-weight: 400;
  }

.project-categories {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.project-categories li {
  font-family: ${FONTS.body.medium};
  font-size: clamp(12px, 1vw, 14px);
  line-height: 1.2;
  font-weight: 600;
  text-transform: uppercase;
}

  .project-scroll {
    align-self: end;
    width: clamp(66px, 5.7vw, 92px);
    height: clamp(66px, 5.7vw, 92px);
    display: grid;
    place-items: center;
    margin-bottom: -2px;
    border-radius: 50%;
    background: var(--pink);
    color: var(--cream);
    font-size: clamp(31px, 2.8vw, 46px);
    transition:
      transform 0.25s ease,
      background 0.25s ease;
  }

  .project-scroll:hover {
    transform: translateY(6px);
    background: var(--pink-hover);
  }

  .project-scroll svg {
    width: 42%;
    height: auto;
    transform: rotate(90deg);
  }

  /* ---------------------------------
     Project gallery
  --------------------------------- */

  .project-gallery {
    display: flex;
    flex-direction: column;
    gap: clamp(48px, 5.2vw, 82px);
    padding:
      0
      var(--project-padding)
      clamp(70px, 7vw, 120px);
  }

  .project-gallery-image {
    position: relative;
    width: 100%;
    overflow: hidden;
    background: var(--white);
  }

  .project-gallery-image img {
    object-fit: cover;
    object-position: center center;
  }

  .project-gallery-image-wide {
    aspect-ratio: 1.75 / 1;
  }

  .project-gallery-split {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(48px, 5.2vw, 82px);
  }

  .project-gallery-image-tall {
    aspect-ratio: 0.73 / 1;
  }

  /* ---------------------------------
     About page
  --------------------------------- */

  .about-page {
    --about-padding: clamp(42px, 5.2vw, 100px);

    width: 100%;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    background: var(--pink);
    color: var(--cream);
  }

  .about-header {
    padding:
      clamp(38px, 5.4vw, 60px)
      var(--about-padding)
      0;
  }

  .about-page .back-home {
    color: var(--cream);
  }

  .about-page .back-home:hover {
    color: var(--cream);
    opacity: 0.7;
  }

  .about-hero,
  .about-content {
    flex: 1;
    display: grid;
    grid-template-columns: minmax(150px, 0.55fr) 2fr;
    gap: clamp(60px, 8vw, 150px);
    padding:
      clamp(90px, 10vw, 170px)
      var(--about-padding)
      clamp(80px, 8vw, 140px);
  }

  .about-label {
    font-family: ${FONTS.body.medium};
    font-size: 12px;
    line-height: 1;
    font-weight: 500;
    text-transform: uppercase;
  }

  .about-content h1,
  .about-hero h1 {
    max-width: 1000px;
    margin: 0;
    font-family: ${FONTS.display.regular};
    font-size: clamp(48px, 5.2vw, 100px);
    line-height: 0.94;
    font-weight: 400;
  }

  .about-details,
  .about-copy {
    grid-column: 2;
    max-width: 660px;
    display: grid;
    gap: 24px;
    margin:
      clamp(70px, 8vw, 130px)
      0
      0
      auto;
  }

  .about-details p,
  .about-copy p {
    margin: 0;
    font-family: ${FONTS.body.regular};
    font-size: clamp(18px, 1.6vw, 28px);
    line-height: 1.25;
    font-weight: 400;
  }

  .about-links {
    grid-column: 2;
    display: flex;
    flex-wrap: wrap;
    gap: clamp(24px, 3vw, 50px);
    margin-top: clamp(60px, 7vw, 110px);
    font-family: ${FONTS.body.medium};
    font-size: 12px;
    line-height: 1;
    font-weight: 500;
    text-transform: uppercase;
  }

  .about-links a {
    position: relative;
  }

  .about-links a::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -5px;
    left: 0;
    height: 1px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  .about-links a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

/* ---------------------------------
   Editorial project text
--------------------------------- */

.project-text-section,
.project-statement-section {
  width: 100%;
}

.project-section-cream {
  background: var(--cream);
  color: var(--pink);
}

.project-section-pink {
  background: var(--pink);
  color: var(--cream);
}

.project-text-section {
  min-height: clamp(420px, 42vw, 420px);
  display: grid;
  gap: clamp(50px, 8vw, 150px);
  padding:
    clamp(70px, 8vw, 130px)
    clamp(42px, 5.2vw, 100px);
}

.project-text-split {
  grid-template-columns: minmax(120px, 0.55fr) 2fr;
}

.project-text-centred {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.project-text-large {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-text-label {
  font-family: ${FONTS.body.medium};
  font-size: 14px;
  line-height: 1;
  font-weight: 600;
  text-transform: uppercase;
}

.project-text-content {
  width: 100%;
  max-width: 950px;
}

.project-text-split .project-text-content {
  margin-left: auto;
}

.project-text-content h2 {
  max-width: 900px;
  margin: 0;
  font-family: ${FONTS.display.regular};
  font-size: clamp(49px, 4.6vw, 65px);
  line-height: 0.94;
  font-weight: 400;
  letter-spacing: -0.035em;
}

.project-text-large .project-text-content h2 {
  font-size: clamp(62px, 7.5vw, 140px);
}

.project-text-content p {
  max-width: 600px;
  margin:
    clamp(40px, 5vw, 80px)
    0
    0
    auto;
  font-family: ${FONTS.body.regular};
  font-size: clamp(18px, 1.6vw, 20px);
  line-height: 1.25;
}

.project-text-centred .project-text-content p {
  margin-right: auto;
  margin-left: auto;
}

.project-statement-section {
  min-height: clamp(480px, 60vw, 850px);
  display: grid;
  place-items: center;
  padding:
    clamp(80px, 10vw, 170px)
    clamp(42px, 8vw, 160px);
  text-align: center;
}

.project-statement-section p {
  max-width: 1200px;
  margin: 0;
  font-family: ${FONTS.display.regular};
  font-size: clamp(58px, 7vw, 135px);
  line-height: 0.92;
  font-weight: 400;
  letter-spacing: -0.04em;
}

/* Gallery image ratios */

.project-image-landscape {
  aspect-ratio: 1.75 / 1;
}

.project-image-square {
  aspect-ratio: 1 / 1;
}

.project-gallery-image-natural {
  overflow: visible;
}

.project-gallery-image-natural img {
  position: relative !important;
  width: 100%;
  height: auto;
}

.project-gallery-split .project-gallery-image {
  width: 100%;
}

.project-split-portrait .project-gallery-image {
  aspect-ratio: 0.73 / 1;
}

.project-split-square .project-gallery-image {
  aspect-ratio: 1 / 1;
}

.project-split-landscape .project-gallery-image {
  aspect-ratio: 1.35 / 1;
}

.project-gallery-image {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
}

/* ---------------------------------
   Next project
--------------------------------- */

.next-project-section {
  overflow: hidden;
  background: var(--pink);
  color: var(--cream);
}

.next-project-link {
  display: block;
}

.next-project-marquee {
  width: 100%;
  overflow: hidden;
  padding: clamp(22px, 2.2vw, 36px) 0;
  border-bottom: 1px solid rgb(248 239 235 / 35%);
}

.next-project-marquee-track {
  width: max-content;
  display: flex;
  white-space: nowrap;
  animation: nextProjectMarquee 30s linear infinite;
}

.next-project-marquee-track span {
  font-family: ${FONTS.display.regular};
  font-size: clamp(42px, 4vw, 82px);
  line-height: 0.9;
  font-weight: 400;
  text-transform: lowercase;
}

.next-project-link:hover
  .next-project-marquee-track {
  animation-play-state: paused;
}

.next-project-preview {
  display: grid;
  grid-template-columns: minmax(260px, 0.75fr) 1.5fr;
  gap: clamp(50px, 8vw, 150px);
  align-items: end;
  padding:
    clamp(70px, 8vw, 130px)
    var(--project-padding);
}

.next-project-copy {
  display: flex;
  align-items: flex-start;
  gap: clamp(24px, 3vw, 50px);
}

.next-project-number {
  font-family: ${FONTS.display.regular};
  font-size: clamp(48px, 5vw, 90px);
  line-height: 0.8;
}

.next-project-copy h2 {
  margin: 0 0 12px;
  font-family: ${FONTS.display.regular};
  font-size: clamp(38px, 4vw, 76px);
  line-height: 0.9;
  font-weight: 400;
  text-transform: lowercase;
}

.next-project-copy p {
  margin: 0;
  font-family: ${FONTS.body.medium};
  font-size: 12px;
  text-transform: uppercase;
}

.next-project-image {
  position: relative;
  width: 100%;
  aspect-ratio: 1.5 / 1;
  overflow: hidden;
}

.next-project-image img {
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s ease;
}

.next-project-link:hover .next-project-image img {
  transform: scale(1.02);
}

@keyframes nextProjectMarquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .next-project-marquee-track {
    animation: none;
  }
}

  /* ---------------------------------
     Tablet
  --------------------------------- */

  @media (max-width: 1024px) {
    :root {
      --page-padding: 28px;
      --card-gap: 54px;
    }

    .home-header {
      top: 40px;
    }

    .home-wordmark,
    .project-wordmark,
    .about-wordmark {
      font-size: clamp(60px, 8vw, 84px);
    }

    .home-project-track {
      padding-right: 160px;
    }

    .home-slider-button-next,
    .home-next-button {
      right: 28px;
    }

    .home-slider-button-previous,
    .home-prev-button {
      left: 28px;
    }

    .project-page {
      --project-padding: 28px;
    }

    .project-header {
      padding-top: 32px;
    }

    .project-summary {
      width: min(600px, 72vw);
    }

    .project-gallery-split {
      gap: 28px;
    }

    .about-page {
      --about-padding: 28px;
    }
  }

  /* ---------------------------------
     Mobile
  --------------------------------- */

  @media (max-width: 767px) {
  .project-text-section {
  min-height: auto;
  grid-template-columns: 1fr;
  gap: 48px;
  padding: 70px 18px;
}

.project-text-content h2 {
  font-size: 46px;
}

.project-text-large .project-text-content h2 {
  font-size: 58px;
}

.project-text-content p {
  margin-top: 40px;
  font-size: 18px;
}

.project-statement-section {
  min-height: 520px;
  padding: 80px 18px;
}

.project-statement-section p {
  font-size: 52px;
}

.next-project-preview {
  grid-template-columns: 1fr;
  gap: 55px;
  padding: 70px 18px;
}

.next-project-image {
  aspect-ratio: 1 / 1;
}

.next-project-marquee-track span {
  font-size: 44px;
}

    body:has(.home) {
      height: auto;
      overflow-x: hidden;
      overflow-y: auto;
    }

    .home {
      height: auto;
      min-height: 100svh;
      overflow: visible;
    }

    .home-hero {
      height: auto;
      min-height: 100svh;
      overflow: visible;
    }

    .home-header {
      position: relative;
      top: auto;
      left: auto;
      right: auto;
      width: 100%;
      padding: 28px 18px 70px;
    }

    .home-wordmark,
    .project-wordmark,
    .about-wordmark {
      font-size: 48px;
    }

    .home-navigation,
    .header-link,
    .back-home {
      gap: 7px;
      font-size: 10px;
    }

    .header-link-icon,
    .back-home-icon,
    .back-home span:last-child {
      font-size: 21px;
    }

    .home-project-window {
      position: relative;
      inset: auto;
      overflow: visible;
      overscroll-behavior: auto;
      touch-action: auto;
    }

    .home-project-track {
      width: 100%;
      min-width: 0;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 64px;
      padding: 0 18px 60px;
      transform: none !important;
      transition: none;
    }

    .home-project-card {
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      flex-basis: 100%;
      transform: none;
    }

    .home-project-heading {
      height: 96px;
    }

    .home-project-number {
      bottom: 18px;
      font-size: 74px;
    }

    .home-project-heading h2 {
      bottom: 12px;
      font-size: 24px;
    }

    .home-project-image,
    .project-height-standard .home-project-image {
      height: auto;
      aspect-ratio: 1 / 1;
    }

    .project-height-tall .home-project-image {
      height: auto;
      aspect-ratio: 0.84 / 1;
    }

    .project-offset-high,
    .project-offset-centre,
    .project-offset-low {
      transform: none;
    }

    .home-track-space,
    .home-slider-button,
    .home-next-button,
    .home-prev-button {
      display: none;
    }

    /* Mobile project page */

    .project-page {
      --project-padding: 18px;
    }

    .project-header {
      padding-top: 24px;
    }

    .project-header .site-logo {
      width: 210px;
    }

    .project-hero {
      min-height: 430px;
      padding:
        80px
        var(--project-padding)
        55px;
    }

    .project-summary {
      width: 100%;
      grid-template-columns: auto minmax(0, 1fr);
      gap: 24px;
    }

    .project-number {
      font-size: 48px;
    }

    .project-copy h1 {
      margin-bottom: 18px;
      font-size: 38px;
    }

    .project-copy p {
      max-width: 260px;
      font-size: 16px;
    }

    .project-scroll {
      grid-column: 2;
      width: 62px;
      height: 62px;
      margin-top: 12px;
      margin-left: auto;
      font-size: 29px;
    }

    .project-gallery {
      gap: 36px;
      padding-bottom: 60px;
    }

    .project-gallery-image-wide {
      aspect-ratio: 1.25 / 1;
    }

    .project-gallery-split {
      grid-template-columns: 1fr;
      gap: 36px;
    }

    .project-gallery-image-tall {
      aspect-ratio: 0.85 / 1;
    }

    /* Mobile About page */

    .about-page {
      --about-padding: 18px;
    }

    .about-header {
      padding-top: 28px;
    }

    .about-hero,
    .about-content {
      grid-template-columns: 1fr;
      gap: 70px;
      padding-top: 90px;
      padding-bottom: 80px;
    }

    .about-content h1,
    .about-hero h1 {
      grid-column: 1;
      font-size: 44px;
    }

    .about-details,
    .about-copy,
    .about-links {
      grid-column: 1;
      margin-left: 0;
    }

    .about-details,
    .about-copy {
      margin-top: 60px;
    }

    .about-details p,
    .about-copy p {
      font-size: 18px;
    }

    .about-links {
      margin-top: 55px;
    }
  }
`;

export default GlobalStyles;
