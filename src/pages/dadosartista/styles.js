
import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    height: 100%;
    background: #202225;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const Card = styled.div`
flex: 1;
    height: 20%;
    width:20%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const PesquisaForm = styled.form`
    background: #36393f;
    border-radius: 5px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    padding: 40px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    h1 {
        font-size: 26px;
        font-weight: 500;
        text-align: center;
        margin: 0 0 10px;
    }
    div {
    flex-direction: center;
    align-self: center;
    }

    span {
        color: #b9bbbe;
        font-size: 14px;
        line-height: 16px;
        font-weight: 600;
        margin-top: 15px;
    }

    input {
        height: 40px;
        padding: 10px;
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        background-color: 1px solid rgba(0, 0, 0, 0.1);
        color: #7289da; 
        margin-top: 8px;
        transition: border 0.15s ease;
        font-size: 16px;

        &:focus {
            border-color: #f6f6f6;
        }
    }

    button {
        margin: 20px 0 0;
    }
    Link {

    }

`;