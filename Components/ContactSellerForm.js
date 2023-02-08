import { View, Text, Keyboard } from 'react-native'
import React from 'react'
import messages from '../api/messages'
import * as Notifications from 'expo-notifications'

export default function ContactSellerForm({listing}) {
const handleSubmit = async({message},{resetForm})=>{
    Keyboard.dismiss

    const result = await messages.send(message,listing.id)

    if(!result.ok){
        console.log(result)
        return Alert.alert("Error","Could not send the message to the seller")
    }
    resetForm();

    Notifications.presentNotificationAsync({
        title:"Awesome!",
        body:"Your message was sent to the seller"
    })
}

  return (
    <View>
      <Text>ContactSellerForm</Text>
    </View>
  )
}