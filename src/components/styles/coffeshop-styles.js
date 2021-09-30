import styled from 'styled-components'

export const Container = styled.div`

`
export const Select = styled.select`
    margin-left: 5px;
`

export const Title = styled.h1`
    font-family: 'Rampart One', cursive;
    font-size: 41px;
    margin-bottom: 0;

    @media(max-width: 600px) {
        font-size: 32px;
    }
`

export const Frame = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center; 
    max-width: 450px;
    width: 100%;
    padding: 10px ;
    margin: 0 auto; 
    @media(max-width: 600px){
        max-width: 400px;
    }
`

export const Content = styled.div`
    border: 1px solid #404040;
    max-width: 450px;
    width: 100%;

   
  

`
export const Item = styled.div`
    height: 130px;
    display: flex;
    padding-left:15px;
    border-bottom: 1px solid #E4E4E4;
   
`
export const Image = styled.img`
    display: block;
    height:100px;
    width: 100px;
`
export const Name = styled.p``
export const Price = styled.p`


    span {
        opacity: .1;
    }
    span:nth-child(-n+${({ price }) => price}){
        opacity: 1;
    }
    
`
export const Open = styled.p`
    color: ${({open}) => open ? "green" : "red"};

`
export const Location = styled.p``
export const Pane = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center; 
    &:first-of-type{
        padding-right:15px;
    }
    p{
        margin: 0;
    }
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: auto;
    img {
        width: 200px;
        height: 200px;
        object-fit:cover; 
    }
    @media(max-width: 600px){
        img {
            width: 150px;
            height: 150px;
            margin-left: 20px;
            
        }
    }

`
export const Holder = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

        justify-content:center;
        &:nth-of-type(1) {
            justify-content:flex-end;
        }
    
        img {
            margin-right: 40px;
            justify-self:flex-start;
           
        }
        h1 {
            margin-top: 60px;
            max-width: 400px;
        }

`