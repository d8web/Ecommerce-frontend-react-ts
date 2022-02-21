import { useState } from "react"
import * as C from "./styles"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { SliderData } from "../../data/HomeData"

const Slider = () => {

    const [ currentSlider, setCurrentSlider ] = useState(0)

    const handleClick = (direction: string) => {
        if(direction === "left") {
            setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
        } else {
            setCurrentSlider(currentSlider < 2 ? currentSlider + 1 : 0)
        }
    }

    return (
        <C.Container>

            <C.ArrowArea direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </C.ArrowArea>

            <C.WrapperArea currentSlider={currentSlider}>

                {SliderData.map(item => (
                    <C.SliderContent bg={item.background} key={item.id}>
                        <C.ImageAreaContent>
                            <C.ImageItem src={item.image} />
                        </C.ImageAreaContent>
                        <C.InfoAreaContent>
                            <C.Headline>{item.title}</C.Headline>
                            <C.Description>
                                {item.description}
                            </C.Description>
                            <C.CallToAction>COMPRAR AGORA</C.CallToAction>
                        </C.InfoAreaContent>
                    </C.SliderContent>
                ))}

            </C.WrapperArea>

            <C.ArrowArea direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </C.ArrowArea>

        </C.Container>
    )
}

export default Slider