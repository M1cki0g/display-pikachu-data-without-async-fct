 fetch("https:pokeapi.co/api/v2/pokemon/pikachu")
.then((response) => response.json())
.then((da) => console.log(data))
catch((error) => console.log(error));
