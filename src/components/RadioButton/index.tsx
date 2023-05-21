import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import THEMES from "../../global/styles/theme";

interface Props {
  label: string;
  icon: "arrow-down-circle" | "arrow-up-circle";
  onPress: () => void;
  isSelected: boolean;
}

export function RadioButton({ label, icon, onPress, isSelected }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[
        styles.radioButton,
        {
          backgroundColor: isSelected
            ? THEMES.colors.shape
            : THEMES.colors.backgroundGray,
        },
      ]}
    >
      <Feather
        name={icon}
        size={20}
        color={
          label === "Income" ? THEMES.colors.success : THEMES.colors.danger
        }
        style={{ transform: [{ scale: isSelected ? 1.2 : 1 }] }}
      />
      <Text
        style={[
          styles.radioButtonText,
          { transform: [{ scale: isSelected ? 1.2 : 1 }] },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
