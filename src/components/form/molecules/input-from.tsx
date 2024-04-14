import React from 'react'


import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface InputFormCommonProp {
    form: any,
    name: string,
    label: string,
    formDescription?: string,

}

export const InputFormCommon: React.FC<InputFormCommonProp> = ({ form, name, label, formDescription }) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input placeholder={`Enter ${label}`} {...field} />
                    </FormControl>
                    {
                        formDescription && <FormDescription>
                            {formDescription}
                        </FormDescription>
                    }

                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
