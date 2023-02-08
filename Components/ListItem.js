import { View, Text,StyleSheet,Image, TouchableHighlight } from 'react-native'
import React from 'react'
import  Swipeable  from 'react-native-gesture-handler/Swipeable'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors'

export default function ListItem({title,subTitle,image,IconComponent,onPress,renderRightActions}) {
  return (
      <Swipeable renderRightActions={renderRightActions} containerStyle={{overflow:"visible"}} >
      <TouchableHighlight onPress={onPress}
      underlayColor={"#f9f4f4"}
      >
    <View style={styles.container}>
      {image &&<Image source={image} style={styles.image} />}
        {IconComponent}
      <View style={{
          flex:1,
          marginLeft:10,
          justifyContent:"center",
          overflow:"visible"
         
      }}>
          <Text numberOfLines={1} style={styles.title}>{title}</Text>
         {subTitle && <Text numberOfLines={2} style={styles.subTitle}>{subTitle}</Text>}
        
      </View>
      <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium} style={{alignSelf:"center",}}/>
    </View>
    </TouchableHighlight>
    </Swipeable>
  )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:15,
        backgroundColor:"#fff",
        overflow:"visible"
    
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
       
    },
    title:{
        fontWeight:"500",
        marginBottom:3,
        
    },
    subTitle:{
        color:"#6e6969"
        
    }
})