import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { NavButton } from "../NavButton";
import { useNavigation } from "@react-navigation/native";

interface Props {
  currentPage: "dashboard" | "register" | "summary";
}

export function NavBar({ currentPage }: Props) {
  const navigation = useNavigation();
  return (
    <View style={styles.navbar}>
      <NavButton
        label={"Listagem"}
        icon={"list"}
        isSelected={currentPage === "dashboard"}
        onPress={() => navigation.navigate("Dashboard")}
      ></NavButton>
      <NavButton
        label={"Cadastrar"}
        icon={"dollar-sign"}
        isSelected={currentPage === "register"}
        onPress={() => navigation.navigate("Register")}
      ></NavButton>
      <NavButton
        label={"Resumo"}
        icon={"pie-chart"}
        isSelected={currentPage === "summary"}
        onPress={() => navigation.navigate("Summary")}
      ></NavButton>
    </View>
  );
}
