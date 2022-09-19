import { useEffect, useState} from "react"
import Receita from './Receita'
import './Card.css'


export default function Card() {
  
 
const [receitas, setReceitas] = useState([])

useEffect(() => {
  fetch('https://marisareceitas.herokuapp.com/api/receitas/')
    .then(resposta => resposta.json())
    .then(dados => {
      setReceitas(dados)
    }
)}, [])

  return (
    
    <section className="receitas">

        {receitas.map(receita => (<Receita
          key={receita.id}
          nome={receita.nome}
          descricao={receita.breve_descricao}
          imagem={receita.link_imagens}
          ingredientes={receita.ingredientes}
          modo_de_preparo={receita.modo_de_preparo}
          preco={receita.preco} />))}

      </section>

        
  )

}