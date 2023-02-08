import React ,{useState,useEffect}from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Image, Alert } from 'react-native'
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
export default function ImageInput({imageUri,onImageSelect,style}) {
    const requestPermission = async ()=>{
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(!granted){
          Alert.alert("Warning","you need to enable the permission to access the library")
       
        }
      }
      
      useEffect(()=>{
      requestPermission()
      },[])
      


const handlePress = ()=>{
    if(!imageUri) {
        
        selectImage()
       
    }
    else{
        Alert.alert("Delete","Are you sure you want to delete this image",[{text:"Yes",onPress:()=>{onImageSelect(imageUri)}},{text:"No",onPress:()=>console.log("bla")}])
    }
    
  
}


    const selectImage = async ()=>{
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality:0.5
          });   
          if(!result.cancelled) {
           
            onImageSelect(result.uri)
          }
          else{
              
          } 
        } catch (error) {
          console.log("Error")
        }
      
      }
     
    return (
        
        <TouchableOpacity onPress={handlePress}>
            
        <View style={[styles.container,style]}>
            {!imageUri && <MaterialCommunityIcons name="camera" size={50} color={colors.medium} style={{alignSelf:"center"}}/>}
            {imageUri && <Image source={{uri:imageUri}} style={{width:100,height:100}}/>}
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
  container:{
      width:100,
      height:100,
      backgroundColor:colors.lightGray,
      borderRadius:25,
      justifyContent:"center",
      overflow:"hidden",
    
      
  }  
})
