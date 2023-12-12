import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Card from "../Card";
import styles from "./styles.module.css";
import api from "../../services/api";
export default function Gallery() {
  const [produtos, setProdutos] = useState([]);
  const [filter, setFilter] = useState("");

  function getProdutos() {
    api
      .get("produto")
      .then((result) => {
        console.log(result.data);
        setProdutos(result.data);
      })
      .catch((err) => alert(err.response.data.message));
  }

  const filterUsers = async () => {
    console.log(filter);
    api
      .get("produto", { params: { name: filter } })
      .then((result) => {
        console.log(result.data);
        setProdutos(result.data);
      })
      .catch((err) => alert(err.response.data.message));
  };

  useEffect(() => {
    getProdutos();
  }, []);
  return (
    <section className={styles.listaContainer}>
      <h1>Listagem de Produtos</h1>

      <input
        id="filter"
        type="text"
        placeholder="Filtrar pelo nome"
        onChange={({ target }) => setFilter(target.value)}
      />
      <button type="button" onClick={filterUsers}>
        <FiSearch />
      </button>
      <div className={styles.imgContainer}>
        {produtos?.length > 0 &&
          produtos.map((produto) => (
            <Card
              titulo={produto.titulo}
              preco={produto.preco}
              descricao={produto.descricao}
              id={produto.id}
            />
          ))}
      </div>
    </section>
  );
}
