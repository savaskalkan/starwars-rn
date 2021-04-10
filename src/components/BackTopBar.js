import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { arrow_back } from "../icons";
import colors from "../colors";

const BackTopBar = (props) => {
    const { onPress, text } = props
    return (
        <View style={styles.backTopCover} >
            <TouchableOpacity onPress={onPress} style={styles.backbtn}>
                <Image style={styles.img} source={arrow_back}></Image>
            </TouchableOpacity>

            <Text style={styles.text}>
                {text}
            </Text>
        </View>

    )

}

export default BackTopBar;

const styles = StyleSheet.create({
    backTopCover: {
        paddingVertical: 10,
        height: 45,
        marginBottom: 0,
        width: '100%',
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: colors.lightgray,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },
    backbtn: {
        height: 30,
        position: 'absolute',
        left: 0,
        justifyContent: 'center'
    },
    img: {
        width: 25,
        height: 25,
        marginHorizontal: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.black
    }
})