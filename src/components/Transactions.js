import FastImage from 'react-native-fast-image';
import Colors from '../common/Colors';
import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
const TransactionScreen = ({ Name, Date, Rate }) => {
    return (
        <TouchableOpacity
            style={styles.item}>
            <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                <View style={styles.profilePhoto}>
                    {Rate == "$725.00" &&
                        <FastImage
                            style={{ height: "80%", width: "80%", }}
                            source={require("../assets/Bitmapz.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {Name == "Sonia Brown" &&
                        < FastImage
                            style={{ height: "90%", width: "90%", }}
                            source={require("../assets/Bitmapc.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {Rate == "$500.50" &&
                        <FastImage
                            style={{ height: "100%", width: "100%", }}
                            source={require("../assets/Bitmapb.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }

                    {Rate == "$905.50" &&
                        <FastImage
                            style={{ height: "100%", width: "100%", }}
                            source={require("../assets/Bitmapd.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {Rate == "$50.50" &&
                        <FastImage
                            style={{ height: "80%", width: "80%", }}
                            source={require("../assets/Bitmapa.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {Rate == "$575.50" &&
                        <FastImage
                            style={{ height: "100%", width: "100%", }}
                            source={require("../assets/Bitmapb.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {Rate == "$740.00" &&
                        <FastImage
                            style={{ height: "100%", width: "100%", }}
                            source={require("../assets/Bitmapb.png")}
                            resizeMode={FastImage.resizeMode.contain}
                       
                        />
                    }
                    {Rate == "$430.00" &&
                        <FastImage
                            style={{ height: "100%", width: "100%", }}
                            source={require("../assets/Bitmapd.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {Rate == "$140.50" &&
                        <FastImage
                            style={{ height: "80%", width: "80%", }}
                            source={require("../assets/Bitmapa.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                </View>
            </View>
            <View style={{ flex: 6, }}>
                <Text
                    style={{ fontSize: 17 }}>{Name}
                </Text>
                <Text
                    style={{ fontSize: 14, color: Colors.slideClr }}>{Date}
                </Text>
            </View>
            <View style={{ flex: 2, alignItems: "flex-end", }}>
                <Text
                    style={{ fontSize: 13 }}>{Rate}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    item: {
        height: 70,
        padding: 5,
        borderBottomWidth: 1,
        borderRadius: 3,
        justifyContent: "space-between",
        borderColor: Colors.gray,
        flexDirection: "row",
    },
    Settings: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "blue",
    },
    switchBtn: {
        borderColor: Colors.shade,
        height: 22,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },
    profilePhoto: {
        width: "60%",
        alignItems: "center",
        borderWidth: 1,
        justifyContent: "center",
        height: "80%",
        borderColor: Colors.slideClr,
        borderRadius: 5,
        overflow: "hidden"
    }
});
export default TransactionScreen;