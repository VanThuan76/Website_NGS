import React, { useState } from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import dynamic from 'next/dynamic'
import { OutputData } from '@editorjs/editorjs'
import { UseFormReturn } from 'react-hook-form'

type Props = {
    form: UseFormReturn<any>
    fieldName: string
    label?: string
    placeHolder?: string
}
const EditorBlock = dynamic(() => import("@/components/common/editor/index"), {
    ssr: false,
});
export default function InputEditor({ fieldName, form, label, placeHolder }: Props) {
    return (
        <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
                <FormItem className='text-start'>
                    {label && <FormLabel >{label}</FormLabel>}
                    <FormControl >
                        {/* EDITOR */}
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}