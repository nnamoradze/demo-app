
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { getPersons } from "../../api/api";
import { PersonItem } from "../../list_item/UsersRenderItem";
import { useEffect, useState } from "react";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function Home({navigation}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPersons();
      setData(result);
    };
    fetchData();
  }, []);
  
  return (
    <View style={styles.root}>
      <FlatList
        style={{ paddingBottom: 120 }}
        data={data.data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={ ()=> navigation.navigate('Details', {itemId: item.id})}>
            <PersonItem person={item} />
          </TouchableOpacity>
        )}
      />

      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: windowWidth,
    height: windowHeight,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#234d91",
    width: windowWidth,
    height: 50,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
