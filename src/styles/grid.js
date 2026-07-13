/* global document, window */
import React from 'react';
import styled, { css } from 'styled-components';

import BREAKPOINTS, { breakpointSizes } from './breakpoints';

export const GRID_WIDTH = breakpointSizes.xlarge; // 1600
export const COLUMS = 12;

export const columns = (start, cols) =>
  start
    ? css`
        grid-column: col-start ${start} / span ${cols};
      `
    : css`
        grid-column: span ${cols};
      `;

export const grid = (col) => css`
  display: grid;
  grid-template-columns: repeat(${col}, [col-start] 1fr);
  column-gap: 30px;
  column-gap: var(--gutter);
`;

// detect if background is image
const getBackground = (background) =>
  background.toLowerCase().indexOf('http') > -1 ||
    background.toLowerCase().indexOf('png') > -1 ||
    background.toLowerCase().indexOf('jpg') > -1 ||
    background.toLowerCase().indexOf('svg') > -1
    ? `url(${background})`
    : background;

export const GridOuter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${({ background }) =>
    background ? getBackground(background) : 'none'};
  background-size: cover;
  background-position: center center;
  padding: 0 15px;
  padding: 0 var(--gutter-side);

  ${BREAKPOINTS.min.medium`
    padding: 0 var(--gutter-side);
  `};
`;

export const GridInner = styled.div`
  position: relative;
  max-width: ${GRID_WIDTH}px;
  width: 100%;
  ${grid(COLUMS)}
`;

export const Column = styled.div`
  ${(props) => columns(props.start, props.columns)}
`;

export const gutter = {
  full: 30,
  side: 15,
};

// updates CSS variable used for gutter
const updateGutter = () => {
  const sideMax = window.innerWidth < breakpointSizes.medium ? 20 : 30;
  const full = Math.round(Math.min(30, window.innerWidth * (30 / GRID_WIDTH)));
  const side = Math.max(sideMax, full / 2);
  document.documentElement.style.setProperty('--gutter', `${full}px`);
  document.documentElement.style.setProperty('--gutter-side', `${side}px`);

  gutter.full = full;
  gutter.side = side;
};

if (typeof window !== 'undefined') {
  window.addEventListener('resize', updateGutter);
  updateGutter();
}

export const Grid = ({ children, className, background, ...props }) => (
  <GridOuter className={className} background={background} {...props}>
    <GridInner>{children}</GridInner>
  </GridOuter>
);
