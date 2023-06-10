/**
 * Utilities functions
 */

/**
 * @param {String} text
 */
export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/\+/g, "plus")
    .replace(/^\./, "dot-")
    .replace(/\.$/, "-dot")
    .replace(/\./g, "-dot-")
    .replace(/^&/, "and-")
    .replace(/&$/, "-and")
    .replace(/&/g, "-and-")
    .replace(/[ !:’']/g, "")
    .replace(/à|á|â|ã|ä/g, "a")
    .replace(/ç|č|ć/g, "c")
    .replace(/è|é|ê|ë/g, "e")
    .replace(/ì|í|î|ï/g, "i")
    .replace(/ñ|ň|ń/g, "n")
    .replace(/ò|ó|ô|õ|ö/g, "o")
    .replace(/š|ś/g, "s")
    .replace(/ù|ú|û|ü/g, "u")
    .replace(/ý|ÿ/g, "y")
    .replace(/ž|ź/g, "z");

export const colorsObjects = {
  white: {
    label: "White",
    mainColorCode: "#fff",
    dark: false,
    colorsCodes: ["#fff", "#ffffff", "#F4F5F0"],
  },
  black: {
    label: "Black",
    mainColorCode: "#000",
    dark: true,
    colorsCodes: ["#000", "#000000", "#2d2d2d"],
  },
  pink: {
    label: "Pink",
    mainColorCode: "#f7f",
    dark: false,
    colorsCodes: ["#f5a9b8"],
  },
  red: {
    label: "Red",
    mainColorCode: "#f00",
    dark: true,
    colorsCodes: [
      "#f00",
      "#ef4135",
      "#CE1126",
      "#e40303",
      "#da121a",
      "#ED192D",
      "#EF3340",
      "#CD212A",
      "#b0313f",
      "#AA151B",
      "#D50032",
      "#ed1c24",
      "#b52125",
      "#ce2939",
      "#dc1e35",
      "#da0e15",
    ],
  },
  orange: {
    label: "Orange",
    mainColorCode: "#f70",
    dark: false,
    colorsCodes: ["#ff8c00"],
  },
  yellow: {
    label: "Yellow",
    mainColorCode: "#ff0",
    dark: false,
    colorsCodes: [
      "#ff0",
      "#fc0",
      "#ffff00",
      "#ffed00",
      "#fcdd09",
      "#ffd800",
      "#fff433",
      "#FBDF21",
      "#FFF200",
      "#FDDA24",
      "#F1BF00",
      "#f7db17",
      "#FEDD00",
      "#ffd500",
      "#ffd300",
    ],
  },
  green: {
    label: "Green",
    mainColorCode: "#0f0",
    dark: false,
    colorsCodes: [
      "#0f0",
      "#008026",
      "#078930",
      "#00613C",
      "#008C45",
      "#477050",
    ],
  },
  blue: {
    label: "Blue",
    mainColorCode: "#00f",
    dark: true,
    colorsCodes: [
      "#00f",
      "#039",
      "#0055a4",
      "#002654",
      "#004dff",
      "#5bcefa",
      "#074EA2",
      "#0F47AF",
      "#0093dd",
      "#171796",
      "#10069F",
      "#254aa5",
      "#005bbb",
      "#02529c",
      "#0064AD",
    ],
  },
  violet: {
    label: "Violet",
    mainColorCode: "#707",
    dark: true,
    colorsCodes: ["#750787", "#7902aa", "#9b59d0"],
  },
};

export const collectionTitles = {
  white: `White flag`,
  black: `Back to black flag`,
  blackwhite: `Black or White`,
  whiteblack: `Black or White`,
  redblack: `En Rouge Et Noir`,
  blackred: `No Future`,
  red: `Red flag!`,
  redblue: `Red vs. Blue`,
  bluered: `Red vs. Blue`,
  yellowred: `Hammer and sickle`,
  redyellow: `Hammer and sickle`,
  orange: `Orange box`,
  yellow: `Yellow lemon`,
  green: `Super green`,
  blue: `Blue Monday`,
  violet: `Violet Rain`,
  countries: `Sovereign states flags`,
  maritime: `Maritime flags`,
  communities: `Communities flags`,
  1: `Monochrome`,
  2: `2 colors`,
  3: `3 colors`,
  4: `4 colors`,
  5: `5 colors`,
};

export const collectionLinks = {
  countries: `https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/thenew/flagindex/tree/master/public/flags-svg/countries&fileName=flagindex-svg-countries&rootDirectory=false`,
  maritime: `https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/thenew/flagindex/tree/master/public/flags-svg/maritime&fileName=flagindex-svg-maritime-alphabet&rootDirectory=false`,
  communities: `https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/thenew/flagindex/tree/master/public/flags-svg/communities&fileName=flagindex-svg-communities&rootDirectory=false`,
};
