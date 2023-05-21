import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { ResumeCard } from "../../components/ResumeCard";

import { transactionsArray } from "../../data/transactions";

import { styles } from "./styles";
import { TransactionCard } from "../../components/TransactionCard";
import { NavBar } from "../../components/NavBar";

export function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.containerHeaderIcone}>
          <View style={styles.containerUser}>
            <Image
              style={styles.image}
              source={{ uri: "https://github.com/fabioabrantes.png" }}
            />

            <View style={styles.containerGreeting}>
              <Text style={styles.greeting}>Olá</Text>
              <Text style={styles.name}>Fábio</Text>
            </View>
          </View>

          <View style={styles.icone}>
            <AntDesign name="poweroff" size={24} color="white" />
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.resumeCards}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        <ResumeCard
          type="entry"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 03 de abril"
          nameIcon="arrow-up-circle"
        />

        <ResumeCard
          type="out"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 04 de abril"
          nameIcon="arrow-down-circle"
        />

        <ResumeCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 04 de abril"
          nameIcon="dollar-sign"
        />
      </ScrollView>

      <View style={styles.transactionsListContainer}>
        <Text style={styles.titleList}>Listagem</Text>

        <FlatList
          data={transactionsArray}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TransactionCard
              key={item.id}
              type={item.type}
              title={item.title}
              amount={item.amount}
              category={item.category}
              date={item.date}
            />
          )}
          ListEmptyComponent={() => <>Não há transações</>}
        />
      </View>
      <NavBar currentPage="dashboard" />
    </View>
  );
}
