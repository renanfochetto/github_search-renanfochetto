import { useState } from 'react';
import styles from './Input.module.css';

const Input = ({ onSearch }) => {
  const [username, setUsername] = useState('');  // Armazena o valor do campo de busca (username)

  // Função chamada quando o usuário clicar no botão de busca ou pressionar Enter
  const handleSearch = () => {
    // Verifica se o campo de busca não está vazio antes de chamar a busca
    if (username.trim()) {
      onSearch(username);
      setUsername('');
    }
  }

  return (
    <>
      <label htmlFor="search" className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          type="search"
          id="search"
          placeholder="Digite o nome do usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <button
          className={styles.searchButton}
          type="button"
          onClick={handleSearch}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </label>
    </>
  );
}

export default Input;
