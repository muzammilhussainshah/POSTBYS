import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../common/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet, 
} from 'react-native';
const Payment = ({ title, discription, number }) => {
    const [checked, setChecked] = useState(true)
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.item}>
            <View style={{ flex: 1.5, justifyContent: "center", }}>
                {title == "Visa" &&
                    <View style={styles.visaView}>
                        <FastImage
                            style={{ height: "90%", width: "90%", }}
                            source={require("../assets/visa.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    </View>
                }
                {title == "Credit or debit" &&
                    <Octicons
                        name={"credit-card"}
                        size={40}
                        style={{ color: Colors.slideClr }}
                    />
                }
                {title == "Bank account" &&
                    <MaterialCommunityIcons
                        name={"bank-outline"}
                        size={40}
                        style={{ color: Colors.slideClr }}
                    />
                }
            </View>
            <View style={{ flex: 4.5, justifyContent: "center", }}>
                <Text
                    style={{ fontSize: 15 }}>{title}
                </Text>
                {number ?
                    <Text
                        style={styles.title}>{number}
                    </Text> :

                    <Text
                        style={styles.title}>{discription}
                    </Text>
                }
            </View>
            <View style={styles.Settings}>
                {title !== "Visa" ?
                    <MaterialIcons
                        name={"keyboard-arrow-right"}
                        size={30}
                        style={{ color: Colors.slideClr }}
                    /> :
                    <TouchableOpacity
                        style={styles.checkmark}
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
                }
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    item: {
        height: 60,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderRadius: 3,
        borderColor: Colors.gray,
        flexDirection: "row",
    },
    checkmark: {
        marginHorizontal: 5,
        borderRadius: 10,
        height: 20,
        width: 20
    },
    Settings: {
        flex: 5,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    switchBtn: {
        borderColor: Colors.shade,
        height: 22,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },
    title: {
        fontSize: 12,
        color: Colors.slideClr,
        letterSpacing: 0.5
    },
    visaView: {
        backgroundColor: Colors.black,
        justifyContent: "center",
        alignItems: "center",
        height: "50%",
        width: "80%",
        borderRadius: 5
    },
});
export default Payment;