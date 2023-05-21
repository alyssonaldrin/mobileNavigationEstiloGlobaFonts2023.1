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
  containerOuter: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 24,
  },
  containerForm: {
    flex: 1,
    gap: 8,
  },
  input: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 18,
    backgroundColor: THEMES.colors.shape,
    borderRadius: 5,
    color: THEMES.colors.text,
  },
  selectBox: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 18,
    backgroundColor: THEMES.colors.shape,
    borderRadius: 5,
    borderWidth: 0,
  },
  selectInput: {
    color: THEMES.colors.text,
  },
  selectDropdown: {
    color: THEMES.colors.text,
    backgroundColor: THEMES.colors.shape,
  },
  title: {
    color: THEMES.colors.shape,
    fontSize: THEMES.fontSize.lg,
  },
  radioButtonContainer: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 8,
    gap: 8,
  },
});
