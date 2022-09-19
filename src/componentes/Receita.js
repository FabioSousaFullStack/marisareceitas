import "./Receita.css";

const Receita = ({ id, imagem, nome, descricao, preco, modo_de_preparo }) => {
  return (

    <div className="container">
      <div className="card">
        <div className="card__img">
          <img
            src={imagem}
            alt="Imagem da receita"
          />
        </div>

        <div className="card__title">
          <p>{nome}</p>
        </div>

        <div className="card__content">
          <h3>{descricao}</h3>
        </div>

        <div className="container_leiamais">
        <div className="card_link">
          <p>R$ {preco}</p>
        </div>

        <div className="card_leiamais">
          <a href="/">Leia mais</a>
        </div>
        </div>

      </div>
    </div>



  );
};

export default Receita;
