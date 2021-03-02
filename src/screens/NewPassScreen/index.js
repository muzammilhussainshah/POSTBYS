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
const NewPassScreen = ({ }) => {
    const [newPass, setNewPass] = useState("")
    const [newPasswordShow, setNewPasswordShow] = useState(true)
    const [confirmNewPass, setConfirmNewPass] = useState("")
    const [confirmNewPasswordShow, setConfirmNewPasswordShow] = useState(true)
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
                            style={{ fontSize: 25 }}>New Password
                        </Text>
                        <Text
                            style={{ fontSize: 17, color: Colors.slideClr }}>Set your new password.
                        </Text>
                    </View>
                    <View
                        style={{ flex: 8.2 }}>

                        <View
                            style={styles.NewPassView}>
                            <Input
                                width={"80%"}
                                placeHolder={"New Password"}
                                Password={true}
                                Show={true}
                                passwordShow={newPasswordShow}
                                _func={(text) => setNewPass(text)}
                            />
                            <TouchableOpacity
                                style={{ width: "15%" }}
                                onPress={() => setNewPasswordShow(!newPasswordShow)}>
                                {newPasswordShow ?
                                    <Text >Show
                                    </Text> :
                                    <Text >Hide
                                    </Text>
                                }
                            </TouchableOpacity>
                        </View>
                        <View
                            style={styles.ConfirmNewPassView}>
                            <Input
                                width={"80%"}
                                placeHolder={"Confirm New Password"}
                                Password={true}
                                Show={true}
                                passwordShow={confirmNewPasswordShow}
                                _func={(text) => setConfirmNewPass(text)}
                            />
                            <TouchableOpacity
                                style={{ width: "15%" }}
                                onPress={() => setConfirmNewPasswordShow(!confirmNewPasswordShow)}>
                                {confirmNewPasswordShow ?
                                    <Text >Show
                                    </Text> :
                                    <Text >Hide
                                    </Text>
                                }
                            </TouchableOpacity>
                        </View>
                        <LoginBtn
                            _func={()=> Actions.Home()}
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
    NewPassView: {
        height: 60,
        borderWidth: 2,
        borderColor: Colors.lightGray,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 7,
    },
    ConfirmNewPassView: {
        height: 60,
        borderWidth: 2,
        borderColor: Colors.lightGray,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
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
export default NewPassScreen;
