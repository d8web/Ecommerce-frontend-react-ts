import { Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import * as C from "./styles"
import ImagesObject from "../../data/Images"

const Footer = () => {
    return (
        <C.FooterContainer>

            <C.Left>
                <C.FooterLogo>DEV.</C.FooterLogo>
                <C.FooterDesc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tenetur nihil autem consequuntur aliquam eveniet labore, porro nobis voluptatibus facilis excepturi doloribus minus blanditiis quisquam magnam? Cupiditate praesentium odit voluptate!
                </C.FooterDesc>
                <C.FooterSocialContainer>
                    <C.FooterSocialIcon color="3b5999">
                        <Facebook/>
                    </C.FooterSocialIcon>
                    <C.FooterSocialIcon color="e4405f">
                        <Instagram/>
                    </C.FooterSocialIcon>
                    <C.FooterSocialIcon color="55acee">
                        <Twitter/>
                    </C.FooterSocialIcon>
                    <C.FooterSocialIcon color="e60023">
                        <Pinterest/>
                    </C.FooterSocialIcon>
                </C.FooterSocialContainer>
            </C.Left>

            <C.Center>
                <C.FooterTitle>Links úteis</C.FooterTitle>
                <C.FooterList>
                    <C.FooterListItem>Home</C.FooterListItem>
                    <C.FooterListItem>Carrinho</C.FooterListItem>
                    <C.FooterListItem>Hardwares</C.FooterListItem>
                    <C.FooterListItem>Acessórios</C.FooterListItem>
                    <C.FooterListItem>Minha conta</C.FooterListItem>
                    <C.FooterListItem>Favoritos</C.FooterListItem>
                    <C.FooterListItem>Termos e condições</C.FooterListItem>
                    <C.FooterListItem>Política de privacidade</C.FooterListItem>
                </C.FooterList>
            </C.Center>

            <C.Right>
                <C.FooterTitle>Contato</C.FooterTitle>
                <C.FooterContactItem>
                    <Room style={{ fill: "#333", marginRight: "10px" }}/>
                    378 Rua Santiago, Bairro Santana 042359
                </C.FooterContactItem>
                <C.FooterContactItem>
                    <Phone style={{ fill: "#333", marginRight: "10px" }}/>
                    +55 66 94663-5793
                </C.FooterContactItem>
                <C.FooterContactItem>
                    <Email style={{ fill: "#333", marginRight: "10px" }}/>
                    devstore@devstore.com.br
                </C.FooterContactItem>
                <C.PaymentImage src={ImagesObject.PaymentImage} />
            </C.Right>

        </C.FooterContainer>
    )
}

export default Footer