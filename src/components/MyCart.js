
import FastImage from 'react-native-fast-image';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../common/Colors';
import React, { useState } from "react";
import { Actions } from 'react-native-router-flux';
const MyCart = ({ Name, discription }) => {
    const [checked, setChecked] = useState(true)
    const routChange = (rout) => {
        Actions[rout]({ Name: Name, discription: discription })
    }
    return (
        <TouchableOpacity
            onPress={() => routChange("MsgScreen")}
            style={styles.item}>
            <View style={{ flex: 2.5, justifyContent: "center", alignItems: "flex-end" }}>
                <View style={styles.CartImg}>
                    {Name == "Ronnie Pierce" &&
                        < FastImage
                            style={{ height: "100%", width: "100%", }}
                            source={require("../assets/Bitmapb.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {Name == "Leon Bennett" &&
                        < FastImage
                            style={{ height: "80%", width: "80%", }}
                            source={require("../assets/Bitmapa.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {Name == "Sonia Brown" &&
                        < FastImage
                            style={{ height: "90%", width: "90%", }}
                            source={require("../assets/Bitmapc.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {Name == "Pauline Fisher" &&
                        < FastImage
                            style={{ height: "100%", width: "100%", }}
                            source={require("../assets/Bitmapd.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {Name == "Sharlene Edwards" &&
                        < FastImage
                            style={{ height: "85%", width: "85%", }}
                            source={require("../assets/Bitmapa.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {Name == "International apparela" &&
                        < FastImage
                            style={{ height: "100%", width: "100%", }}
                            source={require("../assets/Bitmapb.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {Name == "International apparel" &&
                        < FastImage
                            style={{ height: "90%", width: "90%", }}
                            source={require("../assets/Bitmapc.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                </View>
            </View>
            <View style={{ flex: 6.3, paddingVertical: 5, justifyContent: "space-evenly" }}>
                <View style={{ flex: 2.5,  }}>

                    <Text >{Name}
                    </Text>
                </View>
                <View style={{ flex: 4.5,  }}>


                    <Text
                        style={{ fontSize: 12, color: Colors.slideClr }}>{discription}
                    </Text>
                </View>
                <View style={{ flex:4, justifyContent:"flex-end" }}>


                    <TouchableOpacity
                        onPress={() => routChange("MsgScreen")}
                        style={styles.MsgBtn}>
                        <Text
                            style={{ color: Colors.white }}>Message
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.CheckMark}>
                <TouchableOpacity
                    onPress={() => setChecked(!checked)}>
                    {checked ?
                        <AntDesign
                            name={"checkcircle"}
                            size={20}
                        /> :
                        <FontAwesome
                            name={"circle-thin"}
                            size={20}
                        />
                    }
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    item: {

        height: 120,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderRadius: 3,
        borderColor: Colors.slideClr,
        flexDirection: "row",

    },
    CartImg: {
        height: "85%",
        width: '80%',
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: Colors.slideClr,
        borderWidth: 1,
        borderRadius: 10
    },
    MsgBtn: {
        height: 35,
        width: 145,
        backgroundColor: Colors.black,
        justifyContent: "center",
        alignItems: "center"
    },
    CheckMark: {
        flex: 1.2,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingVertical: 15
    }
});
export default MyCart;