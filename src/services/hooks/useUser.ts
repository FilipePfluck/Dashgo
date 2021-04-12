import { useQuery } from 'react-query'

import api from '../api'

const useUser = useQuery('users', async()=>{
    const {data} = await api.get('/users')

    const users = data.users.map(user => {
        return{
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })

    return users
}, {
    staleTime: 1000 * 60
})

export default useUser