import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import PostPage from "./screens/PostPage";
import Profile from "./screens/Profile";
import NotFound404 from "./screens/NotFound404";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer screenOptions={{  headerShown: false  }}>
        <Stack.Navigator>
          <Stack.Screen name="Home | Misplaced" component={Home} />
          <Stack.Screen name="Login | Misplaced" component={Login} />
          <Stack.Screen name="Signup | Misplaced" component={Signup} />
          <Stack.Screen name="PostPage | Misplaced" component={PostPage} />
          <Stack.Screen name="Profile | Misplaced" component={Profile} />
          <Stack.Screen name="Not Found | Misplaced" component={NotFound404} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}
