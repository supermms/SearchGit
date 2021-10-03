import React, { useEffect, useState } from "react";
import * as S from './styled'
import { useHistory } from 'react-router-dom'


export default function Repositories(){
    const history = useHistory();
    const [repositories, setRepositories] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    function visitProfile(URL){

    }

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        let userInfo = localStorage.getItem('userInfo');
        if(repositoriesName != null && userInfo != null){
            repositoriesName = JSON.parse(repositoriesName);
            userInfo = JSON.parse(userInfo);
            console.log(userInfo);

            setRepositories(repositoriesName);
            setUserInfo(userInfo);
            localStorage.clear();
            
        }
        else{
            history.push('/');
        }
        
    }, []);

    return (
    <>
        <S.Title>Repositories</S.Title>
        <S.Content>
            <S.UserContainer>
                <S.Avatar src={userInfo[2]}></S.Avatar>
                <S.Name>{userInfo[0]}</S.Name>
                <S.Username>{userInfo[1]}</S.Username>
                <S.GoToProfile href={`http://github.com/${userInfo[1]}`}>Visit on Github</S.GoToProfile>
            </S.UserContainer>
            <S.RepoList>
             {
                 repositories.map((repository) => {
                      return (
                          <S.ListItem>
                              <h1>{repository[0]} <a>visit</a></h1>
                              <h3>{repository[2] != null ? repository[2] : "No description."}</h3>
                          </S.ListItem>
                      )
                    })
            }
            </S.RepoList>
        </S.Content>
        <S.LinkToHome to="/"> Back</S.LinkToHome>
        </>
        
    )
}
