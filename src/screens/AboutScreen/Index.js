import React from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import About from "../../components/About";
import FastImage from 'react-native-fast-image';
import Colors from '../../common/Colors';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { Actions } from "react-native-router-flux";
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: "Rate Us"

    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: "Privacy Policy"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: "Trems of services"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: "FAQs"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: "Licenses"
    },
];
const AboutScreen = ({ }) => {
    const renderItem = ({ item }) => (
        <About title={item.title} />
    );
    return (
        <View style={{ flex: 1 }}>
            <View
                onPress={() => Actions.pop()}
                style={styles.header}>
                <TouchableOpacity 
                onPress={()=>Actions.pop()}
                style={{ flex: 4 }}>
                    <AntDesign
                        name={"arrowleft"}
                        size={30}
                        style={{ color: Colors.slideClr }} />
                </TouchableOpacity>
                <View style={{ flex: 6 }}>
                    <Text
                        style={{ fontSize: 22 }}>About
                        </Text>
                </View>
            </View>
            <View style={styles.version}>
                <View style={styles.versionPhoto}>
                    <FastImage
                        style={{ height: "70%", width: "70%", }}
                        source={require("../../assets/Group.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
                <Text
                    style={{ color: Colors.slideClr, fontSize: 16 }}>Version 3.4.13
                </Text>
            </View>
            <View style={styles.AboutVersion}>
                <View style={{ width: "95%" }}>
                    <Text
                        style={{ fontSize: 19, color: Colors.slideClr, textAlign: "center" }}>Welcome to Postbys. We're on a mission to hlep buyers and sellers at events achieve more.
                     </Text>
                </View>
            </View>
            <View style={{ flex: 6, paddingHorizontal: 15, }}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>

    )
};
const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        justifyContent: "center"
    },
    version: {
        flex: 1.5,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        flexDirection: "row"
    },
    versionPhoto: {
        height: "85%",
        justifyContent: "center",
        alignItems: "center",
        width: 80,
        borderRadius: 10,
        borderColor: Colors.gray,
        borderWidth: 1.5
    },
    AboutVersion: {
        flex: 1.5,
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 15,
    }
});
export default AboutScreen;