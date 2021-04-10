import React from "react";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import colors from "../colors";

export const RButton = (props) => {
    const { text, onPress, coverStyle } = props
    return (
        <View style={[styles.cover, coverStyle]}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cover: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: colors.red,
        borderRadius: 10,
        padding: 10,
        marginVertical: 15
    },
    text: {
        fontSize: 14,
        color: colors.black
    }
})