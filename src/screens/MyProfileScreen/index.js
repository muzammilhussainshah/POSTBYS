import React, { useState } from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';
import Transactions from "../../components/Transactions"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BasicInfo from "../../components/BasicInfo";
import RatingAndReviews from "../../components/RatingAndReviews";
import Colors from '../../common/Colors';
import { Actions } from "react-native-router-flux";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native';
import {
    Tabs,
    Tab,
    TabHeading,
} from 'native-base';
const DATAFORBASICINFO = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: "Orginization",
        Data: "o2Greeks Agency",
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: "Email",
        Data: "jordan_brown@gmail.com",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: "About",
        Data: "Loren ipsum is placeholder text commonly user in the graphic pront and publishing industries for previewing layout & visual mockups.",
    },
];
const DATAFORATING = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        Name: "Jhon Doe",
        Name2: "Sharlene Edwards",
        Date: "29 July 2020",
        Review: "Loren ipsum is placeholder text commonly user in the graphic pront and publishing industries for previewing layout & visual mockups.",
        Rating: "4.8"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        Name: "Jhon Doe",
        Name2: "Sharlene Edwards",
        Date: "29 July 2020",
        Review: "Loren ipsum is placeholder text commonly user in the graphic pront and publishing industries for previewing layout & visual mockups.",
        Rating: "4.8"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        Name: "Jhon Doe",
        Name2: "Sharlene Edwards",
        Date: "29 July 2020",
        Review: "Loren ipsum is placeholder text commonly user in the graphic pront and publishing industries for previewing layout & visual mockups.",
        Rating: "4.8"
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        Name: "Jhon Doe",
        Name2: "Sharlene Edwards",
        Date: "29 July 2020",
        Review: "Loren ipsum is placeholder text commonly user in the graphic pront and publishing industries for previewing layout & visual mockups.",
        Rating: "4.8"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        Name: "Jhon Doe",
        Name2: "Sharlene Edwards",
        Date: "29 July 2020",
        Review: "Loren ipsum is placeholder text commonly user in the graphic pront and publishing industries for previewing layout & visual mockups.",
        Rating: "4.8"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        Name: "Jhon Doe",
        Name2: "Sharlene Edwards",
        Date: "29 July 2020",
        Review: "Loren ipsum is placeholder text commonly user in the graphic pront and publishing industries for previewing layout & visual mockups.",
        Rating: "4.8"
    },

];
const MyProfileScreen = ({ }) => {
    const [activeColor, setActiveColor] = useState("Paid Money");
    const activeColorChange = (key) => {
        if (key.ref.key == ".0") {
            setActiveColor("Basic Info")
        }
        if (key.ref.key == ".1") {
            setActiveColor("My Post")
        }
        if (key.ref.key == ".2") {
            setActiveColor("Rating And Reviews")
        }
    }
    return (
        <View style={{ flex: 2 }}>
            <View style={{ flex: 2.5 }}>

                <View
                    onPress={() => Actions.pop()}
                    style={styles.header}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}

                    >
                        <AntDesign
                            name={"arrowleft"}
                            size={30}
                            style={{ color: Colors.slideClr }} />
                    </TouchableOpacity>
                    <View >
                        <Text
                            style={{ fontSize: 20 }}>My Profile
                        </Text>
                    </View>
                    <TouchableOpacity style={{ alignItems: "center" }} >
                        <MaterialIcons
                            name={"edit"}
                            size={20}
                            style={{ color: Colors.slideClr }}
                        />
                        <View style={styles.underLine}></View>
                    </TouchableOpacity>

                </View>
                <View style={styles.header2}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ flex: 2.2, alignItems: "center" }}>
                        <View style={styles.profilePhoto}>
                            < FastImage
                                style={{ height: "100%", width: "100%", }}
                                source={require("../../assets/Imageb.png")}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Actions.MyProfileScreen()}
                        activeOpacity={0.8}
                        style={{ flex: 7.8, }}>
                        <Text
                            style={{ fontSize: 20 }}>Linda Jhonston
                       </Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <FastImage
                                style={{ height: 25, width: 25, }}
                                source={require("../../assets/google.png")}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                            <Text
                                style={{ fontSize: 13, color: Colors.slideClr }}>Google Account
                              </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 7.5, }}>
                <Tabs
                    onChangeTab={(key) => activeColorChange(key)}
                    locked={true} >
                    <Tab
                        heading={
                            <TabHeading
                                style={{ flex: 2.5, backgroundColor: Colors.white, borderWidth: 0 }}>
                                <Text
                                    style={{ color: activeColor === "Basic Info" ? Colors.black : Colors.slideClr, fontSize: 16 }}>Basic Info
                               </Text>
                            </TabHeading>}>
                        <View style={{ width: "100%", height: 1 }}>
                            <View style={{ width: "22%", height: "100%", backgroundColor: Colors.black }}></View>
                        </View>
                        <ScrollView style={{ paddingHorizontal: 15 }} >
                            <FlatList
                                data={DATAFORBASICINFO}
                                renderItem={({ item }) => <BasicInfo
                                    title={item.title}
                                    Data={item.Data} />}
                                keyExtractor={item => item.id}
                            />
                        </ScrollView>
                    </Tab>
                    <Tab
                        heading={
                            <TabHeading
                                style={{ flex: 2.5, justifyContent: "flex-start", backgroundColor: Colors.white, }}>
                                <Text
                                    style={{ color: activeColor === "My Post" ? Colors.black : Colors.slideClr, fontSize: 16 }}>My Post
                                </Text>
                            </TabHeading>}>
                        <View style={{ width: "100%", height: 1, flexDirection: "row", }}>
                            <View style={{ width: "23%", height: "100%" }}></View>
                            <View style={{ width: "18%", height: "100%", backgroundColor: Colors.black }}></View>
                            <View style={{ width: "57%", height: "100%" }}></View>
                        </View>
                        <ScrollView style={{ paddingHorizontal: 15 }}  >
                            <FlatList
                                data={DATAFORATING}
                                renderItem={({ item }) => <Transactions
                                    title={item.title}
                                    Data={item.Data} />}
                                keyExtractor={item => item.id} />
                        </ScrollView>
                    </Tab>
                    <Tab
                        heading={
                            <TabHeading
                                style={styles.TabHead}>
                                <Text
                                    style={{ color: activeColor === "Rating And Reviews" ? Colors.black : Colors.slideClr, fontSize: 16 }}>Rating And Reviews
                                </Text>
                            </TabHeading>}>
                        <View style={{ width: "100%", height: 1, flexDirection: "row" }}>
                            <View style={{ width: "23%", height: "100%", }}></View>
                            <View style={{ width: "25%", height: "100%", }}></View>
                            <View style={{ width: "40%", height: "100%", backgroundColor: Colors.black }}></View>
                            <View style={{ width: "10%", height: "100%" }}></View>
                        </View>
                        <ScrollView style={{ paddingHorizontal: 15 }}  >
                            <FlatList
                                data={DATAFORATING}
                                renderItem={({ item }) => <RatingAndReviews
                                    Name={item.Name}
                                    Date={item.Date}
                                    Rating={item.Rating}
                                    Name2={item.Name2}
                                    Review={item.Review}
                                />}
                                keyExtractor={item => item.id} />
                        </ScrollView>
                    </Tab>
                </Tabs>
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
        justifyContent: "space-between"
    },
    profilePhoto: {
        width: "80%",
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 80,
    },
    header2: {
        flex: 1,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        flexDirection: "row",
        alignItems: "center",
    },
    TabHead: {
        flex: 5,
        justifyContent: "flex-start",
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.white
    },
    underLine: { borderBottomWidth: 1, borderBottomColor: Colors.slideClr, width: "80%" }
});
export default MyProfileScreen;