import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,:before,:after {
        margin: 0;
        padding: 0;
    }

    body {
        box-sizing: border-box;
        font-family: Helvetica, Arial, sans-serif;
        color: ${({theme}) => theme.color.text.darkest};
    }

    ul {
        list-style-type: none;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }

    h1 {
        color: ${({theme}) => theme.color.primary.dark};
    }



`

export default GlobalStyle;