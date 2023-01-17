import * as React from "react";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import Details from "./screens/DetailsScreen";
import Login from "./screens/LoginScreen";
import { useSelector } from "react-redux";

const homeName = "Home";
const profileName = "Profile";
const detailsName = "Details";
const loginName = "Login";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();

function HomeStackScreen({ navigation, route }) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName === "Details") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({
        tabBarStyle: {
          activeTintColor: "black",
          inactiveTintColor: "grey",
        },
      });
    }
  }, [navigation, route]);

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
}

function LoginStackScreen({ navigation, route }) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    console.log(routeName);

    navigation.setOptions({ tabBarStyle: { display: "none" } });
  }, [navigation, route]);

  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="Home" component={Home} />
    </LoginStack.Navigator>
  );
}

function MainContainer() {
    // const token = "toaken"
  const token = useSelector((state) => state.token);

  console.log(token);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === profileName) {
              iconName = focused ? "list" : "list-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "grey",
        }}
      >
        {token !== "" ? (
          <>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Profile" component={Profile} />
          </>
        ) : (
          <Tab.Screen name="Login" component={LoginStackScreen} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MainContainer;
