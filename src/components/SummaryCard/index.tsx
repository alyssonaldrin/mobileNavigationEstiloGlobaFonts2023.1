import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import THEMES from "../../global/styles/theme";

import { styles } from "./styles";

import { TransactionCategory } from "../../enums/transactionCategory";

interface Props {
  amount: string;
  category: TransactionCategory;
}

export function SummaryCard({ amount, category }: Props) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: THEMES.colors.shape,
        },
      ]}
    >
      <Text style={styles.textCategory}>{category}</Text>
      <View style={styles.containerAmount}>
        <Text style={styles.textCurrency}>R$</Text>
        <Text style={styles.textAmount}>{amount}</Text>
      </View>
    </View>
  );
}
