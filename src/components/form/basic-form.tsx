"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import Link from "next/link"
import { StateCodeSelect } from "./molecules/state-code.select"
import { Suspense } from "react"
import { LanguageSelect } from "./molecules/language.select"

const formSchema = z.object({
  stateCd: z.string({
    required_error: "Please select an state.",
  }),
  language: z.string().describe('Language is to display'),
})

export function BasicForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stateCd: "",
      language: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <StateCodeSelect form={form} />
        <LanguageSelect form={form} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}