import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { FlatList } from "react-native";

export default function App() {
  const [name, setName] = useState("Paul");
  const [person, setPerson] = useState({ age: 12, name: "Baddy" });
  const [nameText, setNameText] = useState({ name: "Baller", age: 33 });
  // list
  const [people, setPeople] = useState([
    { name: "paul", id: "1" },
    { name: "Ulysse", id: "2" },
    { name: "Derek", id: "3" },
    { name: "Brandon", id: "4" },
    { name: "Brand", id: "5" },
  ]);

  const clickHandler = () => {
    setName("BadMan");
    setPerson({ age: 32, name: "Certified LVB" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>My name is {name}</Text>
        <Text style={styles.boldText}>
          My age is {person.age} and my name is {person.name}
        </Text>
      </View>
      <View style={styles.buttonStyles}>
        <Button title="Update State" onPress={clickHandler} />
      </View>
      <View>
        <Text style={styles.boldText}>
          name:{nameText.name},age:{nameText.age}
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Name"
          onChangeText={(val) =>
            setNameText((previousText) => ({ ...previousText, name: val }))
          }
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Age"
          keyboardType="numeric"
          onChangeText={(val) =>
            setNameText((prevState) => ({ ...prevState, age: val }))
          }
        ></TextInput>
      </View>
      {/* <ScrollView>
        <View style={styles.listStyle}>
          {people.map((e) => {
            return (
              <Text style={styles.textStyle} key={e.key}>
                {e.name}
              </Text>
            );
          })}
        </View>
      </ScrollView> */}
      {
        <FlatList
          numColumns={3}
          data={people}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.textStyle}>{item.name}</Text>
          )}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: 200,
    margin: 2,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
    marginTop: 10,
  },
  buttonStyles: {
    marginTop: 10,
    backgroundColor: "blue",
  },
  listStyle: {
    marginTop: 10,

    alignItems: "start",
    display: "flex",
    flexDirection: "column",
  },
  textStyle: {
    marginTop: 40,
    padding: 30,
    backgroundColor: "pink",
    width: "100vw",
    marginHorizontal:10,

    display: "flex",

    fontSize: 24,
  },
});
