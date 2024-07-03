"use client"
import CardWrapper from "./cardwrapper"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { RegisterSchema } from "../../../schema";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "../ui/label";
import { Input } from "../ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"





const RegisterForm = () => {
    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
            DropdownMenu: "",
            Checkbox: false,
            Radio: "",
            Date: undefined,
            FileUpload:undefined,

        }

    })
    const [date, setDate] = React.useState<Date | null>(null);

    function onSubmit() {

    }

    // const [position, setPosition] = React.useState("bottom")
    return (
        <CardWrapper

            label="create an account "
            title="Register"
            backbuttonhref="/auth/login"
            backbuttonlabel="Already have an account? Login here."
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 ">
                    <div className="space-y-4">
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <input {...field} type="email" placeholder="example@gmail.com" className="border-gray-500 border rounded py-4 px-6" />
                                </FormControl>
                                <FormMessage className="text-red-700"></FormMessage>
                            </FormItem>
                        )}>

                        </FormField>
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Fullname</FormLabel>
                                <FormControl>
                                    <input {...field} type="text" placeholder="alex" className="border-gray-500 border rounded py-4 px-6" />
                                </FormControl>
                                <FormMessage className="text-red-700"></FormMessage>

                            </FormItem>
                        )}></FormField>

                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel className="">Password</FormLabel>
                                <FormControl>
                                    <input {...field} type="password" placeholder="********" className="border-gray-500 border rounded py-4 px-6" />
                                </FormControl>
                                <FormMessage className="text-red-700"></FormMessage>

                            </FormItem>
                        )}></FormField>

                        <FormField control={form.control} name="confirmPassword" render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <input {...field} type="password" placeholder="********" className="border-gray-500 border rounded py-4 px-6" />
                                </FormControl>
                                <FormMessage className="text-red-700"></FormMessage>

                            </FormItem>
                        )}></FormField>
                    </div>
                    {/* -----------------------Dropdown-------------------------------------- */}
                    <FormField control={form.control} name="DropdownMenu" render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Dropdown Menu</FormLabel>
                            <Controller
                                control={form.control}
                                name="DropdownMenu"
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a verified email to display" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="bg-white">
                                            <SelectItem value="m@example.com">m@example.com</SelectItem>
                                            <SelectItem value="m@google.com">m@google.com</SelectItem>
                                            <SelectItem value="m@support.com">m@support.com</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            <FormMessage className="text-red-700"></FormMessage>
                        </FormItem>
                    )} />
                    {/* ----------------checkBox      ------------------------------- */}
                    <FormField control={form.control} name="Checkbox" render={({ field }) => (
                        <FormItem className=" items-center space-x-2">
                            <FormControl>
                                <Checkbox id="terms1" checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <FormLabel htmlFor="terms1" className="text-sm font-medium leading-none">
                                Accept terms and conditions
                            </FormLabel>
                            <FormMessage className="text-red-700"></FormMessage>
                        </FormItem>
                    )} />


                    {/* --------------------------radiobutton------------------------------------- */}
                    <FormField
                        control={form.control}
                        name="Radio"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Radio Button</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="all" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                All new messages
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="mentions" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Direct messages and mentions
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="none" />
                                            </FormControl>
                                            <FormLabel className="font-normal">Nothing</FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage className="text-red-700" />
                            </FormItem>
                        )}
                    />
                    {/* ------------------------------------date picker----------------------------------------------- */}
                    <FormField
                        control={form.control}
                        name="Date"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Date of birth</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[240px] pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(new Date(field.value), "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            className="bg-white"
                                            disabled={(date) =>
                                                date > new Date() || date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage className="text-red-700" />
                            </FormItem>
                        )}
                    />


                    {/* --------------------------------file upload----------------------------------------- */}
                    <FormField control={form.control} name="FileUpload" render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Upload a Picture</FormLabel>
                            <FormControl>
                                <input
                                    type="file"
                                    onChange={(e) => field.onChange(e.target.files)}
                                    className="border-gray-500 border rounded py-4 px-6"
                                />
                            </FormControl>
                            <FormMessage className="text-red-700" />
                        </FormItem>
                    )} />

                    {/* --------------------------------------button---------------------------------- */}
                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-600">
                        Register
                    </Button>
                </form>
            </Form>

        </CardWrapper>)
}

export default RegisterForm 