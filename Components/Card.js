import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {Image} from 'react-native-expo-image-cache';

export default function Card({title,subTitle,imageUrl, onPress,thumbnailUrl}) {
  return (
 <TouchableWithoutFeedback onPress={onPress}>
     <View style={styles.card}>
         <Image style={styles.image}uri={imageUrl} preview={{uri:thumbnailUrl}} tint="light"/>
         <View style={{
             margin:15
         }}>
         <Text>{title}</Text>
         <Text style={styles.subTitle}>{subTitle}</Text>

         </View>
         
     </View>
    </TouchableWithoutFeedback>
   
  )
}
const styles = StyleSheet.create({
    card:{
       
        backgroundColor:"#fff",
        marginVertical:10,
        borderRadius:25,     
        overflow:'hidden'   
    },
    image:{
        width:"100%",
        height:200,
        
        


    },
    subTitle:{
        marginTop:5,
        color:"cyan"
    }
})