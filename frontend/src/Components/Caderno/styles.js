import styled from 'styled-components'

export const Aside = styled.div`
  width: 320px;
  margin-bottom: 30px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0,0,0,0.2);
  border-radius: 10px;
  padding: 30px 20px;
  position: relative;
 
  strong{ 
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
    font-family: 'Roboto';

  }

  form { 
    margin-top: 30px;
  }

  form button[type=submit] { 
    width: 100%;
    border: 0;
    margin-top: 30px;
    background: #FFD3CA;
    border-radius: 10px;
    padding: 15px 20px;
    //button text
    color: white;
    font-size: 15px;



  }

  .input-block{ 
    margin-top: 1rem;
  }

  // Estilo da Label de Título
  .input-block label{
    color: gray;
    font-size: 14px; 
    font-weight: 500;
    display: block;
  }

  .input-block input{
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #666;
    border: 0;
    border-bottom: 2px solid #eee;
  }

  .input-block textarea {
    
    margin-top: 7px;
    width: 100%;
    height: 200px;
    font-size: 14px;
    
    color: #666;
    border: 0;
    border-bottom: 1px solid lightgray;
    resize: none;

  }


  


  
  
`