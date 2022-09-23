import styled, {css} from "styled-components";

const CreateStyleWrapper = styled.main`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 3rem;
    }

    form {
        display: flex;
        flex-direction: column;    
        gap: 1rem;
        padding: 1rem;
        width: 90%;
    }


    .imageUpload{
        position: relative;
        height: 500px;
        label {
            position: absolute;
            width: 100%;
            height: 100%;
            background: #FFF;
            border-radius: 10px;
            outline: 1px dashed ${({theme}) => theme.color.primary.pink}; 
            ${props => props.image && css`
                background-image: url(${props.image});
                background-repeat: no-repeat;
                background-size: auto;
                background-position: center;

            `}
        }
        input {
            display: none;
        }
    }

    .input {
        label {
           color: ${({theme}) => theme.color.primary.dark};
           font-size: 1.5rem;
        }
        font-weight: bold;
        display: flex;
        flex-direction: column;
        gap: .5rem;

        input {
            background: none;
            border: 1px solid ${({theme}) => theme.color.primary.pink};
            border-radius: 5px;
            padding: 1rem 2rem;
            font-family: inherit;
            font-size: 1rem;
            font-weight: bold;
            color: ${({theme}) => theme.color.text.darkest};
            transition: 200ms ease-in-out;

            &:focus {
                outline: none;
                background: ${({theme}) => theme.color.primary.pink};
                color: #FFF;
                
            }

            &:hover {
                outline: none;
            }
        }
        
    }
`

export default CreateStyleWrapper;