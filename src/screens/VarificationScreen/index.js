import Colors from "../../common/Colors";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Input from "../../components/inputNumber";
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
const VarificationScreen = () => {
    const [digit1, setDigit1] = useState("")
    const [digit2, setDigit2] = useState("")
    const [digit3, setDigit3] = useState("")
    const [digit4, setDigit4] = useState("")
    const [digit5, setDigit5] = useState("")
    const [digit6, setDigit6] = useState("")
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
                            style={{ fontSize: 25 }}>Varification Code
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text
                                style={{ fontSize: 17, color: Colors.slideClr }}>Code send to
                        </Text>
                            <Text
                                style={{ fontSize: 17 }}> jordan_brown@gmail.com
                        </Text>
                        </View>
                    </View>
                    <View
                        style={{ flex: 8.2 }}>
                        <View style={styles.VarificationCodeView}>
                            <View
                                style={styles.VarificationCode}>
                                <Input
                                    _func={() => setDigit1(digit1)}
                                    maxLength={1}
                                />
                            </View>
                            <View
                                style={styles.VarificationCode}>
                                <Input
                                    _func={() => setDigit2(digit2)}
                                    maxLength={1}
                                />
                            </View>
                            <View
                                style={styles.VarificationCode}>
                                <Input
                                    _func={() => setDigit3(digit3)}
                                    maxLength={1}
                                />
                            </View>
                            <View
                                style={styles.VarificationCode}>
                                <Input
                                    _func={() => setDigit4(digit4)}
                                    maxLength={1}
                                />
                            </View>
                            <View
                                style={styles.VarificationCode}>
                                <Input
                                    _func={() => setDigit5(digit5)}
                                    maxLength={1}
                                />
                            </View>
                            <View
                                style={styles.VarificationCode}>
                                <Input
                                    _func={() => setDigit6(digit6)}
                                    maxLength={1}
                                />
                            </View>
                        </View>
                        <LoginBtn
                            name={"Verify"}
                            backgroundColor={Colors.black}
                            textColor={Colors.white}
                            borderRadius={0} />
                        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: "5%" }}>
                            <Text
                                style={{ fontSize: 17, color: Colors.slideClr }}>Resend Code
                        </Text>
                            <Text
                                style={{ fontSize: 17 }}> (45)
                        </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    VarificationCodeView: {
        flexDirection: "row",
        height: 60,
        justifyContent: "space-between",
        marginBottom: 20
    },
    VarificationCode: {
        width: "15%",
        borderWidth: 1,
        borderColor: Colors.slideClr,
        alignItems: "center"
    },
});
export default VarificationScreen;
