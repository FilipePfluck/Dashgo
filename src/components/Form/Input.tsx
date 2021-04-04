import { FormControl, FormLabel, Input as ChackaInput, InputProps as ChackraInputProps } from "@chakra-ui/react";
import React, { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChackraInputProps{ 
    name: string
    label?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement,InputProps> = ({ name, label, ...rest }, ref) => {
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
              ref={ref}
            />
          </FormControl>
    )
}

const Input = forwardRef(InputBase)

export default Input