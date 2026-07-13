import { css } from "styled-components";

export const breakpointSizes = {
  xxsmall: 425,
  xsmall: 650,
  small: 775,
  xmedium: 900,
  medium: 1025,
  large: 1280,
  xlarge: 1450,
  xxlarge: 1600,
  xxxlarge: 2000
};

const breakpoints = { min: {}, max: {} };

const query =
  (size, direction = "max") =>
  (content, ...args) =>
    css`
      @media screen and (${direction}-width: ${size}px) {
        ${css(content, ...args)}
      }
    `;

Object.keys(breakpointSizes).forEach((key) => {
  breakpoints[key] = query(breakpointSizes[key]);
  breakpoints.min[key] = query(breakpointSizes[key], "min");
  breakpoints.max[key] = query(breakpointSizes[key], "max");
});

breakpoints.custom = query;

export default breakpoints;
