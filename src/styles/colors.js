import colorString from "color-string";
import { lerp } from "../utils/math";

// convert color in RGB color space [255, 255, 255, 1] to HSL [1, 1, 1, 1]
export const rgbToHsl = (color) => {
  let [r, g, b] = color;
  r /= 255;
  g /= 255;
  b /= 255;
  const a = color[3];

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = (max + min) / 2;
  let s = h;
  const l = h;

  if (max === min) {
    h = 0;
    s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }

    h /= 6;
  }

  return [h, s, l, a];
};

// convert color in HSL color space [1, 1, 1, 1] to RGB [255, 255, 255, 1]
export const hslToRgb = (color) => {
  const [h, s, l, a] = color;
  let r;
  let g;
  let b;

  /* eslint-disable */
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  /* eslint-enable */

  return [r * 255, g * 255, b * 255, a];
};

// Easy to use helper for colors
export const color = (str) => {
  /* eslint-disable no-new-wrappers */
  const instance = new String(str);

  // add opacity helper to color string
  instance.opacity = (opacity) => {
    return color(
      colorString.to.rgb([...colorString.get.rgb(str).slice(0, 3), opacity])
    );
  };
  // mixes two colors together
  instance.mix = (color2, a) => {
    const c1 = colorString.get.rgb(str);
    const c2 = colorString.get.rgb(color2);
    const mix = [
      lerp(c1[0], c2[0], a),
      lerp(c1[1], c2[1], a),
      lerp(c1[2], c2[2], a),
      lerp(c1[3], c2[3], a)
    ];

    // return as RGB color again
    return color(colorString.to.rgb(mix));
  };
  // get rgb values
  instance.rgb = () => {
    return colorString.get.rgb(str);
  };
  // get HSL values
  instance.hsl = () => {
    return rgbToHsl(colorString.get.rgb(str));
  };
  // since we're using a String() instance we can't compare like we normally do...
  instance.equals = (color2) => {
    if (!color2 || color2 === "none") {
      return false;
    }

    const c1 = colorString.get.rgb(str);
    const c2 = colorString.get.rgb(color2);
    return c1[0] === c2[0] && c1[1] === c2[1] && c1[2] === c2[2];
  };

  instance.luma = () => {
    const rgb = instance.rgb();
    const r = rgb[0];
    const g = rgb[1];
    const b = rgb[2];
    return Math.sqrt(0.241 * r + 0.691 * g + 0.068 * b);
  };

  return instance;
};

export default {
  offWhite: color("#fcf6f6"),
  white: color("#FFFFFF"),
  lightGrey: color("#363636"),
  black: color("#2b2b2b"),
  lightPink: color("#EEDED4"),
  lighterPink: color("#faf3ef"),
  neutralPink: color("#CE9690"),
  brown: color("#b4a490"),
  lightBlue: color("#90C3CE"),
  lighterBlue: color("#d7f1f7"),
  darkBlue: color("#227C8B")
};
