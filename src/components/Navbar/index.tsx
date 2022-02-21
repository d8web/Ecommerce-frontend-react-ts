import { Badge } from "@material-ui/core"
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import * as C from "./styles"

const Navbar = () => {
    return (
        <C.Container>
            <C.Left>
                <C.Language>PT</C.Language>
                <C.SearchContainer>
                    <C.Input placeholder="Pesquisar" />
                    <Search style={{ color: "gray", fontSize: 16 }} />
                </C.SearchContainer>
            </C.Left>
            <C.Center>
                <C.Logo>DEV.</C.Logo>
            </C.Center>
            <C.Right>
                <C.MenuItem>CADASTRO</C.MenuItem>
                <C.MenuItem>LOGIN</C.MenuItem>
                <C.MenuItem>
                    <Badge color="primary" badgeContent={4}>
                        <ShoppingCartOutlined/>
                    </Badge>
                </C.MenuItem>
            </C.Right>
        </C.Container>
    )
}

export default Navbar