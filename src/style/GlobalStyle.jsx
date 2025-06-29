import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
    }    

    ul,li { 
     list-style: none;
    }

    a{
      text-decoration: none;
    }

    :root {
     --title-color: black; 
     --text-color:white;
     --bg-image: url('/Pokedex-API/light.jpg');
     --color-content: #494f4e;
     --hover: rgb(32,34,36);
    }

    .dark {
      --text-color: black;
      --title-color: white;
      --bg-image: url('/Pokedex-API/dark.jpg');
      --color-content: #ffff;
      --hover: rgb(138, 138, 138);
    }

    body {
     display: flex;
     justify-content: center;
     align-items: center;
     background-image: var(--bg-image);
     background-size: cover;
     background-repeat: no-repeat;
     background-position: center;
     background-attachment: fixed;  
     color: var(--text-color);
     position: relative;
     font-family: Arial, Helvetica, sans-serif;
     min-height: 100vh;
    }
     
    .title h1 {
      text-align: center;
      padding: 20px;
      color: var(--title-color);
    }

   .container {
     max-width: 1440px;
     gap: 20px;
     margin: 20px;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
    }

    .container a {
      background-color:var(--color-content);
      border-radius: 15px;
      opacity:0.8;
    }

    .container a:hover {
      background-color:var(--hover); 
      transition: 0.4s;
    }

    .container .card {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     border-radius: 10px;
     width: 250px;
     height: 250px;
    }

    .container .card h2 {
      color:var(--text-color);
    }

    .container .card img{
     width: 160px;
    }

    .load-more-pokemons {
      display: flex;
      justify-content: center;
      margin: 15px;
    }
    
    .load-more-pokemons button {
      width: 200px;
      height: 50px;
      background-color:var(--color-content);
      opacity: 0.8;
      color: var(--text-color);
      cursor:pointer;
      border:none;
      border-radius: 10px;
    }

    .load-more-pokemons button:hover {
     background-color: var(--hover);
     transition: 0.4s;
    }

    .container-details {
     height: 100vh;
     display:flex;
     align-items: center;
     justify-content: center;
    }
    
    .details{
      font-size: 14px;
      background-color:var(--color-content);  
      color: var(--text-color);
      opacity: 0.8;
      border-radius: 10%;
      position: relative;
      width: 550px;
      height: 610px;  
      margin: 15px;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }

    .details .return {
      position: absolute;
      left:40px;
      top:30px;
    }

    .details .return img {
      width: 50px;
      height: 50px;
      cursor: pointer;  
    }

    .details .return img:hover{
      width:52px;
      height: 52px;
    }

    .details .img-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-transform: capitalize;
    }

    .details .img-title img{
      width: 150px;
      height: 150px;
    }

    .details .type, .habilities, .movies {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 300px;
    }

    .habilities ul,li {
      padding:5px;
    }

    .theme {
      position: absolute;
      top: 20px;
      right: 20px;
    }

    .theme button {
      padding: 10px 10px;
      border-radius: 8px;
      border: none;
      cursor: pointer;    
    }

    // responsive

    @media(max-width: 650px) {
     .details {
      width: 400px;
      }
    }
    
    @media(max-width: 435px) {
     .details{
      width: 300px;
      height: 80vh;
      font-size:12px;
     }  
     
     .details .return {
      left: 30px;
     }

     .theme button {
      font-size: 10px;
     }
    }
`