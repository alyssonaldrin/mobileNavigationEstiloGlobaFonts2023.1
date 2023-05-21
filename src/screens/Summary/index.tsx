import { FlatList, Text, View } from "react-native";
import { NavBar } from "../../components/NavBar";
import { SummaryCard } from "../../components/SummaryCard";
import { TransactionCategory } from "../../enums/transactionCategory";

import { styles } from "./styles";
import { IconButton } from "../../components/IconButton";

import { summaryMonthArray } from "../../data/summaryMonth";

export function Summary() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>Resumo por categoria</Text>
      </View>
      <View style={styles.menu}>
        <IconButton icon="chevron-left" onPress={() => {}} />
        <Text style={styles.month}>maio, 2020</Text>
        <IconButton icon="chevron-right" onPress={() => {}} />
      </View>
      <FlatList
        style={styles.containerList}
        data={summaryMonthArray}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <SummaryCard
            key={item.id}
            amount={item.amount}
            category={item.category as TransactionCategory}
          />
        )}
        ListEmptyComponent={() => <>Não há transações</>}
      />
      <NavBar currentPage="summary" />
    </View>
  );
}
