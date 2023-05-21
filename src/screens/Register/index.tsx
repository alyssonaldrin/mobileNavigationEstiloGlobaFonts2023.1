import { useState } from "react";
import { TextInput, Text, View } from "react-native";
import { NavBar } from "../../components/NavBar";
import { RadioButton } from "../../components/RadioButton";
import { SelectList } from "react-native-dropdown-select-list";

import { styles } from "./styles";
import { TransactionType } from "../../enums/transactionType";
import { TransactionCategory } from "../../enums/transactionCategory";
import { SubmitButton } from "../../components/SubmitButton";

export function Register() {
  const [type, setType] = useState<TransactionType>(TransactionType.INCOME);
  const [category, setCategory] = useState<TransactionCategory | null>(null);
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>Cadastro</Text>
      </View>
      <View style={styles.containerOuter}>
        <View style={styles.containerForm}>
          <TextInput style={styles.input} placeholder="Nome" />
          <TextInput style={styles.input} placeholder="Preço" />
          <View style={styles.radioButtonContainer}>
            <RadioButton
              label="Income"
              icon="arrow-up-circle"
              onPress={() => setType(TransactionType.INCOME)}
              isSelected={type === TransactionType.INCOME}
            />
            <RadioButton
              label="Outcome"
              icon="arrow-down-circle"
              onPress={() => setType(TransactionType.OUTCOME)}
              isSelected={type === TransactionType.OUTCOME}
            />
          </View>
          <SelectList
            boxStyles={styles.selectBox}
            inputStyles={styles.selectInput}
            dropdownStyles={styles.selectDropdown}
            placeholder={"Categoria"}
            setSelected={setCategory}
            data={[
              {
                key: TransactionCategory.ALIMENTACAO,
                value: TransactionCategory.ALIMENTACAO,
              },
              {
                key: TransactionCategory.CARRO,
                value: TransactionCategory.CARRO,
              },
              {
                key: TransactionCategory.CASA,
                value: TransactionCategory.CASA,
              },
              {
                key: TransactionCategory.VENDAS,
                value: TransactionCategory.VENDAS,
              },
              {
                key: TransactionCategory.OUTRO,
                value: TransactionCategory.OUTRO,
              },
            ]}
          />
        </View>
        <SubmitButton onPress={() => {}}>Enviar</SubmitButton>
      </View>
      <NavBar currentPage="register" />
    </View>
  );
}
