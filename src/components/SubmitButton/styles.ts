import { StyleSheet } from "react-native";
import THEMES from "../../global/styles/theme";

export const styles = StyleSheet.create({
  button: {
    marginBottom: 24,
    width: "100%",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEMES.colors.secondary,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: THEMES.colors.text_dark,
  },
  titleButton: {
    fontFamily: THEMES.fonts.regular,
    fontSize: THEMES.fontSize.sm,
    color: THEMES.colors.shape,
  },
});
