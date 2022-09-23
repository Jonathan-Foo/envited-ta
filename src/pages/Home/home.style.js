import styled from "styled-components";

const HomeStyleWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justfy-content: center;
    text-align: center;
    padding: 2rem;

    img {
        box-shadow: 0px 15px 50px 1px hsl(0, 0%, 85%);
        margin-bottom: 5rem;
    }

    .information {
        margin-bottom: 5rem;
        max-width: 75%;
        
        .hook {
            font-size: 4.5rem;
            margin-bottom: 1rem;
            
            span {
                background-color: #f3ec78;
                background-image: linear-gradient(to right, ${({theme}) => theme.color.primary.light}, ${({theme}) => theme.color.primary.pink});
                background-size: 100%;
                -webkit-background-clip: text;
                -moz-background-clip: text;
                -webkit-text-fill-color: transparent; 
                -moz-text-fill-color: transparent;
            }
        }

        p {
            font-size: 1.5rem;
            color: ${({theme}) => theme.color.text.darkest};
            font-weight: 100; 
        }
    }

`

export default HomeStyleWrapper;