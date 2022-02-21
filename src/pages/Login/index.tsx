import * as C from "./styles"

const LoginPage = () => {
    return (
        <C.Container>
            <C.Wrapper>
                <C.Title>Fazer Login</C.Title>
                <C.Form>
                    <C.Input placeholder="Digite seu username" />
                    <C.Input placeholder="Digite sua senha" />
                    <C.Button>Entrar</C.Button>
                    <C.Link>ESQUECEU SUA SENHA?</C.Link>
                    <C.Link>CRIAR UMA NOVA CONTA</C.Link>
                </C.Form>
            </C.Wrapper>
        </C.Container>
    )
}

export default LoginPage