import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useRouter } from "next/dist/client/router";
import { createContext, useContext, useEffect } from "react";

type ContextData = UseDisclosureReturn

const SidebarContext = createContext({} as ContextData)

export const SidebarProvder: React.FC = ({children}) => {
    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(()=>{
        disclosure.onClose()
    },[router.asPath])

    return(
        <SidebarContext.Provider value={disclosure}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => useContext(SidebarContext)