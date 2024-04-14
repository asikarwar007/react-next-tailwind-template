import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { UseFormReturn } from 'react-hook-form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LanguageList } from '@/types/state'

interface LanguageSelectProp {
    form: UseFormReturn<{
        stateCd?: string;
        language?: string;
    }, any, undefined>
}

export const LanguageSelect: React.FC<LanguageSelectProp> = ({ form }) => {

    return (
        <FormField control={form.control} name="language" render={({ field }) => (
            <FormItem>
                <FormLabel>Language </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a Language" />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {LanguageList.map((lang, index) =>
                            <SelectItem key={`lang-${index}`} value={lang.value}>{lang.lable}</SelectItem>
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
