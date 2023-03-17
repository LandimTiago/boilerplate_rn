export type ColorType =
  | "white"
  | "ice"
  | "grayOne"
  | "grayOneLowOpacity"
  | "grayTwo"
  | "grayThree"
  | "grayLowOpacity"
  | "grayLowestOpacity"
  | "black"
  | "lightRed"
  | "red"
  | "darkRed"
  | "blue"
  | "green";

const Colors = {
  white: "#FFFFFF",
  ice: "#F9F9F9",
  grayOne: "#767680",
  grayOneLowOpacity: "rgba(118, 118, 128, 0.12)",
  grayTwo: "#565657",
  grayThree: "#3C3C43",
  grayLowOpacity: "rgba(60, 60, 67, 0.6)",
  grayLowestOpacity: "rgba(60, 60, 67, 0.29)",
  black: "#222222",
  lightRed: "#D64747",
  red: "#D64747",
  darkRed: "#B0242D",
  beiraRioRed: "#BE1520",
  blue: "#007AFF",
  green: "#19A600",
  color1: "#3f2973",
  color2: "#c4b4db",
  color3: "#140434",
  color4: "#7454a0",
  color5: "#bbb4cf",
};

export const getColorByName = (colorName: ColorType): string => {
  return Colors[colorName] || "white";
};

export default Colors;
