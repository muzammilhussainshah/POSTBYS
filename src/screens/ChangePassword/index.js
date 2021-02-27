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
const ChangePassword = ({ }) => { 
    const [oldPass, setOldPass] = useState("")
    const [newPass, setNewPass] = useState("")
    const [againNewPass, setAgainNewPass] = useState("")
    const [oldPasswordShow, setOldPasswordShow] = useState(true)
    const [newPasswordShow, setNewPasswordShow] = useState(true)
    const [againNewPasswordShow, setAgainNewPasswordShow] = useState(true)
    return (
        <ScrollView   >
            <View
                style={{ height: screenHeight, paddingHorizontal: 15, paddingVertical: 10 }}>
                <View
                    onPress={() => Actions.pop()}
                    style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                    <TouchableOpacity style={{ flex: 2 }}>
                        <AntDesign
                            name={"arrowleft"}
                            size={30}
                            style={{ color: Colors.slideClr }} />
                    </TouchableOpacity>
                    <View style={{ flex: 8 }}>
                        <Text
                            style={{ fontSize: 22 }}>Change Password
                        </Text>
                    </View>
                </View>
                <View
                    style={{ flex: 9 }}>
                    <View
                        style={styles.PassView}>
                        <Input
                            width={"80%"}
                            placeHolder={"Old Password"}
                            Password={true}
                            Show={true}
                            passwordShow={oldPasswordShow}
                            _func={(text) => setOldPass(text)}
                        />
                        <TouchableOpacity
                            style={{ width: "15%" }}
                            onPress={() => setOldPasswordShow(!oldPasswordShow)}>
                            {oldPasswordShow ?
                                <Text >Show
                                    </Text> :
                                <Text >Hide
                                    </Text>
                            }
                        </TouchableOpacity>
                    </View>
                    <View
                        style={styles.PassView}>
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
                        style={styles.PassView}>
                        <Input
                            width={"80%"}
                            placeHolder={"again New Password"}
                            Password={true}
                            Show={true}
                            passwordShow={againNewPasswordShow}
                            _func={(text) => setAgainNewPass(text)}
                        />
                        <TouchableOpacity
                            style={{ width: "15%" }}
                            onPress={() => setAgainNewPasswordShow(!againNewPasswordShow)}>
                            {againNewPasswordShow ?
                                <Text >Show
                                    </Text> :
                                <Text >Hide
                                    </Text>
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:"25%"}}>
                        <LoginBtn
                            name={"Save"}
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
        height: 60,
        borderWidth: 2,
        borderColor: Colors.lightGray,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 7,
    },
    ConfirmPassView: {
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
export default ChangePassword;
