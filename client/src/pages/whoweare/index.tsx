import React from "react";
import { WhoWeAreContainer, Content, TextContent, Title} from './styles';
import {QuemSomosImg, Linha1} from "../../assets";

export const WhoWeAre: React.FC = () => {
    return (
        <WhoWeAreContainer>
            <Title>
                <span><img src={Linha1} alt=""/></span>
                <h1>Quem somos</h1>
            </Title>
            <Content>
                <span><img src={QuemSomosImg} alt="" /></span>
                <TextContent>
                    <h2>ROSA P</h2>
                    <p> Em homenagem a ativista norte americana, a costureira negra Rosa Parks que se recusou a levantar do banco de ônibus para ceder seu lugar à pessoa branca e que iniciou, com sua atitude, mudanças sobre os direitos civis da população negra. A rosaP nasce com o desejo de promover uma transformação na triste realidade presente na cadeira da produção da moda, atuando de modo a intermediar de maneira justa as relações entre marcas e produtores da moda priorizando a inivação, qualidade e sustentabilidade social</p>
                </TextContent>
            </Content>   
        </WhoWeAreContainer>
    );
} 