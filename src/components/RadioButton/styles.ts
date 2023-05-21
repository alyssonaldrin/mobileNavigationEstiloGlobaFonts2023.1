import { StyleSheet } from "react-native";
import THEMES from "../../global/styles/theme";

export const styles = StyleSheet.create({
  radioButton: {
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    paddingVertical: 18,
    flex: 1,
  },
  radioButtonText: {
    fontSize: THEMES.fontSize.sm,
    fontFamily: THEMES.fonts.regular,
    color: THEMES.colors.title,
  },
});
