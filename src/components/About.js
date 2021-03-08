import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../common/Colors';
import React  from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Switch
} from 'react-native';
const About = ({ title }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.item}>
            <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                {title == "Rate Us" &&
                    <View style={{ borderBottomWidth: 1,borderBottomColor:Colors.slideClr }}>
                        <AntDesign
                            name={"edit"}
                            size={20}
                            style={{ color: Colors.slideClr }}
                        />
                    </View>
                }
                {title == "Privacy Policy" &&
                    <AntDesign
                        name={"filetext1"}
                        size={20}
                        style={{ color: Colors.slideClr, transform: [{ rotateY: '180deg' }] }}
                    />
                }
                {title == "Trems of services" &&
                    <AntDesign
                        name={"filetext1"}
                        size={20}
                        style={{ color: Colors.slideClr, transform: [{ rotateY: '180deg' }] }}
                    />
                }
                {title == "FAQs" &&
                    <Ionicons
                        name={"md-chatbox-ellipses-sharp"}
                        size={20}
                        style={{ color: Colors.slideClr }}
                    />
                }
                {title == "Licenses" &&
                    <AntDesign
                        name={"filetext1"}
                        size={20}
                        style={{ color: Colors.slideClr, transform: [{ rotateY: '180deg' }] }}
                    />
                }
            </View>
            <View style={{ flex: 4.5, justifyContent: "center" }}>
                <Text
                    style={{ fontSize: 17 }}>{title}
                </Text>
            </View>
            <View style={styles.Settings}>

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
        height: 60,
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
export default About;