import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../store/action";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;


export default function Profile() {
  const profile = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  console.log(profile);

  function logout() {
    dispatch(remove());
  }

  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{ uri: profile.image }} />
      <Text style={styles.info_text}>{profile.id}</Text>
      <Text style={styles.info_text}>{profile.email}</Text>
      <Text style={styles.info_text}>{profile.gender}</Text>
      <Text style={styles.info_text}>
        {profile.firstName + " " + profile.lastName}
      </Text>

      <TouchableOpacity style={styles.logout} onPress={() => logout()}>
        <Text style={{ color: "white" }}>logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width:windowWidth,
    windowHeight:windowHeight,
    alignItems: "center",
  },
  logout: {
    width: "100%",
    height: 50,
    backgroundColor: "red",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10
  },
  info_text: {
    fontSize: 18,
  },
  image: {
    marginTop: 35,
    width: 200,
    height: 200,
  },
});
