import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
`;

export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

export const Input = styled.input`
    border: 2px solid #ccc;
    height: 2rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;
    
    8:focus,
    &:active{
        outline:none;
        box-shadow: none;
    }`
    ;

    export const Button = styled.button`
    border: 2px solid #000;
    height: 2rem;

    background: #000;
    color: #fff;
    padding: 0 .5rem;
    border-radius: 0 .25rem .25rem 0;
    
    8:focus,
    &:active{
        outline:none;
        box-shadow: none;
    }`
    ;

    export const ErrorMsg = styled.span`
        margin-top: 2rem;
        display: block;
        font-size: 0.7rem;
        font-weight: 600;
        color: #c00;
        

    `;
