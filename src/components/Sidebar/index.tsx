import { 
    Box, 
    useBreakpointValue, 
    Drawer, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerCloseButton, 
    DrawerHeader,
    DrawerBody
} from '@chakra-ui/react'
import { useSidebar } from '../../contexts/sidebarContext'

import SidebarNav from './SidebarNav'

const Sidebar: React.FC = ()=>{
    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    })  

    const { onClose, isOpen } = useSidebar()

    if (isDrawerSidebar){
        return(
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay w="100vw" h="100vh">
                    <DrawerContent bg="gray.800" p="4" h="100%">
                        <DrawerCloseButton mt="6"/>
                        <DrawerHeader>Navegação</DrawerHeader>

                        <DrawerBody>
                            <SidebarNav/>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return(
        <Box as="aside" w="64" mr="8">
            <SidebarNav/>
        </Box>
    )
}

export default Sidebar