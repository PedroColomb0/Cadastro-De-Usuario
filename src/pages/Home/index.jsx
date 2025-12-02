import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  // Estamos testando
  const users = [
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

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name="nome" type="text" />
        <input name="idade" type="number" />
        <input name="e-mail" type="email" />
        <button type="button"> Cadastrar</button>
      </form>
      {users.map((user) => (
        <div key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <button>
            <img className="trashButton" src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
