import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import THEMES from "../../global/styles/theme";

import { styles } from "./styles";

import { CategoryProps } from "../../data/transactions";

interface Props {
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
}

export function TransactionCard({
  type,
  title,
  amount,
  category,
  date,
}: Props) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: THEMES.colors.shape,
        },
      ]}
    >
      <View style={styles.containerHeader}>
        <Text
          style={[
            styles.titleHeader,
            {
              color: THEMES.colors.text_dark,
            },
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.textAmount,
            {
              color:
                type === "positive"
                  ? THEMES.colors.success
                  : THEMES.colors.danger,
            },
          ]}
        >
          {type === "negative" ? "- " : ""}
          {amount}
        </Text>
      </View>

      <View style={styles.containerFooter}>
        <View style={styles.categoryContainer}>
          <Feather name={category.icon} size={20} color={THEMES.colors.text} />
          <Text
            style={[
              styles.categoryName,
              {
                color: THEMES.colors.text,
              },
            ]}
          >
            {category.name}
          </Text>
        </View>
        <Text
          style={[
            styles.date,
            {
              color: THEMES.colors.text,
            },
          ]}
        >
          {date}
        </Text>
      </View>
    </View>
  );
}
