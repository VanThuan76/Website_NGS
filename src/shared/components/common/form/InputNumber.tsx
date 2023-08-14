import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

type Props = {
    form: any
    fieldName: string
    label?: string
    placeHolder?: string
}

export default function InputNumber({ fieldName, form, label, placeHolder }: Props) {
    return (
        <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <Input placeholder={placeHolder} {...field} type='number'/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}