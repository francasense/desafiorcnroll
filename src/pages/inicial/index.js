/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import api from '../../services/api';
import { FaHeadphones } from 'react-icons/fa';


import './styles.css'


export default class Main extends Component {
    constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    state = {
        value: '',
        track: [],
        songs: [],
        artistName:[],
        artistId:null,
        temArtista: false,
        artista:'',
        width: window.innerWidth,
        desck:false,
        dadosOK: true,
        artistImg: '',
    }
    
    async componentDidMount(){
        const { artist } = this.props.match.params;
        //console.log(artist);
        //this.setState({ artista: artist });
        this.loadArtists(artist);
    }

    componentWillDidMount() {
  
  if (this.state.width <= 500){
      this.setState({ desck: false });
  }
    window.addEventListener('resize', this.handleWindowSizeChange);


}





// make sure to remove the listener
// when the component is not mounted anymore
componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange);
}

handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
};



    getUnique(arr, comp) {
        const unique = arr
            .map(e => e[comp])
            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)
            // eliminate the dead keys & store unique objects
            .filter(e => arr[e]).map(e => arr[e]);
        return unique;
    }

handleChange(event) {
    this.setState({value: event.target.value});
    //console.log(this.state.value);
  }
/*
handleInputChange = e => {
    this.setState({artista: e.target.artista});
    console.log(this.state.artista);
}
*/
handleSubmit = e => {
    
    e.preventDefault();
    if (this.state.value !== ''){
    this.loadArtists(this.state.value);
    this.setState({ temArtista: true });
    }else{
    this.loadArtists('undefined');
    }

 }
   
    

    loadSongs = async (artistaid) => {
        

        const response = await api.get(`/lookup?id=${artistaid}&limit=5000&entity=song`);
        const result = this.getUnique(response.data.results,'trackId')//trackName
        const result2 = this.getUnique(result,'trackName')

        this.setState({songs: result2});
        this.setState({dadosOK: false});
        //console.log(this.state.songs);
    }


    loadArtists = async (artista) => {
        //const response = await api.get(`/search?term=Alanis+morissette&entity=allArtist&entity=song&attribute=allArtistTerm&limit=200`); //apenas para teste

        const response = await api.get(`/search?term=${artista}&entity=allArtist&entity=song&attribute=allArtistTerm&limit=200`);
        const result2 = this.getUnique(response.data.results,'collectionId')
        //const result2 = this.getUnique(result,'collectionName')

        this.setState({track: result2});
        this.setState({artistName: result2[0].artistName});
        this.setState({artistId: result2[0].artistId});
        this.setState({artistImg: result2[0].artworkUrl100});
        this.loadSongs(result2[0].artistId);
    };

    

  

    render() {
        const { desck } = this.state;
        
        
        return (
            <>
                <div className="container">
                { this.state.dadosOK && 
                 <FaHeadphones color="#0a657a" size= {150}  />
                }
                 { this.state.dadosOK ? (
                     <div className="content">
                    
                        <p>
                            Digite o nome de um <strong>Artista</strong> ou 
                            <strong>Banda</strong> que deseja pesquisar
                        </p>
                        <label htmlFor="artista">ex. Alanis Morissette</label>

                        <form onSubmit={this.handleSubmit}>
                            <input 
                            
                            //placeholder="ex. micheljackson"
                            value={this.state.value}
                            onChange={this.handleChange}
                            />
                            <button className="btn"  type="submit">Pesquisar</button>
                        </form>

                        
                    </div>
                 ) : (
                     <div className="container">
                      <img src={this.state.artistImg} />
                        <p>
                            <strong>{this.state.artistName}</strong>
                        </p>

                        </div>
                 )}

                    
                </div>

                <div >

                         { this.state.temArtista &&
                         <p>
                            <strong>LISTA DE ALBUMS</strong>
                         </p>
                         }
                         { this.state.width >= 500 ? (
                         <ul className="artist">
                            {this.state.track.map(track => ( 
                                <div flex-flow={'row wrap'} >
                                    <img src={track.artworkUrl60}  />                       

                                    <div className="divlinhas" >
                                        <span>{track.collectionName}</span>
                                        <strong>{track.primaryGenreName}</strong>
                                    </div>

                                </div>
                            ))}
                         </ul>
                         ) : (
                          <div flex-flow={'row'} >
                            {this.state.track.map(track => ( 
                                
                                 <coluna>
                            <div>
                            <img src={track.artworkUrl60} />
                                         </div>
                                        <div className="divlinhas" >
                                        <span>{track.collectionName}</span>
                                    <strong>{track.primaryGenreName}</strong>
                                   

                            </div>
                            </coluna>

                                   
                                
                            ))}
                         </div>
                         )
                         }

                         
                          { this.state.temArtista &&
                         <p>
                            <strong>LISTA DE MUSICAS</strong>
                         </p>
                         }
                         
                         <ul className="music">            
                    {this.state.songs.reverse().map(song => (              
                        <li key={song.trackId}>
                            <coluna>
                            <div>
                            <img src={song.artworkUrl30}  />
                            </div>
                            { this.state.width >= 500 ? (
                            <div className="divlinhasMisic" >
                            <span>{song.trackName}</span>
                             <strong>{(((song.trackTimeMillis)/60).toString()).substr(0, 1)}:{(((song.trackTimeMillis)/60).toString()).substr(0, 2)}</strong>
                            </div>
                            ) : (
                            <div className="divlinhasMobile" >
                            <span>{song.trackName} </span>
                             <strong>{(((song.trackTimeMillis)/60).toString()).substr(0, 1)}:{(((song.trackTimeMillis)/60).toString()).substr(0, 2)}</strong>
                            </div>
                         )}
                            </coluna>
                        </li>
                    ))}

                         </ul>
                         

                </div>

                </>
        );
       
  
    }
    
}

//artworkUrl100 imagem do album tamanho 100x100
//collectionName nome do album
//artistName nome do artista
