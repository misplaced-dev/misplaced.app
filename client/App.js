import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import PostPage from "./screens/PostPage";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home | Misplaced" component={Home} />
          <Stack.Screen name="Login | Misplaced" component={Login} />
          <Stack.Screen name="SignUp | Misplaced" component={Signup} />
          <Stack.Screen name="PostPage | Misplaced" component={PostPage} />
          <Stack.Screen name="Profile | Misplaced" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}
