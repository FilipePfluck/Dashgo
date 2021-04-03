import { FormControl, FormLabel, Input as ChackaInput, InputProps as ChackraInputProps } from "@chakra-ui/react";
import React from "react";

interface InputProps extends ChackraInputProps{ 
    name: string
    label?: string
}

export default function Input({ name, label, ...rest }: InputProps){
    return(
        <FormControl>
            {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChackaInput 
              name={name}
              id={name}
              outline={0}
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
              {...rest}
            />
          </FormControl>
    )
}