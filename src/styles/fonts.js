import { css } from "styled-components";

export const loadFonts = css`
  @font-face {
    font-family: "Recoleta";
    src: url("/fonts/Recoleta/Recoleta Alt Regular.otf") format("opentype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Recoleta";
    src: url("/fonts/Recoleta/Recoleta Alt Medium.otf") format("opentype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Recoleta";
    src: url("/fonts/Recoleta/Recoleta Alt SemiBold.otf") format("opentype");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Recoleta";
    src: url("/fonts/Recoleta/Recoleta Alt Bold.otf") format("opentype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Neue Montreal";
    src: url("/fonts/Neue Montreal/NeueMontreal-Light.otf") format("opentype");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Neue Montreal";
    src: url("/fonts/Neue Montreal/NeueMontreal-Regular.otf") format("opentype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Neue Montreal";
    src: url("/fonts/Neue Montreal/NeueMontreal-Medium.otf") format("opentype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Neue Montreal";
    src: url("/fonts/Neue Montreal/NeueMontreal-Bold.otf") format("opentype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
`;

export const base = 16;

const FONTS = {
  recoleta: {
    regular: '"Recoleta", Georgia, serif',
    medium: '"Recoleta", Georgia, serif',
    semibold: '"Recoleta", Georgia, serif',
    bold: '"Recoleta", Georgia, serif'
  },

  neueMontreal: {
    light: '"Neue Montreal", Arial, sans-serif',
    regular: '"Neue Montreal", Arial, sans-serif',
    medium: '"Neue Montreal", Arial, sans-serif',
    bold: '"Neue Montreal", Arial, sans-serif'
  },

  display: {
    regular: '"Recoleta", Georgia, serif',
    medium: '"Recoleta", Georgia, serif',
    semibold: '"Recoleta", Georgia, serif',
    bold: '"Recoleta", Georgia, serif'
  },

  body: {
    light: '"Neue Montreal", Arial, sans-serif',
    regular: '"Neue Montreal", Arial, sans-serif',
    medium: '"Neue Montreal", Arial, sans-serif',
    bold: '"Neue Montreal", Arial, sans-serif'
  }
};

export default FONTS;
