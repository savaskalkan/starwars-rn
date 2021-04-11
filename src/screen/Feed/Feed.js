import React, { useEffect, useState } from "react";
import { View, FlatList, RefreshControl, Text, StyleSheet} from "react-native";
import { useDispatch } from 'react-redux'

import api from "../../api";
import colors from "../../colors";
import { Card, TopBar } from "../../components";
import { SetPlanets, SetSelectedPlanet } from "../../redux";

const Feed = ({ navigation }) => {

    const dispatch = useDispatch()

    const [planets, _setPlanets] = useState([])
    const [refreshing, _setRefreshing] = useState(false)

    const _getPlanets = () => {
        api.getPlanets().then(response => {
            console.log("response", response)
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
            {
                !planets?.length
                    ? <View style={styles.nodatacover}>
                        <Text>
                            No data!
                        </Text>
                    </View>

                    : <FlatList
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
            }
        </View>
    )
}
export default Feed;

const styles = StyleSheet.create({
    nodatacover:{
        width: '90%',
        padding: 10,
        alignSelf: "center",
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.white,
        borderRadius:10,
        marginVertical:15
    }
})