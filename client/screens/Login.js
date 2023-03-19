import { View , Text, SafeAreaView, ScrollView,} from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";


const Login = () => {
    const navigation = useNavigation();
    const data = route?.params?.param;
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
    return(
<SafeAreaView>
<ScrollView>
<View>
    <Text></Text>
</View>
</ScrollView>
</SafeAreaView>
    );
};
export default Login;