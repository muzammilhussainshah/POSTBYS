import FastImage from 'react-native-fast-image';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../common/Colors';
import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
const RatingAndReviews = ({
    Name,
    Date,
    Rating,
    Name2,
    Review }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.item}>
            <View style={{ flexDirection: "row", flex: 3.5 }}>
                <View style={styles.DateView} >
                    <View style={styles.profilePhoto}>
                        < FastImage
                            style={{ height: 25, width: 25, }}
                            source={require("../assets/Imagea.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                        <Text
                            style={{ fontSize: 17, marginLeft: 5 }}>{Name}
                        </Text>
                    </View>
                    <Text
                        style={{ textAlign: "right", fontSize: 12, color: Colors.slideClr }}>{Date}
                    </Text>
                </View>
                <View style={styles.RatingView}>
                    <Text
                        style={{ marginRight: 5, color: Colors.slideClr }}>{Rating}
                    </Text>
                    <AntDesign
                        name={"star"}
                        size={12}
                        style={{ color: Colors.black }}
                    />
                    <AntDesign
                        name={"star"}
                        size={12}
                        style={{ color: Colors.black }}
                    />
                    <AntDesign
                        name={"star"}
                        size={12}
                        style={{ color: Colors.black }}
                    />
                    <AntDesign
                        name={"star"}
                        size={12}
                        style={{ color: Colors.black }}
                    />
                    <AntDesign
                        name={"star"}
                        size={12}
                        style={{ color: Colors.slideClr }}
                    />
                </View>
            </View>
            <View style={{ flex: 7.5 }}>
                <Text
                    style={{ fontSize: 15, marginTop: 5, letterSpacing: 0.5 }}>{Name2}
                </Text>
                <Text
                    style={{ color: Colors.slideClr, marginBottom: 5, letterSpacing: 0.5 }}>{Review}
                </Text>
            </View>
        </TouchableOpacity >
    );
}
const styles = StyleSheet.create({
    item: {
        borderBottomWidth: 0.5,
        paddingVertical: 10,
        justifyContent: "space-evenly",
        borderColor: Colors.slideClr,
    },
    profilePhoto: {
        flexDirection: "row",
        alignItems: "center",
        height: "100%",
    },
    DateView: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    RatingView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
    }
});
export default RatingAndReviews;