import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri'

interface NavSectionProps{ 
    title: string
}

const NavSection: React.FC<NavSectionProps> = ({title, children}) => {
    return(
        <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">
                {title}
            </Text>
            <Stack spacing="4" mt="8" align="stretch">
                {children}
            </Stack>
        </Box>
    )
}

export default NavSection