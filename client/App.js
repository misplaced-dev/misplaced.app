import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import PostPage from "./screens/PostPage";
import Profile from "./screens/Profile";
import NotFound404 from "./screens/NotFound404";
import NewPost from "./screens/NewPost";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home | Misplaced" component={Home} />
          <Stack.Screen name="Login | Misplaced" component={Login} />
          <Stack.Screen name="Signup | Misplaced" component={Signup} />
          <Stack.Screen name="Post Page | Misplaced" component={PostPage} />
          <Stack.Screen name="New Post | Misplaced" component={NewPost} />
          <Stack.Screen name="Profile | Misplaced" component={Profile} />
          <Stack.Screen name="Not Found | Misplaced" component={NotFound404} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}