import { useState } from "react";
import styles from './GithubFinder.module.css';
import Input from './Input/Input.jsx';
import Card from './Card/Card.jsx';
import logo from '../assets/logo.png';

const GithubFinder = () => {
  const [profileData, setProfileData] = useState(null); // Armazena os dados do perfil encontrado
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProfile = async (username) => {
    setLoading(true);
    setError(null);

    try {
      // Simula uma espera de 1.5 segundos (por exemplo, para efeito de loading)
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Chama a API do GitHub para buscar o perfil do usuário pelo username
      const response = await fetch(`https://api.github.com/users/${username}`);

      // Verifica se o perfil existe. Se não, lança um erro
      if (!response.ok) {
        throw new Error('Profile not found');
      }

      // Converte a resposta da API para um objeto JSON
      const data = await response.json();
      setProfileData(data);
      setError(null);
    } catch (error) {
      setProfileData(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.containerFinder}>
      <img src={logo} alt="Logo do Buscador de Perfis" />
      <Input onSearch={fetchProfile} />
      <div>
        {loading && (
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p>Carregando</p>
          </div>
        )}
        {!loading && error && (
          <div className={styles.containerError}>
            <p>Nenhum perfil foi encontrado com esse nome de usuário.</p>
            <p>Tente Novamente.</p>
          </div>
        )}
        {!loading && profileData && (
          <Card
            photo={profileData.avatar_url}
            name={profileData.name || profileData.login}
            description={profileData.bio || 'Esse usuário não possui uma biografia.'}
          />
        )}
      </div>
    </section>
  );
}

export default GithubFinder;
