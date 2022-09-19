import "./Receita.css";

const Receita = ({ id, imagem, nome, descricao, preco, modo_de_preparo }) => {
  return (
    <div className="box-card">
      <div className="imagem">
        <img src={imagem} alt={descricao} /> 
      </div>
      <div className="conteudo">
        <h1>{nome}</h1>
        <p>{descricao}</p>
      </div>
      <div className="preco_leiamais">
        <p>R$ {preco}</p>
        <p><a href="" className="leiamais">Leia mais</a></p>
      </div>
    </div>
  );
};

export default Receita;
