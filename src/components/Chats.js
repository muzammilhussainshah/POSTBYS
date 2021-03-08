import FastImage from 'react-native-fast-image';
import Colors from '../common/Colors';
import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';
const Chats = ({ Name, Message, Date }) => {
    const routChange = (rout) => {
        Actions[rout]({ Name: Name,Message:Message,Date})
    }
    return (
        <TouchableOpacity
            onPress={() => routChange("MsgScreen")}
            style={styles.item}>
            <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                <View style={styles.profilePhoto}>
                    {Name == "Julian Dasilva" &&
                        <FastImage
                            style={{ height: "100%", width: "100%", }}
                            source={require("../assets/Imageboy.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {Name == "Ronnie Pierce" &&
                        <FastImage
                            style={{ height: "100%", width: "100%", }}
                            source={require("../assets/Imagea.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {Name == "Brianna Black" &&
                        <FastImage
                            style={{ height: "100%", width: "100%", }}
                            source={require("../assets/Imageb.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {Name == "Aaron Rice" &&
                        <FastImage
                            style={{ height: "100%", width: "100%", }}
                            source={require("../assets/Imagec.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {Name == "Pat Horton" &&
                        <FastImage
                            style={{ height: "100%", width: "100%", }}
                            source={require("../assets/Imaged.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {Name == "Sonia Brown" &&
                        <FastImage
                            style={{ height: "100%", width: "100%", }}
                            source={require("../assets/Imagee.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {Name == "Rhonda Pearson" &&
                        <FastImage
                            style={{ height: "100%", width: "100%", }}
                            source={require("../assets/Imagef.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {Name == "Camila Hill" &&
                        <FastImage
                            style={{ height: "100%", width: "100%", }}
                            source={require("../assets/Imagea.png")}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                </View>
            </View>
            <View style={{ flex: 6, justifyContent: "center" }}>
                
                <Text
                    style={{ fontSize: 17 }}>{Name}
                </Text>
                <Text
                    style={{ fontSize: 14, color: Colors.slideClr }}>{Message}
                </Text>
            </View>
            <View style={{ flex: 2, alignItems: "flex-end", paddingTop: 15 }}>
                <Text
                    style={{ fontSize: 13 ,color:Colors.slideClr}}>{Date}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    item: {
        height: 80,
        flexDirection: "row",
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderRadius: 3,
        borderColor: Colors.gray,
        flexDirection: "row",
    },
    profilePhoto: {
        width: "80%",
        height: "80%",
        borderRadius: 80, 
    }
});
export default Chats;