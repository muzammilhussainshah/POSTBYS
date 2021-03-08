import Colors from "../../common/Colors";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Input from "../../components/input";
import { Actions } from "react-native-router-flux";
import LoginBtn from "../../components/LoginBtn";
import React, {
    useState
} from "react";
import {
    Text,
    StyleSheet,
    Dimensions,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
const screenHeight = Dimensions.get('window').height - 24;
const ForgotScreen = ({ }) => {
    const [email, setEmail] = useState("")
    return (
        <ScrollView   >
            <View
                style={{ height: screenHeight, paddingHorizontal: 15, }}>
                <TouchableOpacity
                    onPress={() => Actions.pop()}
                    style={{ flex: 1.5, justifyContent: "center" }}>
                    <AntDesign
                        name={"arrowleft"}
                        size={30}
                        style={{ color: Colors.slideClr }} />
                </TouchableOpacity>
                <View
                    style={{ flex: 8.5, }}>
                    <View
                        style={{ flex: 1.5, }}>
                        <Text
                            style={{ fontSize: 25 }}>Forgot Password?
                        </Text>
                        <Text
                            style={{ fontSize: 17, color: Colors.slideClr }}>Enter email address.
                        </Text>
                    </View>
                    <View
                        style={{ flex: 8.2 }}>

                        <View
                            style={styles.inputs}>
                            <Input
                                Email={true}
                                placeHolder={"Email Address"}
                                _func={(text) => setEmail(text)}
                            />
                        </View>
                        <LoginBtn
                            _func={()=> Actions.NewPassScreen()}
                            name={"Send"}
                            backgroundColor={Colors.black}
                            textColor={Colors.white}
                            borderRadius={0} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    PassView: {
        height: "28%",
        borderWidth: 2,
        borderColor: Colors.lightGray,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 7,
    },
    SocialLogins: {
        height: "45%",
        flexDirection: "row",
        backgroundColor: Colors.lightGray,
        justifyContent: "center",
        alignItems: "center"
    },
    footer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    inputs: {
        borderWidth: 2,
        marginBottom: 15,
        borderColor: Colors.lightGray,
        height: 55,
    }
});
export default ForgotScreen;
