import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../api/api";
import { save } from "../../store/action";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const fetchToken = async (email, password) => {
    const result = await login(email, password);
    dispatch(save(result.token, result));
  };

  return (
    <View style={styles.root}>
      <Image style={styles.logo} source={require("../../assets/favicon.png")} />
      <View style={styles.input_container}>
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.inputs}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => fetchToken(email, password)}
      >
        <Text style={styles.btn_text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: windowHeight,
    width: windowWidth,
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 45,
  },
  input_container: {
    marginTop: 75,
  },
  inputs: {
    marginTop: 10,
    padding: 7,
    width: windowWidth - 50,
    height: 50,
    borderRadius: 7,
    borderColor: "black",
    shadowRadius: 3,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth * 0.5,
    height: 50,
    backgroundColor: "#254270",
    marginTop: 150,
    borderRadius: 8,
  },
  btn_text: {
    fontSize: 18,
    color: "white",
  },
});
