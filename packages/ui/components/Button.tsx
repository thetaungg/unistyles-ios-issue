import React from 'react'

import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const stylesC = StyleSheet.create(theme => ({
    container: {
        // backgroundColor: theme.colors.surfaceVariant,
        alignItems: 'flex-start',
    },
}));
const Button = () => {
    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
}

export default Button;
