import * as C from "./styles"

const RegisterPage = () => {
    return (
        <C.Container>
            <C.Wrapper>
                <C.Title>Crie sua conta</C.Title>
                <C.Form>
                    <C.Input placeholder="Digite seu nome" />
                    <C.Input placeholder="Digite seu sobrenome" />
                    <C.Input placeholder="Digite seu username" />
                    <C.Input placeholder="Digite seu e-mail" />
                    <C.Input placeholder="Digite sua senha" />
                    <C.Input placeholder="Confirme sua senha" />
                    <C.Aggrement>
                        Ao criar uma conta, concordo com o processamento dos meus dados pessoais de acordo com as <b>POLÍTICA DE PRIVACIDADE</b>
                    </C.Aggrement>
                    <C.Button>Criar conta</C.Button>
                </C.Form>
            </C.Wrapper>
        </C.Container>
    )
}

export default RegisterPage