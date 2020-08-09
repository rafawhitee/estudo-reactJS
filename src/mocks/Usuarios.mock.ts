import Usuario from '../models/Usuario'

export function getUsuarioPrincipal(): Usuario {
    return { id: 1, nome: 'Rafael Nunes', email: 'rafaelnunes.inf@gmail.com' }
}

export function getUsuarios(): Usuario[] {
    return [
        getUsuarioPrincipal(),
    ]
} 