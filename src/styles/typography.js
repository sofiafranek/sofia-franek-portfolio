import { css } from "styled-components";
import FONTS, { base } from "./fonts";
import BREAKPOINTS, { breakpointSizes } from "./breakpoints";

export const rem = (px) => `${px / base}rem`;

const { xsmall } = breakpointSizes;

export const fluidSize = (min, max) => {
  const scale = max - min;
  return `calc(${rem(min)} + ${scale} * ((100vw - ${xsmall}px) / 640))`;
};

export const styles = {
  h1: css`
    font-family: ${FONTS.neueMontreal.medium};
    font-size: ${fluidSize(40, 40)};
    line-height: ${fluidSize(50, 50)};

    ${BREAKPOINTS.min.medium`
      font-size: ${rem(60)};
      line-height: ${rem(70)};
    `}
  `,
  h2: css`
    font-family: ${FONTS.neueMontreal.italic};
    font-size: ${rem(30)};
    line-height: ${rem(40)};

    ${BREAKPOINTS.min.medium`
      font-size: ${rem(40)};
      line-height: ${rem(50)};
    `}
  `,
  h3: css`
    font-family: ${FONTS.neueMontreal.regular};
    font-size: ${rem(28)};
    line-height: ${rem(38)};

    ${BREAKPOINTS.min.medium`
      font-size: ${rem(35)};
      line-height: ${rem(45)};
    `}
  `,
  h4: css`
    font-size: ${rem(24)};
    line-height: ${rem(30)};
    font-family: ${FONTS.neueMontreal.regular};
  `,
  h5: css`
    font-size: ${rem(18)};
    line-height: ${rem(28)};
    font-family: ${FONTS.neueMontreal.regular};
  `,
  h6: css`
    font-size: ${rem(18)};
    line-height: ${rem(20)};
    font-family: ${FONTS.neueMontreal.regular};
    font-style: italic;
    font-weight: bold;
    display: block;
  `,
  p: css`
    font-family: ${FONTS.neueMontreal.regular};
    padding-bottom: 20px;
    font-size: ${rem(15)};
    line-height: ${rem(30)};
  `,
  xsmall: css`
    font-size: ${rem(12)};
    line-height: ${rem(18)};
  `,
  small: css`
    font-size: ${rem(14)};
    line-height: ${rem(20)};
  `,
  medium: css`
    font-size: ${rem(33)};
    line-height: ${rem(60)};
  `,
  large: css`
    font-size: ${rem(44)};
    line-height: ${rem(50)};
  `,
  button: css`
    font-size: ${rem(11)};
    line-height: ${rem(12)};
    font-family: ${FONTS.neueMontreal.regular};
  `
};

export default styles;
