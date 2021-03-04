import Colors from '../common/Colors';
import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
const BasicInfo = ({ title, Data }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.item}>
            <View style={{ marginVertical: 5 }}>
                <Text
                    style={{ color: Colors.slideClr }}>{title}
                </Text>
            </View>
            <View>
                <Text
                    style={{ fontSize: 19, letterSpacing: 0.5 }}>{Data}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    item: {
        borderBottomWidth: 0.5,
        paddingVertical: 10,
        justifyContent: "space-evenly",
        borderColor: Colors.slideClr,
    },
});
export default BasicInfo;