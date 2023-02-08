import React, { useRef } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ImageInput from './ImageInput'

export default function ImageInputList({imageUris = [],onImageAdd,onRemoveImage}) {

    const scrrollView = useRef()
    

    return (
        <View>
        <ScrollView ref={scrrollView} horizontal onContentSizeChange={()=>scrrollView.current.scrollToEnd()}>
        <View style={styles.container}> 
        
         {imageUris.map(uri=> <ImageInput style={styles.image} imageUri={uri} key={uri} onImageSelect={uri=>onRemoveImage(uri)  } />)}
        
        <ImageInput  onImageSelect={uri=>onImageAdd(uri)  } />
        </View>
        </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },image:{
        marginRight:10
    }
})