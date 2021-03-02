
import { View, Text,  StyleSheet } from 'react-native';
import Colors from '../common/Colors';
import React  from "react";

const RowWise = ({ title, title2 }) => (
    <View style={styles.item}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
        <Text style={{ fontSize: 15, marginRight: 15 }}>{title}</Text>
        {title2 &&
          <Text style={{ fontSize: 15, marginRight: 15 }}>{title2}</Text>
        }
      </View>
    </View>
  );
const styles = StyleSheet.create({
    item: {
        height: 90,
        width: "100%",
        borderWidth: 1,
        borderRadius: 3,
        borderColor: Colors.slideClr,
        flexDirection: "row",
        marginBottom: 10
      },
});
export default RowWise; 