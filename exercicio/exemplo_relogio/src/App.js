import React from 'react';
import './App.css';

function DataFormatada(props) {
  return <h2>Horário atual: {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //Definimos o estado date pegando a data atual
      date : new Date()
    }
  };
    //Fora do construtor, definimos os ciclos de vida

  //Ciclo de vida que ocorre quando Clock é inserido na DOM
  //o thick é invocado a cada 1000ms = 1 seg 
  //o componentDidMount é referente ao inicio do ciclo de vida do objeto
  componentDidMount(){
    this.timeID = setInterval(() => {
      this.thick()
    }, 1000);
  }

  //Ciclo de vida que ocorre quando clock é removido da DOM
  //o componentWillUnmount é referente ao fim, quando ele é desmontado, seria como se fosse a morte do objeto
  componentWillUnmount(){

  }
  
  //aqui o thick serviria para ser invocado a cada 1seg e trocar o horario
  thick(){
    this.setState({
      date : new Date()
    })
  }

  pausarThick()
  {
    clearInterval(this.timeID)
    return console.log(`Horário ${this.timeID} parado`)
  }

  retomarThick()
  {
    this.timeID = setInterval( () => {
      this.thick()
    }, 1000)

    return console.log(`Horário ${this.timeID} retomado`)
  }

  render(){
    return (
      <div>
        <h1>Relógio</h1>
        <DataFormatada date={this.state.date} />
        <div className="botoes">
          <button className="bt1" onClick={()=> this.pausarThick()}>Pausar</button>
          <button className="bt2" onClick={()=> this.retomarThick()}>Retomar</button>
        </div>
      </div>
    )
  }
};

function App(){
  return (
    <div className="App">
      <header className="App-header">
      <Clock/>
      </header>
    </div>
  );
}

export default App;
