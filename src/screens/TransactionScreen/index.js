import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Transactions from "../../components/Transactions"
import Colors from '../../common/Colors';
import { Dimensions } from 'react-native';

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    TextInput
} from 'react-native';
import React, {
    useState
} from "react";

import {
    Tabs,
    Tab,
    TabHeading,
} from 'native-base';
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native-gesture-handler";
const windowWidth = Dimensions.get('window').width;

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        Rate: "$500.50",
        Date: "29 july 2020",
        Name: "Ronnie Pierce ",
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        Rate: "$725.00",
        Date: "29 july 2020",
        Name: "Ronnie Pierce",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        Rate: "$500.50",
        Date: "29 july 2020",
        Name: "Sonia Brown",
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        Rate: "$905.50",
        Date: "29 july 2020",
        Name: "Ronnie Pierce",

    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        Rate: "$50.50",
        Date: "29 july 2020",
        Name: "Ronnie Pierce",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        Rate: "$575.50",
        Date: "29 july 2020",
        Name: "Ronnie Pierce",
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        Rate: "$740.00",
        Date: "29 july 2020",
        Name: "Ronnie Pierce",
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        Rate: "$430.00",
        Date: "29 july 2020",
        Name: "Ronnie Pierce",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        Rate: "$140.50",
        Date: "29 july 2020",
        Name: "Ronnie Pierce",
    },
];
const TransactionScreen = ({ }) => {
    const [activeColor, setActiveColor] = useState("Paid Money");
    const activeColorChange = (key) => {
        if (key.ref.key == ".0") {
            setActiveColor("Paid Money")
        }
        if (key.ref.key == ".1") {
            setActiveColor("Received Money")
        }
    }
    return (
        <View style={{ flex: 2, }}>
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
                <View>
                    <Text
                        style={{ fontSize: 20 }}>Transactions
                        </Text>
                </View>
                <TouchableOpacity  >
                </TouchableOpacity>
            </View>

            <View style={{ flex: 9, paddingHorizontal: 15 }}>
                <Tabs

                    onChangeTab={(key) => activeColorChange(key)}
                    locked={true} >
                    <Tab
                        heading={
                            <TabHeading
                                style={{ flex: 3, backgroundColor: Colors.white, borderWidth: 0 }}>
                                <Text
                                    style={{ color: activeColor === "Paid Money" ? Colors.black : Colors.slideClr, fontSize: 16 }}>Paid Money
                                 </Text>
                            </TabHeading>}>
                        <View style={{ width: "100%", height: 1, alignItems: activeColor === "Paid Money" ? "flex-start" : "flex-end" }}>
                            <View style={{ width: activeColor === "Paid Money" ? "27%" : "70%", height: "100%", backgroundColor: Colors.black }}></View>
                        </View>
                        <ScrollView style={{ backgroundColor: Colors.bgColor }} >
                            <FlatList
                                data={DATA}
                                renderItem={({ item }) => <Transactions
                                    Name={item.Name}
                                    Date={item.Date}
                                    Rate={item.Rate} />}
                                keyExtractor={item => item.id}
                            />
                        </ScrollView>
                    </Tab>
                    <Tab
                        heading={
                            <TabHeading
                                style={{ flex: 7, justifyContent: "flex-start", backgroundColor: Colors.white, }}>
                                <Text
                                    style={{ color: activeColor === "Received Money" ? Colors.black : Colors.slideClr, fontSize: 16 }}>Received Money
                                  </Text>
                            </TabHeading>}>
                        <View style={{ width: "100%", height: 1, alignItems: activeColor === "Paid Money" ? "flex-start" : "flex-end" }}>
                            <View style={{ width: activeColor === "Paid Money" ? "27%" : "70%", height: "100%", backgroundColor: Colors.black }}></View>
                        </View>
                        <ScrollView style={{ backgroundColor: Colors.bgColor, }}  >
                            <FlatList
                                data={DATA}
                                renderItem={({ item }) => <Transactions
                                    Name={item.Name}
                                    Date={item.Date}
                                    Rate={item.Rate} />}
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
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        flex: 1,
        justifyContent: "space-between"
    },
    searchBarView: {
        backgroundColor: Colors.lightGray,
        flexDirection: "row",
    },
});
export default TransactionScreen;