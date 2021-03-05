import FastImage from 'react-native-fast-image';
import Colors from '../common/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {
    useState
} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
const Countries = ({ countries }) => {
    const [checked, setChecked] = useState(true)
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setChecked(!checked)}
            style={styles.item}>
            <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                {countries == "Saudi Arabia" &&
                    < FastImage
                        style={{ height: "60%", width: "60%", }}
                        source={require("../assets/Saudi.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                }
                {countries == "Pakistan" &&
                    < FastImage
                        style={{ height: "60%", width: "60%", }}
                        source={require("../assets/flag.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                }
                {countries == "Philippines" &&
                    < FastImage
                        style={{ height: "60%", width: "60%", }}
                        source={require("../assets/Philippines.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                }
                {countries == "Malaysia" &&
                    < FastImage
                        style={{ height: "60%", width: "60%", }}
                        source={require("../assets/Malaysia.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                }
                {countries == "Kuwait" &&
                    < FastImage
                        style={{ height: "60%", width: "60%", }}
                        source={require("../assets/kuwait.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                }
                {countries == "Turkey" &&
                    < FastImage
                        style={{ height: "60%", width: "60%", }}
                        source={require("../assets/Turkey.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                }
                {countries == "United Arab Emirates" &&
                    < FastImage
                        style={{ height: "60%", width: "60%", }}
                        source={require("../assets/United.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                }
                {countries == "Sri Lanka" &&
                    < FastImage
                        style={{ height: "60%", width: "60%", }}
                        source={require("../assets/Srilanka.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                }
                {countries == "Afghanistan" &&
                    < FastImage
                        style={{ height: "60%", width: "60%", }}
                        source={require("../assets/Afghanistan.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                }
                {countries == "Palestine" &&
                    < FastImage
                        style={{ height: "60%", width: "60%", }}
                        source={require("../assets/Palestine.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                }
                {countries == "Japan" &&
                    < FastImage
                        style={{ height: "60%", width: "60%", }}
                        source={require("../assets/Japan.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                }
                {countries == "Armenia" &&
                    < FastImage
                        style={{ height: "100%", width: "100%", }}
                        source={require("../assets/Armenia.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                }
            </View>
            <View style={{ flex: 7, justifyContent: "center" }}>
                <Text>{countries}
                </Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>

                <TouchableOpacity
                    onPress={() => setChecked(!checked)}>
                    {checked ?
                        <AntDesign
                            name={"checkcircle"}
                            size={20}
                        /> :
                        <FontAwesome
                            name={"circle-thin"}
                            size={20}
                        />
                    }
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    item: {
        height: 40,
        borderBottomWidth: 0.5,
        justifyContent: "space-evenly",
        flexDirection: "row",
        borderColor: Colors.slideClr,
    },
});
export default Countries;