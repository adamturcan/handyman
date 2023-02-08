import { View, TextInput, StyleSheet, Modal, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'


import colors from '../config/colors'
import defaultStyles from '../config/styles'
import AppText from './AppText'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Screen from '../screens/Screen'
import AppPickerItem from './AppPickerItem'



export default function AppPicker({numberOfColumns = 1,PickerItemComponent = AppPickerItem,icon,placeholder,onSelectItem,selectedItem,items,...otherProps}) {

const [modalVisible,setModalVisible] =useState(false)

  return (
      <>
      <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
    <View style={styles.container}>
     { icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/>}
      <AppText style={[styles.text,{color:selectedItem?colors.dark:colors.light}]}>{selectedItem?selectedItem.label:placeholder}</AppText>
      <MaterialCommunityIcons name="chevron-down" size={20} color={colors.medium} />
    </View>
    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType="slide">
        <Screen>
        <Button title="Close" onPress={()=>setModalVisible(false)} />
        <FlatList
        numColumns={numberOfColumns}
        data={items}
        keyExtractor={item=>item.value.toString()}
        renderItem={({item})=><PickerItemComponent item={item} onPress={()=>{
        setModalVisible(false);
        onSelectItem(item)
        }
        }/>}
        />
        </Screen>
        
    </Modal>
    </>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f9f4f4',
        borderRadius:25,
        flexDirection:"row",
        width:"100%",
        padding:15,
        marginVertical:10

    },

    icon:{
      marginRight:10
    },
    text:{
        flex:1,
    }
})