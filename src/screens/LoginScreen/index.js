import Colors from "../../common/Colors";
import FastImage from 'react-native-fast-image';
import Input from "../../components/input";
import LoginBtn from "../../components/LoginBtn";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from "react-native-router-flux";
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
const LoginScreen = ({ }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordShow, setPasswordShow] = useState(true)
    return (
        <ScrollView   >
            <View
                style={{ height: screenHeight, paddingHorizontal: 15, }}>
                <View
                    style={{ flex: 1.5, justifyContent: "center" }}>
                    <FastImage
                        style={{ height: 65, width: 65, }}
                        source={require("../../assets/Group.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
                <View
                    style={{ flex: 7.3 }}>
                    <View
                        style={{ flex: 1.5, }}>
                        <Text
                            style={{ fontSize: 25 }}>Sign In
                        </Text>
                        <Text
                            style={{ fontSize: 17, color: Colors.slideClr }}>Sign In with email {`&`} password.
                        </Text>
                    </View>
                    <View
                        style={{ flex: 2.5, justifyContent: 'space-between', }}>
                        <View
                            style={{ borderWidth: 2, borderColor: Colors.lightGray, height: "44%" }}>
                            <Input
                                Email={true}
                                placeHolder={"Email Address"}
                                _func={(text) => setEmail(text)}
                            />
                        </View>
                        <View
                            style={styles.PassView}>
                            <Input
                                width={"80%"}
                                placeHolder={"Password"}
                                Password={true}
                                Show={true}
                                passwordShow={passwordShow}
                                _func={(text) => setPassword(text)}
                            />
                            <TouchableOpacity
                                style={{ width: "15%" }}
                                onPress={() => setPasswordShow(!passwordShow)}>
                                {passwordShow ?
                                    <Text >Show
                                    </Text> :
                                    <Text >Hide
                                    </Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 3, }}>
                        <TouchableOpacity
                            onPress={() => Actions.ForgotScreen()}
                            style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
                            <Text
                                style={{ fontSize: 16 }}>Forgot Password?
                            </Text>
                        </TouchableOpacity>
                        <View
                            style={{ flex: 6 }}>
                            <LoginBtn
                                name={"Sign In"}
                                backgroundColor={Colors.black}
                                textColor={Colors.white}
                                borderRadius={0} />
                        </View>
                    </View>
                    <View
                        style={{ flex: 3.2, }}>
                        <View
                            style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                            <View
                                style={{ borderWidth: 0.5, width: 100, borderColor: Colors.slideClr }}>
                            </View>
                        </View>
                        <View
                            style={{ flex: 8, justifyContent: "space-between" }}>
                            <TouchableOpacity
                                style={styles.SocialLogins}>
                                <MaterialCommunityIcons
                                    name={"facebook"}
                                    size={25}
                                    style={{ color: Colors.blue }} />
                                <Text
                                    style={{ fontSize: 15, marginLeft: 3 }}>Facebook
                                 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.SocialLogins}>
                                <FastImage
                                    style={{ height: 35, width: 35, }}
                                    source={require("../../assets/google.png")}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                                <Text
                                    style={{ fontSize: 16 }}>Google +
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={{ color: Colors.slideClr, fontSize: 15 }}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => Actions.SignUpScreen()}>
                        <Text style={{ fontSize: 16 }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    PassView: {
        height: "44%",
        borderWidth: 2,
        borderColor: Colors.lightGray,
        flexDirection: "row",
        alignItems: "center"
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
    }
});
export default LoginScreen;
