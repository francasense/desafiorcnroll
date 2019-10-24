import React, { Component } from 'react';

import api from '../../services/api';

//import Button from '../../styles/components/Button';
import { Layout, Button,  BackTop, PageHeader, List, Card, Icon ,Timeline, Divider } from 'antd';

import 'antd/dist/antd.css';



export default class Albums extends Component {

    state = {
        dadosOK: true,
        track: [],
        songs: [],
        artistName:[],
        artistId:null,
        temArtista: false,
        artistImg: '',
       tipo: '',

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
    chamarMusica = () => {
        this.props.history.push(`/musicas/${this.state.artista}`); 
        //console.log('teste');
        //this.props.history.push(`/dadosartista/${this.state.artista}`);       
    }

       voltar  = () => {
        this.props.history.push("/"); 
    }

    carregarInfo = () => {
    console.log(this.state.artista);
        this.props.history.push(`/dadosartista/${this.state.artista}`);
    //return <Router  to={} />
        
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
        const response = await api.get(`/lookup?amgArtistId=${artistaid}&entity=album&limit=10`);
        this.setState({songs: response.data.results});
        
    }

    //terceira.b consulta na api (retorna o amgArtistId do artista) serve pra consultar exatamente seus albuns ou musicas
    loadAlbuns = async (artistaid) => {
              const response = await api.get(`/lookup?id=${artistaid}&entity=album`);
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
        this.loadAlbuns(result2[0].artistId); 
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
        <Button onClick={this.chamarMusica} key="2">Só Músicas</Button>

      ]}
  />

  


            </Layout>
            
    <Divider dashed />
            <List
    grid={{ gutter: 16, xs: 2, sm: 3, md: 4, lg: 4, xl: 6, xxl: 3, }}
    >
    {this.state.track.map(track => ( 
      
      <List.Item key={track.collectionId}>
        <Card
    style={{ width: 200 }}
    cover={                    
      <img
        alt="example"
        src={track.artworkUrl60}
      />
    }
  >
    <Meta
      title={track.collectionName}
      description={track.primaryGenreName}
    />
  </Card>
      </List.Item>
    ))}
  </List>

       
  <Divider dashed />
             <div>
   <h1 style={{ textAlign: 'center' }}>
Top 10 Álbuns
            </h1>
  </div>

   <Timeline mode="alternate">
   {this.state.songs.map(track => ( 
    
     <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
      <Meta
      title={track.collectionName}
      description={track.primaryGenreName}
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
