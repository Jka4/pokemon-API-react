let POKEMONS = [
  {
    id: 1,
    name: "bulbasaur",
    weight: 69,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    chain: [
      {
        species_name: "bulbasaur",
      },
      {
        species_name: "ivysaur",
      },
      {
        species_name: "venusaur",
      },
    ],
  },
  {
    id: 2,
    name: "ivysaur",
    weight: 130,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    chain: [
      {
        species_name: "bulbasaur",
      },
      {
        species_name: "ivysaur",
      },
      {
        species_name: "venusaur",
      },
    ],
  },
  {
    id: 3,
    name: "venusaur",
    weight: 1000,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    chain: [
      {
        species_name: "bulbasaur",
      },
      {
        species_name: "ivysaur",
      },
      {
        species_name: "venusaur",
      },
    ],
  },
  {
    id: 4,
    name: "charmander",
    weight: 85,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    chain: [
      {
        species_name: "charmander",
      },
      {
        species_name: "charmeleon",
      },
      {
        species_name: "charizard",
      },
    ],
  },
  {
    id: 5,
    name: "charmeleon",
    weight: 190,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    chain: [
      {
        species_name: "charmander",
      },
      {
        species_name: "charmeleon",
      },
      {
        species_name: "charizard",
      },
    ],
  },
  {
    id: 6,
    name: "charizard",
    weight: 905,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    chain: [
      {
        species_name: "charmander",
      },
      {
        species_name: "charmeleon",
      },
      {
        species_name: "charizard",
      },
    ],
  },
  {
    id: 7,
    name: "squirtle",
    weight: 90,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    chain: [
      {
        species_name: "squirtle",
      },
      {
        species_name: "wartortle",
      },
      {
        species_name: "blastoise",
      },
    ],
  },
  {
    id: 8,
    name: "wartortle",
    weight: 225,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    chain: [
      {
        species_name: "squirtle",
      },
      {
        species_name: "wartortle",
      },
      {
        species_name: "blastoise",
      },
    ],
  },
  {
    id: 9,
    name: "blastoise",
    weight: 855,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    chain: [
      {
        species_name: "squirtle",
      },
      {
        species_name: "wartortle",
      },
      {
        species_name: "blastoise",
      },
    ],
  },
  {
    id: 10,
    name: "caterpie",
    weight: 29,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    chain: [
      {
        species_name: "caterpie",
      },
      {
        species_name: "metapod",
      },
      {
        species_name: "butterfree",
      },
    ],
  },
  {
    id: 11,
    name: "metapod",
    weight: 99,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
    chain: [
      {
        species_name: "caterpie",
      },
      {
        species_name: "metapod",
      },
      {
        species_name: "butterfree",
      },
    ],
  },
  {
    id: 12,
    name: "butterfree",
    weight: 320,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
    chain: [
      {
        species_name: "caterpie",
      },
      {
        species_name: "metapod",
      },
      {
        species_name: "butterfree",
      },
    ],
  },
  {
    id: 13,
    name: "weedle",
    weight: 32,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
    chain: [
      {
        species_name: "weedle",
      },
      {
        species_name: "kakuna",
      },
      {
        species_name: "beedrill",
      },
    ],
  },
  {
    id: 14,
    name: "kakuna",
    weight: 100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
    chain: [
      {
        species_name: "weedle",
      },
      {
        species_name: "kakuna",
      },
      {
        species_name: "beedrill",
      },
    ],
  },
  {
    id: 15,
    name: "beedrill",
    weight: 295,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
    chain: [
      {
        species_name: "weedle",
      },
      {
        species_name: "kakuna",
      },
      {
        species_name: "beedrill",
      },
    ],
  },
  {
    id: 16,
    name: "pidgey",
    weight: 18,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
    chain: [
      {
        species_name: "pidgey",
      },
      {
        species_name: "pidgeotto",
      },
      {
        species_name: "pidgeot",
      },
    ],
  },
  {
    id: 17,
    name: "pidgeotto",
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    chain: [
      {
        species_name: "pidgey",
      },
      {
        species_name: "pidgeotto",
      },
      {
        species_name: "pidgeot",
      },
    ],
  },
  {
    id: 18,
    name: "pidgeot",
    weight: 395,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
    chain: [
      {
        species_name: "pidgey",
      },
      {
        species_name: "pidgeotto",
      },
      {
        species_name: "pidgeot",
      },
    ],
  },
  {
    id: 19,
    name: "rattata",
    weight: 35,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
    chain: [
      {
        species_name: "rattata",
      },
      {
        species_name: "raticate",
      },
    ],
  },
  {
    id: 20,
    name: "raticate",
    weight: 185,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
    chain: [
      {
        species_name: "rattata",
      },
      {
        species_name: "raticate",
      },
    ],
  },
  {
    id: 21,
    name: "spearow",
    weight: 20,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
    chain: [
      {
        species_name: "spearow",
      },
      {
        species_name: "fearow",
      },
    ],
  },
  {
    id: 22,
    name: "fearow",
    weight: 380,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
    chain: [
      {
        species_name: "spearow",
      },
      {
        species_name: "fearow",
      },
    ],
  },
  {
    id: 23,
    name: "ekans",
    weight: 69,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
    chain: [
      {
        species_name: "ekans",
      },
      {
        species_name: "arbok",
      },
    ],
  },
  {
    id: 24,
    name: "arbok",
    weight: 650,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
    chain: [
      {
        species_name: "ekans",
      },
      {
        species_name: "arbok",
      },
    ],
  },
  {
    id: 25,
    name: "pikachu",
    weight: 60,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    chain: [
      {
        species_name: "pichu",
      },
      {
        species_name: "pikachu",
      },
      {
        species_name: "raichu",
      },
    ],
  },
  {
    id: 26,
    name: "raichu",
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
    chain: [
      {
        species_name: "pichu",
      },
      {
        species_name: "pikachu",
      },
      {
        species_name: "raichu",
      },
    ],
  },
  {
    id: 27,
    name: "sandshrew",
    weight: 120,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
    chain: [
      {
        species_name: "sandshrew",
      },
      {
        species_name: "sandslash",
      },
    ],
  },
  {
    id: 28,
    name: "sandslash",
    weight: 295,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
    chain: [
      {
        species_name: "sandshrew",
      },
      {
        species_name: "sandslash",
      },
    ],
  },
  {
    id: 29,
    name: "nidoran-f",
    weight: 70,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
    chain: [
      {
        species_name: "nidoran-f",
      },
      {
        species_name: "nidorina",
      },
      {
        species_name: "nidoqueen",
      },
    ],
  },
  {
    id: 30,
    name: "nidorina",
    weight: 200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
    chain: [
      {
        species_name: "nidoran-f",
      },
      {
        species_name: "nidorina",
      },
      {
        species_name: "nidoqueen",
      },
    ],
  },
  {
    id: 31,
    name: "nidoqueen",
    weight: 600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
    chain: [
      {
        species_name: "nidoran-f",
      },
      {
        species_name: "nidorina",
      },
      {
        species_name: "nidoqueen",
      },
    ],
  },
  {
    id: 32,
    name: "nidoran-m",
    weight: 90,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
    chain: [
      {
        species_name: "nidoran-m",
      },
      {
        species_name: "nidorino",
      },
      {
        species_name: "nidoking",
      },
    ],
  },
  {
    id: 33,
    name: "nidorino",
    weight: 195,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
    chain: [
      {
        species_name: "nidoran-m",
      },
      {
        species_name: "nidorino",
      },
      {
        species_name: "nidoking",
      },
    ],
  },
  {
    id: 34,
    name: "nidoking",
    weight: 620,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
    chain: [
      {
        species_name: "nidoran-m",
      },
      {
        species_name: "nidorino",
      },
      {
        species_name: "nidoking",
      },
    ],
  },
  {
    id: 35,
    name: "clefairy",
    weight: 75,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
    chain: [
      {
        species_name: "cleffa",
      },
      {
        species_name: "clefairy",
      },
      {
        species_name: "clefable",
      },
    ],
  },
  {
    id: 36,
    name: "clefable",
    weight: 400,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
    chain: [
      {
        species_name: "cleffa",
      },
      {
        species_name: "clefairy",
      },
      {
        species_name: "clefable",
      },
    ],
  },
  {
    id: 37,
    name: "vulpix",
    weight: 99,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
    chain: [
      {
        species_name: "vulpix",
      },
      {
        species_name: "ninetales",
      },
    ],
  },
  {
    id: 38,
    name: "ninetales",
    weight: 199,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
    chain: [
      {
        species_name: "vulpix",
      },
      {
        species_name: "ninetales",
      },
    ],
  },
  {
    id: 39,
    name: "jigglypuff",
    weight: 55,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
    chain: [
      {
        species_name: "igglybuff",
      },
      {
        species_name: "jigglypuff",
      },
      {
        species_name: "wigglytuff",
      },
    ],
  },
  {
    id: 40,
    name: "wigglytuff",
    weight: 120,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
    chain: [
      {
        species_name: "igglybuff",
      },
      {
        species_name: "jigglypuff",
      },
      {
        species_name: "wigglytuff",
      },
    ],
  },
  {
    id: 41,
    name: "zubat",
    weight: 75,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
    chain: [
      {
        species_name: "zubat",
      },
      {
        species_name: "golbat",
      },
      {
        species_name: "crobat",
      },
    ],
  },
  {
    id: 42,
    name: "golbat",
    weight: 550,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
    chain: [
      {
        species_name: "zubat",
      },
      {
        species_name: "golbat",
      },
      {
        species_name: "crobat",
      },
    ],
  },
  {
    id: 43,
    name: "oddish",
    weight: 54,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
    chain: [
      {
        species_name: "oddish",
      },
      {
        species_name: "gloom",
      },
      {
        species_name: "vileplume",
      },
    ],
  },
  {
    id: 44,
    name: "gloom",
    weight: 86,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
    chain: [
      {
        species_name: "oddish",
      },
      {
        species_name: "gloom",
      },
      {
        species_name: "vileplume",
      },
    ],
  },
  {
    id: 45,
    name: "vileplume",
    weight: 186,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
    chain: [
      {
        species_name: "oddish",
      },
      {
        species_name: "gloom",
      },
      {
        species_name: "vileplume",
      },
    ],
  },
  {
    id: 46,
    name: "paras",
    weight: 54,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
    chain: [
      {
        species_name: "paras",
      },
      {
        species_name: "parasect",
      },
    ],
  },
  {
    id: 47,
    name: "parasect",
    weight: 295,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
    chain: [
      {
        species_name: "paras",
      },
      {
        species_name: "parasect",
      },
    ],
  },
  {
    id: 48,
    name: "venonat",
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
    chain: [
      {
        species_name: "venonat",
      },
      {
        species_name: "venomoth",
      },
    ],
  },
  {
    id: 49,
    name: "venomoth",
    weight: 125,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
    chain: [
      {
        species_name: "venonat",
      },
      {
        species_name: "venomoth",
      },
    ],
  },
  {
    id: 50,
    name: "diglett",
    weight: 8,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
    chain: [
      {
        species_name: "diglett",
      },
      {
        species_name: "dugtrio",
      },
    ],
  },
  {
    id: 51,
    name: "dugtrio",
    weight: 333,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
    chain: [
      {
        species_name: "diglett",
      },
      {
        species_name: "dugtrio",
      },
    ],
  },
  {
    id: 52,
    name: "meowth",
    weight: 42,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
    chain: [
      {
        species_name: "meowth",
      },
      {
        species_name: "persian",
      },
    ],
  },
  {
    id: 53,
    name: "persian",
    weight: 320,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
    chain: [
      {
        species_name: "meowth",
      },
      {
        species_name: "persian",
      },
    ],
  },
  {
    id: 54,
    name: "psyduck",
    weight: 196,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
    chain: [
      {
        species_name: "psyduck",
      },
      {
        species_name: "golduck",
      },
    ],
  },
  {
    id: 55,
    name: "golduck",
    weight: 766,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
    chain: [
      {
        species_name: "psyduck",
      },
      {
        species_name: "golduck",
      },
    ],
  },
  {
    id: 56,
    name: "mankey",
    weight: 280,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
    chain: [
      {
        species_name: "mankey",
      },
      {
        species_name: "primeape",
      },
    ],
  },
  {
    id: 57,
    name: "primeape",
    weight: 320,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
    chain: [
      {
        species_name: "mankey",
      },
      {
        species_name: "primeape",
      },
    ],
  },
  {
    id: 58,
    name: "growlithe",
    weight: 190,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
    chain: [
      {
        species_name: "growlithe",
      },
      {
        species_name: "arcanine",
      },
    ],
  },
  {
    id: 59,
    name: "arcanine",
    weight: 1550,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
    chain: [
      {
        species_name: "growlithe",
      },
      {
        species_name: "arcanine",
      },
    ],
  },
  {
    id: 60,
    name: "poliwag",
    weight: 124,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
    chain: [
      {
        species_name: "poliwag",
      },
      {
        species_name: "poliwhirl",
      },
      {
        species_name: "poliwrath",
      },
    ],
  },
  {
    id: 61,
    name: "poliwhirl",
    weight: 200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
    chain: [
      {
        species_name: "poliwag",
      },
      {
        species_name: "poliwhirl",
      },
      {
        species_name: "poliwrath",
      },
    ],
  },
  {
    id: 62,
    name: "poliwrath",
    weight: 540,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
    chain: [
      {
        species_name: "poliwag",
      },
      {
        species_name: "poliwhirl",
      },
      {
        species_name: "poliwrath",
      },
    ],
  },
  {
    id: 63,
    name: "abra",
    weight: 195,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
    chain: [
      {
        species_name: "abra",
      },
      {
        species_name: "kadabra",
      },
      {
        species_name: "alakazam",
      },
    ],
  },
  {
    id: 64,
    name: "kadabra",
    weight: 565,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
    chain: [
      {
        species_name: "abra",
      },
      {
        species_name: "kadabra",
      },
      {
        species_name: "alakazam",
      },
    ],
  },
  {
    id: 65,
    name: "alakazam",
    weight: 480,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
    chain: [
      {
        species_name: "abra",
      },
      {
        species_name: "kadabra",
      },
      {
        species_name: "alakazam",
      },
    ],
  },
  {
    id: 66,
    name: "machop",
    weight: 195,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
    chain: [
      {
        species_name: "machop",
      },
      {
        species_name: "machoke",
      },
      {
        species_name: "machamp",
      },
    ],
  },
  {
    id: 67,
    name: "machoke",
    weight: 705,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
    chain: [
      {
        species_name: "machop",
      },
      {
        species_name: "machoke",
      },
      {
        species_name: "machamp",
      },
    ],
  },
  {
    id: 68,
    name: "machamp",
    weight: 1300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
    chain: [
      {
        species_name: "machop",
      },
      {
        species_name: "machoke",
      },
      {
        species_name: "machamp",
      },
    ],
  },
  {
    id: 69,
    name: "bellsprout",
    weight: 40,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
    chain: [
      {
        species_name: "bellsprout",
      },
      {
        species_name: "weepinbell",
      },
      {
        species_name: "victreebel",
      },
    ],
  },
  {
    id: 70,
    name: "weepinbell",
    weight: 64,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
    chain: [
      {
        species_name: "bellsprout",
      },
      {
        species_name: "weepinbell",
      },
      {
        species_name: "victreebel",
      },
    ],
  },
  {
    id: 71,
    name: "victreebel",
    weight: 155,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
    chain: [
      {
        species_name: "bellsprout",
      },
      {
        species_name: "weepinbell",
      },
      {
        species_name: "victreebel",
      },
    ],
  },
  {
    id: 72,
    name: "tentacool",
    weight: 455,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
    chain: [
      {
        species_name: "tentacool",
      },
      {
        species_name: "tentacruel",
      },
    ],
  },
  {
    id: 73,
    name: "tentacruel",
    weight: 550,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
    chain: [
      {
        species_name: "tentacool",
      },
      {
        species_name: "tentacruel",
      },
    ],
  },
  {
    id: 74,
    name: "geodude",
    weight: 200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    chain: [
      {
        species_name: "geodude",
      },
      {
        species_name: "graveler",
      },
      {
        species_name: "golem",
      },
    ],
  },
  {
    id: 75,
    name: "graveler",
    weight: 1050,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
    chain: [
      {
        species_name: "geodude",
      },
      {
        species_name: "graveler",
      },
      {
        species_name: "golem",
      },
    ],
  },
  {
    id: 76,
    name: "golem",
    weight: 3000,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
    chain: [
      {
        species_name: "geodude",
      },
      {
        species_name: "graveler",
      },
      {
        species_name: "golem",
      },
    ],
  },
  {
    id: 77,
    name: "ponyta",
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
    chain: [
      {
        species_name: "ponyta",
      },
      {
        species_name: "rapidash",
      },
    ],
  },
  {
    id: 78,
    name: "rapidash",
    weight: 950,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
    chain: [
      {
        species_name: "ponyta",
      },
      {
        species_name: "rapidash",
      },
    ],
  },
  {
    id: 79,
    name: "slowpoke",
    weight: 360,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
    chain: [
      {
        species_name: "slowpoke",
      },
      {
        species_name: "slowbro",
      },
    ],
  },
  {
    id: 80,
    name: "slowbro",
    weight: 785,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
    chain: [
      {
        species_name: "slowpoke",
      },
      {
        species_name: "slowbro",
      },
    ],
  },
  {
    id: 81,
    name: "magnemite",
    weight: 60,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
    chain: [
      {
        species_name: "magnemite",
      },
      {
        species_name: "magneton",
      },
      {
        species_name: "magnezone",
      },
    ],
  },
  {
    id: 82,
    name: "magneton",
    weight: 600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
    chain: [
      {
        species_name: "magnemite",
      },
      {
        species_name: "magneton",
      },
      {
        species_name: "magnezone",
      },
    ],
  },
  {
    id: 83,
    name: "farfetchd",
    weight: 150,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
    chain: [
      {
        species_name: "farfetchd",
      },
    ],
  },
  {
    id: 84,
    name: "doduo",
    weight: 392,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
    chain: [
      {
        species_name: "doduo",
      },
      {
        species_name: "dodrio",
      },
    ],
  },
  {
    id: 85,
    name: "dodrio",
    weight: 852,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
    chain: [
      {
        species_name: "doduo",
      },
      {
        species_name: "dodrio",
      },
    ],
  },
  {
    id: 86,
    name: "seel",
    weight: 900,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
    chain: [
      {
        species_name: "seel",
      },
      {
        species_name: "dewgong",
      },
    ],
  },
  {
    id: 87,
    name: "dewgong",
    weight: 1200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
    chain: [
      {
        species_name: "seel",
      },
      {
        species_name: "dewgong",
      },
    ],
  },
  {
    id: 88,
    name: "grimer",
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
    chain: [
      {
        species_name: "grimer",
      },
      {
        species_name: "muk",
      },
    ],
  },
  {
    id: 89,
    name: "muk",
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
    chain: [
      {
        species_name: "grimer",
      },
      {
        species_name: "muk",
      },
    ],
  },
  {
    id: 90,
    name: "shellder",
    weight: 40,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
    chain: [
      {
        species_name: "shellder",
      },
      {
        species_name: "cloyster",
      },
    ],
  },
  {
    id: 91,
    name: "cloyster",
    weight: 1325,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
    chain: [
      {
        species_name: "shellder",
      },
      {
        species_name: "cloyster",
      },
    ],
  },
  {
    id: 92,
    name: "gastly",
    weight: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
    chain: [
      {
        species_name: "gastly",
      },
      {
        species_name: "haunter",
      },
      {
        species_name: "gengar",
      },
    ],
  },
  {
    id: 93,
    name: "haunter",
    weight: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
    chain: [
      {
        species_name: "gastly",
      },
      {
        species_name: "haunter",
      },
      {
        species_name: "gengar",
      },
    ],
  },
  {
    id: 94,
    name: "gengar",
    weight: 405,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    chain: [
      {
        species_name: "gastly",
      },
      {
        species_name: "haunter",
      },
      {
        species_name: "gengar",
      },
    ],
  },
  {
    id: 95,
    name: "onix",
    weight: 2100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
    chain: [
      {
        species_name: "onix",
      },
      {
        species_name: "steelix",
      },
    ],
  },
  {
    id: 96,
    name: "drowzee",
    weight: 324,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
    chain: [
      {
        species_name: "drowzee",
      },
      {
        species_name: "hypno",
      },
    ],
  },
  {
    id: 97,
    name: "hypno",
    weight: 756,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
    chain: [
      {
        species_name: "drowzee",
      },
      {
        species_name: "hypno",
      },
    ],
  },
  {
    id: 98,
    name: "krabby",
    weight: 65,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
    chain: [
      {
        species_name: "krabby",
      },
      {
        species_name: "kingler",
      },
    ],
  },
  {
    id: 99,
    name: "kingler",
    weight: 600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
    chain: [
      {
        species_name: "krabby",
      },
      {
        species_name: "kingler",
      },
    ],
  },
  {
    id: 100,
    name: "voltorb",
    weight: 104,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
    chain: [
      {
        species_name: "voltorb",
      },
      {
        species_name: "electrode",
      },
    ],
  },
  {
    id: 101,
    name: "electrode",
    weight: 666,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
    chain: [
      {
        species_name: "voltorb",
      },
      {
        species_name: "electrode",
      },
    ],
  },
  {
    id: 102,
    name: "exeggcute",
    weight: 25,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png",
    chain: [
      {
        species_name: "exeggcute",
      },
      {
        species_name: "exeggutor",
      },
    ],
  },
  {
    id: 103,
    name: "exeggutor",
    weight: 1200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png",
    chain: [
      {
        species_name: "exeggcute",
      },
      {
        species_name: "exeggutor",
      },
    ],
  },
  {
    id: 104,
    name: "cubone",
    weight: 65,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
    chain: [
      {
        species_name: "cubone",
      },
      {
        species_name: "marowak",
      },
    ],
  },
  {
    id: 105,
    name: "marowak",
    weight: 450,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
    chain: [
      {
        species_name: "cubone",
      },
      {
        species_name: "marowak",
      },
    ],
  },
  {
    id: 106,
    name: "hitmonlee",
    weight: 498,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png",
    chain: [
      {
        species_name: "tyrogue",
      },
      {
        species_name: "hitmonlee",
      },
    ],
  },
  {
    id: 108,
    name: "lickitung",
    weight: 655,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
    chain: [
      {
        species_name: "lickitung",
      },
      {
        species_name: "lickilicky",
      },
    ],
  },
  {
    id: 109,
    name: "koffing",
    weight: 10,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
    chain: [
      {
        species_name: "koffing",
      },
      {
        species_name: "weezing",
      },
    ],
  },
  {
    id: 110,
    name: "weezing",
    weight: 95,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
    chain: [
      {
        species_name: "koffing",
      },
      {
        species_name: "weezing",
      },
    ],
  },
  {
    id: 111,
    name: "rhyhorn",
    weight: 1150,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png",
    chain: [
      {
        species_name: "rhyhorn",
      },
      {
        species_name: "rhydon",
      },
      {
        species_name: "rhyperior",
      },
    ],
  },
  {
    id: 112,
    name: "rhydon",
    weight: 1200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png",
    chain: [
      {
        species_name: "rhyhorn",
      },
      {
        species_name: "rhydon",
      },
      {
        species_name: "rhyperior",
      },
    ],
  },
  {
    id: 113,
    name: "chansey",
    weight: 346,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
    chain: [
      {
        species_name: "happiny",
      },
      {
        species_name: "chansey",
      },
      {
        species_name: "blissey",
      },
    ],
  },
  {
    id: 114,
    name: "tangela",
    weight: 350,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png",
    chain: [
      {
        species_name: "tangela",
      },
      {
        species_name: "tangrowth",
      },
    ],
  },
  {
    id: 115,
    name: "kangaskhan",
    weight: 800,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
    chain: [
      {
        species_name: "kangaskhan",
      },
    ],
  },
  {
    id: 116,
    name: "horsea",
    weight: 80,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
    chain: [
      {
        species_name: "horsea",
      },
      {
        species_name: "seadra",
      },
      {
        species_name: "kingdra",
      },
    ],
  },
  {
    id: 117,
    name: "seadra",
    weight: 250,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
    chain: [
      {
        species_name: "horsea",
      },
      {
        species_name: "seadra",
      },
      {
        species_name: "kingdra",
      },
    ],
  },
  {
    id: 118,
    name: "goldeen",
    weight: 150,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
    chain: [
      {
        species_name: "goldeen",
      },
      {
        species_name: "seaking",
      },
    ],
  },
  {
    id: 119,
    name: "seaking",
    weight: 390,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
    chain: [
      {
        species_name: "goldeen",
      },
      {
        species_name: "seaking",
      },
    ],
  },
  {
    id: 120,
    name: "staryu",
    weight: 345,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
    chain: [
      {
        species_name: "staryu",
      },
      {
        species_name: "starmie",
      },
    ],
  },
  {
    id: 121,
    name: "starmie",
    weight: 800,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
    chain: [
      {
        species_name: "staryu",
      },
      {
        species_name: "starmie",
      },
    ],
  },
  {
    id: 122,
    name: "mr-mime",
    weight: 545,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
    chain: [
      {
        species_name: "mime-jr",
      },
      {
        species_name: "mr-mime",
      },
    ],
  },
  {
    id: 123,
    name: "scyther",
    weight: 560,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
    chain: [
      {
        species_name: "scyther",
      },
      {
        species_name: "scizor",
      },
    ],
  },
  {
    id: 124,
    name: "jynx",
    weight: 406,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
    chain: [
      {
        species_name: "smoochum",
      },
      {
        species_name: "jynx",
      },
    ],
  },
  {
    id: 125,
    name: "electabuzz",
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
    chain: [
      {
        species_name: "elekid",
      },
      {
        species_name: "electabuzz",
      },
      {
        species_name: "electivire",
      },
    ],
  },
  {
    id: 126,
    name: "magmar",
    weight: 445,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png",
    chain: [
      {
        species_name: "magby",
      },
      {
        species_name: "magmar",
      },
      {
        species_name: "magmortar",
      },
    ],
  },
  {
    id: 127,
    name: "pinsir",
    weight: 550,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
    chain: [
      {
        species_name: "pinsir",
      },
    ],
  },
  {
    id: 128,
    name: "tauros",
    weight: 884,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
    chain: [
      {
        species_name: "tauros",
      },
    ],
  },
  {
    id: 129,
    name: "magikarp",
    weight: 100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
    chain: [
      {
        species_name: "magikarp",
      },
      {
        species_name: "gyarados",
      },
    ],
  },
  {
    id: 130,
    name: "gyarados",
    weight: 2350,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
    chain: [
      {
        species_name: "magikarp",
      },
      {
        species_name: "gyarados",
      },
    ],
  },
  {
    id: 131,
    name: "lapras",
    weight: 2200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
    chain: [
      {
        species_name: "lapras",
      },
    ],
  },
  {
    id: 132,
    name: "ditto",
    weight: 40,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    chain: [
      {
        species_name: "ditto",
      },
    ],
  },
  {
    id: 133,
    name: "eevee",
    weight: 65,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
    chain: [
      {
        species_name: "eevee",
      },
      {
        species_name: "vaporeon",
      },
    ],
  },
  {
    id: 134,
    name: "vaporeon",
    weight: 290,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
    chain: [
      {
        species_name: "eevee",
      },
      {
        species_name: "vaporeon",
      },
    ],
  },
  {
    id: 137,
    name: "porygon",
    weight: 365,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
    chain: [
      {
        species_name: "porygon",
      },
      {
        species_name: "porygon2",
      },
      {
        species_name: "porygon-z",
      },
    ],
  },
  {
    id: 138,
    name: "omanyte",
    weight: 75,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png",
    chain: [
      {
        species_name: "omanyte",
      },
      {
        species_name: "omastar",
      },
    ],
  },
  {
    id: 139,
    name: "omastar",
    weight: 350,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png",
    chain: [
      {
        species_name: "omanyte",
      },
      {
        species_name: "omastar",
      },
    ],
  },
  {
    id: 140,
    name: "kabuto",
    weight: 115,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png",
    chain: [
      {
        species_name: "kabuto",
      },
      {
        species_name: "kabutops",
      },
    ],
  },
  {
    id: 141,
    name: "kabutops",
    weight: 405,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
    chain: [
      {
        species_name: "kabuto",
      },
      {
        species_name: "kabutops",
      },
    ],
  },
  {
    id: 142,
    name: "aerodactyl",
    weight: 590,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
    chain: [
      {
        species_name: "aerodactyl",
      },
    ],
  },
  {
    id: 143,
    name: "snorlax",
    weight: 4600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
    chain: [
      {
        species_name: "munchlax",
      },
      {
        species_name: "snorlax",
      },
    ],
  },
  {
    id: 144,
    name: "articuno",
    weight: 554,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
    chain: [
      {
        species_name: "articuno",
      },
    ],
  },
  {
    id: 145,
    name: "zapdos",
    weight: 526,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
    chain: [
      {
        species_name: "zapdos",
      },
    ],
  },
  {
    id: 146,
    name: "moltres",
    weight: 600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
    chain: [
      {
        species_name: "moltres",
      },
    ],
  },
  {
    id: 147,
    name: "dratini",
    weight: 33,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
    chain: [
      {
        species_name: "dratini",
      },
      {
        species_name: "dragonair",
      },
      {
        species_name: "dragonite",
      },
    ],
  },
  {
    id: 148,
    name: "dragonair",
    weight: 165,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
    chain: [
      {
        species_name: "dratini",
      },
      {
        species_name: "dragonair",
      },
      {
        species_name: "dragonite",
      },
    ],
  },
  {
    id: 149,
    name: "dragonite",
    weight: 2100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
    chain: [
      {
        species_name: "dratini",
      },
      {
        species_name: "dragonair",
      },
      {
        species_name: "dragonite",
      },
    ],
  },
  {
    id: 150,
    name: "mewtwo",
    weight: 1220,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    chain: [
      {
        species_name: "mewtwo",
      },
    ],
  },
  {
    id: 151,
    name: "mew",
    weight: 40,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    chain: [
      {
        species_name: "mew",
      },
    ],
  },
  {
    id: 152,
    name: "chikorita",
    weight: 64,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png",
    chain: [
      {
        species_name: "chikorita",
      },
      {
        species_name: "bayleef",
      },
      {
        species_name: "meganium",
      },
    ],
  },
  {
    id: 153,
    name: "bayleef",
    weight: 158,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png",
    chain: [
      {
        species_name: "chikorita",
      },
      {
        species_name: "bayleef",
      },
      {
        species_name: "meganium",
      },
    ],
  },
  {
    id: 154,
    name: "meganium",
    weight: 1005,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png",
    chain: [
      {
        species_name: "chikorita",
      },
      {
        species_name: "bayleef",
      },
      {
        species_name: "meganium",
      },
    ],
  },
  {
    id: 155,
    name: "cyndaquil",
    weight: 79,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png",
    chain: [
      {
        species_name: "cyndaquil",
      },
      {
        species_name: "quilava",
      },
      {
        species_name: "typhlosion",
      },
    ],
  },
  {
    id: 156,
    name: "quilava",
    weight: 190,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png",
    chain: [
      {
        species_name: "cyndaquil",
      },
      {
        species_name: "quilava",
      },
      {
        species_name: "typhlosion",
      },
    ],
  },
  {
    id: 157,
    name: "typhlosion",
    weight: 795,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png",
    chain: [
      {
        species_name: "cyndaquil",
      },
      {
        species_name: "quilava",
      },
      {
        species_name: "typhlosion",
      },
    ],
  },
  {
    id: 158,
    name: "totodile",
    weight: 95,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png",
    chain: [
      {
        species_name: "totodile",
      },
      {
        species_name: "croconaw",
      },
      {
        species_name: "feraligatr",
      },
    ],
  },
  {
    id: 159,
    name: "croconaw",
    weight: 250,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png",
    chain: [
      {
        species_name: "totodile",
      },
      {
        species_name: "croconaw",
      },
      {
        species_name: "feraligatr",
      },
    ],
  },
  {
    id: 160,
    name: "feraligatr",
    weight: 888,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png",
    chain: [
      {
        species_name: "totodile",
      },
      {
        species_name: "croconaw",
      },
      {
        species_name: "feraligatr",
      },
    ],
  },
  {
    id: 161,
    name: "sentret",
    weight: 60,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png",
    chain: [
      {
        species_name: "sentret",
      },
      {
        species_name: "furret",
      },
    ],
  },
  {
    id: 162,
    name: "furret",
    weight: 325,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png",
    chain: [
      {
        species_name: "sentret",
      },
      {
        species_name: "furret",
      },
    ],
  },
  {
    id: 163,
    name: "hoothoot",
    weight: 212,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png",
    chain: [
      {
        species_name: "hoothoot",
      },
      {
        species_name: "noctowl",
      },
    ],
  },
  {
    id: 164,
    name: "noctowl",
    weight: 408,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png",
    chain: [
      {
        species_name: "hoothoot",
      },
      {
        species_name: "noctowl",
      },
    ],
  },
  {
    id: 165,
    name: "ledyba",
    weight: 108,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png",
    chain: [
      {
        species_name: "ledyba",
      },
      {
        species_name: "ledian",
      },
    ],
  },
  {
    id: 166,
    name: "ledian",
    weight: 356,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png",
    chain: [
      {
        species_name: "ledyba",
      },
      {
        species_name: "ledian",
      },
    ],
  },
  {
    id: 167,
    name: "spinarak",
    weight: 85,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png",
    chain: [
      {
        species_name: "spinarak",
      },
      {
        species_name: "ariados",
      },
    ],
  },
  {
    id: 168,
    name: "ariados",
    weight: 335,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png",
    chain: [
      {
        species_name: "spinarak",
      },
      {
        species_name: "ariados",
      },
    ],
  },
  {
    id: 169,
    name: "crobat",
    weight: 750,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png",
    chain: [
      {
        species_name: "zubat",
      },
      {
        species_name: "golbat",
      },
      {
        species_name: "crobat",
      },
    ],
  },
  {
    id: 170,
    name: "chinchou",
    weight: 120,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png",
    chain: [
      {
        species_name: "chinchou",
      },
      {
        species_name: "lanturn",
      },
    ],
  },
  {
    id: 171,
    name: "lanturn",
    weight: 225,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png",
    chain: [
      {
        species_name: "chinchou",
      },
      {
        species_name: "lanturn",
      },
    ],
  },
  {
    id: 172,
    name: "pichu",
    weight: 20,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png",
    chain: [
      {
        species_name: "pichu",
      },
      {
        species_name: "pikachu",
      },
      {
        species_name: "raichu",
      },
    ],
  },
  {
    id: 173,
    name: "cleffa",
    weight: 30,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png",
    chain: [
      {
        species_name: "cleffa",
      },
      {
        species_name: "clefairy",
      },
      {
        species_name: "clefable",
      },
    ],
  },
  {
    id: 174,
    name: "igglybuff",
    weight: 10,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png",
    chain: [
      {
        species_name: "igglybuff",
      },
      {
        species_name: "jigglypuff",
      },
      {
        species_name: "wigglytuff",
      },
    ],
  },
  {
    id: 175,
    name: "togepi",
    weight: 15,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png",
    chain: [
      {
        species_name: "togepi",
      },
      {
        species_name: "togetic",
      },
      {
        species_name: "togekiss",
      },
    ],
  },
  {
    id: 176,
    name: "togetic",
    weight: 32,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png",
    chain: [
      {
        species_name: "togepi",
      },
      {
        species_name: "togetic",
      },
      {
        species_name: "togekiss",
      },
    ],
  },
  {
    id: 177,
    name: "natu",
    weight: 20,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png",
    chain: [
      {
        species_name: "natu",
      },
      {
        species_name: "xatu",
      },
    ],
  },
  {
    id: 178,
    name: "xatu",
    weight: 150,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png",
    chain: [
      {
        species_name: "natu",
      },
      {
        species_name: "xatu",
      },
    ],
  },
  {
    id: 179,
    name: "mareep",
    weight: 78,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png",
    chain: [
      {
        species_name: "mareep",
      },
      {
        species_name: "flaaffy",
      },
      {
        species_name: "ampharos",
      },
    ],
  },
  {
    id: 180,
    name: "flaaffy",
    weight: 133,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png",
    chain: [
      {
        species_name: "mareep",
      },
      {
        species_name: "flaaffy",
      },
      {
        species_name: "ampharos",
      },
    ],
  },
  {
    id: 181,
    name: "ampharos",
    weight: 615,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png",
    chain: [
      {
        species_name: "mareep",
      },
      {
        species_name: "flaaffy",
      },
      {
        species_name: "ampharos",
      },
    ],
  },
  {
    id: 183,
    name: "marill",
    weight: 85,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png",
    chain: [
      {
        species_name: "azurill",
      },
      {
        species_name: "marill",
      },
      {
        species_name: "azumarill",
      },
    ],
  },
  {
    id: 184,
    name: "azumarill",
    weight: 285,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png",
    chain: [
      {
        species_name: "azurill",
      },
      {
        species_name: "marill",
      },
      {
        species_name: "azumarill",
      },
    ],
  },
  {
    id: 185,
    name: "sudowoodo",
    weight: 380,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png",
    chain: [
      {
        species_name: "bonsly",
      },
      {
        species_name: "sudowoodo",
      },
    ],
  },
  {
    id: 187,
    name: "hoppip",
    weight: 5,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png",
    chain: [
      {
        species_name: "hoppip",
      },
      {
        species_name: "skiploom",
      },
      {
        species_name: "jumpluff",
      },
    ],
  },
  {
    id: 188,
    name: "skiploom",
    weight: 10,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png",
    chain: [
      {
        species_name: "hoppip",
      },
      {
        species_name: "skiploom",
      },
      {
        species_name: "jumpluff",
      },
    ],
  },
  {
    id: 189,
    name: "jumpluff",
    weight: 30,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png",
    chain: [
      {
        species_name: "hoppip",
      },
      {
        species_name: "skiploom",
      },
      {
        species_name: "jumpluff",
      },
    ],
  },
  {
    id: 190,
    name: "aipom",
    weight: 115,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png",
    chain: [
      {
        species_name: "aipom",
      },
      {
        species_name: "ambipom",
      },
    ],
  },
  {
    id: 191,
    name: "sunkern",
    weight: 18,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png",
    chain: [
      {
        species_name: "sunkern",
      },
      {
        species_name: "sunflora",
      },
    ],
  },
  {
    id: 192,
    name: "sunflora",
    weight: 85,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png",
    chain: [
      {
        species_name: "sunkern",
      },
      {
        species_name: "sunflora",
      },
    ],
  },
  {
    id: 193,
    name: "yanma",
    weight: 380,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png",
    chain: [
      {
        species_name: "yanma",
      },
      {
        species_name: "yanmega",
      },
    ],
  },
  {
    id: 194,
    name: "wooper",
    weight: 85,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/194.png",
    chain: [
      {
        species_name: "wooper",
      },
      {
        species_name: "quagsire",
      },
    ],
  },
  {
    id: 195,
    name: "quagsire",
    weight: 750,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png",
    chain: [
      {
        species_name: "wooper",
      },
      {
        species_name: "quagsire",
      },
    ],
  },
  {
    id: 198,
    name: "murkrow",
    weight: 21,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png",
    chain: [
      {
        species_name: "murkrow",
      },
      {
        species_name: "honchkrow",
      },
    ],
  },
  {
    id: 200,
    name: "misdreavus",
    weight: 10,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png",
    chain: [
      {
        species_name: "misdreavus",
      },
      {
        species_name: "mismagius",
      },
    ],
  },
  {
    id: 201,
    name: "unown",
    weight: 50,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png",
    chain: [
      {
        species_name: "unown",
      },
    ],
  },
  {
    id: 202,
    name: "wobbuffet",
    weight: 285,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png",
    chain: [
      {
        species_name: "wynaut",
      },
      {
        species_name: "wobbuffet",
      },
    ],
  },
  {
    id: 203,
    name: "girafarig",
    weight: 415,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/203.png",
    chain: [
      {
        species_name: "girafarig",
      },
    ],
  },
  {
    id: 204,
    name: "pineco",
    weight: 72,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png",
    chain: [
      {
        species_name: "pineco",
      },
      {
        species_name: "forretress",
      },
    ],
  },
  {
    id: 205,
    name: "forretress",
    weight: 1258,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png",
    chain: [
      {
        species_name: "pineco",
      },
      {
        species_name: "forretress",
      },
    ],
  },
  {
    id: 206,
    name: "dunsparce",
    weight: 140,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png",
    chain: [
      {
        species_name: "dunsparce",
      },
    ],
  },
  {
    id: 207,
    name: "gligar",
    weight: 648,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png",
    chain: [
      {
        species_name: "gligar",
      },
      {
        species_name: "gliscor",
      },
    ],
  },
  {
    id: 208,
    name: "steelix",
    weight: 4000,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png",
    chain: [
      {
        species_name: "onix",
      },
      {
        species_name: "steelix",
      },
    ],
  },
  {
    id: 209,
    name: "snubbull",
    weight: 78,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png",
    chain: [
      {
        species_name: "snubbull",
      },
      {
        species_name: "granbull",
      },
    ],
  },
  {
    id: 210,
    name: "granbull",
    weight: 487,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png",
    chain: [
      {
        species_name: "snubbull",
      },
      {
        species_name: "granbull",
      },
    ],
  },
  {
    id: 211,
    name: "qwilfish",
    weight: 39,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/211.png",
    chain: [
      {
        species_name: "qwilfish",
      },
    ],
  },
  {
    id: 212,
    name: "scizor",
    weight: 1180,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png",
    chain: [
      {
        species_name: "scyther",
      },
      {
        species_name: "scizor",
      },
    ],
  },
  {
    id: 213,
    name: "shuckle",
    weight: 205,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png",
    chain: [
      {
        species_name: "shuckle",
      },
    ],
  },
  {
    id: 214,
    name: "heracross",
    weight: 540,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png",
    chain: [
      {
        species_name: "heracross",
      },
    ],
  },
  {
    id: 215,
    name: "sneasel",
    weight: 280,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png",
    chain: [
      {
        species_name: "sneasel",
      },
      {
        species_name: "weavile",
      },
    ],
  },
  {
    id: 216,
    name: "teddiursa",
    weight: 88,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png",
    chain: [
      {
        species_name: "teddiursa",
      },
      {
        species_name: "ursaring",
      },
    ],
  },
  {
    id: 217,
    name: "ursaring",
    weight: 1258,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png",
    chain: [
      {
        species_name: "teddiursa",
      },
      {
        species_name: "ursaring",
      },
    ],
  },
  {
    id: 218,
    name: "slugma",
    weight: 350,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png",
    chain: [
      {
        species_name: "slugma",
      },
      {
        species_name: "magcargo",
      },
    ],
  },
  {
    id: 219,
    name: "magcargo",
    weight: 550,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/219.png",
    chain: [
      {
        species_name: "slugma",
      },
      {
        species_name: "magcargo",
      },
    ],
  },
  {
    id: 220,
    name: "swinub",
    weight: 65,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png",
    chain: [
      {
        species_name: "swinub",
      },
      {
        species_name: "piloswine",
      },
      {
        species_name: "mamoswine",
      },
    ],
  },
  {
    id: 221,
    name: "piloswine",
    weight: 558,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png",
    chain: [
      {
        species_name: "swinub",
      },
      {
        species_name: "piloswine",
      },
      {
        species_name: "mamoswine",
      },
    ],
  },
  {
    id: 222,
    name: "corsola",
    weight: 50,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png",
    chain: [
      {
        species_name: "corsola",
      },
    ],
  },
  {
    id: 223,
    name: "remoraid",
    weight: 120,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png",
    chain: [
      {
        species_name: "remoraid",
      },
      {
        species_name: "octillery",
      },
    ],
  },
  {
    id: 224,
    name: "octillery",
    weight: 285,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png",
    chain: [
      {
        species_name: "remoraid",
      },
      {
        species_name: "octillery",
      },
    ],
  },
  {
    id: 225,
    name: "delibird",
    weight: 160,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png",
    chain: [
      {
        species_name: "delibird",
      },
    ],
  },
  {
    id: 226,
    name: "mantine",
    weight: 2200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/226.png",
    chain: [
      {
        species_name: "mantyke",
      },
      {
        species_name: "mantine",
      },
    ],
  },
  {
    id: 227,
    name: "skarmory",
    weight: 505,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png",
    chain: [
      {
        species_name: "skarmory",
      },
    ],
  },
  {
    id: 228,
    name: "houndour",
    weight: 108,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png",
    chain: [
      {
        species_name: "houndour",
      },
      {
        species_name: "houndoom",
      },
    ],
  },
  {
    id: 229,
    name: "houndoom",
    weight: 350,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png",
    chain: [
      {
        species_name: "houndour",
      },
      {
        species_name: "houndoom",
      },
    ],
  },
  {
    id: 230,
    name: "kingdra",
    weight: 1520,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png",
    chain: [
      {
        species_name: "horsea",
      },
      {
        species_name: "seadra",
      },
      {
        species_name: "kingdra",
      },
    ],
  },
  {
    id: 231,
    name: "phanpy",
    weight: 335,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png",
    chain: [
      {
        species_name: "phanpy",
      },
      {
        species_name: "donphan",
      },
    ],
  },
  {
    id: 232,
    name: "donphan",
    weight: 1200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png",
    chain: [
      {
        species_name: "phanpy",
      },
      {
        species_name: "donphan",
      },
    ],
  },
  {
    id: 233,
    name: "porygon2",
    weight: 325,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png",
    chain: [
      {
        species_name: "porygon",
      },
      {
        species_name: "porygon2",
      },
      {
        species_name: "porygon-z",
      },
    ],
  },
  {
    id: 234,
    name: "stantler",
    weight: 712,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png",
    chain: [
      {
        species_name: "stantler",
      },
    ],
  },
  {
    id: 235,
    name: "smeargle",
    weight: 580,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png",
    chain: [
      {
        species_name: "smeargle",
      },
    ],
  },
  {
    id: 236,
    name: "tyrogue",
    weight: 210,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png",
    chain: [
      {
        species_name: "tyrogue",
      },
      {
        species_name: "hitmonlee",
      },
    ],
  },
  {
    id: 238,
    name: "smoochum",
    weight: 60,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png",
    chain: [
      {
        species_name: "smoochum",
      },
      {
        species_name: "jynx",
      },
    ],
  },
  {
    id: 239,
    name: "elekid",
    weight: 235,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png",
    chain: [
      {
        species_name: "elekid",
      },
      {
        species_name: "electabuzz",
      },
      {
        species_name: "electivire",
      },
    ],
  },
  {
    id: 240,
    name: "magby",
    weight: 214,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png",
    chain: [
      {
        species_name: "magby",
      },
      {
        species_name: "magmar",
      },
      {
        species_name: "magmortar",
      },
    ],
  },
  {
    id: 241,
    name: "miltank",
    weight: 755,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png",
    chain: [
      {
        species_name: "miltank",
      },
    ],
  },
  {
    id: 242,
    name: "blissey",
    weight: 468,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png",
    chain: [
      {
        species_name: "happiny",
      },
      {
        species_name: "chansey",
      },
      {
        species_name: "blissey",
      },
    ],
  },
  {
    id: 243,
    name: "raikou",
    weight: 1780,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png",
    chain: [
      {
        species_name: "raikou",
      },
    ],
  },
  {
    id: 244,
    name: "entei",
    weight: 1980,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png",
    chain: [
      {
        species_name: "entei",
      },
    ],
  },
  {
    id: 245,
    name: "suicune",
    weight: 1870,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png",
    chain: [
      {
        species_name: "suicune",
      },
    ],
  },
  {
    id: 246,
    name: "larvitar",
    weight: 720,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png",
    chain: [
      {
        species_name: "larvitar",
      },
      {
        species_name: "pupitar",
      },
      {
        species_name: "tyranitar",
      },
    ],
  },
  {
    id: 247,
    name: "pupitar",
    weight: 1520,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/247.png",
    chain: [
      {
        species_name: "larvitar",
      },
      {
        species_name: "pupitar",
      },
      {
        species_name: "tyranitar",
      },
    ],
  },
  {
    id: 248,
    name: "tyranitar",
    weight: 2020,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png",
    chain: [
      {
        species_name: "larvitar",
      },
      {
        species_name: "pupitar",
      },
      {
        species_name: "tyranitar",
      },
    ],
  },
  {
    id: 249,
    name: "lugia",
    weight: 2160,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png",
    chain: [
      {
        species_name: "lugia",
      },
    ],
  },
  {
    id: 250,
    name: "ho-oh",
    weight: 1990,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png",
    chain: [
      {
        species_name: "ho-oh",
      },
    ],
  },
  {
    id: 251,
    name: "celebi",
    weight: 50,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png",
    chain: [
      {
        species_name: "celebi",
      },
    ],
  },
  {
    id: 252,
    name: "treecko",
    weight: 50,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png",
    chain: [
      {
        species_name: "treecko",
      },
      {
        species_name: "grovyle",
      },
      {
        species_name: "sceptile",
      },
    ],
  },
  {
    id: 253,
    name: "grovyle",
    weight: 216,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png",
    chain: [
      {
        species_name: "treecko",
      },
      {
        species_name: "grovyle",
      },
      {
        species_name: "sceptile",
      },
    ],
  },
  {
    id: 254,
    name: "sceptile",
    weight: 522,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png",
    chain: [
      {
        species_name: "treecko",
      },
      {
        species_name: "grovyle",
      },
      {
        species_name: "sceptile",
      },
    ],
  },
  {
    id: 255,
    name: "torchic",
    weight: 25,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png",
    chain: [
      {
        species_name: "torchic",
      },
      {
        species_name: "combusken",
      },
      {
        species_name: "blaziken",
      },
    ],
  },
  {
    id: 256,
    name: "combusken",
    weight: 195,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png",
    chain: [
      {
        species_name: "torchic",
      },
      {
        species_name: "combusken",
      },
      {
        species_name: "blaziken",
      },
    ],
  },
  {
    id: 257,
    name: "blaziken",
    weight: 520,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png",
    chain: [
      {
        species_name: "torchic",
      },
      {
        species_name: "combusken",
      },
      {
        species_name: "blaziken",
      },
    ],
  },
  {
    id: 258,
    name: "mudkip",
    weight: 76,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png",
    chain: [
      {
        species_name: "mudkip",
      },
      {
        species_name: "marshtomp",
      },
      {
        species_name: "swampert",
      },
    ],
  },
  {
    id: 259,
    name: "marshtomp",
    weight: 280,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/259.png",
    chain: [
      {
        species_name: "mudkip",
      },
      {
        species_name: "marshtomp",
      },
      {
        species_name: "swampert",
      },
    ],
  },
  {
    id: 260,
    name: "swampert",
    weight: 819,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png",
    chain: [
      {
        species_name: "mudkip",
      },
      {
        species_name: "marshtomp",
      },
      {
        species_name: "swampert",
      },
    ],
  },
  {
    id: 261,
    name: "poochyena",
    weight: 136,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png",
    chain: [
      {
        species_name: "poochyena",
      },
      {
        species_name: "mightyena",
      },
    ],
  },
  {
    id: 262,
    name: "mightyena",
    weight: 370,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png",
    chain: [
      {
        species_name: "poochyena",
      },
      {
        species_name: "mightyena",
      },
    ],
  },
  {
    id: 263,
    name: "zigzagoon",
    weight: 175,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png",
    chain: [
      {
        species_name: "zigzagoon",
      },
      {
        species_name: "linoone",
      },
    ],
  },
  {
    id: 264,
    name: "linoone",
    weight: 325,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png",
    chain: [
      {
        species_name: "zigzagoon",
      },
      {
        species_name: "linoone",
      },
    ],
  },
  {
    id: 265,
    name: "wurmple",
    weight: 36,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png",
    chain: [
      {
        species_name: "wurmple",
      },
      {
        species_name: "silcoon",
      },
      {
        species_name: "beautifly",
      },
    ],
  },
  {
    id: 266,
    name: "silcoon",
    weight: 100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png",
    chain: [
      {
        species_name: "wurmple",
      },
      {
        species_name: "silcoon",
      },
      {
        species_name: "beautifly",
      },
    ],
  },
  {
    id: 267,
    name: "beautifly",
    weight: 284,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png",
    chain: [
      {
        species_name: "wurmple",
      },
      {
        species_name: "silcoon",
      },
      {
        species_name: "beautifly",
      },
    ],
  },
  {
    id: 270,
    name: "lotad",
    weight: 26,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/270.png",
    chain: [
      {
        species_name: "lotad",
      },
      {
        species_name: "lombre",
      },
      {
        species_name: "ludicolo",
      },
    ],
  },
  {
    id: 271,
    name: "lombre",
    weight: 325,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/271.png",
    chain: [
      {
        species_name: "lotad",
      },
      {
        species_name: "lombre",
      },
      {
        species_name: "ludicolo",
      },
    ],
  },
  {
    id: 272,
    name: "ludicolo",
    weight: 550,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/272.png",
    chain: [
      {
        species_name: "lotad",
      },
      {
        species_name: "lombre",
      },
      {
        species_name: "ludicolo",
      },
    ],
  },
  {
    id: 273,
    name: "seedot",
    weight: 40,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/273.png",
    chain: [
      {
        species_name: "seedot",
      },
      {
        species_name: "nuzleaf",
      },
      {
        species_name: "shiftry",
      },
    ],
  },
  {
    id: 274,
    name: "nuzleaf",
    weight: 280,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/274.png",
    chain: [
      {
        species_name: "seedot",
      },
      {
        species_name: "nuzleaf",
      },
      {
        species_name: "shiftry",
      },
    ],
  },
  {
    id: 275,
    name: "shiftry",
    weight: 596,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png",
    chain: [
      {
        species_name: "seedot",
      },
      {
        species_name: "nuzleaf",
      },
      {
        species_name: "shiftry",
      },
    ],
  },
  {
    id: 276,
    name: "taillow",
    weight: 23,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/276.png",
    chain: [
      {
        species_name: "taillow",
      },
      {
        species_name: "swellow",
      },
    ],
  },
  {
    id: 277,
    name: "swellow",
    weight: 198,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/277.png",
    chain: [
      {
        species_name: "taillow",
      },
      {
        species_name: "swellow",
      },
    ],
  },
  {
    id: 278,
    name: "wingull",
    weight: 95,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png",
    chain: [
      {
        species_name: "wingull",
      },
      {
        species_name: "pelipper",
      },
    ],
  },
  {
    id: 279,
    name: "pelipper",
    weight: 280,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png",
    chain: [
      {
        species_name: "wingull",
      },
      {
        species_name: "pelipper",
      },
    ],
  },
  {
    id: 280,
    name: "ralts",
    weight: 66,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/280.png",
    chain: [
      {
        species_name: "ralts",
      },
      {
        species_name: "kirlia",
      },
      {
        species_name: "gardevoir",
      },
    ],
  },
  {
    id: 281,
    name: "kirlia",
    weight: 202,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png",
    chain: [
      {
        species_name: "ralts",
      },
      {
        species_name: "kirlia",
      },
      {
        species_name: "gardevoir",
      },
    ],
  },
  {
    id: 282,
    name: "gardevoir",
    weight: 484,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png",
    chain: [
      {
        species_name: "ralts",
      },
      {
        species_name: "kirlia",
      },
      {
        species_name: "gardevoir",
      },
    ],
  },
  {
    id: 283,
    name: "surskit",
    weight: 17,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/283.png",
    chain: [
      {
        species_name: "surskit",
      },
      {
        species_name: "masquerain",
      },
    ],
  },
  {
    id: 284,
    name: "masquerain",
    weight: 36,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/284.png",
    chain: [
      {
        species_name: "surskit",
      },
      {
        species_name: "masquerain",
      },
    ],
  },
  {
    id: 285,
    name: "shroomish",
    weight: 45,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/285.png",
    chain: [
      {
        species_name: "shroomish",
      },
      {
        species_name: "breloom",
      },
    ],
  },
  {
    id: 286,
    name: "breloom",
    weight: 392,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/286.png",
    chain: [
      {
        species_name: "shroomish",
      },
      {
        species_name: "breloom",
      },
    ],
  },
  {
    id: 287,
    name: "slakoth",
    weight: 240,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/287.png",
    chain: [
      {
        species_name: "slakoth",
      },
      {
        species_name: "vigoroth",
      },
      {
        species_name: "slaking",
      },
    ],
  },
  {
    id: 288,
    name: "vigoroth",
    weight: 465,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png",
    chain: [
      {
        species_name: "slakoth",
      },
      {
        species_name: "vigoroth",
      },
      {
        species_name: "slaking",
      },
    ],
  },
  {
    id: 289,
    name: "slaking",
    weight: 1305,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png",
    chain: [
      {
        species_name: "slakoth",
      },
      {
        species_name: "vigoroth",
      },
      {
        species_name: "slaking",
      },
    ],
  },
  {
    id: 290,
    name: "nincada",
    weight: 55,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/290.png",
    chain: [
      {
        species_name: "nincada",
      },
      {
        species_name: "ninjask",
      },
    ],
  },
  {
    id: 291,
    name: "ninjask",
    weight: 120,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/291.png",
    chain: [
      {
        species_name: "nincada",
      },
      {
        species_name: "ninjask",
      },
    ],
  },
  {
    id: 293,
    name: "whismur",
    weight: 163,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/293.png",
    chain: [
      {
        species_name: "whismur",
      },
      {
        species_name: "loudred",
      },
      {
        species_name: "exploud",
      },
    ],
  },
  {
    id: 294,
    name: "loudred",
    weight: 405,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/294.png",
    chain: [
      {
        species_name: "whismur",
      },
      {
        species_name: "loudred",
      },
      {
        species_name: "exploud",
      },
    ],
  },
  {
    id: 295,
    name: "exploud",
    weight: 840,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png",
    chain: [
      {
        species_name: "whismur",
      },
      {
        species_name: "loudred",
      },
      {
        species_name: "exploud",
      },
    ],
  },
  {
    id: 296,
    name: "makuhita",
    weight: 864,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png",
    chain: [
      {
        species_name: "makuhita",
      },
      {
        species_name: "hariyama",
      },
    ],
  },
  {
    id: 297,
    name: "hariyama",
    weight: 2538,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/297.png",
    chain: [
      {
        species_name: "makuhita",
      },
      {
        species_name: "hariyama",
      },
    ],
  },
  {
    id: 298,
    name: "azurill",
    weight: 20,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/298.png",
    chain: [
      {
        species_name: "azurill",
      },
      {
        species_name: "marill",
      },
      {
        species_name: "azumarill",
      },
    ],
  },
  {
    id: 299,
    name: "nosepass",
    weight: 970,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png",
    chain: [
      {
        species_name: "nosepass",
      },
      {
        species_name: "probopass",
      },
    ],
  },
  {
    id: 300,
    name: "skitty",
    weight: 110,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png",
    chain: [
      {
        species_name: "skitty",
      },
      {
        species_name: "delcatty",
      },
    ],
  },
  {
    id: 301,
    name: "delcatty",
    weight: 326,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png",
    chain: [
      {
        species_name: "skitty",
      },
      {
        species_name: "delcatty",
      },
    ],
  },
  {
    id: 302,
    name: "sableye",
    weight: 110,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png",
    chain: [
      {
        species_name: "sableye",
      },
    ],
  },
  {
    id: 303,
    name: "mawile",
    weight: 115,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png",
    chain: [
      {
        species_name: "mawile",
      },
    ],
  },
  {
    id: 304,
    name: "aron",
    weight: 600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/304.png",
    chain: [
      {
        species_name: "aron",
      },
      {
        species_name: "lairon",
      },
      {
        species_name: "aggron",
      },
    ],
  },
  {
    id: 305,
    name: "lairon",
    weight: 1200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/305.png",
    chain: [
      {
        species_name: "aron",
      },
      {
        species_name: "lairon",
      },
      {
        species_name: "aggron",
      },
    ],
  },
  {
    id: 306,
    name: "aggron",
    weight: 3600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png",
    chain: [
      {
        species_name: "aron",
      },
      {
        species_name: "lairon",
      },
      {
        species_name: "aggron",
      },
    ],
  },
  {
    id: 307,
    name: "meditite",
    weight: 112,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/307.png",
    chain: [
      {
        species_name: "meditite",
      },
      {
        species_name: "medicham",
      },
    ],
  },
  {
    id: 308,
    name: "medicham",
    weight: 315,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png",
    chain: [
      {
        species_name: "meditite",
      },
      {
        species_name: "medicham",
      },
    ],
  },
  {
    id: 309,
    name: "electrike",
    weight: 152,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png",
    chain: [
      {
        species_name: "electrike",
      },
      {
        species_name: "manectric",
      },
    ],
  },
  {
    id: 310,
    name: "manectric",
    weight: 402,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png",
    chain: [
      {
        species_name: "electrike",
      },
      {
        species_name: "manectric",
      },
    ],
  },
  {
    id: 311,
    name: "plusle",
    weight: 42,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/311.png",
    chain: [
      {
        species_name: "plusle",
      },
    ],
  },
  {
    id: 312,
    name: "minun",
    weight: 42,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/312.png",
    chain: [
      {
        species_name: "minun",
      },
    ],
  },
  {
    id: 313,
    name: "volbeat",
    weight: 177,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/313.png",
    chain: [
      {
        species_name: "volbeat",
      },
    ],
  },
  {
    id: 314,
    name: "illumise",
    weight: 177,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/314.png",
    chain: [
      {
        species_name: "illumise",
      },
    ],
  },
  {
    id: 315,
    name: "roselia",
    weight: 20,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/315.png",
    chain: [
      {
        species_name: "budew",
      },
      {
        species_name: "roselia",
      },
      {
        species_name: "roserade",
      },
    ],
  },
  {
    id: 316,
    name: "gulpin",
    weight: 103,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/316.png",
    chain: [
      {
        species_name: "gulpin",
      },
      {
        species_name: "swalot",
      },
    ],
  },
  {
    id: 317,
    name: "swalot",
    weight: 800,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/317.png",
    chain: [
      {
        species_name: "gulpin",
      },
      {
        species_name: "swalot",
      },
    ],
  },
  {
    id: 318,
    name: "carvanha",
    weight: 208,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/318.png",
    chain: [
      {
        species_name: "carvanha",
      },
      {
        species_name: "sharpedo",
      },
    ],
  },
  {
    id: 319,
    name: "sharpedo",
    weight: 888,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png",
    chain: [
      {
        species_name: "carvanha",
      },
      {
        species_name: "sharpedo",
      },
    ],
  },
  {
    id: 320,
    name: "wailmer",
    weight: 1300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/320.png",
    chain: [
      {
        species_name: "wailmer",
      },
      {
        species_name: "wailord",
      },
    ],
  },
  {
    id: 321,
    name: "wailord",
    weight: 3980,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png",
    chain: [
      {
        species_name: "wailmer",
      },
      {
        species_name: "wailord",
      },
    ],
  },
  {
    id: 322,
    name: "numel",
    weight: 240,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/322.png",
    chain: [
      {
        species_name: "numel",
      },
      {
        species_name: "camerupt",
      },
    ],
  },
  {
    id: 323,
    name: "camerupt",
    weight: 2200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/323.png",
    chain: [
      {
        species_name: "numel",
      },
      {
        species_name: "camerupt",
      },
    ],
  },
  {
    id: 324,
    name: "torkoal",
    weight: 804,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png",
    chain: [
      {
        species_name: "torkoal",
      },
    ],
  },
  {
    id: 325,
    name: "spoink",
    weight: 306,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/325.png",
    chain: [
      {
        species_name: "spoink",
      },
      {
        species_name: "grumpig",
      },
    ],
  },
  {
    id: 326,
    name: "grumpig",
    weight: 715,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/326.png",
    chain: [
      {
        species_name: "spoink",
      },
      {
        species_name: "grumpig",
      },
    ],
  },
  {
    id: 327,
    name: "spinda",
    weight: 50,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/327.png",
    chain: [
      {
        species_name: "spinda",
      },
    ],
  },
  {
    id: 328,
    name: "trapinch",
    weight: 150,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/328.png",
    chain: [
      {
        species_name: "trapinch",
      },
      {
        species_name: "vibrava",
      },
      {
        species_name: "flygon",
      },
    ],
  },
  {
    id: 329,
    name: "vibrava",
    weight: 153,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/329.png",
    chain: [
      {
        species_name: "trapinch",
      },
      {
        species_name: "vibrava",
      },
      {
        species_name: "flygon",
      },
    ],
  },
  {
    id: 330,
    name: "flygon",
    weight: 820,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png",
    chain: [
      {
        species_name: "trapinch",
      },
      {
        species_name: "vibrava",
      },
      {
        species_name: "flygon",
      },
    ],
  },
  {
    id: 331,
    name: "cacnea",
    weight: 513,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/331.png",
    chain: [
      {
        species_name: "cacnea",
      },
      {
        species_name: "cacturne",
      },
    ],
  },
  {
    id: 332,
    name: "cacturne",
    weight: 774,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png",
    chain: [
      {
        species_name: "cacnea",
      },
      {
        species_name: "cacturne",
      },
    ],
  },
  {
    id: 333,
    name: "swablu",
    weight: 12,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/333.png",
    chain: [
      {
        species_name: "swablu",
      },
      {
        species_name: "altaria",
      },
    ],
  },
  {
    id: 334,
    name: "altaria",
    weight: 206,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png",
    chain: [
      {
        species_name: "swablu",
      },
      {
        species_name: "altaria",
      },
    ],
  },
  {
    id: 335,
    name: "zangoose",
    weight: 403,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/335.png",
    chain: [
      {
        species_name: "zangoose",
      },
    ],
  },
  {
    id: 336,
    name: "seviper",
    weight: 525,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/336.png",
    chain: [
      {
        species_name: "seviper",
      },
    ],
  },
  {
    id: 337,
    name: "lunatone",
    weight: 1680,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png",
    chain: [
      {
        species_name: "lunatone",
      },
    ],
  },
  {
    id: 338,
    name: "solrock",
    weight: 1540,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png",
    chain: [
      {
        species_name: "solrock",
      },
    ],
  },
  {
    id: 339,
    name: "barboach",
    weight: 19,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/339.png",
    chain: [
      {
        species_name: "barboach",
      },
      {
        species_name: "whiscash",
      },
    ],
  },
  {
    id: 340,
    name: "whiscash",
    weight: 236,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png",
    chain: [
      {
        species_name: "barboach",
      },
      {
        species_name: "whiscash",
      },
    ],
  },
  {
    id: 341,
    name: "corphish",
    weight: 115,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/341.png",
    chain: [
      {
        species_name: "corphish",
      },
      {
        species_name: "crawdaunt",
      },
    ],
  },
  {
    id: 342,
    name: "crawdaunt",
    weight: 328,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/342.png",
    chain: [
      {
        species_name: "corphish",
      },
      {
        species_name: "crawdaunt",
      },
    ],
  },
  {
    id: 343,
    name: "baltoy",
    weight: 215,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/343.png",
    chain: [
      {
        species_name: "baltoy",
      },
      {
        species_name: "claydol",
      },
    ],
  },
  {
    id: 344,
    name: "claydol",
    weight: 1080,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png",
    chain: [
      {
        species_name: "baltoy",
      },
      {
        species_name: "claydol",
      },
    ],
  },
  {
    id: 345,
    name: "lileep",
    weight: 238,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/345.png",
    chain: [
      {
        species_name: "lileep",
      },
      {
        species_name: "cradily",
      },
    ],
  },
  {
    id: 346,
    name: "cradily",
    weight: 604,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/346.png",
    chain: [
      {
        species_name: "lileep",
      },
      {
        species_name: "cradily",
      },
    ],
  },
  {
    id: 347,
    name: "anorith",
    weight: 125,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/347.png",
    chain: [
      {
        species_name: "anorith",
      },
      {
        species_name: "armaldo",
      },
    ],
  },
  {
    id: 348,
    name: "armaldo",
    weight: 682,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/348.png",
    chain: [
      {
        species_name: "anorith",
      },
      {
        species_name: "armaldo",
      },
    ],
  },
  {
    id: 349,
    name: "feebas",
    weight: 74,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/349.png",
    chain: [
      {
        species_name: "feebas",
      },
      {
        species_name: "milotic",
      },
    ],
  },
  {
    id: 350,
    name: "milotic",
    weight: 1620,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png",
    chain: [
      {
        species_name: "feebas",
      },
      {
        species_name: "milotic",
      },
    ],
  },
  {
    id: 351,
    name: "castform",
    weight: 8,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png",
    chain: [
      {
        species_name: "castform",
      },
    ],
  },
  {
    id: 352,
    name: "kecleon",
    weight: 220,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/352.png",
    chain: [
      {
        species_name: "kecleon",
      },
    ],
  },
  {
    id: 353,
    name: "shuppet",
    weight: 23,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/353.png",
    chain: [
      {
        species_name: "shuppet",
      },
      {
        species_name: "banette",
      },
    ],
  },
  {
    id: 354,
    name: "banette",
    weight: 125,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png",
    chain: [
      {
        species_name: "shuppet",
      },
      {
        species_name: "banette",
      },
    ],
  },
  {
    id: 355,
    name: "duskull",
    weight: 150,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png",
    chain: [
      {
        species_name: "duskull",
      },
      {
        species_name: "dusclops",
      },
      {
        species_name: "dusknoir",
      },
    ],
  },
  {
    id: 356,
    name: "dusclops",
    weight: 306,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png",
    chain: [
      {
        species_name: "duskull",
      },
      {
        species_name: "dusclops",
      },
      {
        species_name: "dusknoir",
      },
    ],
  },
  {
    id: 357,
    name: "tropius",
    weight: 1000,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png",
    chain: [
      {
        species_name: "tropius",
      },
    ],
  },
  {
    id: 358,
    name: "chimecho",
    weight: 10,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/358.png",
    chain: [
      {
        species_name: "chingling",
      },
      {
        species_name: "chimecho",
      },
    ],
  },
  {
    id: 359,
    name: "absol",
    weight: 470,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png",
    chain: [
      {
        species_name: "absol",
      },
    ],
  },
  {
    id: 360,
    name: "wynaut",
    weight: 140,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/360.png",
    chain: [
      {
        species_name: "wynaut",
      },
      {
        species_name: "wobbuffet",
      },
    ],
  },
  {
    id: 361,
    name: "snorunt",
    weight: 168,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png",
    chain: [
      {
        species_name: "snorunt",
      },
      {
        species_name: "glalie",
      },
    ],
  },
  {
    id: 362,
    name: "glalie",
    weight: 2565,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png",
    chain: [
      {
        species_name: "snorunt",
      },
      {
        species_name: "glalie",
      },
    ],
  },
  {
    id: 363,
    name: "spheal",
    weight: 395,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/363.png",
    chain: [
      {
        species_name: "spheal",
      },
      {
        species_name: "sealeo",
      },
      {
        species_name: "walrein",
      },
    ],
  },
  {
    id: 364,
    name: "sealeo",
    weight: 876,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png",
    chain: [
      {
        species_name: "spheal",
      },
      {
        species_name: "sealeo",
      },
      {
        species_name: "walrein",
      },
    ],
  },
  {
    id: 365,
    name: "walrein",
    weight: 1506,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png",
    chain: [
      {
        species_name: "spheal",
      },
      {
        species_name: "sealeo",
      },
      {
        species_name: "walrein",
      },
    ],
  },
  {
    id: 366,
    name: "clamperl",
    weight: 525,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/366.png",
    chain: [
      {
        species_name: "clamperl",
      },
      {
        species_name: "huntail",
      },
    ],
  },
  {
    id: 367,
    name: "huntail",
    weight: 270,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/367.png",
    chain: [
      {
        species_name: "clamperl",
      },
      {
        species_name: "huntail",
      },
    ],
  },
  {
    id: 369,
    name: "relicanth",
    weight: 234,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/369.png",
    chain: [
      {
        species_name: "relicanth",
      },
    ],
  },
  {
    id: 370,
    name: "luvdisc",
    weight: 87,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png",
    chain: [
      {
        species_name: "luvdisc",
      },
    ],
  },
  {
    id: 371,
    name: "bagon",
    weight: 421,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/371.png",
    chain: [
      {
        species_name: "bagon",
      },
      {
        species_name: "shelgon",
      },
      {
        species_name: "salamence",
      },
    ],
  },
  {
    id: 372,
    name: "shelgon",
    weight: 1105,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/372.png",
    chain: [
      {
        species_name: "bagon",
      },
      {
        species_name: "shelgon",
      },
      {
        species_name: "salamence",
      },
    ],
  },
  {
    id: 373,
    name: "salamence",
    weight: 1026,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png",
    chain: [
      {
        species_name: "bagon",
      },
      {
        species_name: "shelgon",
      },
      {
        species_name: "salamence",
      },
    ],
  },
  {
    id: 374,
    name: "beldum",
    weight: 952,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/374.png",
    chain: [
      {
        species_name: "beldum",
      },
      {
        species_name: "metang",
      },
      {
        species_name: "metagross",
      },
    ],
  },
  {
    id: 375,
    name: "metang",
    weight: 2025,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/375.png",
    chain: [
      {
        species_name: "beldum",
      },
      {
        species_name: "metang",
      },
      {
        species_name: "metagross",
      },
    ],
  },
  {
    id: 376,
    name: "metagross",
    weight: 5500,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png",
    chain: [
      {
        species_name: "beldum",
      },
      {
        species_name: "metang",
      },
      {
        species_name: "metagross",
      },
    ],
  },
  {
    id: 377,
    name: "regirock",
    weight: 2300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png",
    chain: [
      {
        species_name: "regirock",
      },
    ],
  },
  {
    id: 378,
    name: "regice",
    weight: 1750,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/378.png",
    chain: [
      {
        species_name: "regice",
      },
    ],
  },
  {
    id: 379,
    name: "registeel",
    weight: 2050,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/379.png",
    chain: [
      {
        species_name: "registeel",
      },
    ],
  },
  {
    id: 380,
    name: "latias",
    weight: 400,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/380.png",
    chain: [
      {
        species_name: "latias",
      },
    ],
  },
  {
    id: 381,
    name: "latios",
    weight: 600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/381.png",
    chain: [
      {
        species_name: "latios",
      },
    ],
  },
  {
    id: 382,
    name: "kyogre",
    weight: 3520,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png",
    chain: [
      {
        species_name: "kyogre",
      },
    ],
  },
  {
    id: 383,
    name: "groudon",
    weight: 9500,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png",
    chain: [
      {
        species_name: "groudon",
      },
    ],
  },
  {
    id: 384,
    name: "rayquaza",
    weight: 2065,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png",
    chain: [
      {
        species_name: "rayquaza",
      },
    ],
  },
  {
    id: 385,
    name: "jirachi",
    weight: 11,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png",
    chain: [
      {
        species_name: "jirachi",
      },
    ],
  },
  {
    id: 387,
    name: "turtwig",
    weight: 102,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png",
    chain: [
      {
        species_name: "turtwig",
      },
      {
        species_name: "grotle",
      },
      {
        species_name: "torterra",
      },
    ],
  },
  {
    id: 388,
    name: "grotle",
    weight: 970,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png",
    chain: [
      {
        species_name: "turtwig",
      },
      {
        species_name: "grotle",
      },
      {
        species_name: "torterra",
      },
    ],
  },
  {
    id: 389,
    name: "torterra",
    weight: 3100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png",
    chain: [
      {
        species_name: "turtwig",
      },
      {
        species_name: "grotle",
      },
      {
        species_name: "torterra",
      },
    ],
  },
  {
    id: 390,
    name: "chimchar",
    weight: 62,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png",
    chain: [
      {
        species_name: "chimchar",
      },
      {
        species_name: "monferno",
      },
      {
        species_name: "infernape",
      },
    ],
  },
  {
    id: 391,
    name: "monferno",
    weight: 220,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/391.png",
    chain: [
      {
        species_name: "chimchar",
      },
      {
        species_name: "monferno",
      },
      {
        species_name: "infernape",
      },
    ],
  },
  {
    id: 392,
    name: "infernape",
    weight: 550,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png",
    chain: [
      {
        species_name: "chimchar",
      },
      {
        species_name: "monferno",
      },
      {
        species_name: "infernape",
      },
    ],
  },
  {
    id: 393,
    name: "piplup",
    weight: 52,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png",
    chain: [
      {
        species_name: "piplup",
      },
      {
        species_name: "prinplup",
      },
      {
        species_name: "empoleon",
      },
    ],
  },
  {
    id: 394,
    name: "prinplup",
    weight: 230,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/394.png",
    chain: [
      {
        species_name: "piplup",
      },
      {
        species_name: "prinplup",
      },
      {
        species_name: "empoleon",
      },
    ],
  },
  {
    id: 395,
    name: "empoleon",
    weight: 845,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png",
    chain: [
      {
        species_name: "piplup",
      },
      {
        species_name: "prinplup",
      },
      {
        species_name: "empoleon",
      },
    ],
  },
  {
    id: 396,
    name: "starly",
    weight: 20,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/396.png",
    chain: [
      {
        species_name: "starly",
      },
      {
        species_name: "staravia",
      },
      {
        species_name: "staraptor",
      },
    ],
  },
  {
    id: 397,
    name: "staravia",
    weight: 155,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/397.png",
    chain: [
      {
        species_name: "starly",
      },
      {
        species_name: "staravia",
      },
      {
        species_name: "staraptor",
      },
    ],
  },
  {
    id: 398,
    name: "staraptor",
    weight: 249,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/398.png",
    chain: [
      {
        species_name: "starly",
      },
      {
        species_name: "staravia",
      },
      {
        species_name: "staraptor",
      },
    ],
  },
  {
    id: 399,
    name: "bidoof",
    weight: 200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/399.png",
    chain: [
      {
        species_name: "bidoof",
      },
      {
        species_name: "bibarel",
      },
    ],
  },
  {
    id: 400,
    name: "bibarel",
    weight: 315,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/400.png",
    chain: [
      {
        species_name: "bidoof",
      },
      {
        species_name: "bibarel",
      },
    ],
  },
  {
    id: 401,
    name: "kricketot",
    weight: 22,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/401.png",
    chain: [
      {
        species_name: "kricketot",
      },
      {
        species_name: "kricketune",
      },
    ],
  },
  {
    id: 402,
    name: "kricketune",
    weight: 255,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/402.png",
    chain: [
      {
        species_name: "kricketot",
      },
      {
        species_name: "kricketune",
      },
    ],
  },
  {
    id: 403,
    name: "shinx",
    weight: 95,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png",
    chain: [
      {
        species_name: "shinx",
      },
      {
        species_name: "luxio",
      },
      {
        species_name: "luxray",
      },
    ],
  },
  {
    id: 404,
    name: "luxio",
    weight: 305,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/404.png",
    chain: [
      {
        species_name: "shinx",
      },
      {
        species_name: "luxio",
      },
      {
        species_name: "luxray",
      },
    ],
  },
  {
    id: 405,
    name: "luxray",
    weight: 420,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png",
    chain: [
      {
        species_name: "shinx",
      },
      {
        species_name: "luxio",
      },
      {
        species_name: "luxray",
      },
    ],
  },
  {
    id: 406,
    name: "budew",
    weight: 12,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png",
    chain: [
      {
        species_name: "budew",
      },
      {
        species_name: "roselia",
      },
      {
        species_name: "roserade",
      },
    ],
  },
  {
    id: 407,
    name: "roserade",
    weight: 145,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png",
    chain: [
      {
        species_name: "budew",
      },
      {
        species_name: "roselia",
      },
      {
        species_name: "roserade",
      },
    ],
  },
  {
    id: 408,
    name: "cranidos",
    weight: 315,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/408.png",
    chain: [
      {
        species_name: "cranidos",
      },
      {
        species_name: "rampardos",
      },
    ],
  },
  {
    id: 409,
    name: "rampardos",
    weight: 1025,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png",
    chain: [
      {
        species_name: "cranidos",
      },
      {
        species_name: "rampardos",
      },
    ],
  },
  {
    id: 410,
    name: "shieldon",
    weight: 570,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/410.png",
    chain: [
      {
        species_name: "shieldon",
      },
      {
        species_name: "bastiodon",
      },
    ],
  },
  {
    id: 411,
    name: "bastiodon",
    weight: 1495,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/411.png",
    chain: [
      {
        species_name: "shieldon",
      },
      {
        species_name: "bastiodon",
      },
    ],
  },
  {
    id: 412,
    name: "burmy",
    weight: 34,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/412.png",
    chain: [
      {
        species_name: "burmy",
      },
      {
        species_name: "wormadam",
      },
    ],
  },
  {
    id: 415,
    name: "combee",
    weight: 55,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/415.png",
    chain: [
      {
        species_name: "combee",
      },
      {
        species_name: "vespiquen",
      },
    ],
  },
  {
    id: 416,
    name: "vespiquen",
    weight: 385,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/416.png",
    chain: [
      {
        species_name: "combee",
      },
      {
        species_name: "vespiquen",
      },
    ],
  },
  {
    id: 417,
    name: "pachirisu",
    weight: 39,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/417.png",
    chain: [
      {
        species_name: "pachirisu",
      },
    ],
  },
  {
    id: 418,
    name: "buizel",
    weight: 295,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/418.png",
    chain: [
      {
        species_name: "buizel",
      },
      {
        species_name: "floatzel",
      },
    ],
  },
  {
    id: 419,
    name: "floatzel",
    weight: 335,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/419.png",
    chain: [
      {
        species_name: "buizel",
      },
      {
        species_name: "floatzel",
      },
    ],
  },
  {
    id: 420,
    name: "cherubi",
    weight: 33,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/420.png",
    chain: [
      {
        species_name: "cherubi",
      },
      {
        species_name: "cherrim",
      },
    ],
  },
  {
    id: 421,
    name: "cherrim",
    weight: 93,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/421.png",
    chain: [
      {
        species_name: "cherubi",
      },
      {
        species_name: "cherrim",
      },
    ],
  },
  {
    id: 422,
    name: "shellos",
    weight: 63,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/422.png",
    chain: [
      {
        species_name: "shellos",
      },
      {
        species_name: "gastrodon",
      },
    ],
  },
  {
    id: 423,
    name: "gastrodon",
    weight: 299,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/423.png",
    chain: [
      {
        species_name: "shellos",
      },
      {
        species_name: "gastrodon",
      },
    ],
  },
  {
    id: 424,
    name: "ambipom",
    weight: 203,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/424.png",
    chain: [
      {
        species_name: "aipom",
      },
      {
        species_name: "ambipom",
      },
    ],
  },
  {
    id: 425,
    name: "drifloon",
    weight: 12,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/425.png",
    chain: [
      {
        species_name: "drifloon",
      },
      {
        species_name: "drifblim",
      },
    ],
  },
  {
    id: 426,
    name: "drifblim",
    weight: 150,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/426.png",
    chain: [
      {
        species_name: "drifloon",
      },
      {
        species_name: "drifblim",
      },
    ],
  },
  {
    id: 427,
    name: "buneary",
    weight: 55,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/427.png",
    chain: [
      {
        species_name: "buneary",
      },
      {
        species_name: "lopunny",
      },
    ],
  },
  {
    id: 428,
    name: "lopunny",
    weight: 333,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png",
    chain: [
      {
        species_name: "buneary",
      },
      {
        species_name: "lopunny",
      },
    ],
  },
  {
    id: 429,
    name: "mismagius",
    weight: 44,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png",
    chain: [
      {
        species_name: "misdreavus",
      },
      {
        species_name: "mismagius",
      },
    ],
  },
  {
    id: 430,
    name: "honchkrow",
    weight: 273,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/430.png",
    chain: [
      {
        species_name: "murkrow",
      },
      {
        species_name: "honchkrow",
      },
    ],
  },
  {
    id: 431,
    name: "glameow",
    weight: 39,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/431.png",
    chain: [
      {
        species_name: "glameow",
      },
      {
        species_name: "purugly",
      },
    ],
  },
  {
    id: 432,
    name: "purugly",
    weight: 438,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/432.png",
    chain: [
      {
        species_name: "glameow",
      },
      {
        species_name: "purugly",
      },
    ],
  },
  {
    id: 433,
    name: "chingling",
    weight: 6,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/433.png",
    chain: [
      {
        species_name: "chingling",
      },
      {
        species_name: "chimecho",
      },
    ],
  },
  {
    id: 434,
    name: "stunky",
    weight: 192,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/434.png",
    chain: [
      {
        species_name: "stunky",
      },
      {
        species_name: "skuntank",
      },
    ],
  },
  {
    id: 435,
    name: "skuntank",
    weight: 380,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/435.png",
    chain: [
      {
        species_name: "stunky",
      },
      {
        species_name: "skuntank",
      },
    ],
  },
  {
    id: 436,
    name: "bronzor",
    weight: 605,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/436.png",
    chain: [
      {
        species_name: "bronzor",
      },
      {
        species_name: "bronzong",
      },
    ],
  },
  {
    id: 437,
    name: "bronzong",
    weight: 1870,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/437.png",
    chain: [
      {
        species_name: "bronzor",
      },
      {
        species_name: "bronzong",
      },
    ],
  },
  {
    id: 438,
    name: "bonsly",
    weight: 150,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/438.png",
    chain: [
      {
        species_name: "bonsly",
      },
      {
        species_name: "sudowoodo",
      },
    ],
  },
  {
    id: 439,
    name: "mime-jr",
    weight: 130,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/439.png",
    chain: [
      {
        species_name: "mime-jr",
      },
      {
        species_name: "mr-mime",
      },
    ],
  },
  {
    id: 440,
    name: "happiny",
    weight: 244,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/440.png",
    chain: [
      {
        species_name: "happiny",
      },
      {
        species_name: "chansey",
      },
      {
        species_name: "blissey",
      },
    ],
  },
  {
    id: 441,
    name: "chatot",
    weight: 19,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/441.png",
    chain: [
      {
        species_name: "chatot",
      },
    ],
  },
  {
    id: 442,
    name: "spiritomb",
    weight: 1080,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png",
    chain: [
      {
        species_name: "spiritomb",
      },
    ],
  },
  {
    id: 443,
    name: "gible",
    weight: 205,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/443.png",
    chain: [
      {
        species_name: "gible",
      },
      {
        species_name: "gabite",
      },
      {
        species_name: "garchomp",
      },
    ],
  },
  {
    id: 444,
    name: "gabite",
    weight: 560,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/444.png",
    chain: [
      {
        species_name: "gible",
      },
      {
        species_name: "gabite",
      },
      {
        species_name: "garchomp",
      },
    ],
  },
  {
    id: 445,
    name: "garchomp",
    weight: 950,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png",
    chain: [
      {
        species_name: "gible",
      },
      {
        species_name: "gabite",
      },
      {
        species_name: "garchomp",
      },
    ],
  },
  {
    id: 446,
    name: "munchlax",
    weight: 1050,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/446.png",
    chain: [
      {
        species_name: "munchlax",
      },
      {
        species_name: "snorlax",
      },
    ],
  },
  {
    id: 447,
    name: "riolu",
    weight: 202,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png",
    chain: [
      {
        species_name: "riolu",
      },
      {
        species_name: "lucario",
      },
    ],
  },
  {
    id: 448,
    name: "lucario",
    weight: 540,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png",
    chain: [
      {
        species_name: "riolu",
      },
      {
        species_name: "lucario",
      },
    ],
  },
  {
    id: 449,
    name: "hippopotas",
    weight: 495,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/449.png",
    chain: [
      {
        species_name: "hippopotas",
      },
      {
        species_name: "hippowdon",
      },
    ],
  },
  {
    id: 450,
    name: "hippowdon",
    weight: 3000,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png",
    chain: [
      {
        species_name: "hippopotas",
      },
      {
        species_name: "hippowdon",
      },
    ],
  },
  {
    id: 451,
    name: "skorupi",
    weight: 120,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/451.png",
    chain: [
      {
        species_name: "skorupi",
      },
      {
        species_name: "drapion",
      },
    ],
  },
  {
    id: 452,
    name: "drapion",
    weight: 615,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/452.png",
    chain: [
      {
        species_name: "skorupi",
      },
      {
        species_name: "drapion",
      },
    ],
  },
  {
    id: 453,
    name: "croagunk",
    weight: 230,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/453.png",
    chain: [
      {
        species_name: "croagunk",
      },
      {
        species_name: "toxicroak",
      },
    ],
  },
  {
    id: 454,
    name: "toxicroak",
    weight: 444,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/454.png",
    chain: [
      {
        species_name: "croagunk",
      },
      {
        species_name: "toxicroak",
      },
    ],
  },
  {
    id: 455,
    name: "carnivine",
    weight: 270,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/455.png",
    chain: [
      {
        species_name: "carnivine",
      },
    ],
  },
  {
    id: 456,
    name: "finneon",
    weight: 70,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/456.png",
    chain: [
      {
        species_name: "finneon",
      },
      {
        species_name: "lumineon",
      },
    ],
  },
  {
    id: 457,
    name: "lumineon",
    weight: 240,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/457.png",
    chain: [
      {
        species_name: "finneon",
      },
      {
        species_name: "lumineon",
      },
    ],
  },
  {
    id: 458,
    name: "mantyke",
    weight: 650,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/458.png",
    chain: [
      {
        species_name: "mantyke",
      },
      {
        species_name: "mantine",
      },
    ],
  },
  {
    id: 459,
    name: "snover",
    weight: 505,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/459.png",
    chain: [
      {
        species_name: "snover",
      },
      {
        species_name: "abomasnow",
      },
    ],
  },
  {
    id: 460,
    name: "abomasnow",
    weight: 1355,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png",
    chain: [
      {
        species_name: "snover",
      },
      {
        species_name: "abomasnow",
      },
    ],
  },
  {
    id: 461,
    name: "weavile",
    weight: 340,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png",
    chain: [
      {
        species_name: "sneasel",
      },
      {
        species_name: "weavile",
      },
    ],
  },
  {
    id: 462,
    name: "magnezone",
    weight: 1800,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png",
    chain: [
      {
        species_name: "magnemite",
      },
      {
        species_name: "magneton",
      },
      {
        species_name: "magnezone",
      },
    ],
  },
  {
    id: 463,
    name: "lickilicky",
    weight: 1400,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/463.png",
    chain: [
      {
        species_name: "lickitung",
      },
      {
        species_name: "lickilicky",
      },
    ],
  },
  {
    id: 464,
    name: "rhyperior",
    weight: 2828,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/464.png",
    chain: [
      {
        species_name: "rhyhorn",
      },
      {
        species_name: "rhydon",
      },
      {
        species_name: "rhyperior",
      },
    ],
  },
  {
    id: 465,
    name: "tangrowth",
    weight: 1286,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png",
    chain: [
      {
        species_name: "tangela",
      },
      {
        species_name: "tangrowth",
      },
    ],
  },
  {
    id: 466,
    name: "electivire",
    weight: 1386,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png",
    chain: [
      {
        species_name: "elekid",
      },
      {
        species_name: "electabuzz",
      },
      {
        species_name: "electivire",
      },
    ],
  },
  {
    id: 467,
    name: "magmortar",
    weight: 680,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/467.png",
    chain: [
      {
        species_name: "magby",
      },
      {
        species_name: "magmar",
      },
      {
        species_name: "magmortar",
      },
    ],
  },
  {
    id: 468,
    name: "togekiss",
    weight: 380,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png",
    chain: [
      {
        species_name: "togepi",
      },
      {
        species_name: "togetic",
      },
      {
        species_name: "togekiss",
      },
    ],
  },
  {
    id: 469,
    name: "yanmega",
    weight: 515,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/469.png",
    chain: [
      {
        species_name: "yanma",
      },
      {
        species_name: "yanmega",
      },
    ],
  },
  {
    id: 472,
    name: "gliscor",
    weight: 425,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/472.png",
    chain: [
      {
        species_name: "gligar",
      },
      {
        species_name: "gliscor",
      },
    ],
  },
  {
    id: 473,
    name: "mamoswine",
    weight: 2910,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/473.png",
    chain: [
      {
        species_name: "swinub",
      },
      {
        species_name: "piloswine",
      },
      {
        species_name: "mamoswine",
      },
    ],
  },
  {
    id: 474,
    name: "porygon-z",
    weight: 340,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/474.png",
    chain: [
      {
        species_name: "porygon",
      },
      {
        species_name: "porygon2",
      },
      {
        species_name: "porygon-z",
      },
    ],
  },
  {
    id: 476,
    name: "probopass",
    weight: 3400,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/476.png",
    chain: [
      {
        species_name: "nosepass",
      },
      {
        species_name: "probopass",
      },
    ],
  },
  {
    id: 477,
    name: "dusknoir",
    weight: 1066,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/477.png",
    chain: [
      {
        species_name: "duskull",
      },
      {
        species_name: "dusclops",
      },
      {
        species_name: "dusknoir",
      },
    ],
  },
  {
    id: 479,
    name: "rotom",
    weight: 3,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png",
    chain: [
      {
        species_name: "rotom",
      },
    ],
  },
  {
    id: 480,
    name: "uxie",
    weight: 3,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/480.png",
    chain: [
      {
        species_name: "uxie",
      },
    ],
  },
  {
    id: 481,
    name: "mesprit",
    weight: 3,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/481.png",
    chain: [
      {
        species_name: "mesprit",
      },
    ],
  },
  {
    id: 482,
    name: "azelf",
    weight: 3,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/482.png",
    chain: [
      {
        species_name: "azelf",
      },
    ],
  },
  {
    id: 483,
    name: "dialga",
    weight: 6830,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png",
    chain: [
      {
        species_name: "dialga",
      },
    ],
  },
  {
    id: 484,
    name: "palkia",
    weight: 3360,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png",
    chain: [
      {
        species_name: "palkia",
      },
    ],
  },
  {
    id: 485,
    name: "heatran",
    weight: 4300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/485.png",
    chain: [
      {
        species_name: "heatran",
      },
    ],
  },
  {
    id: 486,
    name: "regigigas",
    weight: 4200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/486.png",
    chain: [
      {
        species_name: "regigigas",
      },
    ],
  },
  {
    id: 488,
    name: "cresselia",
    weight: 856,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/488.png",
    chain: [
      {
        species_name: "cresselia",
      },
    ],
  },
  {
    id: 489,
    name: "phione",
    weight: 31,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/489.png",
    chain: [
      {
        species_name: "phione",
      },
      {
        species_name: "manaphy",
      },
    ],
  },
  {
    id: 490,
    name: "manaphy",
    weight: 14,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/490.png",
    chain: [
      {
        species_name: "phione",
      },
      {
        species_name: "manaphy",
      },
    ],
  },
  {
    id: 491,
    name: "darkrai",
    weight: 505,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png",
    chain: [
      {
        species_name: "darkrai",
      },
    ],
  },
  {
    id: 493,
    name: "arceus",
    weight: 3200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png",
    chain: [
      {
        species_name: "arceus",
      },
    ],
  },
  {
    id: 494,
    name: "victini",
    weight: 40,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png",
    chain: [
      {
        species_name: "victini",
      },
    ],
  },
  {
    id: 495,
    name: "snivy",
    weight: 81,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/495.png",
    chain: [
      {
        species_name: "snivy",
      },
      {
        species_name: "servine",
      },
      {
        species_name: "serperior",
      },
    ],
  },
  {
    id: 496,
    name: "servine",
    weight: 160,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/496.png",
    chain: [
      {
        species_name: "snivy",
      },
      {
        species_name: "servine",
      },
      {
        species_name: "serperior",
      },
    ],
  },
  {
    id: 497,
    name: "serperior",
    weight: 630,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png",
    chain: [
      {
        species_name: "snivy",
      },
      {
        species_name: "servine",
      },
      {
        species_name: "serperior",
      },
    ],
  },
  {
    id: 498,
    name: "tepig",
    weight: 99,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/498.png",
    chain: [
      {
        species_name: "tepig",
      },
      {
        species_name: "pignite",
      },
      {
        species_name: "emboar",
      },
    ],
  },
  {
    id: 499,
    name: "pignite",
    weight: 555,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/499.png",
    chain: [
      {
        species_name: "tepig",
      },
      {
        species_name: "pignite",
      },
      {
        species_name: "emboar",
      },
    ],
  },
  {
    id: 500,
    name: "emboar",
    weight: 1500,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png",
    chain: [
      {
        species_name: "tepig",
      },
      {
        species_name: "pignite",
      },
      {
        species_name: "emboar",
      },
    ],
  },
  {
    id: 501,
    name: "oshawott",
    weight: 59,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png",
    chain: [
      {
        species_name: "oshawott",
      },
      {
        species_name: "dewott",
      },
      {
        species_name: "samurott",
      },
    ],
  },
  {
    id: 502,
    name: "dewott",
    weight: 245,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/502.png",
    chain: [
      {
        species_name: "oshawott",
      },
      {
        species_name: "dewott",
      },
      {
        species_name: "samurott",
      },
    ],
  },
  {
    id: 503,
    name: "samurott",
    weight: 946,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/503.png",
    chain: [
      {
        species_name: "oshawott",
      },
      {
        species_name: "dewott",
      },
      {
        species_name: "samurott",
      },
    ],
  },
  {
    id: 504,
    name: "patrat",
    weight: 116,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/504.png",
    chain: [
      {
        species_name: "patrat",
      },
      {
        species_name: "watchog",
      },
    ],
  },
  {
    id: 505,
    name: "watchog",
    weight: 270,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/505.png",
    chain: [
      {
        species_name: "patrat",
      },
      {
        species_name: "watchog",
      },
    ],
  },
  {
    id: 506,
    name: "lillipup",
    weight: 41,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/506.png",
    chain: [
      {
        species_name: "lillipup",
      },
      {
        species_name: "herdier",
      },
      {
        species_name: "stoutland",
      },
    ],
  },
  {
    id: 507,
    name: "herdier",
    weight: 147,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/507.png",
    chain: [
      {
        species_name: "lillipup",
      },
      {
        species_name: "herdier",
      },
      {
        species_name: "stoutland",
      },
    ],
  },
  {
    id: 508,
    name: "stoutland",
    weight: 610,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/508.png",
    chain: [
      {
        species_name: "lillipup",
      },
      {
        species_name: "herdier",
      },
      {
        species_name: "stoutland",
      },
    ],
  },
  {
    id: 509,
    name: "purrloin",
    weight: 101,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/509.png",
    chain: [
      {
        species_name: "purrloin",
      },
      {
        species_name: "liepard",
      },
    ],
  },
  {
    id: 510,
    name: "liepard",
    weight: 375,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png",
    chain: [
      {
        species_name: "purrloin",
      },
      {
        species_name: "liepard",
      },
    ],
  },
  {
    id: 511,
    name: "pansage",
    weight: 105,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/511.png",
    chain: [
      {
        species_name: "pansage",
      },
      {
        species_name: "simisage",
      },
    ],
  },
  {
    id: 512,
    name: "simisage",
    weight: 305,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/512.png",
    chain: [
      {
        species_name: "pansage",
      },
      {
        species_name: "simisage",
      },
    ],
  },
  {
    id: 513,
    name: "pansear",
    weight: 110,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/513.png",
    chain: [
      {
        species_name: "pansear",
      },
      {
        species_name: "simisear",
      },
    ],
  },
  {
    id: 514,
    name: "simisear",
    weight: 280,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/514.png",
    chain: [
      {
        species_name: "pansear",
      },
      {
        species_name: "simisear",
      },
    ],
  },
  {
    id: 515,
    name: "panpour",
    weight: 135,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/515.png",
    chain: [
      {
        species_name: "panpour",
      },
      {
        species_name: "simipour",
      },
    ],
  },
  {
    id: 516,
    name: "simipour",
    weight: 290,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/516.png",
    chain: [
      {
        species_name: "panpour",
      },
      {
        species_name: "simipour",
      },
    ],
  },
  {
    id: 517,
    name: "munna",
    weight: 233,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/517.png",
    chain: [
      {
        species_name: "munna",
      },
      {
        species_name: "musharna",
      },
    ],
  },
  {
    id: 518,
    name: "musharna",
    weight: 605,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/518.png",
    chain: [
      {
        species_name: "munna",
      },
      {
        species_name: "musharna",
      },
    ],
  },
  {
    id: 519,
    name: "pidove",
    weight: 21,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/519.png",
    chain: [
      {
        species_name: "pidove",
      },
      {
        species_name: "tranquill",
      },
      {
        species_name: "unfezant",
      },
    ],
  },
  {
    id: 520,
    name: "tranquill",
    weight: 150,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/520.png",
    chain: [
      {
        species_name: "pidove",
      },
      {
        species_name: "tranquill",
      },
      {
        species_name: "unfezant",
      },
    ],
  },
  {
    id: 521,
    name: "unfezant",
    weight: 290,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/521.png",
    chain: [
      {
        species_name: "pidove",
      },
      {
        species_name: "tranquill",
      },
      {
        species_name: "unfezant",
      },
    ],
  },
  {
    id: 522,
    name: "blitzle",
    weight: 298,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/522.png",
    chain: [
      {
        species_name: "blitzle",
      },
      {
        species_name: "zebstrika",
      },
    ],
  },
  {
    id: 523,
    name: "zebstrika",
    weight: 795,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/523.png",
    chain: [
      {
        species_name: "blitzle",
      },
      {
        species_name: "zebstrika",
      },
    ],
  },
  {
    id: 524,
    name: "roggenrola",
    weight: 180,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/524.png",
    chain: [
      {
        species_name: "roggenrola",
      },
      {
        species_name: "boldore",
      },
      {
        species_name: "gigalith",
      },
    ],
  },
  {
    id: 525,
    name: "boldore",
    weight: 1020,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/525.png",
    chain: [
      {
        species_name: "roggenrola",
      },
      {
        species_name: "boldore",
      },
      {
        species_name: "gigalith",
      },
    ],
  },
  {
    id: 526,
    name: "gigalith",
    weight: 2600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png",
    chain: [
      {
        species_name: "roggenrola",
      },
      {
        species_name: "boldore",
      },
      {
        species_name: "gigalith",
      },
    ],
  },
  {
    id: 527,
    name: "woobat",
    weight: 21,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/527.png",
    chain: [
      {
        species_name: "woobat",
      },
      {
        species_name: "swoobat",
      },
    ],
  },
  {
    id: 528,
    name: "swoobat",
    weight: 105,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/528.png",
    chain: [
      {
        species_name: "woobat",
      },
      {
        species_name: "swoobat",
      },
    ],
  },
  {
    id: 529,
    name: "drilbur",
    weight: 85,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/529.png",
    chain: [
      {
        species_name: "drilbur",
      },
      {
        species_name: "excadrill",
      },
    ],
  },
  {
    id: 530,
    name: "excadrill",
    weight: 404,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/530.png",
    chain: [
      {
        species_name: "drilbur",
      },
      {
        species_name: "excadrill",
      },
    ],
  },
  {
    id: 531,
    name: "audino",
    weight: 310,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/531.png",
    chain: [
      {
        species_name: "audino",
      },
    ],
  },
  {
    id: 532,
    name: "timburr",
    weight: 125,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/532.png",
    chain: [
      {
        species_name: "timburr",
      },
      {
        species_name: "gurdurr",
      },
      {
        species_name: "conkeldurr",
      },
    ],
  },
  {
    id: 533,
    name: "gurdurr",
    weight: 400,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/533.png",
    chain: [
      {
        species_name: "timburr",
      },
      {
        species_name: "gurdurr",
      },
      {
        species_name: "conkeldurr",
      },
    ],
  },
  {
    id: 534,
    name: "conkeldurr",
    weight: 870,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/534.png",
    chain: [
      {
        species_name: "timburr",
      },
      {
        species_name: "gurdurr",
      },
      {
        species_name: "conkeldurr",
      },
    ],
  },
  {
    id: 535,
    name: "tympole",
    weight: 45,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/535.png",
    chain: [
      {
        species_name: "tympole",
      },
      {
        species_name: "palpitoad",
      },
      {
        species_name: "seismitoad",
      },
    ],
  },
  {
    id: 536,
    name: "palpitoad",
    weight: 170,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/536.png",
    chain: [
      {
        species_name: "tympole",
      },
      {
        species_name: "palpitoad",
      },
      {
        species_name: "seismitoad",
      },
    ],
  },
  {
    id: 537,
    name: "seismitoad",
    weight: 620,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/537.png",
    chain: [
      {
        species_name: "tympole",
      },
      {
        species_name: "palpitoad",
      },
      {
        species_name: "seismitoad",
      },
    ],
  },
  {
    id: 538,
    name: "throh",
    weight: 555,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/538.png",
    chain: [
      {
        species_name: "throh",
      },
    ],
  },
  {
    id: 539,
    name: "sawk",
    weight: 510,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/539.png",
    chain: [
      {
        species_name: "sawk",
      },
    ],
  },
  {
    id: 540,
    name: "sewaddle",
    weight: 25,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/540.png",
    chain: [
      {
        species_name: "sewaddle",
      },
      {
        species_name: "swadloon",
      },
      {
        species_name: "leavanny",
      },
    ],
  },
  {
    id: 541,
    name: "swadloon",
    weight: 73,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/541.png",
    chain: [
      {
        species_name: "sewaddle",
      },
      {
        species_name: "swadloon",
      },
      {
        species_name: "leavanny",
      },
    ],
  },
  {
    id: 542,
    name: "leavanny",
    weight: 205,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/542.png",
    chain: [
      {
        species_name: "sewaddle",
      },
      {
        species_name: "swadloon",
      },
      {
        species_name: "leavanny",
      },
    ],
  },
  {
    id: 543,
    name: "venipede",
    weight: 53,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/543.png",
    chain: [
      {
        species_name: "venipede",
      },
      {
        species_name: "whirlipede",
      },
      {
        species_name: "scolipede",
      },
    ],
  },
  {
    id: 544,
    name: "whirlipede",
    weight: 585,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/544.png",
    chain: [
      {
        species_name: "venipede",
      },
      {
        species_name: "whirlipede",
      },
      {
        species_name: "scolipede",
      },
    ],
  },
  {
    id: 545,
    name: "scolipede",
    weight: 2005,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/545.png",
    chain: [
      {
        species_name: "venipede",
      },
      {
        species_name: "whirlipede",
      },
      {
        species_name: "scolipede",
      },
    ],
  },
  {
    id: 546,
    name: "cottonee",
    weight: 6,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/546.png",
    chain: [
      {
        species_name: "cottonee",
      },
      {
        species_name: "whimsicott",
      },
    ],
  },
  {
    id: 547,
    name: "whimsicott",
    weight: 66,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/547.png",
    chain: [
      {
        species_name: "cottonee",
      },
      {
        species_name: "whimsicott",
      },
    ],
  },
  {
    id: 548,
    name: "petilil",
    weight: 66,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/548.png",
    chain: [
      {
        species_name: "petilil",
      },
      {
        species_name: "lilligant",
      },
    ],
  },
  {
    id: 549,
    name: "lilligant",
    weight: 163,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/549.png",
    chain: [
      {
        species_name: "petilil",
      },
      {
        species_name: "lilligant",
      },
    ],
  },
  {
    id: 551,
    name: "sandile",
    weight: 152,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/551.png",
    chain: [
      {
        species_name: "sandile",
      },
      {
        species_name: "krokorok",
      },
      {
        species_name: "krookodile",
      },
    ],
  },
  {
    id: 552,
    name: "krokorok",
    weight: 334,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/552.png",
    chain: [
      {
        species_name: "sandile",
      },
      {
        species_name: "krokorok",
      },
      {
        species_name: "krookodile",
      },
    ],
  },
  {
    id: 553,
    name: "krookodile",
    weight: 963,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/553.png",
    chain: [
      {
        species_name: "sandile",
      },
      {
        species_name: "krokorok",
      },
      {
        species_name: "krookodile",
      },
    ],
  },
  {
    id: 554,
    name: "darumaka",
    weight: 375,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/554.png",
    chain: [
      {
        species_name: "darumaka",
      },
      {
        species_name: "darmanitan",
      },
    ],
  },
  {
    id: 556,
    name: "maractus",
    weight: 280,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/556.png",
    chain: [
      {
        species_name: "maractus",
      },
    ],
  },
  {
    id: 557,
    name: "dwebble",
    weight: 145,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/557.png",
    chain: [
      {
        species_name: "dwebble",
      },
      {
        species_name: "crustle",
      },
    ],
  },
  {
    id: 558,
    name: "crustle",
    weight: 2000,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/558.png",
    chain: [
      {
        species_name: "dwebble",
      },
      {
        species_name: "crustle",
      },
    ],
  },
  {
    id: 559,
    name: "scraggy",
    weight: 118,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/559.png",
    chain: [
      {
        species_name: "scraggy",
      },
      {
        species_name: "scrafty",
      },
    ],
  },
  {
    id: 560,
    name: "scrafty",
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/560.png",
    chain: [
      {
        species_name: "scraggy",
      },
      {
        species_name: "scrafty",
      },
    ],
  },
  {
    id: 561,
    name: "sigilyph",
    weight: 140,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/561.png",
    chain: [
      {
        species_name: "sigilyph",
      },
    ],
  },
  {
    id: 562,
    name: "yamask",
    weight: 15,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/562.png",
    chain: [
      {
        species_name: "yamask",
      },
      {
        species_name: "cofagrigus",
      },
    ],
  },
  {
    id: 563,
    name: "cofagrigus",
    weight: 765,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/563.png",
    chain: [
      {
        species_name: "yamask",
      },
      {
        species_name: "cofagrigus",
      },
    ],
  },
  {
    id: 564,
    name: "tirtouga",
    weight: 165,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/564.png",
    chain: [
      {
        species_name: "tirtouga",
      },
      {
        species_name: "carracosta",
      },
    ],
  },
  {
    id: 565,
    name: "carracosta",
    weight: 810,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/565.png",
    chain: [
      {
        species_name: "tirtouga",
      },
      {
        species_name: "carracosta",
      },
    ],
  },
  {
    id: 566,
    name: "archen",
    weight: 95,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/566.png",
    chain: [
      {
        species_name: "archen",
      },
      {
        species_name: "archeops",
      },
    ],
  },
  {
    id: 567,
    name: "archeops",
    weight: 320,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/567.png",
    chain: [
      {
        species_name: "archen",
      },
      {
        species_name: "archeops",
      },
    ],
  },
  {
    id: 568,
    name: "trubbish",
    weight: 310,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png",
    chain: [
      {
        species_name: "trubbish",
      },
      {
        species_name: "garbodor",
      },
    ],
  },
  {
    id: 569,
    name: "garbodor",
    weight: 1073,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/569.png",
    chain: [
      {
        species_name: "trubbish",
      },
      {
        species_name: "garbodor",
      },
    ],
  },
  {
    id: 570,
    name: "zorua",
    weight: 125,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/570.png",
    chain: [
      {
        species_name: "zorua",
      },
      {
        species_name: "zoroark",
      },
    ],
  },
  {
    id: 571,
    name: "zoroark",
    weight: 811,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png",
    chain: [
      {
        species_name: "zorua",
      },
      {
        species_name: "zoroark",
      },
    ],
  },
  {
    id: 572,
    name: "minccino",
    weight: 58,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/572.png",
    chain: [
      {
        species_name: "minccino",
      },
      {
        species_name: "cinccino",
      },
    ],
  },
  {
    id: 573,
    name: "cinccino",
    weight: 75,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/573.png",
    chain: [
      {
        species_name: "minccino",
      },
      {
        species_name: "cinccino",
      },
    ],
  },
  {
    id: 574,
    name: "gothita",
    weight: 58,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/574.png",
    chain: [
      {
        species_name: "gothita",
      },
      {
        species_name: "gothorita",
      },
      {
        species_name: "gothitelle",
      },
    ],
  },
  {
    id: 575,
    name: "gothorita",
    weight: 180,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/575.png",
    chain: [
      {
        species_name: "gothita",
      },
      {
        species_name: "gothorita",
      },
      {
        species_name: "gothitelle",
      },
    ],
  },
  {
    id: 576,
    name: "gothitelle",
    weight: 440,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/576.png",
    chain: [
      {
        species_name: "gothita",
      },
      {
        species_name: "gothorita",
      },
      {
        species_name: "gothitelle",
      },
    ],
  },
  {
    id: 577,
    name: "solosis",
    weight: 10,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/577.png",
    chain: [
      {
        species_name: "solosis",
      },
      {
        species_name: "duosion",
      },
      {
        species_name: "reuniclus",
      },
    ],
  },
  {
    id: 578,
    name: "duosion",
    weight: 80,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/578.png",
    chain: [
      {
        species_name: "solosis",
      },
      {
        species_name: "duosion",
      },
      {
        species_name: "reuniclus",
      },
    ],
  },
  {
    id: 579,
    name: "reuniclus",
    weight: 201,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/579.png",
    chain: [
      {
        species_name: "solosis",
      },
      {
        species_name: "duosion",
      },
      {
        species_name: "reuniclus",
      },
    ],
  },
  {
    id: 580,
    name: "ducklett",
    weight: 55,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/580.png",
    chain: [
      {
        species_name: "ducklett",
      },
      {
        species_name: "swanna",
      },
    ],
  },
  {
    id: 581,
    name: "swanna",
    weight: 242,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/581.png",
    chain: [
      {
        species_name: "ducklett",
      },
      {
        species_name: "swanna",
      },
    ],
  },
  {
    id: 582,
    name: "vanillite",
    weight: 57,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/582.png",
    chain: [
      {
        species_name: "vanillite",
      },
      {
        species_name: "vanillish",
      },
      {
        species_name: "vanilluxe",
      },
    ],
  },
  {
    id: 583,
    name: "vanillish",
    weight: 410,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/583.png",
    chain: [
      {
        species_name: "vanillite",
      },
      {
        species_name: "vanillish",
      },
      {
        species_name: "vanilluxe",
      },
    ],
  },
  {
    id: 584,
    name: "vanilluxe",
    weight: 575,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/584.png",
    chain: [
      {
        species_name: "vanillite",
      },
      {
        species_name: "vanillish",
      },
      {
        species_name: "vanilluxe",
      },
    ],
  },
  {
    id: 585,
    name: "deerling",
    weight: 195,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/585.png",
    chain: [
      {
        species_name: "deerling",
      },
      {
        species_name: "sawsbuck",
      },
    ],
  },
  {
    id: 586,
    name: "sawsbuck",
    weight: 925,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/586.png",
    chain: [
      {
        species_name: "deerling",
      },
      {
        species_name: "sawsbuck",
      },
    ],
  },
  {
    id: 587,
    name: "emolga",
    weight: 50,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/587.png",
    chain: [
      {
        species_name: "emolga",
      },
    ],
  },
  {
    id: 588,
    name: "karrablast",
    weight: 59,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/588.png",
    chain: [
      {
        species_name: "karrablast",
      },
      {
        species_name: "escavalier",
      },
    ],
  },
  {
    id: 589,
    name: "escavalier",
    weight: 330,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/589.png",
    chain: [
      {
        species_name: "karrablast",
      },
      {
        species_name: "escavalier",
      },
    ],
  },
  {
    id: 590,
    name: "foongus",
    weight: 10,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/590.png",
    chain: [
      {
        species_name: "foongus",
      },
      {
        species_name: "amoonguss",
      },
    ],
  },
  {
    id: 591,
    name: "amoonguss",
    weight: 105,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/591.png",
    chain: [
      {
        species_name: "foongus",
      },
      {
        species_name: "amoonguss",
      },
    ],
  },
  {
    id: 592,
    name: "frillish",
    weight: 330,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/592.png",
    chain: [
      {
        species_name: "frillish",
      },
      {
        species_name: "jellicent",
      },
    ],
  },
  {
    id: 593,
    name: "jellicent",
    weight: 1350,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/593.png",
    chain: [
      {
        species_name: "frillish",
      },
      {
        species_name: "jellicent",
      },
    ],
  },
  {
    id: 594,
    name: "alomomola",
    weight: 316,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/594.png",
    chain: [
      {
        species_name: "alomomola",
      },
    ],
  },
  {
    id: 595,
    name: "joltik",
    weight: 6,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/595.png",
    chain: [
      {
        species_name: "joltik",
      },
      {
        species_name: "galvantula",
      },
    ],
  },
  {
    id: 596,
    name: "galvantula",
    weight: 143,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/596.png",
    chain: [
      {
        species_name: "joltik",
      },
      {
        species_name: "galvantula",
      },
    ],
  },
  {
    id: 597,
    name: "ferroseed",
    weight: 188,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/597.png",
    chain: [
      {
        species_name: "ferroseed",
      },
      {
        species_name: "ferrothorn",
      },
    ],
  },
  {
    id: 598,
    name: "ferrothorn",
    weight: 1100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/598.png",
    chain: [
      {
        species_name: "ferroseed",
      },
      {
        species_name: "ferrothorn",
      },
    ],
  },
  {
    id: 599,
    name: "klink",
    weight: 210,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/599.png",
    chain: [
      {
        species_name: "klink",
      },
      {
        species_name: "klang",
      },
      {
        species_name: "klinklang",
      },
    ],
  },
  {
    id: 600,
    name: "klang",
    weight: 510,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/600.png",
    chain: [
      {
        species_name: "klink",
      },
      {
        species_name: "klang",
      },
      {
        species_name: "klinklang",
      },
    ],
  },
  {
    id: 601,
    name: "klinklang",
    weight: 810,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/601.png",
    chain: [
      {
        species_name: "klink",
      },
      {
        species_name: "klang",
      },
      {
        species_name: "klinklang",
      },
    ],
  },
  {
    id: 602,
    name: "tynamo",
    weight: 3,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/602.png",
    chain: [
      {
        species_name: "tynamo",
      },
      {
        species_name: "eelektrik",
      },
      {
        species_name: "eelektross",
      },
    ],
  },
  {
    id: 603,
    name: "eelektrik",
    weight: 220,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/603.png",
    chain: [
      {
        species_name: "tynamo",
      },
      {
        species_name: "eelektrik",
      },
      {
        species_name: "eelektross",
      },
    ],
  },
  {
    id: 604,
    name: "eelektross",
    weight: 805,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/604.png",
    chain: [
      {
        species_name: "tynamo",
      },
      {
        species_name: "eelektrik",
      },
      {
        species_name: "eelektross",
      },
    ],
  },
  {
    id: 605,
    name: "elgyem",
    weight: 90,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/605.png",
    chain: [
      {
        species_name: "elgyem",
      },
      {
        species_name: "beheeyem",
      },
    ],
  },
  {
    id: 606,
    name: "beheeyem",
    weight: 345,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/606.png",
    chain: [
      {
        species_name: "elgyem",
      },
      {
        species_name: "beheeyem",
      },
    ],
  },
  {
    id: 607,
    name: "litwick",
    weight: 31,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/607.png",
    chain: [
      {
        species_name: "litwick",
      },
      {
        species_name: "lampent",
      },
      {
        species_name: "chandelure",
      },
    ],
  },
  {
    id: 608,
    name: "lampent",
    weight: 130,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/608.png",
    chain: [
      {
        species_name: "litwick",
      },
      {
        species_name: "lampent",
      },
      {
        species_name: "chandelure",
      },
    ],
  },
  {
    id: 609,
    name: "chandelure",
    weight: 343,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png",
    chain: [
      {
        species_name: "litwick",
      },
      {
        species_name: "lampent",
      },
      {
        species_name: "chandelure",
      },
    ],
  },
  {
    id: 610,
    name: "axew",
    weight: 180,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/610.png",
    chain: [
      {
        species_name: "axew",
      },
      {
        species_name: "fraxure",
      },
      {
        species_name: "haxorus",
      },
    ],
  },
  {
    id: 611,
    name: "fraxure",
    weight: 360,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/611.png",
    chain: [
      {
        species_name: "axew",
      },
      {
        species_name: "fraxure",
      },
      {
        species_name: "haxorus",
      },
    ],
  },
  {
    id: 612,
    name: "haxorus",
    weight: 1055,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/612.png",
    chain: [
      {
        species_name: "axew",
      },
      {
        species_name: "fraxure",
      },
      {
        species_name: "haxorus",
      },
    ],
  },
  {
    id: 613,
    name: "cubchoo",
    weight: 85,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/613.png",
    chain: [
      {
        species_name: "cubchoo",
      },
      {
        species_name: "beartic",
      },
    ],
  },
  {
    id: 614,
    name: "beartic",
    weight: 2600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/614.png",
    chain: [
      {
        species_name: "cubchoo",
      },
      {
        species_name: "beartic",
      },
    ],
  },
  {
    id: 615,
    name: "cryogonal",
    weight: 1480,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/615.png",
    chain: [
      {
        species_name: "cryogonal",
      },
    ],
  },
  {
    id: 616,
    name: "shelmet",
    weight: 77,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/616.png",
    chain: [
      {
        species_name: "shelmet",
      },
      {
        species_name: "accelgor",
      },
    ],
  },
  {
    id: 617,
    name: "accelgor",
    weight: 253,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/617.png",
    chain: [
      {
        species_name: "shelmet",
      },
      {
        species_name: "accelgor",
      },
    ],
  },
  {
    id: 618,
    name: "stunfisk",
    weight: 110,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/618.png",
    chain: [
      {
        species_name: "stunfisk",
      },
    ],
  },
  {
    id: 619,
    name: "mienfoo",
    weight: 200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/619.png",
    chain: [
      {
        species_name: "mienfoo",
      },
      {
        species_name: "mienshao",
      },
    ],
  },
  {
    id: 620,
    name: "mienshao",
    weight: 355,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/620.png",
    chain: [
      {
        species_name: "mienfoo",
      },
      {
        species_name: "mienshao",
      },
    ],
  },
  {
    id: 621,
    name: "druddigon",
    weight: 1390,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/621.png",
    chain: [
      {
        species_name: "druddigon",
      },
    ],
  },
  {
    id: 622,
    name: "golett",
    weight: 920,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/622.png",
    chain: [
      {
        species_name: "golett",
      },
      {
        species_name: "golurk",
      },
    ],
  },
  {
    id: 623,
    name: "golurk",
    weight: 3300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/623.png",
    chain: [
      {
        species_name: "golett",
      },
      {
        species_name: "golurk",
      },
    ],
  },
  {
    id: 624,
    name: "pawniard",
    weight: 102,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/624.png",
    chain: [
      {
        species_name: "pawniard",
      },
      {
        species_name: "bisharp",
      },
    ],
  },
  {
    id: 625,
    name: "bisharp",
    weight: 700,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/625.png",
    chain: [
      {
        species_name: "pawniard",
      },
      {
        species_name: "bisharp",
      },
    ],
  },
  {
    id: 626,
    name: "bouffalant",
    weight: 946,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/626.png",
    chain: [
      {
        species_name: "bouffalant",
      },
    ],
  },
  {
    id: 627,
    name: "rufflet",
    weight: 105,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/627.png",
    chain: [
      {
        species_name: "rufflet",
      },
      {
        species_name: "braviary",
      },
    ],
  },
  {
    id: 628,
    name: "braviary",
    weight: 410,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/628.png",
    chain: [
      {
        species_name: "rufflet",
      },
      {
        species_name: "braviary",
      },
    ],
  },
  {
    id: 629,
    name: "vullaby",
    weight: 90,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/629.png",
    chain: [
      {
        species_name: "vullaby",
      },
      {
        species_name: "mandibuzz",
      },
    ],
  },
  {
    id: 630,
    name: "mandibuzz",
    weight: 395,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/630.png",
    chain: [
      {
        species_name: "vullaby",
      },
      {
        species_name: "mandibuzz",
      },
    ],
  },
  {
    id: 631,
    name: "heatmor",
    weight: 580,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/631.png",
    chain: [
      {
        species_name: "heatmor",
      },
    ],
  },
  {
    id: 632,
    name: "durant",
    weight: 330,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/632.png",
    chain: [
      {
        species_name: "durant",
      },
    ],
  },
  {
    id: 633,
    name: "deino",
    weight: 173,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/633.png",
    chain: [
      {
        species_name: "deino",
      },
      {
        species_name: "zweilous",
      },
      {
        species_name: "hydreigon",
      },
    ],
  },
  {
    id: 634,
    name: "zweilous",
    weight: 500,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/634.png",
    chain: [
      {
        species_name: "deino",
      },
      {
        species_name: "zweilous",
      },
      {
        species_name: "hydreigon",
      },
    ],
  },
  {
    id: 635,
    name: "hydreigon",
    weight: 1600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/635.png",
    chain: [
      {
        species_name: "deino",
      },
      {
        species_name: "zweilous",
      },
      {
        species_name: "hydreigon",
      },
    ],
  },
  {
    id: 636,
    name: "larvesta",
    weight: 288,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/636.png",
    chain: [
      {
        species_name: "larvesta",
      },
      {
        species_name: "volcarona",
      },
    ],
  },
  {
    id: 637,
    name: "volcarona",
    weight: 460,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/637.png",
    chain: [
      {
        species_name: "larvesta",
      },
      {
        species_name: "volcarona",
      },
    ],
  },
  {
    id: 638,
    name: "cobalion",
    weight: 2500,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/638.png",
    chain: [
      {
        species_name: "cobalion",
      },
    ],
  },
  {
    id: 639,
    name: "terrakion",
    weight: 2600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/639.png",
    chain: [
      {
        species_name: "terrakion",
      },
    ],
  },
  {
    id: 640,
    name: "virizion",
    weight: 2000,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/640.png",
    chain: [
      {
        species_name: "virizion",
      },
    ],
  },
  {
    id: 643,
    name: "reshiram",
    weight: 3300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png",
    chain: [
      {
        species_name: "reshiram",
      },
    ],
  },
  {
    id: 644,
    name: "zekrom",
    weight: 3450,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/644.png",
    chain: [
      {
        species_name: "zekrom",
      },
    ],
  },
  {
    id: 646,
    name: "kyurem",
    weight: 3250,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/646.png",
    chain: [
      {
        species_name: "kyurem",
      },
    ],
  },
  {
    id: 649,
    name: "genesect",
    weight: 825,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/649.png",
    chain: [
      {
        species_name: "genesect",
      },
    ],
  },
  {
    id: 650,
    name: "chespin",
    weight: 90,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/650.png",
    chain: [
      {
        species_name: "chespin",
      },
      {
        species_name: "quilladin",
      },
      {
        species_name: "chesnaught",
      },
    ],
  },
  {
    id: 651,
    name: "quilladin",
    weight: 290,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/651.png",
    chain: [
      {
        species_name: "chespin",
      },
      {
        species_name: "quilladin",
      },
      {
        species_name: "chesnaught",
      },
    ],
  },
  {
    id: 652,
    name: "chesnaught",
    weight: 900,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/652.png",
    chain: [
      {
        species_name: "chespin",
      },
      {
        species_name: "quilladin",
      },
      {
        species_name: "chesnaught",
      },
    ],
  },
  {
    id: 653,
    name: "fennekin",
    weight: 94,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/653.png",
    chain: [
      {
        species_name: "fennekin",
      },
      {
        species_name: "braixen",
      },
      {
        species_name: "delphox",
      },
    ],
  },
  {
    id: 654,
    name: "braixen",
    weight: 145,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/654.png",
    chain: [
      {
        species_name: "fennekin",
      },
      {
        species_name: "braixen",
      },
      {
        species_name: "delphox",
      },
    ],
  },
  {
    id: 655,
    name: "delphox",
    weight: 390,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/655.png",
    chain: [
      {
        species_name: "fennekin",
      },
      {
        species_name: "braixen",
      },
      {
        species_name: "delphox",
      },
    ],
  },
  {
    id: 656,
    name: "froakie",
    weight: 70,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/656.png",
    chain: [
      {
        species_name: "froakie",
      },
      {
        species_name: "frogadier",
      },
      {
        species_name: "greninja",
      },
    ],
  },
  {
    id: 657,
    name: "frogadier",
    weight: 109,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/657.png",
    chain: [
      {
        species_name: "froakie",
      },
      {
        species_name: "frogadier",
      },
      {
        species_name: "greninja",
      },
    ],
  },
  {
    id: 658,
    name: "greninja",
    weight: 400,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png",
    chain: [
      {
        species_name: "froakie",
      },
      {
        species_name: "frogadier",
      },
      {
        species_name: "greninja",
      },
    ],
  },
  {
    id: 659,
    name: "bunnelby",
    weight: 50,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/659.png",
    chain: [
      {
        species_name: "bunnelby",
      },
      {
        species_name: "diggersby",
      },
    ],
  },
  {
    id: 660,
    name: "diggersby",
    weight: 424,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/660.png",
    chain: [
      {
        species_name: "bunnelby",
      },
      {
        species_name: "diggersby",
      },
    ],
  },
  {
    id: 661,
    name: "fletchling",
    weight: 17,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/661.png",
    chain: [
      {
        species_name: "fletchling",
      },
      {
        species_name: "fletchinder",
      },
      {
        species_name: "talonflame",
      },
    ],
  },
  {
    id: 662,
    name: "fletchinder",
    weight: 160,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/662.png",
    chain: [
      {
        species_name: "fletchling",
      },
      {
        species_name: "fletchinder",
      },
      {
        species_name: "talonflame",
      },
    ],
  },
  {
    id: 663,
    name: "talonflame",
    weight: 245,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/663.png",
    chain: [
      {
        species_name: "fletchling",
      },
      {
        species_name: "fletchinder",
      },
      {
        species_name: "talonflame",
      },
    ],
  },
  {
    id: 664,
    name: "scatterbug",
    weight: 25,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/664.png",
    chain: [
      {
        species_name: "scatterbug",
      },
      {
        species_name: "spewpa",
      },
      {
        species_name: "vivillon",
      },
    ],
  },
  {
    id: 665,
    name: "spewpa",
    weight: 84,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/665.png",
    chain: [
      {
        species_name: "scatterbug",
      },
      {
        species_name: "spewpa",
      },
      {
        species_name: "vivillon",
      },
    ],
  },
  {
    id: 666,
    name: "vivillon",
    weight: 170,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/666.png",
    chain: [
      {
        species_name: "scatterbug",
      },
      {
        species_name: "spewpa",
      },
      {
        species_name: "vivillon",
      },
    ],
  },
  {
    id: 667,
    name: "litleo",
    weight: 135,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/667.png",
    chain: [
      {
        species_name: "litleo",
      },
      {
        species_name: "pyroar",
      },
    ],
  },
  {
    id: 668,
    name: "pyroar",
    weight: 815,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/668.png",
    chain: [
      {
        species_name: "litleo",
      },
      {
        species_name: "pyroar",
      },
    ],
  },
  {
    id: 669,
    name: "flabebe",
    weight: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/669.png",
    chain: [
      {
        species_name: "flabebe",
      },
      {
        species_name: "floette",
      },
      {
        species_name: "florges",
      },
    ],
  },
  {
    id: 670,
    name: "floette",
    weight: 9,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/670.png",
    chain: [
      {
        species_name: "flabebe",
      },
      {
        species_name: "floette",
      },
      {
        species_name: "florges",
      },
    ],
  },
  {
    id: 671,
    name: "florges",
    weight: 100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/671.png",
    chain: [
      {
        species_name: "flabebe",
      },
      {
        species_name: "floette",
      },
      {
        species_name: "florges",
      },
    ],
  },
  {
    id: 672,
    name: "skiddo",
    weight: 310,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/672.png",
    chain: [
      {
        species_name: "skiddo",
      },
      {
        species_name: "gogoat",
      },
    ],
  },
  {
    id: 673,
    name: "gogoat",
    weight: 910,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/673.png",
    chain: [
      {
        species_name: "skiddo",
      },
      {
        species_name: "gogoat",
      },
    ],
  },
  {
    id: 674,
    name: "pancham",
    weight: 80,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/674.png",
    chain: [
      {
        species_name: "pancham",
      },
      {
        species_name: "pangoro",
      },
    ],
  },
  {
    id: 675,
    name: "pangoro",
    weight: 1360,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/675.png",
    chain: [
      {
        species_name: "pancham",
      },
      {
        species_name: "pangoro",
      },
    ],
  },
  {
    id: 676,
    name: "furfrou",
    weight: 280,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/676.png",
    chain: [
      {
        species_name: "furfrou",
      },
    ],
  },
  {
    id: 677,
    name: "espurr",
    weight: 35,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/677.png",
    chain: [
      {
        species_name: "espurr",
      },
      {
        species_name: "meowstic",
      },
    ],
  },
  {
    id: 679,
    name: "honedge",
    weight: 20,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/679.png",
    chain: [
      {
        species_name: "honedge",
      },
      {
        species_name: "doublade",
      },
      {
        species_name: "aegislash",
      },
    ],
  },
  {
    id: 680,
    name: "doublade",
    weight: 45,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/680.png",
    chain: [
      {
        species_name: "honedge",
      },
      {
        species_name: "doublade",
      },
      {
        species_name: "aegislash",
      },
    ],
  },
  {
    id: 682,
    name: "spritzee",
    weight: 5,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/682.png",
    chain: [
      {
        species_name: "spritzee",
      },
      {
        species_name: "aromatisse",
      },
    ],
  },
  {
    id: 683,
    name: "aromatisse",
    weight: 155,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/683.png",
    chain: [
      {
        species_name: "spritzee",
      },
      {
        species_name: "aromatisse",
      },
    ],
  },
  {
    id: 684,
    name: "swirlix",
    weight: 35,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/684.png",
    chain: [
      {
        species_name: "swirlix",
      },
      {
        species_name: "slurpuff",
      },
    ],
  },
  {
    id: 685,
    name: "slurpuff",
    weight: 50,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/685.png",
    chain: [
      {
        species_name: "swirlix",
      },
      {
        species_name: "slurpuff",
      },
    ],
  },
  {
    id: 686,
    name: "inkay",
    weight: 35,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/686.png",
    chain: [
      {
        species_name: "inkay",
      },
      {
        species_name: "malamar",
      },
    ],
  },
  {
    id: 687,
    name: "malamar",
    weight: 470,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/687.png",
    chain: [
      {
        species_name: "inkay",
      },
      {
        species_name: "malamar",
      },
    ],
  },
  {
    id: 688,
    name: "binacle",
    weight: 310,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/688.png",
    chain: [
      {
        species_name: "binacle",
      },
      {
        species_name: "barbaracle",
      },
    ],
  },
  {
    id: 689,
    name: "barbaracle",
    weight: 960,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/689.png",
    chain: [
      {
        species_name: "binacle",
      },
      {
        species_name: "barbaracle",
      },
    ],
  },
  {
    id: 690,
    name: "skrelp",
    weight: 73,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/690.png",
    chain: [
      {
        species_name: "skrelp",
      },
      {
        species_name: "dragalge",
      },
    ],
  },
  {
    id: 691,
    name: "dragalge",
    weight: 815,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/691.png",
    chain: [
      {
        species_name: "skrelp",
      },
      {
        species_name: "dragalge",
      },
    ],
  },
  {
    id: 692,
    name: "clauncher",
    weight: 83,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/692.png",
    chain: [
      {
        species_name: "clauncher",
      },
      {
        species_name: "clawitzer",
      },
    ],
  },
  {
    id: 693,
    name: "clawitzer",
    weight: 353,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/693.png",
    chain: [
      {
        species_name: "clauncher",
      },
      {
        species_name: "clawitzer",
      },
    ],
  },
  {
    id: 694,
    name: "helioptile",
    weight: 60,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/694.png",
    chain: [
      {
        species_name: "helioptile",
      },
      {
        species_name: "heliolisk",
      },
    ],
  },
  {
    id: 695,
    name: "heliolisk",
    weight: 210,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/695.png",
    chain: [
      {
        species_name: "helioptile",
      },
      {
        species_name: "heliolisk",
      },
    ],
  },
  {
    id: 696,
    name: "tyrunt",
    weight: 260,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/696.png",
    chain: [
      {
        species_name: "tyrunt",
      },
      {
        species_name: "tyrantrum",
      },
    ],
  },
  {
    id: 697,
    name: "tyrantrum",
    weight: 2700,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/697.png",
    chain: [
      {
        species_name: "tyrunt",
      },
      {
        species_name: "tyrantrum",
      },
    ],
  },
  {
    id: 698,
    name: "amaura",
    weight: 252,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/698.png",
    chain: [
      {
        species_name: "amaura",
      },
      {
        species_name: "aurorus",
      },
    ],
  },
  {
    id: 699,
    name: "aurorus",
    weight: 2250,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/699.png",
    chain: [
      {
        species_name: "amaura",
      },
      {
        species_name: "aurorus",
      },
    ],
  },
  {
    id: 701,
    name: "hawlucha",
    weight: 215,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/701.png",
    chain: [
      {
        species_name: "hawlucha",
      },
    ],
  },
  {
    id: 702,
    name: "dedenne",
    weight: 22,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/702.png",
    chain: [
      {
        species_name: "dedenne",
      },
    ],
  },
  {
    id: 703,
    name: "carbink",
    weight: 57,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/703.png",
    chain: [
      {
        species_name: "carbink",
      },
    ],
  },
  {
    id: 704,
    name: "goomy",
    weight: 28,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/704.png",
    chain: [
      {
        species_name: "goomy",
      },
      {
        species_name: "sliggoo",
      },
      {
        species_name: "goodra",
      },
    ],
  },
  {
    id: 705,
    name: "sliggoo",
    weight: 175,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/705.png",
    chain: [
      {
        species_name: "goomy",
      },
      {
        species_name: "sliggoo",
      },
      {
        species_name: "goodra",
      },
    ],
  },
  {
    id: 706,
    name: "goodra",
    weight: 1505,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png",
    chain: [
      {
        species_name: "goomy",
      },
      {
        species_name: "sliggoo",
      },
      {
        species_name: "goodra",
      },
    ],
  },
  {
    id: 707,
    name: "klefki",
    weight: 30,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/707.png",
    chain: [
      {
        species_name: "klefki",
      },
    ],
  },
  {
    id: 708,
    name: "phantump",
    weight: 70,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/708.png",
    chain: [
      {
        species_name: "phantump",
      },
      {
        species_name: "trevenant",
      },
    ],
  },
  {
    id: 709,
    name: "trevenant",
    weight: 710,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/709.png",
    chain: [
      {
        species_name: "phantump",
      },
      {
        species_name: "trevenant",
      },
    ],
  },
  {
    id: 712,
    name: "bergmite",
    weight: 995,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/712.png",
    chain: [
      {
        species_name: "bergmite",
      },
      {
        species_name: "avalugg",
      },
    ],
  },
  {
    id: 713,
    name: "avalugg",
    weight: 5050,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/713.png",
    chain: [
      {
        species_name: "bergmite",
      },
      {
        species_name: "avalugg",
      },
    ],
  },
  {
    id: 714,
    name: "noibat",
    weight: 80,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/714.png",
    chain: [
      {
        species_name: "noibat",
      },
      {
        species_name: "noivern",
      },
    ],
  },
  {
    id: 715,
    name: "noivern",
    weight: 850,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/715.png",
    chain: [
      {
        species_name: "noibat",
      },
      {
        species_name: "noivern",
      },
    ],
  },
  {
    id: 716,
    name: "xerneas",
    weight: 2150,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png",
    chain: [
      {
        species_name: "xerneas",
      },
    ],
  },
  {
    id: 717,
    name: "yveltal",
    weight: 2030,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/717.png",
    chain: [
      {
        species_name: "yveltal",
      },
    ],
  },
  {
    id: 718,
    name: "zygarde",
    weight: 3050,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/718.png",
    chain: [
      {
        species_name: "zygarde",
      },
    ],
  },
  {
    id: 719,
    name: "diancie",
    weight: 88,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/719.png",
    chain: [
      {
        species_name: "diancie",
      },
    ],
  },
  {
    id: 720,
    name: "hoopa",
    weight: 90,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/720.png",
    chain: [
      {
        species_name: "hoopa",
      },
    ],
  },
  {
    id: 721,
    name: "volcanion",
    weight: 1950,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/721.png",
    chain: [
      {
        species_name: "volcanion",
      },
    ],
  },
  {
    id: 722,
    name: "rowlet",
    weight: 15,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png",
    chain: [
      {
        species_name: "rowlet",
      },
      {
        species_name: "dartrix",
      },
      {
        species_name: "decidueye",
      },
    ],
  },
  {
    id: 723,
    name: "dartrix",
    weight: 160,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/723.png",
    chain: [
      {
        species_name: "rowlet",
      },
      {
        species_name: "dartrix",
      },
      {
        species_name: "decidueye",
      },
    ],
  },
  {
    id: 724,
    name: "decidueye",
    weight: 366,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/724.png",
    chain: [
      {
        species_name: "rowlet",
      },
      {
        species_name: "dartrix",
      },
      {
        species_name: "decidueye",
      },
    ],
  },
  {
    id: 725,
    name: "litten",
    weight: 43,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/725.png",
    chain: [
      {
        species_name: "litten",
      },
      {
        species_name: "torracat",
      },
      {
        species_name: "incineroar",
      },
    ],
  },
  {
    id: 726,
    name: "torracat",
    weight: 250,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/726.png",
    chain: [
      {
        species_name: "litten",
      },
      {
        species_name: "torracat",
      },
      {
        species_name: "incineroar",
      },
    ],
  },
  {
    id: 727,
    name: "incineroar",
    weight: 830,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png",
    chain: [
      {
        species_name: "litten",
      },
      {
        species_name: "torracat",
      },
      {
        species_name: "incineroar",
      },
    ],
  },
  {
    id: 728,
    name: "popplio",
    weight: 75,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/728.png",
    chain: [
      {
        species_name: "popplio",
      },
      {
        species_name: "brionne",
      },
      {
        species_name: "primarina",
      },
    ],
  },
  {
    id: 729,
    name: "brionne",
    weight: 175,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/729.png",
    chain: [
      {
        species_name: "popplio",
      },
      {
        species_name: "brionne",
      },
      {
        species_name: "primarina",
      },
    ],
  },
  {
    id: 730,
    name: "primarina",
    weight: 440,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png",
    chain: [
      {
        species_name: "popplio",
      },
      {
        species_name: "brionne",
      },
      {
        species_name: "primarina",
      },
    ],
  },
  {
    id: 731,
    name: "pikipek",
    weight: 12,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/731.png",
    chain: [
      {
        species_name: "pikipek",
      },
      {
        species_name: "trumbeak",
      },
      {
        species_name: "toucannon",
      },
    ],
  },
  {
    id: 732,
    name: "trumbeak",
    weight: 148,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/732.png",
    chain: [
      {
        species_name: "pikipek",
      },
      {
        species_name: "trumbeak",
      },
      {
        species_name: "toucannon",
      },
    ],
  },
  {
    id: 733,
    name: "toucannon",
    weight: 260,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/733.png",
    chain: [
      {
        species_name: "pikipek",
      },
      {
        species_name: "trumbeak",
      },
      {
        species_name: "toucannon",
      },
    ],
  },
  {
    id: 734,
    name: "yungoos",
    weight: 60,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/734.png",
    chain: [
      {
        species_name: "yungoos",
      },
      {
        species_name: "gumshoos",
      },
    ],
  },
  {
    id: 735,
    name: "gumshoos",
    weight: 142,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/735.png",
    chain: [
      {
        species_name: "yungoos",
      },
      {
        species_name: "gumshoos",
      },
    ],
  },
  {
    id: 736,
    name: "grubbin",
    weight: 44,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/736.png",
    chain: [
      {
        species_name: "grubbin",
      },
      {
        species_name: "charjabug",
      },
      {
        species_name: "vikavolt",
      },
    ],
  },
  {
    id: 737,
    name: "charjabug",
    weight: 105,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/737.png",
    chain: [
      {
        species_name: "grubbin",
      },
      {
        species_name: "charjabug",
      },
      {
        species_name: "vikavolt",
      },
    ],
  },
  {
    id: 738,
    name: "vikavolt",
    weight: 450,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/738.png",
    chain: [
      {
        species_name: "grubbin",
      },
      {
        species_name: "charjabug",
      },
      {
        species_name: "vikavolt",
      },
    ],
  },
  {
    id: 739,
    name: "crabrawler",
    weight: 70,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/739.png",
    chain: [
      {
        species_name: "crabrawler",
      },
      {
        species_name: "crabominable",
      },
    ],
  },
  {
    id: 740,
    name: "crabominable",
    weight: 1800,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/740.png",
    chain: [
      {
        species_name: "crabrawler",
      },
      {
        species_name: "crabominable",
      },
    ],
  },
  {
    id: 742,
    name: "cutiefly",
    weight: 2,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/742.png",
    chain: [
      {
        species_name: "cutiefly",
      },
      {
        species_name: "ribombee",
      },
    ],
  },
  {
    id: 743,
    name: "ribombee",
    weight: 5,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/743.png",
    chain: [
      {
        species_name: "cutiefly",
      },
      {
        species_name: "ribombee",
      },
    ],
  },
  {
    id: 744,
    name: "rockruff",
    weight: 92,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png",
    chain: [
      {
        species_name: "rockruff",
      },
      {
        species_name: "lycanroc",
      },
    ],
  },
  {
    id: 747,
    name: "mareanie",
    weight: 80,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/747.png",
    chain: [
      {
        species_name: "mareanie",
      },
      {
        species_name: "toxapex",
      },
    ],
  },
  {
    id: 748,
    name: "toxapex",
    weight: 145,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/748.png",
    chain: [
      {
        species_name: "mareanie",
      },
      {
        species_name: "toxapex",
      },
    ],
  },
  {
    id: 749,
    name: "mudbray",
    weight: 1100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/749.png",
    chain: [
      {
        species_name: "mudbray",
      },
      {
        species_name: "mudsdale",
      },
    ],
  },
  {
    id: 750,
    name: "mudsdale",
    weight: 9200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/750.png",
    chain: [
      {
        species_name: "mudbray",
      },
      {
        species_name: "mudsdale",
      },
    ],
  },
  {
    id: 751,
    name: "dewpider",
    weight: 40,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/751.png",
    chain: [
      {
        species_name: "dewpider",
      },
      {
        species_name: "araquanid",
      },
    ],
  },
  {
    id: 752,
    name: "araquanid",
    weight: 820,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/752.png",
    chain: [
      {
        species_name: "dewpider",
      },
      {
        species_name: "araquanid",
      },
    ],
  },
  {
    id: 753,
    name: "fomantis",
    weight: 15,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/753.png",
    chain: [
      {
        species_name: "fomantis",
      },
      {
        species_name: "lurantis",
      },
    ],
  },
  {
    id: 754,
    name: "lurantis",
    weight: 185,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/754.png",
    chain: [
      {
        species_name: "fomantis",
      },
      {
        species_name: "lurantis",
      },
    ],
  },
  {
    id: 755,
    name: "morelull",
    weight: 15,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/755.png",
    chain: [
      {
        species_name: "morelull",
      },
      {
        species_name: "shiinotic",
      },
    ],
  },
  {
    id: 756,
    name: "shiinotic",
    weight: 115,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/756.png",
    chain: [
      {
        species_name: "morelull",
      },
      {
        species_name: "shiinotic",
      },
    ],
  },
  {
    id: 757,
    name: "salandit",
    weight: 48,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/757.png",
    chain: [
      {
        species_name: "salandit",
      },
      {
        species_name: "salazzle",
      },
    ],
  },
  {
    id: 758,
    name: "salazzle",
    weight: 222,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/758.png",
    chain: [
      {
        species_name: "salandit",
      },
      {
        species_name: "salazzle",
      },
    ],
  },
  {
    id: 759,
    name: "stufful",
    weight: 68,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/759.png",
    chain: [
      {
        species_name: "stufful",
      },
      {
        species_name: "bewear",
      },
    ],
  },
  {
    id: 760,
    name: "bewear",
    weight: 1350,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/760.png",
    chain: [
      {
        species_name: "stufful",
      },
      {
        species_name: "bewear",
      },
    ],
  },
  {
    id: 761,
    name: "bounsweet",
    weight: 32,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/761.png",
    chain: [
      {
        species_name: "bounsweet",
      },
      {
        species_name: "steenee",
      },
      {
        species_name: "tsareena",
      },
    ],
  },
  {
    id: 762,
    name: "steenee",
    weight: 82,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/762.png",
    chain: [
      {
        species_name: "bounsweet",
      },
      {
        species_name: "steenee",
      },
      {
        species_name: "tsareena",
      },
    ],
  },
  {
    id: 763,
    name: "tsareena",
    weight: 214,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/763.png",
    chain: [
      {
        species_name: "bounsweet",
      },
      {
        species_name: "steenee",
      },
      {
        species_name: "tsareena",
      },
    ],
  },
  {
    id: 764,
    name: "comfey",
    weight: 3,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/764.png",
    chain: [
      {
        species_name: "comfey",
      },
    ],
  },
  {
    id: 765,
    name: "oranguru",
    weight: 760,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/765.png",
    chain: [
      {
        species_name: "oranguru",
      },
    ],
  },
  {
    id: 766,
    name: "passimian",
    weight: 828,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/766.png",
    chain: [
      {
        species_name: "passimian",
      },
    ],
  },
  {
    id: 767,
    name: "wimpod",
    weight: 120,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/767.png",
    chain: [
      {
        species_name: "wimpod",
      },
      {
        species_name: "golisopod",
      },
    ],
  },
  {
    id: 768,
    name: "golisopod",
    weight: 1080,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/768.png",
    chain: [
      {
        species_name: "wimpod",
      },
      {
        species_name: "golisopod",
      },
    ],
  },
  {
    id: 769,
    name: "sandygast",
    weight: 700,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/769.png",
    chain: [
      {
        species_name: "sandygast",
      },
      {
        species_name: "palossand",
      },
    ],
  },
  {
    id: 770,
    name: "palossand",
    weight: 2500,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/770.png",
    chain: [
      {
        species_name: "sandygast",
      },
      {
        species_name: "palossand",
      },
    ],
  },
  {
    id: 771,
    name: "pyukumuku",
    weight: 12,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/771.png",
    chain: [
      {
        species_name: "pyukumuku",
      },
    ],
  },
  {
    id: 772,
    name: "type-null",
    weight: 1205,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/772.png",
    chain: [
      {
        species_name: "type-null",
      },
      {
        species_name: "silvally",
      },
    ],
  },
  {
    id: 773,
    name: "silvally",
    weight: 1005,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/773.png",
    chain: [
      {
        species_name: "type-null",
      },
      {
        species_name: "silvally",
      },
    ],
  },
  {
    id: 775,
    name: "komala",
    weight: 199,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/775.png",
    chain: [
      {
        species_name: "komala",
      },
    ],
  },
  {
    id: 776,
    name: "turtonator",
    weight: 2120,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/776.png",
    chain: [
      {
        species_name: "turtonator",
      },
    ],
  },
  {
    id: 777,
    name: "togedemaru",
    weight: 33,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/777.png",
    chain: [
      {
        species_name: "togedemaru",
      },
    ],
  },
  {
    id: 779,
    name: "bruxish",
    weight: 190,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/779.png",
    chain: [
      {
        species_name: "bruxish",
      },
    ],
  },
  {
    id: 780,
    name: "drampa",
    weight: 1850,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/780.png",
    chain: [
      {
        species_name: "drampa",
      },
    ],
  },
  {
    id: 781,
    name: "dhelmise",
    weight: 2100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/781.png",
    chain: [
      {
        species_name: "dhelmise",
      },
    ],
  },
  {
    id: 782,
    name: "jangmo-o",
    weight: 297,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/782.png",
    chain: [
      {
        species_name: "jangmo-o",
      },
      {
        species_name: "hakamo-o",
      },
      {
        species_name: "kommo-o",
      },
    ],
  },
  {
    id: 783,
    name: "hakamo-o",
    weight: 470,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/783.png",
    chain: [
      {
        species_name: "jangmo-o",
      },
      {
        species_name: "hakamo-o",
      },
      {
        species_name: "kommo-o",
      },
    ],
  },
  {
    id: 784,
    name: "kommo-o",
    weight: 782,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/784.png",
    chain: [
      {
        species_name: "jangmo-o",
      },
      {
        species_name: "hakamo-o",
      },
      {
        species_name: "kommo-o",
      },
    ],
  },
  {
    id: 785,
    name: "tapu-koko",
    weight: 205,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/785.png",
    chain: [
      {
        species_name: "tapu-koko",
      },
    ],
  },
  {
    id: 786,
    name: "tapu-lele",
    weight: 186,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/786.png",
    chain: [
      {
        species_name: "tapu-lele",
      },
    ],
  },
  {
    id: 787,
    name: "tapu-bulu",
    weight: 455,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/787.png",
    chain: [
      {
        species_name: "tapu-bulu",
      },
    ],
  },
  {
    id: 788,
    name: "tapu-fini",
    weight: 212,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/788.png",
    chain: [
      {
        species_name: "tapu-fini",
      },
    ],
  },
  {
    id: 789,
    name: "cosmog",
    weight: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/789.png",
    chain: [
      {
        species_name: "cosmog",
      },
      {
        species_name: "cosmoem",
      },
      {
        species_name: "solgaleo",
      },
    ],
  },
  {
    id: 790,
    name: "cosmoem",
    weight: 9999,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/790.png",
    chain: [
      {
        species_name: "cosmog",
      },
      {
        species_name: "cosmoem",
      },
      {
        species_name: "solgaleo",
      },
    ],
  },
  {
    id: 791,
    name: "solgaleo",
    weight: 2300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png",
    chain: [
      {
        species_name: "cosmog",
      },
      {
        species_name: "cosmoem",
      },
      {
        species_name: "solgaleo",
      },
    ],
  },
  {
    id: 793,
    name: "nihilego",
    weight: 555,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/793.png",
    chain: [
      {
        species_name: "nihilego",
      },
    ],
  },
  {
    id: 794,
    name: "buzzwole",
    weight: 3336,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/794.png",
    chain: [
      {
        species_name: "buzzwole",
      },
    ],
  },
  {
    id: 795,
    name: "pheromosa",
    weight: 250,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/795.png",
    chain: [
      {
        species_name: "pheromosa",
      },
    ],
  },
  {
    id: 796,
    name: "xurkitree",
    weight: 1000,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/796.png",
    chain: [
      {
        species_name: "xurkitree",
      },
    ],
  },
  {
    id: 797,
    name: "celesteela",
    weight: 9999,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/797.png",
    chain: [
      {
        species_name: "celesteela",
      },
    ],
  },
  {
    id: 798,
    name: "kartana",
    weight: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/798.png",
    chain: [
      {
        species_name: "kartana",
      },
    ],
  },
  {
    id: 799,
    name: "guzzlord",
    weight: 8880,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png",
    imageHQ:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/799.png",
    chain: [
      {
        species_name: "guzzlord",
      },
    ],
  },
];
export default POKEMONS;
