"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import useSWRMutation from 'swr/mutation'

import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import { StateCodeSelect } from "./molecules/state-code.select"
import { InputFormCommon } from "./molecules/input-from"
import { Boundary } from "../ui/boundary"
import { useGetCaptchaQuery } from "@/framework/getCaptcha"
import { useEffect } from "react"
import { mutater } from "@/util/mutater"
import { mutate } from "swr"
import { API_ENDPOINTS } from "@/framework/utils/api-endpoints"

const formSchema = z.object({
  stateCd: z.string({
    required_error: "Please select an state.",
  }),
  epicNumber: z.string().describe('Language is to display'),
  isPortal: z.boolean().describe('Language is to display'),
  captchaId: z.string().describe('Language is to display'),
  captchaData: z.string().describe('Language is to display'),
  securityKey: z.string().describe('Language is to display'),
})

export const EpicForm: React.FC = () => {


  const { data: captchaDetails, error, isLoading } = useGetCaptchaQuery()

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stateCd: "",
      epicNumber: "",
      isPortal: true,
      captchaId: '',
      captchaData: "",
      securityKey: "na",
    },
  })

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // const { data: captchaDetails, error, isLoading } = useGetCaptchaQuery()
    try {
      let userDetails = await fetch(API_ENDPOINTS.EPIC_SEARCH, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });
      console.log(userDetails)

      // Revalidate the data after successful submission
      // mutate('/api/data');
    } catch (error) {
      console.error('Failed to submit form', error);
    }

    // trigger(values)
  }

  useEffect(() => {
    if (captchaDetails?.id) {
      form.setValue('captchaId', captchaDetails?.id)
    }
  }, [captchaDetails])
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Boundary labels={['EPIC DETAIL']}>
          <div className="grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12  gap-4">
            <div className="col-span-2 md:col-span-4">
              <StateCodeSelect form={form} />
            </div>
            <div className="col-span-2 md:col-span-4">
              <InputFormCommon form={form} name={'epicNumber'} label="ईपीआईसी संख्या / EPIC Number" />
            </div>
          </div>
        </Boundary>
        <Boundary labels={['Captcha']}>
          <div className="grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12  gap-4">
            <div className="col-span-2 md:col-span-4">
              <InputFormCommon form={form} name={'captchaData'} label="Enter Captcha" />
            </div>
            {
              !isLoading && captchaDetails && <div className="col-span-2 md:col-span-4">
                <img src={`data:image/jpeg;base64,${captchaDetails.captcha}`} alt="Captcha" />
              </div>
            }
          </div>
        </Boundary>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
