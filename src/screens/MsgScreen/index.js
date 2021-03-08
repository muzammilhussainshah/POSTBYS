import Colors from "../../common/Colors";
import FastImage from "react-native-fast-image";
import DocumentPicker from 'react-native-document-picker';
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
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
const MsgScreen = ({ Name, Message, Date, discription }) => {
    console.log(height)
    const [message, setMessage] = useState('');
    const [imageUri, setImageUri] = useState("");
    const [messages, setMessages] = useState([]);
    const getDocument = async (stName) => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            });
            setImageUri(res.uri)
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
    }
    return (
        < ScrollView style={{}}>
            <View style={[styles.activeStatus, { justifyContent: "center", height: discription ? height / 6 : height / 11.5 }]}>
                <View style={styles.activeStatusLSide}>
                    <View
                        onPress={() => Actions.pop()}
                        style={styles.header}>
                        <TouchableOpacity
                            onPress={() => Actions.pop()}
                        >
                            <AntDesign
                                name={"arrowleft"}
                                size={30}
                                style={{ color: Colors.slideClr }} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            {Name == "Julian Dasilva" &&
                                <FastImage
                                    style={{ height: 40, width: 40, }}
                                    source={require("../../assets/Imageboy.png")}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            }
                            {Name == "Ronnie Pierce" &&
                                <FastImage
                                    style={{ height: 40, width: 40, }}
                                    source={require("../../assets/Imagea.png")}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            }
                            {Name == "Brianna Black" &&
                                <FastImage
                                    style={{ height: 40, width: 40, }}
                                    source={require("../../assets/Imageb.png")}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            }
                            {Name == "Aaron Rice" &&
                                <FastImage
                                    style={{ height: 40, width: 40, }}
                                    source={require("../../assets/Imagec.png")}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            }
                            {Name == "Pat Horton" &&
                                <FastImage
                                    style={{ height: 40, width: 40, }}
                                    source={require("../../assets/Imaged.png")}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            }
                            {Name == "Sonia Brown" &&
                                <FastImage
                                    style={{ height: 40, width: 40, }}
                                    source={require("../../assets/Imagee.png")}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            }
                            {Name == "Rhonda Pearson" &&
                                <FastImage
                                    style={{ height: 40, width: 40, }}
                                    source={require("../../assets/Imagef.png")}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            }
                            {Name == "Camila Hill" &&
                                <FastImage
                                    style={{ height: 40, width: 40, }}
                                    source={require("../../assets/Imagea.png")}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            }
                            <Text
                                style={{ fontSize: 16, marginLeft: 10 }}>{Name}
                            </Text>
                        </View>
                        <TouchableOpacity  >
                            <Entypo
                                name={"dots-three-vertical"}
                                size={20}
                                style={{ color: Colors.slideClr }} />
                        </TouchableOpacity>

                    </View>
                </View>
                {discription &&
                    <View style={styles.activeStatusRSide}>
                        <View style={{ flex: 1.5 }}>
                            {Name == "Ronnie Pierce" &&
                                < FastImage
                                    style={{ height: "100%", width: "100%", }}
                                    source={require("../../assets/Bitmapb.png")}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            }
                            {Name == "Leon Bennett" &&
                                < FastImage
                                    style={{ height: "100%", width: "100%", }}
                                    source={require("../../assets/Bitmapa.png")}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            }
                            {Name == "Sonia Brown" &&
                                < FastImage
                                    style={{ height: "100%", width: "100%", }}
                                    source={require("../../assets/Bitmapc.png")}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            }
                            {Name == "Pauline Fisher" &&
                                < FastImage
                                    style={{ height: "100%", width: "100%", }}
                                    source={require("../../assets/Bitmapd.png")}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            }
                            {Name == "Sharlene Edwards" &&
                                < FastImage
                                    style={{ height: "100%", width: "100%", }}
                                    source={require("../../assets/Bitmapa.png")}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            }
                            {Name == "International apparela" &&
                                < FastImage
                                    style={{ height: "100%", width: "100%", }}
                                    source={require("../../assets/Bitmapb.png")}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            }
                            {Name == "International apparel" &&
                                < FastImage
                                    style={{ height: "100%", width: "100%", }}
                                    source={require("../../assets/Bitmapc.png")}
                                    resizeMode={FastImage.resizeMode.contain}
                                />

                            }
                        </View>
                        <View style={{ flex: 8.5, justifyContent: "center" }}>
                            {discription &&
                                <Text style={{ color: Colors.slideClr }}>
                                    {discription.substring(0, 85)}
                                </Text>
                            }
                        </View>
                    </View>
                }
            </View>
            <ScrollView style={[styles.Chats, {
                height: discription ? height / 1.35 : height / 1.22
            }]}>
                <View style={styles.Timing}>
                    {Date ?
                        <Text>{Date}</Text> :
                        <Text>Today</Text>
                    }
                </View>
                <View
                    style={styles.Msg3}>
                    <View style={{ alignItems: "flex-end", marginVertical: 10, width: "100%" }}>
                        <View style={styles.msg2TextView}>
                            {discription ?
                                <Text style={styles.msg2Texta}>
                                    {discription}
                                </Text> :
                                <Text style={styles.msg2Texta}>
                                    Does anuone carry salt-and papper diamond parceis if 1ct + per stone? Message me with your offers and prices.,
                                </Text>
                            }
                        </View>
                    </View>
                </View>
                <View style={styles.Msg2}>
                    <View style={{ paddingBottom: 5, }}>
                        <View style={styles.msgTextView}>
                            {discription ?
                                <Text style={styles.msg2Text}>{discription}</Text> :
                                <Text style={styles.msg2Text}>
                                    Does anuone carry salt-and papper diamond parceis if 1ct + per stone? Message me with your offers and prices.,
                                </Text>
                            }
                        </View>
                    </View>
                </View>
                <View
                    style={styles.Msg3}>
                    <View style={{ alignItems: "flex-end", marginVertical: 10, width: "100%" }}>
                        <View style={styles.msg2TextView}>
                            {discription ?
                                <Text style={styles.msg2Texta}>
                                    {discription}
                                </Text> :
                                <Text style={styles.msg2Texta}>
                                    Does anuone carry salt-and papper diamond parceis if 1ct + per stone? Message me with your offers and prices.,
                                </Text>
                            }
                        </View>
                    </View>

                </View>
                {/* } */}
                {messages.map((name, index) => {
                    return (
                        <View
                            key={name + index}
                            style={styles.Msg3}>
                            <View style={{ paddingHorizontal: 5,   paddingBottom: 5, alignItems: "flex-end" }}>
                                <View style={styles.msg2TextView}>
                                        <Text style={styles.msg2Texta}>
                                            {name}
                                        </Text>  
                                </View>
                            </View>

                        </View>
                    )
                })}
            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={() => getDocument("image1Uri")}
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <AntDesign
                        name="pluscircle"
                        style={{ fontSize: 23 }} />
                </TouchableOpacity>
                <View style={{ flex: 8, justifyContent: "center", }}>
                    <TextInput
                        style={styles.Input}
                        placeholder="Type your message"
                        onChangeText={text => setMessage(text)}
                        value={message}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        if (message == "" && imageUri == "") {
                            alert("message box is empty")
                        } else {
                            let messageClone = messages;
                             messageClone.push(message);
                            setMessages(messageClone);
                            setMessage("")
                        }
                    }}
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <FontAwesome
                        name="send"
                        style={{ fontSize: 25 }} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    activeStatus: {
        borderBottomWidth: 0.5,
        borderTopColor: Colors.shade,
        borderBottomColor: Colors.shade,
        paddingHorizontal: 20
    },
    header: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        justifyContent: "space-between"
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
        paddingHorizontal: 15,
    },
    Msg1: { flex: 3.3 },
    Msg2: {
        marginVertical: 10
    },
    Msg3: {
        marginVertical: 1,
    },
    msgTextView: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: Colors.lightGray
    },
    msgText: {
        letterSpacing: 1,
        paddingHorizontal: 10,
        paddingVertical: 15,
        color: Colors.fontClr
    },
    footer: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        height: height / 11,
        borderTopWidth: 0.5
    },
    msg2TextView: {
        maxWidth: "75%",
        backgroundColor: "#e4f1ff",
        backgroundColor: Colors.black,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    Input: {
        height: 25,
        fontSize: 14,
        paddingVertical: 0,
        borderLeftColor: Colors.slideClr,
        borderLeftWidth: 0.9,
        borderColor: Colors.shade,
        backgroundColor: Colors.white,
        paddingHorizontal: 10,
    },
    Timing: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    msg2Text: {
        letterSpacing: 1,
        fontSize: 14.5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: Colors.fontClr
    },
    msg2Texta: {
        letterSpacing: 1,
        fontSize: 14.5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: Colors.white
    }
});
export default MsgScreen;