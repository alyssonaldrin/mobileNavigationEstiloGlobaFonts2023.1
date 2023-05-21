import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import THEMES from "../../global/styles/theme";

interface Props {
  onPress: () => void;
  icon: "chevron-left" | "chevron-right";
}

export function IconButton({ onPress, icon }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <Feather name={icon} size={24} color={THEMES.colors.text_dark} />
    </TouchableOpacity>
  );
}
