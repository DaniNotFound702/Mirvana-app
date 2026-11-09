/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://unistyl.es/), etc.
 */

import "@/global.css";

import { Platform } from "react-native";

export const Colors = {
  light: {
    text: "#143109",
    background: "#F7F7F7",
    backgroundElement: "#EFEFEF",
    backgroundSelected: "#D0D6B3",
    textSecondary: "#53604D",
    primary: "#143109",
    heading: "#143109",
    accent: "#AAAE7F",
    onPrimary: "#F7F7F7",
  },
  dark: {
    text: "#F7F7F7",
    background: "#0d2605",
    backgroundElement: "#143109",
    backgroundSelected: "#53604D",
    textSecondary: "#D0D6B3",
    primary: "#AAAE7F",
    heading: "#F7F7F7",
    accent: "#D0D6B3",
    onPrimary: "#143109",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "var(--font-display)",
    serif: "var(--font-serif)",
    rounded: "var(--font-rounded)",
    mono: "var(--font-mono)",
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
