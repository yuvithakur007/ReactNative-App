import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>FlatCards</Text>
                <View style={styles.container}>
                    <View style={[styles.cards , styles.cardOne]}>
                        <Text>Card 1</Text>
                    </View>
                    <View style={[styles.cards , styles.cardTwo]}>
                        <Text>Card 2</Text>
                    </View>
                    <View style={[styles.cards , styles.cardThree]}>
                        <Text>Card 3</Text>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal:8,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    cards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardOne: {
        backgroundColor: '#FF0000',
    },
    cardTwo: {
        backgroundColor: '#00FF00',
    },
    cardThree: {
        backgroundColor: '#0000FF',
    },
})