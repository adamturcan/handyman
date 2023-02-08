import React from 'react'
import { View, Text, StyleSheet,TouchableWithoutFeedback,Keyboard } from 'react-native'
import {useFormikContext} from 'formik'

import ErrorMessage from './ErrorMessage'
import AppTextInput from '../AppTextInput'

import AppPicker from '../AppPicker'

export default function AppFormPicker({numberOfColumns,PickerItemComponent, AppP,width,name,items,placeholder}) {

    const {errors,touched,values,setFieldValue} = useFormikContext()

    return (
       
<>
<View style={{width:width?width:"100%"}}>
       <AppPicker numberOfColumns={numberOfColumns} PickerItemComponent={PickerItemComponent} items={items} selectedItem={values[name]} placeholder={placeholder} onSelectItem={(item)=>setFieldValue(name,item)}/>
       </View>
    <ErrorMessage error={errors[name]} visible={touched[name]}/>
             
    </>    
    )
}

const styles = StyleSheet.create({
    
})