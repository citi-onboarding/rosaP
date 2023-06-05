import React from "react";
import { WhoWeAreContainer, Content, TextContent, Title} from './styles';
import Logos from "../../assets";

export const WhoWeAre: React.FC = () => {
    return (
        <WhoWeAreContainer>
            <Title>
                <span><img src={Logos.Line} alt=""/></span>
                <h1>Quem somos</h1>
                <h2>ROSA P</h2>
            </Title>
            <Content>
                <span><img src={Logos.PicWhoWeAre} alt="" /></span>
                <TextContent>
                    <p> Em homenagem a ativista norte americana, a costureira negra Rosa Parks que se recusou a levantar do banco de ônibus para ceder seu lugar à pessoa branca e que iniciou, com sua atitude, mudanças sobre os direitos civis da população negra. A rosaP nasce com o desejo de promover uma transformação na triste realidade presente na cadeira da produção da moda, atuando de modo a intermediar de maneira justa as relações entre marcas e produtores da moda priorizando a inivação, qualidade e sustentabilidade social</p>
                </TextContent>
            </Content>   
        </WhoWeAreContainer>
    );
} 