import styles from "./styles.module.css";
export default function Card({ titulo, preco, descricao, id }) {
  return (
    <div className={styles.container}>
      <p>{titulo}</p>
      <img
        className={styles.cardImg}
        src="https://img.freepik.com/vetores-premium/padrao-sem-emenda_1159-5086.jpg"
      />
      <span className={styles.descricao}>{descricao}</span>
      <span>
        {preco?.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </span>
      <button>Ver mais</button>
    </div>
  );
}
