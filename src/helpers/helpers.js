import tinycolor from 'tinycolor2';

// get text colors base on background color
export function textColor(color) {
  const hsl = tinycolor(color).toHsl();
  hsl.h = (hsl.h + 0.5) % 1; // Hue
  hsl.s = (hsl.s + 0.5) % 1; // Saturation
  hsl.l = (hsl.l + 0.5) % 1; // Luminocity
  return `hsl(${hsl.h * 360},${hsl.s * 100}%,${hsl.l * 100}%)`;
}

// Capitalize First Letter
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Export Palettes colors as scss variables
export function downloadSCSS(colors) {
  const values = `/* HEX */${colors
    .map((color, index) => `$color${index + 1}:${color}`)
    .join(';')}`;
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    `data:scss;charset=utf-8,${encodeURIComponent(values)}`,
  );
  element.setAttribute('download', 'palette.scss');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
