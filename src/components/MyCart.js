
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../common/Colors';
import React, { useEffect, useState } from "react";
const MyCart = ({ title, discription }) => {
    const [checked, setChecked] = useState(true)
    useEffect(() => {
    })
    return (
        <View style={styles.item}>
            <View style={{ flex: 2.5, justifyContent: "center", alignItems: "flex-end" }}>
                <View style={styles.CartImg}></View>
            </View>
            <View style={{ flex: 6.3, paddingVertical: 5, justifyContent: "space-evenly" }}>
                <Text >{title}
                </Text>
                <Text
                    style={{ fontSize: 12, color: Colors.slideClr }}>{discription}
                </Text>
                <TouchableOpacity style={styles.MsgBtn}>
                    <Text
                        style={{ color: Colors.white }}>Message
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.CheckMark}>
                <TouchableOpacity onPress={() => setChecked(!checked)}>
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
        </View>
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
        borderWidth: 0.5,
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