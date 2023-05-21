import { StyleSheet } from "react-native";
import THEMES from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 128,
    borderRadius: 5,
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 18,
    marginBottom: 16,
  },
  containerHeader: {
    justifyContent: "flex-start",
  },
  titleHeader: {
    fontSize: THEMES.fontSize.sm,
    fontFamily: THEMES.fonts.regular,
  },
  containerFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 19,
  },
  categoryContainer: {
    flexDirection: "row",
    gap: 12,
  },
  textAmount: {
    fontSize: THEMES.fontSize.lg,
    fontFamily: THEMES.fonts.regular,
  },
  categoryName: {
    fontSize: THEMES.fontSize.sm,
    fontFamily: THEMES.fonts.regular,
  },
  date: {
    fontSize: THEMES.fontSize.sm,
    fontFamily: THEMES.fonts.regular,
  },
});
