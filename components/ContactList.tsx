import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: 'Yuvraj Singh',
          status: 'I ❤️ To Code ',
          imageUrl: 'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Bholenath-Sawan-Somwar-hd-Photos.jpg',
        },
        {
          uid: 2,
          name: 'Yuvraj Singh',
          status: 'I ❤️ To Code ',
          imageUrl: 'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Bholenath-Sawan-Somwar-hd-Photos.jpg',
        },
        {
          uid: 3,
          name: 'Yuvraj Singh',
          status: 'I ❤️ To Code ',
          imageUrl: 'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Bholenath-Sawan-Somwar-hd-Photos.jpg',
        },
        {
          uid: 4,
          name: 'Yuvraj Singh',
          status: 'I ❤️ To Code ',
          imageUrl: 'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Bholenath-Sawan-Somwar-hd-Photos.jpg',
        }
      ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri: imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
        
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#CAD5E2',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000'
    },
    userStatus: {
        fontSize: 12
    }
})