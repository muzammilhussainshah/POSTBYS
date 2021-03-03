// import PrivacyHeader from "../../components/header/PrivacyHeader";
import Colors from "../../common/Colors";
import FastImage from "react-native-fast-image";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Actions } from 'react-native-router-flux';
import React, {
    useState,
} from "react";
import {
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    ImageBackground,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
const height = Dimensions.get('window').height - 23;
const MsgScreen = () => {
    console.log(height)
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    return (
        <ImageBackground
            source={require("../../assets/Group.png")}
            style={{ width: "100%", }}>
            < ScrollView style={{ backgroundColor: "green" }}>

                <View style={styles.activeStatus}>
                    <View style={styles.activeStatusLSide}>
                        <View style={styles.activeBtnView}>
                            <View style={styles.activeBtn}></View>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.Recipient()
                            }}
                            style={styles.userName}>
                            <Text style={{ color: Colors.fontClr, fontWeight: "bold", fontSize: 13 }}>Aaronjawel
                        </Text>
                        </TouchableOpacity>
                        <View style={styles.status}>
                            <Text style={styles.statusText}>Online
                        </Text>
                        </View>
                    </View>
                    <View style={styles.activeStatusRSide}>
                        <Text style={styles.statusText}>Last seen a while ago
                    </Text>
                    </View>
                </View>
                <ScrollView style={styles.Chats}>
                    <View style={styles.Msg2}>
                        <View style={{ flex: 1.2, alignItems: "center" }}>
                            <View style={{ height: 34, width: 34, borderRadius: 17 }}>
                                <FastImage
                                    style={{ height: "100%", width: "100%", }}
                                    source={require("../../assets/Group.png")}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 8.8, paddingHorizontal: 5, paddingBottom: 5 }}>
                            <View style={styles.msgTextView}>
                                <Text style={styles.msg2Text}>Hi, how’s life? this pandemic is
                                really getting on my nerves. I
                                wish i could go back to the
                                happy, safe life where i could go
                                on a vacation and meet and hug
                                my family. I don’t know what to
                            do. The more i think,{"\n"}
                            more it’s diffcult. </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={styles.Msg3}>
                        <View style={{ flex: 8.8, paddingHorizontal: 5, paddingBottom: 5, alignItems: "flex-end" }}>
                            <View style={styles.msg2TextView}>
                                <Text style={styles.msg2Text}>
                                    Hey brother, don’t be sad
                                    it’s all gonna be alright.
                                    Just try to relax yourself
                                    and have fun.
                             </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1.2, alignItems: "flex-end" }}>
                            <View style={{ height: 34, width: 34, borderRadius: 17 }}>
                                <FastImage
                                    style={{ height: "100%", width: "100%", }}
                                    source={require("../../assets/Group.png")}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                        </View>
                    </View>
                    {messages.map((name, index) => {
                        return (
                            <View
                                key={name + index}
                                style={styles.Msg3}>
                                <View style={{ flex: 8.8, paddingHorizontal: 5, paddingBottom: 5, alignItems: "flex-end" }}>
                                    <View style={styles.msg2TextView}>
                                        <Text style={styles.msg2Text}>
                                            {name}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1.2, alignItems: "flex-end" }}>
                                    <View style={{ height: 34, width: 34, borderRadius: 17 }}>
                                        <FastImage
                                            style={{ height: "100%", width: "100%", }}
                                            source={require("../../assets/Group.png")}
                                            resizeMode={FastImage.resizeMode.contain}
                                        />
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
                <View style={{ flexDirection: 'row', paddingHorizontal: 15, height: height / 11 }}>
                    <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Entypo
                            name="emoji-happy"
                            style={{ fontSize: 25, color: Colors.green }} />
                    </TouchableOpacity>
                    <View style={{ flex: 7, justifyContent: "center", }}>
                        <TextInput
                            style={{
                                height: 50,
                                fontSize: 14,
                                borderWidth: 1,
                                borderColor: Colors.shade,
                                backgroundColor: Colors.white,
                                borderRadius: 10,
                                paddingHorizontal: 10,
                            }}
                            placeholder="Type your message"
                            onChangeText={text => setMessage(text)}
                            value={message}
                        />
                    </View>
                    <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <MaterialCommunityIcons
                            name="attachment"
                            style={{ fontSize: 30, color: Colors.green }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            if (message == "") {
                                alert("message box is empty")
                            } else {
                                let messageClone = messages;
                                messageClone.push(message);
                                setMessages(messageClone);
                                setMessage("")
                            }
                        }}
                        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons
                            name="send"
                            style={{ fontSize: 25, color: Colors.green }} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground >
    )
};
const styles = StyleSheet.create({
    activeStatus: {
        height: height / 11,
        backgroundColor: 'red',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: Colors.shade,
        borderBottomColor: Colors.shade,
        flexDirection: "row",
        paddingHorizontal: 20
    },
    activeStatusLSide: {
        flex: 5,
        alignItems: "center",
        height: "100%",
        flexDirection: "row"
    },
    activeStatusRSide: {
        flex: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    activeBtnView: {
        flex: 1,
        justifyContent: "center"
    },
    userName: {
        flex: 5,
        justifyContent: "center"
    },
    status: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
        height: 10,
        borderLeftColor: Colors.fontClr,
        borderLeftWidth: 1
    },
    activeBtn: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: Colors.green
    },
    statusText: {
        color: Colors.fontClr,
        fontSize: 11,
        letterSpacing: 0.5
    },
    Chats: {
        height: height / 1.52,
        paddingHorizontal: 20,
        marginTop: 10

    },
    Msg1: { flex: 3.3 },
    Msg2: {
        flexDirection: "row",
        marginVertical: 1
    },
    Msg3: {
        marginVertical: 1,
        flexDirection: "row",
    },
    msgTextView: {
        borderWidth: 1,
        borderColor: Colors.shade,
        borderRadius: 3,
        backgroundColor: Colors.white
    },
    msgText: {
        letterSpacing: 1,
        paddingHorizontal: 10,
        paddingVertical: 15,
        color: Colors.fontClr
    },
    msg2TextView: {
        width: "70%",
        backgroundColor: "#e4f1ff",
        borderWidth: 1,
        borderColor: Colors.shade,
        borderRadius: 3
    },
    msg2Text: {
        letterSpacing: 1,
        fontSize: 14.5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: Colors.fontClr
    }
});
export default MsgScreen;