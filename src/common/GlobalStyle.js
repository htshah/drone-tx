import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    /* Disable dbl-tap zoom */
    html{
        touch-action: manipulation;
    }
    html,body{
        margin: 0;
        background: #FFFFFF;
    }

    body, #root{
        width: 100vw;
        height: ${window.innerHeight}px;
    }
    body{
        position:fixed;
    }
`;
