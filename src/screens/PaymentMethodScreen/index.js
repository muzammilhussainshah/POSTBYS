import React from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Payment from "../../components/Payment";
import Colors from '../../common/Colors';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: "Visa",
        number: "**** **** **** 2714"

    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: "Credit or debit",
        discription: "visa or mastercard card"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: "Bank account",
        discription: "add your band account"
    },
];
const PaymentmethodScreen = ({ }) => {
    const renderItem = ({ item }) => (
        <Payment
            title={item.title}
            number={item.number}
            discription={item.discription} />
    );
    return (
        <View style={{ flex: 2 }}>
            <View
                onPress={() => Actions.pop()}
                style={styles.header}>
                <TouchableOpacity  >
                    <AntDesign
                        name={"arrowleft"}
                        size={30}
                        style={{ color: Colors.slideClr }} />
                </TouchableOpacity>
                <View >
                    <Text
                        style={{ fontSize: 20 }}>Payment methods
                        </Text>
                </View>
                <TouchableOpacity  >
                    <Text
                        style={{ fontSize: 18, color: Colors.slideClr }}>Edit
                        </Text>
                </TouchableOpacity>

            </View>
            <View style={{ flex: 9, paddingHorizontal: 15 }}>
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
        flex: 1,
        justifyContent: "space-between"
    },
});
export default PaymentmethodScreen;