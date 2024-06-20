import * as z from 'zod';


export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    name: z.string().min(1, ({
        message: "Please enter your name"
    })),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters"
    }),
    confirmPassword: z.string().min(8, {
        message: "Password must be at least 8 characters"
    }),
    DropdownMenu:z.string({
        required_error: "Please select an email to display.",
    }).email(),
    
    Checkbox: z.boolean({
        required_error: "You must accept the terms and conditions"
    }).refine(val => val === true, {
        message: "You must accept the terms and conditions",
    }),
    Radio: z.enum(["all", "mentions", "none"], {
        required_error: "You need to select a notification type.",
      }),
      Date: z.date({
        required_error: " Date  is required.",
      }),
      FileUpload: z
        .instanceof(FileList)
        .refine(files => files.length > 0, {
            message: "File upload is required."
        })
})
