import { ElementType } from 'react'
import {  Text, Link as ChakraLink, Icon, LinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/dist/client/router'

interface NavLinkProps extends LinkProps{
    name: string,
    icon: ElementType,
    href: string,
}

const NavLink: React.FC<NavLinkProps> = ({name, icon, href, ...rest}) => {
    const { asPath } = useRouter()

    return(
        <NextLink href={href} passHref>
            <ChakraLink 
                display="flex" 
                align="center" 
                color={asPath.startsWith(href) && 'pink.500'}
                {...rest} 
            >
                <Icon as={icon} fontSize="20"/>
                <Text ml="4" fontWeight="medium">{name}</Text>
            </ChakraLink>
        </NextLink>
    )
}

export default NavLink