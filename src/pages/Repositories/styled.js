import styled from 'styled-components';
import {Link} from 'react-router-dom';



export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
`;

export const Title = styled.h1`
    text-align: center;
    margin-bottom: 3rem;
    
`;

export const Content = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;

    @media(max-width: 800px) {
        display: block;
        width: 100%;
      }

    
`;

export const UserContainer = styled.div`
    width: 25%;

    @media(max-width: 800px) {
        width: 100%;
      }

`;

export const Avatar = styled.img`
    width: 80%;
    border-radius: 50%;
    margin: 1rem 10%;
    margin-bottom: 1.5rem;
`;

export const Name = styled.h2`
    font-size: 1.5rem;
    margin: 0 10%;
`;

export const Username = styled.h3`
    margin: 0 10%;
    color: #777;
`;

export const GoToProfile = styled.a`
    background-color: #000;
    color: #fff;
    border-radius: .5em;
    padding: 10px 20px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin: 1rem 0 0 10%; 
    width: 80%;
    cursor: pointer;
    text-decoration:none;
    z-index: 1;

`;




export const RepoList = styled.div`

    padding: 0;
    margin: 0;
    font-family: sans-serif;
    width: 75%;

    @media(max-width: 800px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
    

`;

export const ListItem = styled.div`
    margin: 1rem 2rem;;
    color: #000;
    font-family: sans-serif;
    padding-left: .5rem;
    border-bottom: .25rem solid #000;
    border-radius: .5rem;
    height: 10rem;
   

    @media(max-width: 800px) {
            height: 25rem;
      }

`;

export const ItemTitle = styled.h1`
overflow-wrap: break-word;

`;


export const LinkToHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    background-color: #000;
    color: #fff;
    margin: 2rem auto;
    text-decoration: none;
    cursor: pointer;
    border-radius: .5em;
`;