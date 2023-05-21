import { Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import THEMES from "../../global/styles/theme";

import { styles } from "./styles";

interface Props {
  label: string;
  icon: "list" | "dollar-sign" | "pie-chart";
  isSelected: boolean;
  onPress: () => void;
}

export function NavButton({ label, icon, isSelected, onPress }: Props) {
  const contentColor = isSelected
    ? THEMES.colors.secondary
    : THEMES.colors.text;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[
        styles.button,
        {
          backgroundColor: THEMES.colors.shape,
        },
      ]}
      onPress={onPress}
    >
      <Feather name={icon} size={24} color={contentColor} />
      <Text style={[styles.titleButton, { color: contentColor }]}>{label}</Text>
    </TouchableOpacity>
  );
}
