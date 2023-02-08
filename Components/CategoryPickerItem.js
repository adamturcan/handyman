import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from './AppText'
import Icon from './Icon'

export default function CategoryPickerItem({item,onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
<View >
    <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
    <AppText style={styles.label}>{item.label}</AppText>
</View>
</TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:30,
        paddingVertical:15,
        alignItems:"center",
        width:"33%"
    },
    label:{
        marginTop: 5,
        textAlign:"center",
        fontSize:15
    }
})