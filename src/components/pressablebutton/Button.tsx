import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const PressableButton = (props: any) => {
  return (
    <Link href={props.link} asChild>
    <Pressable style={styles.button}  >
        <Text style={styles.buttonText}>{props.title}</Text>
    </Pressable>
    </Link>
  )
}

export default PressableButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        width:100,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily:'Poppins-Bold',
    },
})