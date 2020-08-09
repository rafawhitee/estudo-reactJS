import React, { useState, createContext, useContext } from 'react'
import AuthContextValue from '../../models/AuthContextValue'
import { getUsuarioPrincipal } from '../../mocks/Usuarios.mock'

const AuthContext = createContext<AuthContextValue>({})

export const AuthProvider: React.FC = ({ children }) => {
    const [usuarioLogado, setUsuarioLogado] = useState(getUsuarioPrincipal())

    return (
        < AuthContext.Provider value={{ usuarioLogado, setUsuarioLogado }}>
            {children}
        </AuthContext.Provider >
    )
}

export function useAuth(): AuthContextValue {
    const context: AuthContextValue = useContext(AuthContext);
    if (!context)
        throw new Error("Para utilizar o useAuth é preciso utilizar o AuthProvider")

    return context
}

export default AuthContext