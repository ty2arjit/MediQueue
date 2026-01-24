"use client";

import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Control } from "react-hook-form";
import { FormFieldType } from "./forms/PateintForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { date } from "zod";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const { fieldType, iconSrc, iconAlt, placeholder, showTimeSelect, dateFormat, renderSkeleton } = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt || "icon"}
              className="ml-2 my-auto"
            ></Image>
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="shad-input border-0"
            ></Input>
          </FormControl>
        </div>
      );

    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="IN"
            placeholder={placeholder}
            international
            withCountryCallingCode
            value={field.value}
            onChange={field.onChange}
            className="input-phone  shad-input border-0 w-full"
          />
        </FormControl>
      );

    case FormFieldType.DATE_PICKER:
        return (
          <div className="flex items-center rounded-md border border-dark-500 bg-dark-400">
            
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="calendar"
              className="ml-2 shrink-0"
            />
      
            <FormControl className="flex-1">
              <div className="w-full">
                <DatePicker
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  dateFormat={dateFormat ?? "MM/dd/yyyy"}
                  showTimeSelect={showTimeSelect ?? false}
                  timeInputLabel="Time:"
                  wrapperClassName="w-full"
                  className="w-full border-0 bg-dark-400 focus:ring-0 focus:outline-none px-3 py-2"
                />
              </div>
            </FormControl>
      
          </div>
        );
    
    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select
          onValueChange={field.change}
          defaultValue={field.value}
          >

          </Select>
        </FormControl>
      )
    case FormFieldType.SKELETON:
      return (
        props.renderSkeleton ? props.renderSkeleton(field) : null
      ); 

    default:
        null;
  
  }
};
const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}

          <RenderField field={field} props={props} />

          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
