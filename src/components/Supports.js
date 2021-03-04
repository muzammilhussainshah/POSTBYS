import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from "react-native-router-flux";
import FastImage from 'react-native-fast-image';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../common/Colors';
import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Switch
} from 'react-native';
const Supports = ({ title }) => {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <TouchableOpacity
            onPress={() => {
                { title == "About" && Actions.AboutScreen() }
                { title == "Support" && Actions.SupportScreen() }
                { title == "Payment" && Actions.PaymentmethodScreen() }
            }}
            activeOpacity={0.8}
            style={styles.item}>
            <View style={{ justifyContent: "center" }}>
                <Text
                    style={{ fontSize: 17 }}>{title}
                </Text>
            </View>
            {/* <View style={styles.Settings}> */}

                <MaterialIcons
                    name={"keyboard-arrow-right"}
                    size={30}
                    style={{ color: Colors.slideClr }}
                />

            {/* </View> */}
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    item: {
        height: 50,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderRadius: 3,
        justifyContent:"space-between",
        borderColor: Colors.gray,
        flexDirection: "row",
    },
    Settings: {
        // flex: 5,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "blue",
        // justifyContent: "flex-end"
    },
    switchBtn: {
        borderColor: Colors.shade,
        height: 22,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    }
});
export default Supports;