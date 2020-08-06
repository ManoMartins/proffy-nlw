import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems ] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function handleAddNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' } ]);
  };

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems =scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    })

    setScheduleItems(updatedScheduleItems);
  };

  function handleCreateClass(event: FormEvent) {
    event.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    }).then(() => {
      alert('Cadastro realizado com sucesso!')

      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro!')
    });
  };

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrivel que voce quer dar aulas." 
        description="O primeiro passo é preencher esse formulario."
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input 
              name="name"
              label="Nome completo"
              value={name}
              onChange={e => setName(e.target.value)} 
            />

            <Input 
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={e => setAvatar(e.target.value)} 
            />

            <Input 
              name="whatsapp"
              label="whatsapp"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)} 
            />

            <Textarea 
              name="bio"
              label="Biografia"
              value={bio}
              onChange={e => setBio(e.target.value)} 
            />

          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select 
              name="subject" 
              label="Matéria" 
              value={subject}
              onChange={e => setSubject(e.target.value)}
              options={[
                { value: 'Artes', label: 'Artes'},
                { value: 'Biologia', label: 'Biologia'},
                { value: 'Ciencias', label: 'Ciencias'},
                { value: 'Geografia', label: 'Geografia'},
                { value: 'Portugues', label: 'Portugues'},
                { value: 'Matematica', label: 'Matematica'},
                { value: 'Fisica', label: 'Fisica'},
                { value: 'Historia', label: 'Historia'},
                { value: 'Qumica', label: 'Qumica'},
              ]}
            />
            <Input 
              name="cost" 
              label="Custo da sua hora por aula" 
              value={cost}
              onChange={e => setCost(e.target.value)}
            />

          </fieldset>

          <fieldset>
            <legend>
              Horarios disponiveis
              <button type="button" onClick={handleAddNewScheduleItem}>
                + Novo horario
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select 
                    name="week_day" 
                    label="Dia da semana" 
                    value={scheduleItem.week_day}
                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                    options={[
                      { value: '0', label: 'Domingo'},
                      { value: '1', label: 'Segunda'},
                      { value: '2', label: 'Terca'},
                      { value: '3', label: 'Quarta'},
                      { value: '4', label: 'Quinta'},
                      { value: '5', label: 'Sexta'},
                      { value: '6', label: 'Sabado'},
                    ]}
                  />
                  <Input 
                    name="from" 
                    label="Das" 
                    type="time" 
                    value={scheduleItem.from}
                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                  />
                  <Input 
                    name="to" 
                    label="Ate" 
                    type="time" 
                    value={scheduleItem.to}
                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Importante! <br />
              Preencha todos os dados
            </p>

            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div> 
  )
}

export default TeacherForm;