import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image 
                source={{
                    uri: 'https://th.bing.com/th/id/OIP.NeMJ0aT9U_yJgwUXpQYhWAHaF7?rs=1&pid=ImgDetMain',
                    width: 100,
                    height: 100,
                }}
                style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>kashi vishwanath temple</Text> 
                    <Text style={styles.cardDesc}>Kashi Vishwanath Temple is a Hindu temple dedicated to Shiva. It is located in Vishwanath Gali, in Varanasi, Uttar Pradesh, India.</Text> 
                    <Text style={styles.cardFooter}>10 min. away</Text> 
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    cardImage: {
        height: 300,
        width: 360,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardBody: {
        paddingHorizontal: 12,
        flex: 1,
        flexGrow: 1,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 4
    },
    cardDesc:{
        fontSize: 18,
        color: '#000000'
    },
    cardFooter: {
        fontSize: 14,
        color: '#000000'
    },
    card: {
    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
        borderRadius: 6,
        elevation: 6,
        margin: 8,
    }
})