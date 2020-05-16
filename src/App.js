import React,{Component} from 'react';
import './App.css';
import L from 'leaflet';
import leafGreen from './assets/leaf-green.png';
import leafRed from './assets/leaf-red.png';
import leafShadow from './assets/leaf-shadow.png';
import {Map, TileLayer,Marker,Popup} from 'react-leaflet';
import Data from './data.json';



class App extends Component {
  constructor(){
    super();

    this.state={
      greenLeaf:{
      lat:18.505,
      lng:-69.89,
      icon:leafGreen
      },

      redLeaf:{
        lat:18.505,
        lng:-69.86,
        },
        zoom:13
    }
  } 
  
  componentDidMount(){
    console.log(Data);
  }

  cleam = ()=>{
    this.setState(prevState=>({
      greenLeaf:{
        ...prevState.greenLeaf,
        icon:<img/>
      }
    }))
  }

  render(){
    let myIconGreen = L.icon({
      iconUrl: this.state.greenLeaf.icon,
      shadowUrl: leafShadow,
      shadowSize:   [50, 64], // size of the shadow
      iconSize:[25,41],// size of the icon
      iconAnchor:[12.5,41],//point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor: [0,-41]
    });

    let myIconRed = L.icon({
      iconUrl: leafRed,
      shadowUrl: leafShadow,
      shadowSize:   [50, 64], // size of the shadow
      iconSize:[25,41],// size of the icon
      iconAnchor:[12.5,41],//point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor: [0,-41]
    });

    const positionGreen = [this.state.greenLeaf.lat,this.state.greenLeaf.lng];
    const positionRed = [this.state.redLeaf.lat,this.state.redLeaf.lng];

  return (
    <div className="App">
      <Map className="map" center={positionGreen} zoom={this.state.zoom}>
        <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionGreen} icon={myIconGreen}>
          <Popup>
                I am Green
          </Popup>
        </Marker>

        <Marker position={positionRed} icon={myIconRed}>
          <Popup>
                <button onClick={this.cleam}> Click me</button>
          </Popup>
        </Marker>
      </Map>
    </div>
  );
  }
}

export default App;
