import {Container} from './styles'

function Nota() {
  return(
 
      <Container>
        
        <ul>
          <li>
            <div className="li-nota">
              <strong>Fazer compras</strong>
              <div>X</div>
            </div>
            
            <textarea>Lorem Ipsum is simply dummy text of the printing and typesetting industry</textarea>
            <span>!</span>
          </li>
        </ul>
        
      </Container>

   
  )
}

export default Nota;