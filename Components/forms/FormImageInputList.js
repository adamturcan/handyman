import { useFormikContext } from 'formik';
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Screen from '../../screens/Screen';
import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

export default function FormImageInputList({name}) {
    const {errors,touched,setFieldValue,handleChange,values} = useFormikContext()

     const imageUris = values[name]
  

  const handleAdd = uri =>{
    setFieldValue(name,[...imageUris,uri]) }
  const handleRemove = uri =>{
  
    setFieldValue(name,imageUris.filter((imageUri)=>imageUri !== uri))
    console.log(imageUris)
  }


    return (
       <View>

        <ImageInputList imageUris={imageUris} onRemoveImage={handleRemove} onImageAdd={handleAdd}/>
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
       </View>
    )
}
