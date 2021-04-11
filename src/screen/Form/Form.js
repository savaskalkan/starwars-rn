import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useSelector, shallowEqual } from 'react-redux'

import colors from "../../colors";
import { TopBar, Input, Picklist, RButton } from "../../components";

const Form = () => {
    const { GeneralResponse } = useSelector((state) => state, shallowEqual)
    const [planetName, setPlanetName] = useState("")
    const [characterName, setCharacterName] = useState("")
    const [age, setAge] = useState(0)

    const _onSubmit = () => {
        console.log("do something")
        Alert.alert("Savas Kalkan", " Thank you for your interest (: ")
    }

    return (
        <View style={{ flex: 1 }}>
            <TopBar text="Feed" />
            <View style={styles.form}>
                <Input
                    value={characterName}
                    placeholder="Enter Planet name..."
                    text="Planet name"
                    onchange={setCharacterName}
                />
                <Input
                    value={age}
                    placeholder="Enter age..."
                    text="Age"
                    onchange={setAge}
                    keyboardType
                />
                <Picklist
                    value={planetName}
                    setSelectedValue={setPlanetName}
                    text={"Planet"}
                    lists={GeneralResponse?.planets}
                />
                <RButton
                    text="Submit"
                    onPress={_onSubmit}
                    coverStyle={{ backgroundColor: colors.sunglow }}
                />
            </View>
        </View>
    )
}
export default Form;

const styles = StyleSheet.create({
    form: {

        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        width: '90%',
        borderColor: colors.lightgray,
        borderWidth: 1,
        marginVertical: 15

    }
})