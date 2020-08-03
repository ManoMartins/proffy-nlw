import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/62728230?s=460&u=d2a1db3ec462bdeb108297602e274c9049003089&v=4" alt=""/>
        <div>
          <strong>Manoel Martins</strong>
          <span>Math</span>
        </div>
      </header>
      <p>
        fjdisjfoaisjeofijsioefjoiasjfioejiojo.
        <br /> <br />
        disjfisjlfijrisjfiorjfojreiofjrewijfurhwiufhnreiunvuirnheuivhtguwrhgviruhnuvniruujijfiroejioeji
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;