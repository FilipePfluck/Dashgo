import { Button, Icon } from '@chakra-ui/react'

import { RiPencilLine } from 'react-icons/ri'

const EditButton: React.FC = ({children}) => {
    return(
        <Button 
            as="a" 
            size="sm" 
            fontSize="sm" 
            colorScheme="whiteAlpha"
            leftIcon={<Icon as={RiPencilLine}/>}
            ml="auto"
        >
            {children}
        </Button>
    )
}

export default EditButton