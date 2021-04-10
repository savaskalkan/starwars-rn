import React, { useEffect, useState } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import { useDispatch } from 'react-redux'

import api from "../../api";
import { Card, TopBar } from "../../components";
import { SetPlanets, SetSelectedPlanet } from "../../redux";

const Feed = ({ navigation }) => {

    const dispatch = useDispatch()

    const [planets, _setPlanets] = useState([])
    const [refreshing, _setRefreshing] = useState(false)

    const _getPlanets = () => {
        api.getPlanets().then(response => {
            console.log("response", response.results)
            _setPlanets(response.results) // to local state
            dispatch(SetPlanets(response.results)) // to global state
        })
    }

    useEffect(() => {
        _getPlanets()
    }, [])

    const _onCardPress = (item) => {
        console.log("item", item)
        dispatch(SetSelectedPlanet(item))
        navigation.navigate("PlanetPage")
    }

    return (
        <View>
            <TopBar text="Feed" />
            <FlatList
                data={planets}
                contentContainerStyle={{ paddingBottom: 50 }}
                refreshControl={
                    <RefreshControl
                        colors={["orange", "purple"]}
                        refreshing={refreshing}
                        onRefresh={_getPlanets} />
                }
                renderItem={(data) => {
                    return (
                        <Card data={data.item} onPress={_onCardPress} />
                    )
                }}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}
export default Feed;