import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form';
import { Control, FieldPath} from 'react-hook-form';
import { authFormSchema } from '@/lib/utils';
import {z} from "zod";
import { Input } from "@/components/ui/input";

const formSchema = authFormSchema('sign-up')

interface CustomInputProps {
    control : Control<z.infer<typeof formSchema>>,
    name : FieldPath<z.infer<typeof formSchema>>,
    label : string,
    placeholder : string,
    type ?: string,
}

const CustomInput = ({name, control, type, label, placeholder}: CustomInputProps) => {
return (
<FormField
    control={control}
    name={name}
    render={({ field }) => (
    <div className="form-item">
        <FormLabel className="form-label">{label}</FormLabel>
        <div className="w-full flex flex-col">
        <FormControl>
            <Input
            className="input-class"
            type={type}
            {...field}
            placeholder={placeholder}
            />
        </FormControl>
        <FormMessage className="form-message mt-2" />
        </div>
    </div>
    )}
/>
);
};

export default CustomInput;
