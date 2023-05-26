import styled from 'styled-components'; 

export const FooterContainer = styled.div`
    background-color:#E5E8ED;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 400px;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-evenly;
    
    .logomarca{
        display:flex;
        justify-content: center;
    }

    .Sociais ul{
        display: flex;
        flex-direction: row;
        justify-content: center;
        list-style: none;
        align-content: center;
    }

    .Sociais li {
        margin: 0 10px;
    }

    .Sociais li img{
        
    }

    .line{
        margin-left: 1%;
        height: 3px;
        background-color: #7D7E7F;
    }

    .creditos {
        display: flex;
        flex-directions: row;
        justify-content: space-around;
    }

    .creditos p {
        font-size: 20px;
        color: #827D7D;
    }

`;