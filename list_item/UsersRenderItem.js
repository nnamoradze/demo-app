import { StyleSheet, Text, View, Image } from "react-native";

export const PersonItem = ({ person }) => (
  <View style={styles.root}>
    <Image style={styles.image} source={{ uri: person.avatar }} />
    <Text style={styles.text}>
      {person.first_name + " " + person.last_name}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  root: {
    margin:5,
    padding:5,
    borderRadius:7,
    borderColor:"black",
    borderWidth:2,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginStart:40,
    flex: 2,
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  image: {
    margin:10,
    width: 100,
    height: 100,
    borderRadius: 10,
    flex: 1,
  },
});
