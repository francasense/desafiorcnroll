import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    
    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Roboto', Arial, Times, sans-serif;
        color: #fff;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }
   

    html, body, #root {
        height: 100%;
    }

    input, button {
        font-family: 'Roboto', Arial, Times, sans-serif;
    }
    
    button {
        cursor: pointer;
    }
     /*


.container {
    

    margin:30px auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container strong {
    margin-top: 10px;
    font-size: 24px;
    color: #444;
}

.container img{
    height: 150px;
    display: flex;
    align-items: center;
    background-size: cover;
    border-radius: 100px;
    box-shadow: 5px 5px 5px #ddd;
    
}

.containerGrande {
    

    margin:30px auto;
    max-width: 100%;
    padding: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #fff;

}

.containerGrande strong {
    margin-top: 10px;
    font-size: 24px;
    color: #444;
}

.content {
    border-radius: 2px;
    width: 100%;
    background: #fff;
    margin-top: 50px;
    padding: 30px;
    align-items: center;
}



.content > p {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 30px;
} 
.content form {
    display: flex;
    flex-direction: column;
} 
.content form label {
    font-size: 14;
    color: #0a657a;
    font-weight: bold;
    margin-bottom: 8px;
} 

.content form input {

    border: 1px solid #ddd;
    margin-bottom: 20px;
    border-radius: 2px;
    height: 45px;
    padding: 0 15px;
    font-size: 16;
    width: 100%;
} 

.content button.btn {

    border: 0;
    border-radius: 2px;
    width: 100%;
    height: 42px;
    padding: 0 15px;
    font-size: 16;
    font-weight: bold;
    background: #0a657a;
    color: #fff;
    cursor: pointer;

} 

.content button.btn:hover {
    background: #acbfc3;
}
*/

`;