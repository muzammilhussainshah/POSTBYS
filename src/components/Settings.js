import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FastImage from 'react-native-fast-image';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../common/Colors';
import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
const Setting = ({ title }) => {
    return (
        <TouchableOpacity
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
                    <Ionicons
                        name={"notifications"}
                        size={20}
                        style={{ color: Colors.slideClr }}
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
                <MaterialIcons
                    name={"keyboard-arrow-right"}
                    size={30}
                    style={{ color: Colors.slideClr }}
                />
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
        // backgroundColor: 'pink'
    }
});
export default Setting;