import { Stack } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'

import NavSection from './NavSection'
import NavLink from './NavLink'
import { useRouter } from 'next/dist/client/router'


const SidebarNav = () => {
    const { asPath } = useRouter()

    return(
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink 
                    href="/dashboard" 
                    name="Dashboard" 
                    icon={RiDashboardLine}
                />
                <NavLink 
                    href="/users" 
                    name="Usuários" 
                    icon={RiContactsLine}
                />
            </NavSection>

            <NavSection title="AUTOMAÇÃO">
                <NavLink 
                    href="/forms" 
                    name="Formulários" 
                    icon={RiInputMethodLine}
                />
                <NavLink 
                    href="/automation" 
                    name="Automação" 
                    icon={RiGitMergeLine}
                />
            </NavSection>
        </Stack>
    )
}

export default SidebarNav