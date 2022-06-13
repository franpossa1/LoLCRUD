import "./App.css";
import * as React from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Card } from "@mui/material";
import ChampionsCards from "./components/ChampionsCards";

const generalChampionAPI =
  "http://ddragon.leagueoflegends.com/cdn/12.9.1/data/es_AR/champion.json";

function App() {
  const [listaCampeones, setListaCampeones] = React.useState([]);

  function fetchHook() {
    fetch(generalChampionAPI)
      .then((response) => response.json())
      .then((data) =>
        setListaCampeones(data.data)
        )
      ;
  }


  React.useEffect(() => {
    fetchHook();
   console.log(listaCampeones)
  }, []);
console.log(listaCampeones)
const retuxnCamp = Object.values(listaCampeones)
console.log(retuxnCamp[0])
  // if(champions){
  //   // const championsArray= champions.map(champion=>{
  //   //   return (<ChampionsCards id={champion.id}
  //   //   key={champion.key}
  //   //   name={champion.name}
  //   //   title={champion.title}
  //   //   imgURL={champion.image.full}
  //   //   />)
  //   // })

  // }

  return (
    //DIV CONTENEDOR
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "auto",
        border: "1px solid red",
        justifyContent: "center",
      }}
    >
      <TextField
        sx={{ m: 1, width: "1" }}
        id="outlined-basic"
        label="Champion"
        variant="outlined"
      />

      <Button sx={{ m: 1 }} variant="contained">
        Buscar Campeon
      </Button>
      <Button sx={{ m: 1 }} variant="outlined">
        Crear Campeon
      </Button>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          border: "1px solid green",
          flexWrap: "wrap",
        }}
      >
        {/*blurb: "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find..."
id: "Aatrox"
image: {full: 'Aatrox.png', sprite: 'champion0.png', group: 'champion', x: 0, y: 0, …}
info: {attack: 8, defense: 4, magic: 3, difficulty: 4}
key: "266"
name: "Aatrox"
partype: "Blood Well"
stats: {hp: 580, hpperlevel: 90, mp: 0, mpperlevel: 0, movespeed: 345, …}
tags: (2) ['Fighter', 'Tank']
title: "the Darkin Blade"
version: "12.9.1"*/}
        {/*Aca dentro del map tengo ejmeplo ATROX AHORA MISMO*/}
        {retuxnCamp.map((champ)=>{
          return <ChampionsCards url={champ.key} blurb={champ.blurb} title={champ.title} id={champ.id} img={champ.image.full} key={champ.key} name={champ.name} />
        })}
        
        <ChampionsCards />
        <ChampionsCards />
        <ChampionsCards />
        <ChampionsCards />
      </Container>
    </Container>
  );
}

export default App;
