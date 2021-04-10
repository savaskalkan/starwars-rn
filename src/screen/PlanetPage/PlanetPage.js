import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector, shallowEqual } from 'react-redux'
import colors from "../../colors";

import { BackTopBar, } from "../../components";

const PlanetPage = ({ navigation }) => {
    const { GeneralResponse } = useSelector((state) => state, shallowEqual)
    const { name, population, climate } = GeneralResponse.selectedPlanet
    console.log("GeneralResponse",GeneralResponse)
    return (
        <View style={{ flex: 1 }}>
            <BackTopBar text="Planet Page" onPress={() => navigation.goBack()} />

            <View style={styles.itemCover}>
                <Text style={styles.nametxt}>Name: {name}</Text>
                <Text style={styles.poptxt}>Population: {population}</Text>
                <Text style={styles.poptxt}>Climate: {climate}</Text>
            </View>

        </View>
    )
}
export default PlanetPage;

const styles = StyleSheet.create({
    itemCover:{
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:colors.white,
        borderRadius:10,
        padding:10,
        width:'90%',
        borderColor:colors.lightgray,
        borderWidth:1,
        marginVertical:15
    },  
    nametxt:{
        fontSize:26,
        fontWeight:"bold",
        marginVertical:5,
        color:colors.black,
    },
    poptxt:{
        fontSize:16,
        marginVertical:5,
        color:colors.gray,
    },
})