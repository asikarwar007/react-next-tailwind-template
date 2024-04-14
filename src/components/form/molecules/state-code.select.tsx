import React from 'react'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { UseFormReturn } from 'react-hook-form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useGetStatesQuery } from '@/framework/getStates'

interface StateCodeSelectProp {
    form: UseFormReturn<{
        stateCd?: string;
        language?: string;
    }, any, undefined>
}

export const StateCodeSelect: React.FC<StateCodeSelectProp> = ({ form }) => {
    const { data: StatesList, error, isLoading } = useGetStatesQuery({})

    return (
        <FormField control={form.control} name="stateCd" render={({ field }) => (
            <FormItem>
                <FormLabel>राज्य / State </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a verified state" />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {!isLoading && !error && StatesList && StatesList.map((state, index) =>
                            <SelectItem key={`state-${index}`} value={state.stateCd}>{state.stateName}</SelectItem>
                        )}
                    </SelectContent>
                </Select>
                {/* <FormDescription>
                    You can manage email addresses in your{" "}
                    <Link href="/examples/forms">email settings</Link>.
                </FormDescription> */}
                <FormMessage />
            </FormItem>
        )} />
    );
}
