import React, { useState } from "react";
import { StyleSheet, View, Text, Picker, TextInput } from "react-native";
import colors from "../colors";

export const Input = (props) => {
    const { value, placeholder, onchange, text, secureTextEntry } = props
    return (
        <View style={styles.cover}>
            <Text style={styles.text}>{text} : </Text>
            <TextInput
                style={styles.txtinput}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                value={value}
                onChangeText={onchange}
            />
        </View>
    )
}

export const Picklist = (props) => {
    const { value, setSelectedValue, text, lists } = props
    console.log("lists", lists)
    return (
        <View style={styles.cover}>
            <Text style={styles.text}>{text} : </Text>
            <Picker
                selectedValue={value}
                style={{ flex: 1 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                {
                    lists?.map((item, index) => {
                        return (
                            <Picker.Item key={index} label={item.name} value={item.name} />
                        )
                    })
                }
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    cover: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 5,
        width: "90%",
        marginVertical: 5
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: colors.black,
    },
    txtinput: {
        flex: 1,
        fontSize: 12
    }
})