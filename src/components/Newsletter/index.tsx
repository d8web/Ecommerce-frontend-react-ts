import * as C from "./styles"
import { Send } from "@material-ui/icons"

const Newsletter = () => {
    return (
        <C.NewsletterContainer>
            <C.TitleNewsletter>Newsletter</C.TitleNewsletter>
            <C.NewsletterDescription>
                Obtenha atualizações dos seus produtos favoritos.
            </C.NewsletterDescription>
            <C.NewsletterInputContainer>
                <C.NewsletterInput placeholder="Digite seu e-mail"/>
                <C.NewsletterButton>
                    <Send style={{ fill: "#fff" }} />
                </C.NewsletterButton>
            </C.NewsletterInputContainer>
        </C.NewsletterContainer>
    )
}

export default Newsletter