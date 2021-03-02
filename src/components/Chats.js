import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../common/Colors';
import React from "react";
const Chats = ({ Name, Message, Date }) => {
    return (
        <TouchableOpacity style={styles.item}>
            <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                <View style={styles.profilePhoto}></View>
            </View>
            <View style={{ flex: 6, justifyContent: "center" }}>
                <Text
                    style={{ fontSize: 17 }}>{Name}
                </Text>
                <Text
                    style={{ fontSize: 14, color: Colors.slideClr }}>{Message}
                </Text>
            </View>
            <View style={{ flex: 2, alignItems: "flex-end", paddingTop: 15 }}>
                <Text
                    style={{ fontSize: 13 }}>{Date}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    item: {
        height: 80,
        flexDirection: "row",
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderRadius: 3,
        borderColor: Colors.gray,
        flexDirection: "row",
    },
    profilePhoto: {
        width: "80%",
        height: "80%",
        borderRadius: 80,
        backgroundColor: Colors.gray
    }
});
export default Chats;