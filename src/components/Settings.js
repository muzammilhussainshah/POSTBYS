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
const Setting = ({ title }) => {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <TouchableOpacity
            onPress={() => {
                { title == "Transactions" && Actions.TransactionScreen() }
                { title == "About" && Actions.AboutScreen()   }
                { title == "Support" && Actions.SupportScreen()   }
                { title == "Location" && Actions.LocationScreen()   }
                { title == "Payment" && Actions.PaymentmethodScreen()   }
            }}
            activeOpacity={0.8}
            style={styles.item}>
            <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                {title == "Notifications" &&
                    <Ionicons
                        name={"notifications"}
                        size={20}
                        style={{ color: Colors.slideClr }}
                    />
                }
                {title == "Payment" &&
                    <Fontisto
                        name={"dollar"}
                        size={20}
                        style={{ color: Colors.slideClr }}
                    />
                }
                {title == "Transactions" &&
                    <FontAwesome
                        name={"money"}
                        size={20}
                        style={{ color: Colors.slideClr }}
                    />
                }
                {title == "Location" &&
                    <Ionicons
                        name={"md-location-sharp"}
                        size={25}
                        style={{ color: Colors.slideClr }}
                    />
                }
                {title == "Password" &&
                    <FontAwesome5
                        name={"star-of-life"}
                        size={20}
                        style={{ color: Colors.slideClr }}
                    />
                }
                {title == "Support" &&
                    <Ionicons
                        name={"md-chatbox-ellipses-sharp"}
                        size={20}
                        style={{ color: Colors.slideClr }}
                    />
                }
                {title == "About" &&
                    <FastImage
                        style={{ height: 20, width: 20, }}
                        source={require("../assets/Group.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                }
                {title == "Sign Out" &&
                    <Entypo
                        name={"log-out"}
                        size={20}
                        style={{ color: Colors.slideClr }}
                    />
                }
            </View>
            <View style={{ flex: 4.5, justifyContent: "center" }}>
                <Text
                    style={{ fontSize: 17 }}>{title}
                </Text>
            </View>
            <View style={styles.Settings}>
                {title == "Location" &&
                    <View style={{ flexDirection: "row" }}>
                        <FastImage
                            style={{ height: 20, width: 20, }}
                            source={require("../assets/flag.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                        <Text
                            style={{ marginLeft: 10, color: Colors.slideClr }}>Pakistan,Asia
                        </Text>
                    </View>
                }
                {title == "Notifications" ?
                    <View style={[styles.switchBtn, { backgroundColor: Colors.green }]} >
                        <Switch
                            trackColor={{ false: Colors.green, true: Colors.green }}
                            thumbColor={isEnabled ? Colors.white : Colors.white}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View> :
                    <MaterialIcons
                        name={"keyboard-arrow-right"}
                        size={30}
                        style={{ color: Colors.slideClr }}
                    />
                }
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    item: {
        height: 50,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderRadius: 3,
        borderColor: Colors.gray,
        flexDirection: "row",
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
    }
});
export default Setting;