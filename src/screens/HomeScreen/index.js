import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'

export function HomeScreen() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{marginTop: 50}}>
                <Image 
                style={{width: 100, height: 100, resizeMode: 'contain'}}
                source={{
                    uri: "https://links.papareact.com/gzs"
                }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
