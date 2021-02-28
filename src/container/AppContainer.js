import React from 'react';
import { View } from 'react-native';
import AppFooter from '../components/Footer/Footer';
export default AppContainer = (
    {
        children,
        heading,
        route,
    }) => {
    return (
        <View style={{ flex: 1, }}>
            {children}
            <AppFooter
                heading={heading}
                route={route}
            />
        </View>
    )
}