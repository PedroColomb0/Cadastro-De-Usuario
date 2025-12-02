import "./style.css";
import Trash from "../../assets/trash.svg";
import api from '../../services/api'
import {useEffect, useState, useRef} from 'react'

function Home() {
  // Estamos testando com dados mockados numa lista de objetos (json)
  const usersMock = [
    {
      id: "1",
      name: "Rodolfo",
      age: 33,
      email: "teste@gmail.com",
    },
    {
      id: "2",
      name: "Aline",
      age: 28,
      email: "aline@gmail.com",
    },
    {
      id: "3",
      name: "Paulo",
      age: 66,
      email: "paulo@gmail.com",
    },
  ];


  const [users,setUsers] = useState ([[]])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers(){
    const usersFromApi = await api.get('/usuarios')
    setUsers(usersFromApi.data)
  }

  async function deleteUsers(id){
    await api.delete(`/usuarios/${id}`)

    getUsers()
  }

  async function createUsers(){
    await api.post("/usuarios",{
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    })
  }

  useEffect(() => {
    // Tudo que tiver aqui dentro ele vai executar na minha pagina quando ela abrir
    getUsers()
  }, [])
  

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="nome" type="text" ref={inputName}/>
        <input placeholder="Idade" name="idade" type="number" ref={inputAge}/>
        <input placeholder="Email" name="e-mail" type="email" ref={inputEmail}/>
        <button onClick={createUsers} type="button"> Cadastrar</button>
      </form>
      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img className="trashButton" src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
