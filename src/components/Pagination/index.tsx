import {Stack, Button, Box, Text} from '@chakra-ui/react'

import PaginationButton from './PaginationItem'

interface PaginationProps {
    totalCountOfRegisters: number
    registersPerPage?: number
    currentPage?: number
    onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number){
    return [...new Array(to-from)]
        .map((_, index)=>{
            return from + index + 1
        })
        .filter(page => page > 0)
}

const Pagination: React.FC<PaginationProps> = ({
    totalCountOfRegisters,
    currentPage = 1,
    onPageChange,
    registersPerPage = 10
}) => {

    const lastPage = Math.floor(totalCountOfRegisters / registersPerPage)

    const previousPages = currentPage > 1
        ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
        : []
    
    const nextPages = currentPage < lastPage
        ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
        : []

    return(
        <Stack
            direction={["column","row"]}
            mt="8"
            justify="space-between"
            align="center"
            spacing="6"
        >

            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box> 
            <Stack direction="row" spacing="2">
                
                {currentPage > (1+siblingsCount) && (
                    <>
                        <PaginationButton onPageChange={onPageChange} number={1}/>
                        { currentPage > 2+siblingsCount && <Text>...</Text>}
                    </>
                )}

                {previousPages.length > 0 && previousPages.map(page => (
                    <PaginationButton onPageChange={onPageChange} number={page} key={page}/>
                ))}

                <PaginationButton onPageChange={onPageChange} number={currentPage} isCurrent/>

                {nextPages.length > 0 && nextPages.map(page => (
                    <PaginationButton onPageChange={onPageChange} number={page} key={page}/>
                ))}

                {currentPage + siblingsCount < lastPage && (
                    <>
                        { currentPage + 1 + siblingsCount < lastPage && <Text>...</Text>}
                        <PaginationButton onPageChange={onPageChange} number={lastPage}/>
                    </>
                )}

            </Stack>
            
        </Stack>
    )
}

export default Pagination