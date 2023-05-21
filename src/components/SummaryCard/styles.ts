import { StyleSheet } from "react-native";
import THEMES from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    borderRadius: 5,
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textCategory: {
    color: THEMES.colors.title,
    fontFamily: THEMES.fonts.regular,
  },
  containerAmount: {
    flexDirection: "row",
  },
  textCurrency: {
    color: THEMES.colors.title,
    fontFamily: THEMES.fonts.medium,
  },
  textAmount: {
    color: THEMES.colors.title,
    fontFamily: THEMES.fonts.bold,
  },
});
