import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import './style.css';
import { useHistory } from 'react-router-dom';


function Home() {
  const history = useHistory();
  const [usuario, setUsuario] = useState("");
  const [erro, setErro] = useState(false);

  function handleSearch(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];

      repositories.map((repository) => {
        let repoarray = [];
        repoarray.push(repository.name);
        repoarray.push(repository.html_url);
        repoarray.push(repository.description);
        repositoriesName.push(repoarray);
      })
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      history.push('/repositories')
    }).catch(err => { 
      setErro(true);
    });
    axios.get(`https://api.github.com/users/${usuario}`)
    .then(response => {
      let userarray = [];
      userarray.push(response.data.name);
      userarray.push(response.data.login);
      userarray.push(response.data.avatar_url);

      localStorage.setItem('userInfo', JSON.stringify(userarray));
      
    })

  }

    return (
    <S.Main>
      <S.Title>SearchGit</S.Title>
      <div>
      <S.Input placeholder="User" className="user-input" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <S.Button type="button" onClick={handleSearch}> Search</S.Button>
      </div>
      { erro ? <S.ErrorMsg>An error occurred, try again.</S.ErrorMsg> : ""}
    </S.Main>
  );
}

export default Home;