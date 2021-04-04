import { Button } from '@chakra-ui/react'

interface PaginationButtonProps {
    isCurrent?: boolean,
    number: number
}

const PaginationButton: React.FC<PaginationButtonProps> = ({isCurrent=false, number}) => {
    if(isCurrent){
        return(
            <Button 
                    size="sm"
                    fontSize="xs"
                    width="4"
                    colorScheme="pink"
                    disabled
                    _disabled={{
                        bg: 'pink.500',
                        cursor: 'default'
                    }}
                >
                    {number}
                </Button>
        )
    }else{
        return(
            <Button 
                size="sm"
                fontSize="xs"
                width="4"
                bg="gray.700"
                _hover={{
                    bg: 'gray.500'
                }}
            >
                {number}
            </Button>
        )
    }
}

export default PaginationButton