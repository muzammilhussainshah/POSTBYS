import React from 'react'
import { TouchableOpacity, } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './style'

export default FooterTab = ({
    id,
    iconName,
    color,
    func
}) => {
    const tabicon = (iconName) => {
        if (iconName === "home")
            return (
                <Feather
                    name={"home"}
                    size={30}
                    style={{ color: color }}
                />
            )
        else if (iconName === "BagScreen")
            return (
                <Feather
                    name={"shopping-bag"}
                    size={30}
                    style={{
                        color: color
                    }} />
            )
        else if (iconName === "Plus")
            return (
                <AntDesign
                    name={"pluscircle"}
                    size={45}
                // style={{ color: "color" }}
                />
            )

        else if (iconName === "ChatScreen")
            return (
                <Ionicons
                    name={"ios-chatbubble-ellipses-outline"}
                    size={30}
                    style={{ color: color }} />
            )
        else if (iconName === "SettingScreen")
            return (
                <Feather
                    name={"settings"}
                    size={25}
                    style={{ color: color }} />
            )
        
    }
    return (
        <TouchableOpacity
            onPress={() => func(id)}
            style={styles.footerTabs}>
            {tabicon(iconName)}
        </TouchableOpacity>
    )
}
