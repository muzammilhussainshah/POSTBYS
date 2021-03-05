import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Countries from "../../components/countries"
import Colors from '../../common/Colors';
import { Actions } from "react-native-router-flux";
import React, {
    useState
} from "react";
import {
    Tabs,
    Tab,
    TabHeading,
} from 'native-base';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Dimensions,
    ScrollView,
} from 'react-native';
const DATAFORCOUNTRIES = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        countries: 'Saudi Arabia',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        countries: 'Pakistan',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        countries: 'Armenia',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        countries: 'Philippines',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        countries: 'Malaysia',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        countries: 'Kuwait',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        countries: 'Turkey',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        countries: 'United Arab Emirates',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        countries: 'Sri Lanka',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        countries: 'Afghanistan',

    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        countries: 'Palestine',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        countries: 'Japan',
    },
];
const windowHeight = Dimensions.get('window').height - 24;
const flex1 = windowHeight / 10;
const LocationScreen = ({ }) => {
    const [activeColor, setActiveColor] = useState("Paid Money");
    const activeColorChange = (key) => {
        if (key.ref.key == ".0") {
            setActiveColor("Asia")
        }
        if (key.ref.key == ".1") {
            setActiveColor("Europe")
        }
        if (key.ref.key == ".2") {
            setActiveColor("Africa")
        }
        if (key.ref.key == ".2") {
            setActiveColor("America")
        }
        if (key.ref.key == ".2") {
            setActiveColor("Oceania")
        }
    }
    return (
        <ScrollView >
            <View style={{ height: windowHeight }}>
                <View style={{ height: flex1 }}>
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
                                style={{ fontSize: 20 }}>Location
                        </Text>
                        </View>
                        <TouchableOpacity style={{ alignItems: "center" }} >
                            <Feather
                                name={"search"}
                                size={25}
                                style={{ color: Colors.slideClr }}
                            />
                            <View style={styles.underLine}></View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: flex1 * 9 }}>
                    <Tabs
                        onChangeTab={(key) => activeColorChange(key)}
                        locked={true} >
                        <Tab
                            heading={
                                <TabHeading
                                    style={{ backgroundColor: Colors.white, borderWidth: 0 }}>
                                    <Text
                                        style={{ color: activeColor === "Asia" ? Colors.black : Colors.slideClr, fontSize: 16 }}>Asia
                               </Text>
                                </TabHeading>}>
                            <View style={{ width: "100%", height: 2 }}>
                                <View style={{ width: "16%", height: "100%", backgroundColor: Colors.black }}></View>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.CurrentLocation}>
                                <Feather
                                    name={"map-pin"}
                                    size={18}
                                    style={{ color: Colors.slideClr }}
                                />
                                <Text style={{ color: Colors.slideClr, marginLeft: 5 }}>Use Current Location</Text>
                            </TouchableOpacity>
                            <ScrollView style={{ height: windowHeight / 1.46, paddingHorizontal: 15 }} >
                                <FlatList
                                    data={DATAFORCOUNTRIES}
                                    renderItem={({ item }) => <Countries
                                        countries={item.countries} />}
                                    keyExtractor={item => item.id} />
                            </ScrollView>
                        </Tab>
                        <Tab
                            heading={
                                <TabHeading
                                    style={{ backgroundColor: "red", justifyContent: "flex-start", backgroundColor: Colors.white, }}>
                                    <Text
                                        style={{ color: activeColor === "Europe" ? Colors.black : Colors.slideClr, fontSize: 16 }}>Europe
                                </Text>
                                </TabHeading>}>
                            <View style={{ width: "100%", height: 2, flexDirection: "row", }}>
                                <View style={{ width: "18%", height: "100%" }}></View>
                                <View style={{ width: "16%", height: "100%", backgroundColor: Colors.black }}></View>
                                <View style={{ width: "66%", height: "100%" }}></View>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.CurrentLocation}>
                                <Feather
                                    name={"map-pin"}
                                    size={18}
                                    style={{ color: Colors.slideClr }}
                                />
                                <Text style={{ color: Colors.slideClr, marginLeft: 5 }}>Use Current Location</Text>
                            </TouchableOpacity>
                            <ScrollView style={{ height: windowHeight / 1.46, paddingHorizontal: 15 }}  >
                                <FlatList
                                    data={DATAFORCOUNTRIES}
                                    renderItem={({ item }) => <Countries
                                        countries={item.countries} />}
                                    keyExtractor={item => item.id} />
                            </ScrollView>
                        </Tab>
                        <Tab
                            heading={
                                <TabHeading
                                    style={{ backgroundColor: "red", justifyContent: "flex-start", backgroundColor: Colors.white, }}>
                                    <Text
                                        style={{ color: activeColor === "Africa" ? Colors.black : Colors.slideClr, fontSize: 16 }}>Africa
                                </Text>
                                </TabHeading>}>
                            <View style={{ width: "100%", height: 2, flexDirection: "row", }}>
                                <View style={{ width: "38%", height: "100%" }}></View>
                                <View style={{ width: "15%", height: "100%", backgroundColor: Colors.black }}></View>
                                <View style={{ width: "47%", height: "100%" }}></View>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.CurrentLocation}>
                                <Feather
                                    name={"map-pin"}
                                    size={18}
                                    style={{ color: Colors.slideClr }}
                                />
                                <Text
                                    style={{ color: Colors.slideClr, marginLeft: 5 }}>Use Current Location
                                </Text>
                            </TouchableOpacity>
                            <ScrollView style={{ height: windowHeight / 1.46, paddingHorizontal: 15 }}  >
                                <FlatList
                                    data={DATAFORCOUNTRIES}
                                    renderItem={({ item }) => <Countries
                                        countries={item.countries} />}
                                    keyExtractor={item => item.id} />
                            </ScrollView>
                        </Tab>
                        <Tab
                            heading={
                                <TabHeading
                                    style={{ backgroundColor: "red", justifyContent: "flex-start", backgroundColor: Colors.white, }}>
                                    <Text
                                        style={{ color: activeColor === "America" ? Colors.black : Colors.slideClr, fontSize: 16 }}>America
                                </Text>
                                </TabHeading>}>
                            <View style={{ width: "100%", height: 2, flexDirection: "row", }}>
                                <View style={{ width: "58%", height: "100%" }}></View>
                                <View style={{ width: "18%", height: "100%", backgroundColor: Colors.black }}></View>
                                <View style={{ width: "24%", height: "100%" }}></View>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.CurrentLocation}>
                                <Feather
                                    name={"map-pin"}
                                    size={18}
                                    style={{ color: Colors.slideClr }}
                                />
                                <Text style={{ color: Colors.slideClr, marginLeft: 5 }}>Use Current Location</Text>
                            </TouchableOpacity>
                            <ScrollView style={{ height: windowHeight / 1.46, paddingHorizontal: 15 }}  >
                                <FlatList
                                    data={DATAFORCOUNTRIES}
                                    renderItem={({ item }) => <Countries
                                        countries={item.countries} />}
                                    keyExtractor={item => item.id} />
                            </ScrollView>
                        </Tab>
                        <Tab
                            heading={
                                <TabHeading
                                    style={styles.TabHead}>
                                    <Text
                                        style={{ color: activeColor === "Oceania" ? Colors.black : Colors.slideClr, fontSize: 16 }}>Oceania
                                </Text>
                                </TabHeading>}>
                            <View style={{ width: "100%", height: 2, flexDirection: "row" }}>
                                <View style={{ width: "78%", height: "100%", }}></View>
                                <View style={{ width: "22%", height: "100%", backgroundColor: Colors.black }}></View>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.CurrentLocation}>
                                <Feather
                                    name={"map-pin"}
                                    size={18}
                                    style={{ color: Colors.slideClr }}
                                />
                                <Text style={{ color: Colors.slideClr, marginLeft: 5 }}>Use Current Location</Text>
                            </TouchableOpacity>
                            <ScrollView style={{ height: windowHeight / 1.46, paddingHorizontal: 15 }}  >
                                <FlatList
                                    data={DATAFORCOUNTRIES}
                                    renderItem={({ item }) => <Countries
                                        countries={item.countries} />}
                                    keyExtractor={item => item.id} />
                            </ScrollView>
                        </Tab>
                    </Tabs>
                </View>
            </View>
        </ScrollView>
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
    TabHead: {
        justifyContent: "flex-start",
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.white
    },
    CurrentLocation: {
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: Colors.gray,
        marginVertical: 10,
        marginHorizontal: 15,
        borderRadius: 5
    }
});
export default LocationScreen;