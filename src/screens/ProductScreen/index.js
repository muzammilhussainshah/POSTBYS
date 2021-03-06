import Colors from "../../common/Colors";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from 'react-native-vector-icons/AntDesign';
import CategoryColumn from "../../components/CategoryColumn";
import CategoryRow from "../../components/CategoryRow";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FastImage from 'react-native-fast-image';
import {
    Actions
} from "react-native-router-flux";
import React, {
    useState
} from "react";
import {
    Text,
    StyleSheet,
    Dimensions,
    View,
    FlatList,
    ScrollView,
    TouchableOpacity,
    TextInput
} from 'react-native';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Sharlene Edwards',
        rate: "5.0",
        discription: "Looking for butterfly shaped necklace jewelry design in 18kp rose gold. Please send me images, videos, and price if you have."

    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Ronnie Pierce',
        rate: "4.9",
        discription: 'Does anuone carry salt-and papper diamond parceis if 1ct + per stone? Message me with your offers and prices.    ',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Sonia Brown',
        rate: "4.9",
        discription: "Looking to trade/sell vintafe 1970's jewelry i.f solid gold and diamonds.Please post below or message me if intrested. I can send .. ",

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Paulibne Fisher',
        rate: "4.9",
        discription: 'Please message me if you carry calibrated blue sappire 3mm round gemstones, need 20 carats .No more than $200/ct quality',

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Leon Bennett',
        rate: "4.8",
        discription: 'Please message me if you carry calibrated blue sappire 3mm round gemstones, need 20 carats .No more than $200/ct quality',

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Ronnie Pierce',
        rate: "4.7",
        discription: 'Does anuone carry salt-and papper diamond parceis if 1ct + per stone? Message me with your offers and prices.    ',
    },
];
const screenHeight = Dimensions.get('window').height - 24;
const flex1 = screenHeight / 10;
const ProductScreen = ({ title, discription, rate }) => {
    const [twoScreen, setTwoScreen] = useState(true)
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const renderItem = ({ item }) => (
        twoScreen ?
            <CategoryRow
                title={item.title}
                discription={item.discription}
                rate={item.rate} />
            :
            <CategoryColumn
                title={item.title}
                discription={item.discription}
                rate={item.rate} />
    );
    return (
        <ScrollView   >
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => Actions.pop()}
                >
                    <AntDesign
                        name={"arrowleft"}
                        size={30}
                        style={{ color: Colors.slideClr }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bagIcon}>
                    <Feather
                        name={"shopping-bag"}
                        size={20}
                        style={{ color: Colors.slideClr }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ height: flex1 * 2 }}>
                < FastImage
                    style={{ height: "100%", width: "100%", }}
                    source={require("../../assets/Bitmag.png")}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </View>
            <View style={styles.Rating}>
                <AntDesign
                    name={"star"}
                    size={18}
                    style={{ color: Colors.black }}
                />
                <Text
                    style={{ fontSize: 16, marginLeft: 5, color: Colors.slideClr }}>5.0
                </Text>
            </View>
            <View style={{ height: flex1 * 1.5, paddingHorizontal: 15 }}>
                <Text
                    style={{ fontSize: 19 }}>{title}
                </Text>
                <Text
                    style={styles.discription}>{discription}
                </Text>
            </View>
            <View style={{ height: flex1 * 0.8, borderWidth: 1, borderColor: Colors.gray }}>
                <View style={styles.ScreensSwitch}>
                    <Text
                        style={{ fontSize: 14 }}>Recommendations
                    </Text>
                    <View style={{ width: 100, justifyContent: "center", alignItems: 'center' }}>
                        <View style={styles.switchScreens}>
                            <TouchableOpacity
                                onPress={() => setTwoScreen(!twoScreen)}
                                style={[styles.switchScreensView, {
                                    backgroundColor: twoScreen ? Colors.white : null
                                }]}>
                                <FontAwesome5
                                    name={"equals"}
                                    size={18}
                                    style={{ color: Colors.slideClr }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setTwoScreen(!twoScreen)}
                                style={[styles.switchScreensView, {
                                    backgroundColor: !twoScreen ? Colors.white : null
                                }]}>
                                <AntDesign
                                    name={"appstore1"}
                                    size={16}
                                    style={{ color: Colors.slideClr }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ height: flex1 * 3.2 }}>
                {twoScreen == true ?
                    <FlatList
                        key={'#'}
                        numColumns={1}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    /> :
                    <FlatList
                        key={'_'}
                        numColumns={2}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                }
            </View>
            <View style={{ height: flex1 * 0.9 }}>
                <View style={styles.footer}>
                    <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <AntDesign
                            name="pluscircle"
                            style={{ fontSize: 23 }} />
                    </TouchableOpacity>
                    <View style={{ flex: 8, justifyContent: "center", }}>
                        <TextInput
                            style={styles.Input}
                            placeholder="Type your message"
                            onChangeText={text => setMessage(text)}
                            value={message}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            if (message == "") {
                                alert("message box is empty")
                            } else {
                                let messageClone = messages;
                                messageClone.push(message);
                                setMessages(messageClone);
                                setMessage("")
                            }
                        }}
                        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <FontAwesome
                            name="send"
                            style={{ fontSize: 25 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    header: {
        height: flex1 * 0.8,
        paddingHorizontal: 15,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    bagIcon: {
        height: "70%",
        width: 30,
        borderColor: Colors.slideClr,
        borderRadius: 2,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    Rating: {
        height: flex1 * 0.8,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15
    },
    ScreensSwitch: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15
    },
    switchScreensView: {
        height: "70%",
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    switchScreens: {
        height: "65%",
        width: "90%",
        borderRadius: 20,
        backgroundColor: Colors.lightGray,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    discription: {
        fontSize: 16,
        marginTop: 2,
        letterSpacing: 0.5,
        color: Colors.slideClr
    },
    footer: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        height: "100%",
        borderTopWidth: 0.5
    },
    Input: {
        height: 25,
        fontSize: 14,
        paddingVertical: 0,
        borderLeftColor: Colors.slideClr,
        borderLeftWidth: 0.9,
        backgroundColor: Colors.white,
        paddingHorizontal: 10,
    },
});
export default ProductScreen;
