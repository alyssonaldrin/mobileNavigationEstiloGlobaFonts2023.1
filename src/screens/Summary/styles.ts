import { StyleSheet } from "react-native";

import THEMES from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEMES.colors.backgroundGray,
  },
  containerHeader: {
    width: "100%",
    height: 80,
    backgroundColor: THEMES.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: THEMES.colors.shape,
    fontSize: THEMES.fontSize.lg,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 40,
    marginBottom: 80,
  },
  month: {
    color: THEMES.colors.text_dark,
    fontSize: THEMES.fontSize.lg,
    fontFamily: THEMES.fonts.regular,
  },
  containerList: {
    paddingHorizontal: 24,
  },
});
