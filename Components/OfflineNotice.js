import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import Constants  from 'expo-constants'
import {useNetInfo} from "@react-native-community/netinfo"

export default function OfflineNotice() {

const netInfo = useNetInfo();

if(netInfo.type !== "unknow" && netInfo.isInternetReachable == false)
  return (
    <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
    </View>
  )
  return null
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        height:50,
        position:'absolute',
        zIndex:100,
        top:Constants.statusBarHeight,
        width:"100%",
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:colors.white,
    }
})