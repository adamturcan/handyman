import { View, TextInput, StyleSheet,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'



import colors from '../config/colors'
import defaultStyles from '../config/styles'

export default function AppTextInput({icon,...otherProps}) {
  return (
  
    <View style={styles.container}>
     { icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/>}
      <TextInput style={[defaultStyles.text,styles.input]} {...otherProps}/>
    </View>
  
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f9f4f4',
        borderRadius:25,
        flexDirection:"row",
        width:"100%",
        padding:15,
        marginVertical:10,
        

    },

    icon:{
      marginRight:10
    },
    input:{
      width:"100%",
      height:"100%"
    }
})