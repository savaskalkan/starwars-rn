import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Form,
    Feed,
    PlanetPage,
} from "../screen";

const Tab = createBottomTabNavigator()
const TabRouter = () => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Form" component={Form} />
        </Tab.Navigator>
    )
}


const MainRouter = createStackNavigator();
const MainRoot = () => {
    return (
        <NavigationContainer>
            <MainRouter.Navigator
                headerMode="none"
                initialRouteName={"TabRouter"}
            >
                <MainRouter.Screen name="TabRouter" component={TabRouter} />
                <MainRouter.Screen name="PlanetPage" component={PlanetPage} />
            </MainRouter.Navigator>
        </NavigationContainer>
    );
}

export default MainRoot;