import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import { getPersonDetails } from "../../api/api";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function Details({ route }) {
  const { itemId } = route.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPersonDetails(itemId);
      setData(result);
    };
    fetchData();
  }, []);

  console.log(data.avatar);

  return (
    <View style={styles.root}>
      <Image style={styles.photo} source={{ uri: data.avatar }} />
      <View style={styles.container}>
        <Text style={styles.text}>ID: {data.id}</Text>
        <Text style={styles.text}>Full name: {data.first_name + " " + data.last_name}</Text>
        <Text style={styles.text}>Email: {data.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: windowHeight,
    width: windowWidth,
    alignItems: "center",
  },
  photo: {
    width: 220,
    height: 220,
    borderRadius: 20,
    marginTop: 25,
    borderRadius: 20,
    borderColor:"black",
    borderWidth:5
  },
  container:{
    marginTop:50,
    width:windowWidth - 50
  },
  text:{
    fontSize:18,
    fontWeight:"bold"
  }
});
