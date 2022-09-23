import styled from 'styled-components';


const ButtonStyleWrapper = styled.button`
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: #FFF;
    font-weight: bold;
    padding: 1rem 5rem;
    font-size: 1.5rem;
    background-image: linear-gradient(to right, ${({theme}) => theme.color.primary.light}, ${({theme}) => theme.color.primary.pink});
`

export default ButtonStyleWrapper