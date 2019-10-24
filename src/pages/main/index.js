import React, { Component } from 'react';
import { FaHeadphones } from 'react-icons/fa';
import { Container, PesquisaForm } from './styles';
import Button from '../../styles/components/Button';

export default class Inicial extends Component {

    state = {
        artista: '',
    }


    handleSubmit = (e) => {   
    //e.preventDefault();
    this.carregarInfo();
    }

    handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
    }

    carregarInfo () {
    console.log(this.state.artista);
        this.props.history.push(`/dadosartista/${this.state.artista}`);
    //return <Router  to={} />
        
    }

    
    render() {  
        const { artista } = this.state;      
        
        return (
            <Container >
                <PesquisaForm onSubmit={this.handleSubmit}>
                <div >
                   <FaHeadphones color="#7289da" size= {100}  />
                </div >
                   <p>
                            Digite o nome de um <strong>Artista</strong> ou  
                            <strong> Banda</strong> que deseja pesquisar
                        </p>
                    <input 
                    type="text" 
                    name="artista" 
                    value={artista} 
                    onChange={this.handleInputChange}
                    />
                    <Button   size="big" type="submit" > 
                        Pesquisar </Button>


                    </PesquisaForm>
            </Container>
        );
       
  
    }
    
}


//artworkUrl100 imagem do album tamanho 100x100
//collectionName nome do album
//artistName nome do artista
