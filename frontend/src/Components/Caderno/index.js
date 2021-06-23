import {Aside} from './styles'

function Caderno() {
  return(
 
      <Aside>
        <strong>Caderno de notas</strong>
    

      <form>
        <div className="input-block"> 
          <label htmlFor='titulo'>Titulo da anotação</label>
          <input />
        </div>

        <div className="input-block">
          <label htmlFor='nota'>Anotação</label>
          <textarea />
        </div>
        <button type="submit">Salvar</button>
        
      </form>
      </Aside>

   
  )
}

export default Caderno;