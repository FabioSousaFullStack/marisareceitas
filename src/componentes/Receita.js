import "./Receita.css";

const Receita = ({ id, imagem, nome, descricao }) => {
  return (
    <div className="box-card">
      <div className="imagem">
      <iframe width="100%" height="100%" src={imagem} 
      title="YouTube video player" 
      frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
      </div>
      <div className="conteudo">
        <h1>{nome}</h1>
        <p>{descricao}</p>
      </div>
      </div>
  );
};

export default Receita;
