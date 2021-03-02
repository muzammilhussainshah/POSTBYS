
import { View, Text,   StyleSheet } from 'react-native';
import Colors from '../common/Colors';
import React  from "react";

const ColumnWise = ({ title, title2 }) => (
    <View style={styles.item2}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 15, }}>{title}</Text>
        {title2 &&
          <Text style={{ fontSize: 15, }}>{title2}</Text>
        }
      </View>
    </View>
  );
const styles = StyleSheet.create({
    item2: {
        height: 170,
        width: "48%",
        borderWidth: 1,
        borderRadius: 3,
        borderColor: Colors.slideClr,
        marginBottom: 10,
        marginRight: 10
      },
});
export default ColumnWise;