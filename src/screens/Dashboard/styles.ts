import { StyleSheet } from "react-native";

import THEMES from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEMES.colors.backgroundGray,
  },
  containerHeader: {
    width: "100%",
    height: 278,
    backgroundColor: THEMES.colors.primary,
    paddingTop: 53,
    marginRight: 24,
  },
  containerHeaderIcone: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerUser: {
    flex: 1,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  containerGreeting: {},
  greeting: {
    color: THEMES.colors.shape,
    fontFamily: THEMES.fonts.regular,
    fontSize: THEMES.fontSize.sm,
  },
  name: {
    color: THEMES.colors.shape,
    fontFamily: THEMES.fonts.bold,
    fontSize: THEMES.fontSize.sm,
  },
  icone: {
    marginRight: 24,
  },
  resumeCards: {
    position: "absolute",
    width: "100%",
    marginTop: 120,
  },
  transactionsListContainer: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 74,
  },
  titleList: {
    fontSize: THEMES.fontSize.lg,
    fontFamily: THEMES.fonts.regular,
    marginBottom: 15,
  },
});
