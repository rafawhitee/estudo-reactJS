import Usuario from "./Usuario";

export default interface AuthContextValue {
    usuarioLogado?: Usuario;
    setUsuarioLogado?: any;
}