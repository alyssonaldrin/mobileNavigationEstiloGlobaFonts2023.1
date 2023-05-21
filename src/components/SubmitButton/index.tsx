import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface Props {
  onPress: () => void;
  children: string;
}

export function SubmitButton({ onPress, children }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.titleButton}>{children}</Text>
    </TouchableOpacity>
  );
}
