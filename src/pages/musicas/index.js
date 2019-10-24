import React, { Component } from 'react';

import api from '../../services/api';

//import Button from '../../styles/components/Button';
import { Layout, Button,  BackTop, PageHeader, List, Card, Icon ,Timeline, Divider } from 'antd';

import 'antd/dist/antd.css';



export default class Musicas extends Component {

    state = {
        dadosOK: true,
        track: [],
        songs: [],
        artistName:[],
        artistId:null,
        temArtista: false,
        artistImg: '',
    }

     async componentDidMount(){
        const { artist } = this.props.match.params;
        this.setState({ artista: artist });
        this.loadArtists(artist);
    }


    handleSubmit = (e) => {   
    //e.preventDefault();
    this.carregarInfo();
    }

    handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
    }


    dadosGerais = () => {
        this.props.history.push(`/dadosartista/${this.state.artista}`);
        //console.log('teste');
        //this.props.history.push(`/dadosartista/${this.state.artista}`);       
    }
    chamarAlbum = () => {
        this.props.history.push(`/albums/${this.state.artista}`); 
        //console.log('teste');
        //this.props.history.push(`/dadosartista/${this.state.artista}`);       
    }

    carregarInfo () {
    console.log(this.state.artista);
        this.props.history.push(`/dadosartista/${this.state.artista}`);
    //return <Router  to={} />
        
    }
     voltar  = () => {
        this.props.history.push("/"); 
    }




    getUnique(arr, comp) {
        const unique = arr
            .map(e => e[comp])
            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)
            // eliminate the dead keys & store unique objects
            .filter(e => arr[e]).map(e => arr[e]);
        return unique;
    }


    //terceira.a consulta na api (retorna o amgArtistId do artista) serve pra consultar exatamente seus albuns ou musicas
    loadSongs = async (artistaid) => {
        const response = await api.get(`/lookup?amgArtistId=${artistaid}&entity=song`);
        this.setState({songs: response.data.results});
        this.loadAlbuns(artistaid); 

        
    }

    //terceira.b consulta na api (retorna o amgArtistId do artista) serve pra consultar exatamente seus albuns ou musicas
    loadAlbuns = async (artistaid) => {
                const response = await api.get(`/lookup?amgArtistId=${artistaid}&entity=song&limit=10&sort=recent`);
        this.setState({track: response.data.results});
        
    }

    //segunda consulta na api (retorna o amgArtistId do artista) serve pra consultar exatamente seus albuns ou musicas
    loadOnlyArtist = async (artistaid) => { 
      const response = await api.get(`/lookup?id=${artistaid}`);
      const result2 = this.getUnique(response.data.results,'artistName')
        
        this.setState({tipo: result2[0].primaryGenreName});
        
      this.loadSongs(result2[0].amgArtistId);
    }

    //primeira consulta na api (retorna o id do artista)
    loadArtists = async (artista) => {

        const response = await api.get(`/search?term=${artista}&entity=allArtist&entity=song&attribute=allArtistTerm&limit=200`);
        const result2 = this.getUnique(response.data.results,'collectionId')
        setTimeout(() => {
                   this.loadOnlyArtist(result2[0].artistId);
        }, 2000);
        
    };


    
    render() { 
 
        
        const { Meta } = Card;

        
        return (
           
            <div >
             <BackTop />
            <Layout>
            <PageHeader
    style={{
      border: '1px solid rgb(235, 237, 240)',
      
    }}
    onBack={this.dadosGerais}
    title = {`Lista de Álbuns - ${this.state.artista}`}
    subTitle= {this.state.tipo}
     extra={[
               <Button onClick={this.voltar} key="1"> > Buscar novo artista </Button>,
        <Button onClick={this.chamarAlbum} key="1">Só Álbuns</Button>

      ]}
  />

  


            </Layout>
            
           <Divider dashed />
 <List>
          
            {this.state.songs.map(item => ( 
            <List.Item
              key={item.id}
              actions={[
                       <strong>{(((item.trackTimeMillis)/60).toString()).substr(0, 1)}:{(((item.trackTimeMillis)/60).toString()).substr(0, 2)}</strong>

              ]}
            >
              <List.Item.Meta
                avatar={
                  <img src={item.artworkUrl60} />
                }
                title={item.trackName}
                description={item.collectionName}
              />
            </List.Item>
          ))}
        </List>
 <Divider dashed />

       
  <Divider dashed />
             <div>
   <h1 style={{ textAlign: 'center' }}>
10 Músicas mais recentes
            </h1>
  </div>

   <Timeline mode="alternate">
   {this.state.track.map(track => ( 
    
     <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
      <Meta
      title={track.trackName}
      description={track.collectionName}
    />
    </Timeline.Item>
   
   ))}
  </Timeline>


  
             </div>
             
             

        );
       
  
    }
    
}


//artworkUrl100 imagem do album tamanho 100x100
//collectionName nome do album
//artistName nome do artista
