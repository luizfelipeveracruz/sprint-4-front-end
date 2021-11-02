import {Component} from "react";

export default class TiposEventos extends Component{
    constructor(props){ 
       super(props);
       this.state = {
           listaTipoEvento : [],
           titulo : ''
       } 
   };

   buscarTipoEvento = () => {
       console.log('agora vamos fazer a chamada para a api')

       //função nativa JS
       //dentro do () vamos informar o end point
       fetch('http://localhost:5000/api/tipoeventos')
       //por padrão ele sempre inicia como get

       //quando tiver um retorno vai trazer a resposta em json
       //define o tipo de dados do retorno da requisição como json
        .then(resposta => resposta.json())

        //atualiza o state listaTipoEventos com dados obtidos em formato json
        .then(dados => this.setState({listaTipoEvento: dados}))

        //caso ocorra um erro, mostra no console do navegador
        .catch(erro => console.log(erro))

   }


    componentDidMount(){
        this.buscarTipoEvento();
        
        
        
        //
    }

    render(){
        return(
            <div>
                <main>
                    {/*Lista dos tipos de eventos*/}
                    <section>
                        <h2>Lista de Tipo de Eventos</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Título</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.listaTipoEvento.map((tipoEvento) => {
                                        return(
                                            <tr>
                                                <td>{tipoEvento.idTipoEvento}</td>
                                                <td>{tipoEvento}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
        )
    }
};

 