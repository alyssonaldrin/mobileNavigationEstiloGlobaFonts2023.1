import { StyleSheet } from "react-native";
import THEMES from "../../global/styles/theme";

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  titleButton: {
    fontFamily: THEMES.fonts.bold,
    fontSize: THEMES.fontSize.sm,
  },
});
