import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Supports from "../../components/Supports" 
import Colors from '../../common/Colors';
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
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native-gesture-handler";
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: "Holiday help ",
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: "Order & purchases",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: "Return & Exchanges",
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: "Promotions & Coupons",

    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: "Registries & Lists",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: "Delivery & Pickup",
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: "Postbys Account",

    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: "Payment Options",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: "Gift Cards",
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: "Product Safety & Services",

    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: "Policies & Guidlines",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: "Product Safety & Recalls",
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: "Compliance",

    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: "New Order",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: "Holiday help",
    },
];
const SupportScreen = ({ }) => {
    const [value, onChangeText] = useState(true)
    return (
        <ScrollView>
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
                            style={{ fontSize: 20 }}>Support
                        </Text>
                    </View>
                    <TouchableOpacity  >
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 15, flex: 0.8, }}>
                    <View style={styles.searchBarView}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
                            <Feather
                                name={"search"}
                                size={25}
                                style={{ color: Colors.slideClr }}
                            />
                        </View>
                        <View style={{ flex: 8.2, justifyContent: "center" }}>
                            <TextInput
                                style={{ height: "100%", fontSize: 18 }}
                                onChangeText={text => onChangeText(text)}
                                value={value}
                                placeholder={"search"}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 9, paddingHorizontal: 15 }}>
                    <FlatList
                        data={DATA}
                        renderItem={({item}) => <Supports
                            title={item.title}
                            number={item.number}
                            discription={item.discription} />}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </ScrollView>

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
export default SupportScreen;