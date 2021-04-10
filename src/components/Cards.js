import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../colors";

export const Card = (props) => {
    const { onPress, data } = props
    const { name, created } = data
    return (
        <TouchableOpacity onPress={() => onPress(props.data)}>
            <View style={styles.cardcover}>
                <Text style={styles.nametxt}>{name}</Text>
                <Text style={styles.createdtxt}>{created}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardcover: {
        padding: 10,
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.lightgray,
        marginVertical: 5
    },
    nametxt: {
        fontSize: 18,
        color: colors.black,
        fontWeight: 'bold',
        marginVertical: 5
    },
    createdtxt: {
        fontSize: 12,
        color: colors.lightgray,
        marginVertical: 5
    }
})
