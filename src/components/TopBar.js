import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from "../colors";

const TopBar = (props) => {
    const { text } = props
    return (
        <View style={styles.TopCover}>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    )
}
export default TopBar;

const styles = StyleSheet.create({
    TopCover: {
        paddingVertical:10,
        height: 45,
        width: '100%',
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.black
    }
})
