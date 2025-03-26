import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
const ClickedLink = () => {
  return (
    <View>
        <Stack.Screen options={{ headerShown: false }} />
      <Text>ClickedLink</Text>
    </View>
  )
}

export default ClickedLink

const styles = StyleSheet.create({})