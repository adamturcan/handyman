import React from 'react'
import { View, Text } from 'react-native'
import {useFormikContext} from 'formik'


import AppButton from '../AppButton'

export default function SubmitButton({name,color}) {
const {handleSubmit} = useFormikContext()

    return (
        <AppButton title={name} color={color} onPress={handleSubmit} />
    )
}
