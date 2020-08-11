let POKEMONS = [
	{
		"id": 1,
		"name": "bulbasaur",
		"weight": 69,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
		"forms": [
			{
				"name": "bulbasaur",
				"url": "https://pokeapi.co/api/v2/pokemon-form/1/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
	},
	{
		"id": 2,
		"name": "ivysaur",
		"weight": 130,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
		"forms": [
			{
				"name": "ivysaur",
				"url": "https://pokeapi.co/api/v2/pokemon-form/2/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
	},
	{
		"id": 3,
		"name": "venusaur",
		"weight": 1000,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
		"forms": [
			{
				"name": "venusaur",
				"url": "https://pokeapi.co/api/v2/pokemon-form/3/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
	},
	{
		"id": 4,
		"name": "charmander",
		"weight": 85,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
		"forms": [
			{
				"name": "charmander",
				"url": "https://pokeapi.co/api/v2/pokemon-form/4/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
	},
	{
		"id": 5,
		"name": "charmeleon",
		"weight": 190,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
		"forms": [
			{
				"name": "charmeleon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/5/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
	},
	{
		"id": 6,
		"name": "charizard",
		"weight": 905,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
		"forms": [
			{
				"name": "charizard",
				"url": "https://pokeapi.co/api/v2/pokemon-form/6/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
	},
	{
		"id": 7,
		"name": "squirtle",
		"weight": 90,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
		"forms": [
			{
				"name": "squirtle",
				"url": "https://pokeapi.co/api/v2/pokemon-form/7/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
	},
	{
		"id": 8,
		"name": "wartortle",
		"weight": 225,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
		"forms": [
			{
				"name": "wartortle",
				"url": "https://pokeapi.co/api/v2/pokemon-form/8/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
	},
	{
		"id": 9,
		"name": "blastoise",
		"weight": 855,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
		"forms": [
			{
				"name": "blastoise",
				"url": "https://pokeapi.co/api/v2/pokemon-form/9/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
	},
	{
		"id": 10,
		"name": "caterpie",
		"weight": 29,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
		"forms": [
			{
				"name": "caterpie",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
	},
	{
		"id": 11,
		"name": "metapod",
		"weight": 99,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
		"forms": [
			{
				"name": "metapod",
				"url": "https://pokeapi.co/api/v2/pokemon-form/11/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"
	},
	{
		"id": 12,
		"name": "butterfree",
		"weight": 320,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
		"forms": [
			{
				"name": "butterfree",
				"url": "https://pokeapi.co/api/v2/pokemon-form/12/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
	},
	{
		"id": 13,
		"name": "weedle",
		"weight": 32,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
		"forms": [
			{
				"name": "weedle",
				"url": "https://pokeapi.co/api/v2/pokemon-form/13/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png"
	},
	{
		"id": 14,
		"name": "kakuna",
		"weight": 100,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
		"forms": [
			{
				"name": "kakuna",
				"url": "https://pokeapi.co/api/v2/pokemon-form/14/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"
	},
	{
		"id": 15,
		"name": "beedrill",
		"weight": 295,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
		"forms": [
			{
				"name": "beedrill",
				"url": "https://pokeapi.co/api/v2/pokemon-form/15/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"
	},
	{
		"id": 16,
		"name": "pidgey",
		"weight": 18,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
		"forms": [
			{
				"name": "pidgey",
				"url": "https://pokeapi.co/api/v2/pokemon-form/16/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"
	},
	{
		"id": 17,
		"name": "pidgeotto",
		"weight": 300,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
		"forms": [
			{
				"name": "pidgeotto",
				"url": "https://pokeapi.co/api/v2/pokemon-form/17/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png"
	},
	{
		"id": 18,
		"name": "pidgeot",
		"weight": 395,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
		"forms": [
			{
				"name": "pidgeot",
				"url": "https://pokeapi.co/api/v2/pokemon-form/18/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"
	},
	{
		"id": 19,
		"name": "rattata",
		"weight": 35,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
		"forms": [
			{
				"name": "rattata",
				"url": "https://pokeapi.co/api/v2/pokemon-form/19/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png"
	},
	{
		"id": 20,
		"name": "raticate",
		"weight": 185,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
		"forms": [
			{
				"name": "raticate",
				"url": "https://pokeapi.co/api/v2/pokemon-form/20/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"
	},
	{
		"id": 21,
		"name": "spearow",
		"weight": 20,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
		"forms": [
			{
				"name": "spearow",
				"url": "https://pokeapi.co/api/v2/pokemon-form/21/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png"
	},
	{
		"id": 22,
		"name": "fearow",
		"weight": 380,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
		"forms": [
			{
				"name": "fearow",
				"url": "https://pokeapi.co/api/v2/pokemon-form/22/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png"
	},
	{
		"id": 23,
		"name": "ekans",
		"weight": 69,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
		"forms": [
			{
				"name": "ekans",
				"url": "https://pokeapi.co/api/v2/pokemon-form/23/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png"
	},
	{
		"id": 24,
		"name": "arbok",
		"weight": 650,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
		"forms": [
			{
				"name": "arbok",
				"url": "https://pokeapi.co/api/v2/pokemon-form/24/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png"
	},
	{
		"id": 25,
		"name": "pikachu",
		"weight": 60,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
		"forms": [
			{
				"name": "pikachu",
				"url": "https://pokeapi.co/api/v2/pokemon-form/25/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
	},
	{
		"id": 26,
		"name": "raichu",
		"weight": 300,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
		"forms": [
			{
				"name": "raichu",
				"url": "https://pokeapi.co/api/v2/pokemon-form/26/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"
	},
	{
		"id": 27,
		"name": "sandshrew",
		"weight": 120,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
		"forms": [
			{
				"name": "sandshrew",
				"url": "https://pokeapi.co/api/v2/pokemon-form/27/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png"
	},
	{
		"id": 28,
		"name": "sandslash",
		"weight": 295,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
		"forms": [
			{
				"name": "sandslash",
				"url": "https://pokeapi.co/api/v2/pokemon-form/28/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png"
	},
	{
		"id": 29,
		"name": "nidoran-f",
		"weight": 70,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
		"forms": [
			{
				"name": "nidoran-f",
				"url": "https://pokeapi.co/api/v2/pokemon-form/29/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png"
	},
	{
		"id": 30,
		"name": "nidorina",
		"weight": 200,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
		"forms": [
			{
				"name": "nidorina",
				"url": "https://pokeapi.co/api/v2/pokemon-form/30/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png"
	},
	{
		"id": 31,
		"name": "nidoqueen",
		"weight": 600,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
		"forms": [
			{
				"name": "nidoqueen",
				"url": "https://pokeapi.co/api/v2/pokemon-form/31/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png"
	},
	{
		"id": 32,
		"name": "nidoran-m",
		"weight": 90,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
		"forms": [
			{
				"name": "nidoran-m",
				"url": "https://pokeapi.co/api/v2/pokemon-form/32/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png"
	},
	{
		"id": 33,
		"name": "nidorino",
		"weight": 195,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
		"forms": [
			{
				"name": "nidorino",
				"url": "https://pokeapi.co/api/v2/pokemon-form/33/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png"
	},
	{
		"id": 34,
		"name": "nidoking",
		"weight": 620,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
		"forms": [
			{
				"name": "nidoking",
				"url": "https://pokeapi.co/api/v2/pokemon-form/34/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png"
	},
	{
		"id": 35,
		"name": "clefairy",
		"weight": 75,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
		"forms": [
			{
				"name": "clefairy",
				"url": "https://pokeapi.co/api/v2/pokemon-form/35/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
	},
	{
		"id": 36,
		"name": "clefable",
		"weight": 400,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
		"forms": [
			{
				"name": "clefable",
				"url": "https://pokeapi.co/api/v2/pokemon-form/36/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png"
	},
	{
		"id": 37,
		"name": "vulpix",
		"weight": 99,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
		"forms": [
			{
				"name": "vulpix",
				"url": "https://pokeapi.co/api/v2/pokemon-form/37/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png"
	},
	{
		"id": 38,
		"name": "ninetales",
		"weight": 199,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
		"forms": [
			{
				"name": "ninetales",
				"url": "https://pokeapi.co/api/v2/pokemon-form/38/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png"
	},
	{
		"id": 39,
		"name": "jigglypuff",
		"weight": 55,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
		"forms": [
			{
				"name": "jigglypuff",
				"url": "https://pokeapi.co/api/v2/pokemon-form/39/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
	},
	{
		"id": 40,
		"name": "wigglytuff",
		"weight": 120,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
		"forms": [
			{
				"name": "wigglytuff",
				"url": "https://pokeapi.co/api/v2/pokemon-form/40/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png"
	},
	{
		"id": 41,
		"name": "zubat",
		"weight": 75,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
		"forms": [
			{
				"name": "zubat",
				"url": "https://pokeapi.co/api/v2/pokemon-form/41/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png"
	},
	{
		"id": 42,
		"name": "golbat",
		"weight": 550,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
		"forms": [
			{
				"name": "golbat",
				"url": "https://pokeapi.co/api/v2/pokemon-form/42/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png"
	},
	{
		"id": 43,
		"name": "oddish",
		"weight": 54,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
		"forms": [
			{
				"name": "oddish",
				"url": "https://pokeapi.co/api/v2/pokemon-form/43/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png"
	},
	{
		"id": 44,
		"name": "gloom",
		"weight": 86,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
		"forms": [
			{
				"name": "gloom",
				"url": "https://pokeapi.co/api/v2/pokemon-form/44/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png"
	},
	{
		"id": 45,
		"name": "vileplume",
		"weight": 186,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
		"forms": [
			{
				"name": "vileplume",
				"url": "https://pokeapi.co/api/v2/pokemon-form/45/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png"
	},
	{
		"id": 46,
		"name": "paras",
		"weight": 54,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
		"forms": [
			{
				"name": "paras",
				"url": "https://pokeapi.co/api/v2/pokemon-form/46/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png"
	},
	{
		"id": 47,
		"name": "parasect",
		"weight": 295,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
		"forms": [
			{
				"name": "parasect",
				"url": "https://pokeapi.co/api/v2/pokemon-form/47/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png"
	},
	{
		"id": 48,
		"name": "venonat",
		"weight": 300,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
		"forms": [
			{
				"name": "venonat",
				"url": "https://pokeapi.co/api/v2/pokemon-form/48/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png"
	},
	{
		"id": 49,
		"name": "venomoth",
		"weight": 125,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
		"forms": [
			{
				"name": "venomoth",
				"url": "https://pokeapi.co/api/v2/pokemon-form/49/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png"
	},
	{
		"id": 50,
		"name": "diglett",
		"weight": 8,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
		"forms": [
			{
				"name": "diglett",
				"url": "https://pokeapi.co/api/v2/pokemon-form/50/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png"
	},
	{
		"id": 51,
		"name": "dugtrio",
		"weight": 333,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
		"forms": [
			{
				"name": "dugtrio",
				"url": "https://pokeapi.co/api/v2/pokemon-form/51/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png"
	},
	{
		"id": 52,
		"name": "meowth",
		"weight": 42,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
		"forms": [
			{
				"name": "meowth",
				"url": "https://pokeapi.co/api/v2/pokemon-form/52/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png"
	},
	{
		"id": 53,
		"name": "persian",
		"weight": 320,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
		"forms": [
			{
				"name": "persian",
				"url": "https://pokeapi.co/api/v2/pokemon-form/53/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png"
	},
	{
		"id": 54,
		"name": "psyduck",
		"weight": 196,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
		"forms": [
			{
				"name": "psyduck",
				"url": "https://pokeapi.co/api/v2/pokemon-form/54/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
	},
	{
		"id": 55,
		"name": "golduck",
		"weight": 766,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
		"forms": [
			{
				"name": "golduck",
				"url": "https://pokeapi.co/api/v2/pokemon-form/55/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png"
	},
	{
		"id": 56,
		"name": "mankey",
		"weight": 280,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
		"forms": [
			{
				"name": "mankey",
				"url": "https://pokeapi.co/api/v2/pokemon-form/56/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png"
	},
	{
		"id": 57,
		"name": "primeape",
		"weight": 320,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
		"forms": [
			{
				"name": "primeape",
				"url": "https://pokeapi.co/api/v2/pokemon-form/57/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png"
	},
	{
		"id": 58,
		"name": "growlithe",
		"weight": 190,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
		"forms": [
			{
				"name": "growlithe",
				"url": "https://pokeapi.co/api/v2/pokemon-form/58/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png"
	},
	{
		"id": 59,
		"name": "arcanine",
		"weight": 1550,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
		"forms": [
			{
				"name": "arcanine",
				"url": "https://pokeapi.co/api/v2/pokemon-form/59/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png"
	},
	{
		"id": 60,
		"name": "poliwag",
		"weight": 124,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
		"forms": [
			{
				"name": "poliwag",
				"url": "https://pokeapi.co/api/v2/pokemon-form/60/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png"
	},
	{
		"id": 61,
		"name": "poliwhirl",
		"weight": 200,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
		"forms": [
			{
				"name": "poliwhirl",
				"url": "https://pokeapi.co/api/v2/pokemon-form/61/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png"
	},
	{
		"id": 62,
		"name": "poliwrath",
		"weight": 540,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
		"forms": [
			{
				"name": "poliwrath",
				"url": "https://pokeapi.co/api/v2/pokemon-form/62/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png"
	},
	{
		"id": 63,
		"name": "abra",
		"weight": 195,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
		"forms": [
			{
				"name": "abra",
				"url": "https://pokeapi.co/api/v2/pokemon-form/63/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png"
	},
	{
		"id": 64,
		"name": "kadabra",
		"weight": 565,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
		"forms": [
			{
				"name": "kadabra",
				"url": "https://pokeapi.co/api/v2/pokemon-form/64/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png"
	},
	{
		"id": 65,
		"name": "alakazam",
		"weight": 480,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
		"forms": [
			{
				"name": "alakazam",
				"url": "https://pokeapi.co/api/v2/pokemon-form/65/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png"
	},
	{
		"id": 66,
		"name": "machop",
		"weight": 195,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
		"forms": [
			{
				"name": "machop",
				"url": "https://pokeapi.co/api/v2/pokemon-form/66/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png"
	},
	{
		"id": 67,
		"name": "machoke",
		"weight": 705,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
		"forms": [
			{
				"name": "machoke",
				"url": "https://pokeapi.co/api/v2/pokemon-form/67/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png"
	},
	{
		"id": 68,
		"name": "machamp",
		"weight": 1300,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
		"forms": [
			{
				"name": "machamp",
				"url": "https://pokeapi.co/api/v2/pokemon-form/68/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png"
	},
	{
		"id": 69,
		"name": "bellsprout",
		"weight": 40,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
		"forms": [
			{
				"name": "bellsprout",
				"url": "https://pokeapi.co/api/v2/pokemon-form/69/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png"
	},
	{
		"id": 70,
		"name": "weepinbell",
		"weight": 64,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
		"forms": [
			{
				"name": "weepinbell",
				"url": "https://pokeapi.co/api/v2/pokemon-form/70/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png"
	},
	{
		"id": 71,
		"name": "victreebel",
		"weight": 155,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
		"forms": [
			{
				"name": "victreebel",
				"url": "https://pokeapi.co/api/v2/pokemon-form/71/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png"
	},
	{
		"id": 72,
		"name": "tentacool",
		"weight": 455,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
		"forms": [
			{
				"name": "tentacool",
				"url": "https://pokeapi.co/api/v2/pokemon-form/72/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png"
	},
	{
		"id": 73,
		"name": "tentacruel",
		"weight": 550,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
		"forms": [
			{
				"name": "tentacruel",
				"url": "https://pokeapi.co/api/v2/pokemon-form/73/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png"
	},
	{
		"id": 74,
		"name": "geodude",
		"weight": 200,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
		"forms": [
			{
				"name": "geodude",
				"url": "https://pokeapi.co/api/v2/pokemon-form/74/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png"
	},
	{
		"id": 75,
		"name": "graveler",
		"weight": 1050,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
		"forms": [
			{
				"name": "graveler",
				"url": "https://pokeapi.co/api/v2/pokemon-form/75/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png"
	},
	{
		"id": 76,
		"name": "golem",
		"weight": 3000,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
		"forms": [
			{
				"name": "golem",
				"url": "https://pokeapi.co/api/v2/pokemon-form/76/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png"
	},
	{
		"id": 77,
		"name": "ponyta",
		"weight": 300,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
		"forms": [
			{
				"name": "ponyta",
				"url": "https://pokeapi.co/api/v2/pokemon-form/77/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png"
	},
	{
		"id": 78,
		"name": "rapidash",
		"weight": 950,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
		"forms": [
			{
				"name": "rapidash",
				"url": "https://pokeapi.co/api/v2/pokemon-form/78/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png"
	},
	{
		"id": 79,
		"name": "slowpoke",
		"weight": 360,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
		"forms": [
			{
				"name": "slowpoke",
				"url": "https://pokeapi.co/api/v2/pokemon-form/79/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png"
	},
	{
		"id": 80,
		"name": "slowbro",
		"weight": 785,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
		"forms": [
			{
				"name": "slowbro",
				"url": "https://pokeapi.co/api/v2/pokemon-form/80/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png"
	},
	{
		"id": 81,
		"name": "magnemite",
		"weight": 60,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
		"forms": [
			{
				"name": "magnemite",
				"url": "https://pokeapi.co/api/v2/pokemon-form/81/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png"
	},
	{
		"id": 82,
		"name": "magneton",
		"weight": 600,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
		"forms": [
			{
				"name": "magneton",
				"url": "https://pokeapi.co/api/v2/pokemon-form/82/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png"
	},
	{
		"id": 83,
		"name": "farfetchd",
		"weight": 150,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
		"forms": [
			{
				"name": "farfetchd",
				"url": "https://pokeapi.co/api/v2/pokemon-form/83/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png"
	},
	{
		"id": 84,
		"name": "doduo",
		"weight": 392,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
		"forms": [
			{
				"name": "doduo",
				"url": "https://pokeapi.co/api/v2/pokemon-form/84/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png"
	},
	{
		"id": 85,
		"name": "dodrio",
		"weight": 852,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
		"forms": [
			{
				"name": "dodrio",
				"url": "https://pokeapi.co/api/v2/pokemon-form/85/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png"
	},
	{
		"id": 86,
		"name": "seel",
		"weight": 900,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
		"forms": [
			{
				"name": "seel",
				"url": "https://pokeapi.co/api/v2/pokemon-form/86/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png"
	},
	{
		"id": 87,
		"name": "dewgong",
		"weight": 1200,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
		"forms": [
			{
				"name": "dewgong",
				"url": "https://pokeapi.co/api/v2/pokemon-form/87/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png"
	},
	{
		"id": 88,
		"name": "grimer",
		"weight": 300,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
		"forms": [
			{
				"name": "grimer",
				"url": "https://pokeapi.co/api/v2/pokemon-form/88/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png"
	},
	{
		"id": 89,
		"name": "muk",
		"weight": 300,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
		"forms": [
			{
				"name": "muk",
				"url": "https://pokeapi.co/api/v2/pokemon-form/89/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png"
	},
	{
		"id": 90,
		"name": "shellder",
		"weight": 40,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
		"forms": [
			{
				"name": "shellder",
				"url": "https://pokeapi.co/api/v2/pokemon-form/90/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png"
	},
	{
		"id": 91,
		"name": "cloyster",
		"weight": 1325,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
		"forms": [
			{
				"name": "cloyster",
				"url": "https://pokeapi.co/api/v2/pokemon-form/91/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png"
	},
	{
		"id": 92,
		"name": "gastly",
		"weight": 1,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
		"forms": [
			{
				"name": "gastly",
				"url": "https://pokeapi.co/api/v2/pokemon-form/92/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png"
	},
	{
		"id": 93,
		"name": "haunter",
		"weight": 1,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
		"forms": [
			{
				"name": "haunter",
				"url": "https://pokeapi.co/api/v2/pokemon-form/93/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png"
	},
	{
		"id": 94,
		"name": "gengar",
		"weight": 405,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
		"forms": [
			{
				"name": "gengar",
				"url": "https://pokeapi.co/api/v2/pokemon-form/94/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
	},
	{
		"id": 95,
		"name": "onix",
		"weight": 2100,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
		"forms": [
			{
				"name": "onix",
				"url": "https://pokeapi.co/api/v2/pokemon-form/95/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png"
	},
	{
		"id": 96,
		"name": "drowzee",
		"weight": 324,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
		"forms": [
			{
				"name": "drowzee",
				"url": "https://pokeapi.co/api/v2/pokemon-form/96/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png"
	},
	{
		"id": 97,
		"name": "hypno",
		"weight": 756,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
		"forms": [
			{
				"name": "hypno",
				"url": "https://pokeapi.co/api/v2/pokemon-form/97/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png"
	},
	{
		"id": 98,
		"name": "krabby",
		"weight": 65,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
		"forms": [
			{
				"name": "krabby",
				"url": "https://pokeapi.co/api/v2/pokemon-form/98/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png"
	},
	{
		"id": 99,
		"name": "kingler",
		"weight": 600,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
		"forms": [
			{
				"name": "kingler",
				"url": "https://pokeapi.co/api/v2/pokemon-form/99/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png"
	},
	{
		"id": 100,
		"name": "voltorb",
		"weight": 104,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
		"forms": [
			{
				"name": "voltorb",
				"url": "https://pokeapi.co/api/v2/pokemon-form/100/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png"
	},
	{
		"id": 101,
		"name": "electrode",
		"weight": 666,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
		"forms": [
			{
				"name": "electrode",
				"url": "https://pokeapi.co/api/v2/pokemon-form/101/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png"
	},
	{
		"id": 102,
		"name": "exeggcute",
		"weight": 25,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
		"forms": [
			{
				"name": "exeggcute",
				"url": "https://pokeapi.co/api/v2/pokemon-form/102/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png"
	},
	{
		"id": 103,
		"name": "exeggutor",
		"weight": 1200,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
		"forms": [
			{
				"name": "exeggutor",
				"url": "https://pokeapi.co/api/v2/pokemon-form/103/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png"
	},
	{
		"id": 104,
		"name": "cubone",
		"weight": 65,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
		"forms": [
			{
				"name": "cubone",
				"url": "https://pokeapi.co/api/v2/pokemon-form/104/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png"
	},
	{
		"id": 105,
		"name": "marowak",
		"weight": 450,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
		"forms": [
			{
				"name": "marowak",
				"url": "https://pokeapi.co/api/v2/pokemon-form/105/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png"
	},
	{
		"id": 106,
		"name": "hitmonlee",
		"weight": 498,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
		"forms": [
			{
				"name": "hitmonlee",
				"url": "https://pokeapi.co/api/v2/pokemon-form/106/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png"
	},
	{
		"id": 107,
		"name": "hitmonchan",
		"weight": 502,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
		"forms": [
			{
				"name": "hitmonchan",
				"url": "https://pokeapi.co/api/v2/pokemon-form/107/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png"
	},
	{
		"id": 108,
		"name": "lickitung",
		"weight": 655,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
		"forms": [
			{
				"name": "lickitung",
				"url": "https://pokeapi.co/api/v2/pokemon-form/108/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png"
	},
	{
		"id": 109,
		"name": "koffing",
		"weight": 10,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
		"forms": [
			{
				"name": "koffing",
				"url": "https://pokeapi.co/api/v2/pokemon-form/109/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png"
	},
	{
		"id": 110,
		"name": "weezing",
		"weight": 95,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
		"forms": [
			{
				"name": "weezing",
				"url": "https://pokeapi.co/api/v2/pokemon-form/110/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png"
	},
	{
		"id": 111,
		"name": "rhyhorn",
		"weight": 1150,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
		"forms": [
			{
				"name": "rhyhorn",
				"url": "https://pokeapi.co/api/v2/pokemon-form/111/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png"
	},
	{
		"id": 112,
		"name": "rhydon",
		"weight": 1200,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
		"forms": [
			{
				"name": "rhydon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/112/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png"
	},
	{
		"id": 113,
		"name": "chansey",
		"weight": 346,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
		"forms": [
			{
				"name": "chansey",
				"url": "https://pokeapi.co/api/v2/pokemon-form/113/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png"
	},
	{
		"id": 114,
		"name": "tangela",
		"weight": 350,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
		"forms": [
			{
				"name": "tangela",
				"url": "https://pokeapi.co/api/v2/pokemon-form/114/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png"
	},
	{
		"id": 115,
		"name": "kangaskhan",
		"weight": 800,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
		"forms": [
			{
				"name": "kangaskhan",
				"url": "https://pokeapi.co/api/v2/pokemon-form/115/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png"
	},
	{
		"id": 116,
		"name": "horsea",
		"weight": 80,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
		"forms": [
			{
				"name": "horsea",
				"url": "https://pokeapi.co/api/v2/pokemon-form/116/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png"
	},
	{
		"id": 117,
		"name": "seadra",
		"weight": 250,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
		"forms": [
			{
				"name": "seadra",
				"url": "https://pokeapi.co/api/v2/pokemon-form/117/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png"
	},
	{
		"id": 118,
		"name": "goldeen",
		"weight": 150,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
		"forms": [
			{
				"name": "goldeen",
				"url": "https://pokeapi.co/api/v2/pokemon-form/118/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png"
	},
	{
		"id": 119,
		"name": "seaking",
		"weight": 390,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
		"forms": [
			{
				"name": "seaking",
				"url": "https://pokeapi.co/api/v2/pokemon-form/119/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png"
	},
	{
		"id": 120,
		"name": "staryu",
		"weight": 345,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
		"forms": [
			{
				"name": "staryu",
				"url": "https://pokeapi.co/api/v2/pokemon-form/120/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png"
	},
	{
		"id": 121,
		"name": "starmie",
		"weight": 800,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
		"forms": [
			{
				"name": "starmie",
				"url": "https://pokeapi.co/api/v2/pokemon-form/121/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png"
	},
	{
		"id": 122,
		"name": "mr-mime",
		"weight": 545,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
		"forms": [
			{
				"name": "mr-mime",
				"url": "https://pokeapi.co/api/v2/pokemon-form/122/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png"
	},
	{
		"id": 123,
		"name": "scyther",
		"weight": 560,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
		"forms": [
			{
				"name": "scyther",
				"url": "https://pokeapi.co/api/v2/pokemon-form/123/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png"
	},
	{
		"id": 124,
		"name": "jynx",
		"weight": 406,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
		"forms": [
			{
				"name": "jynx",
				"url": "https://pokeapi.co/api/v2/pokemon-form/124/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png"
	},
	{
		"id": 125,
		"name": "electabuzz",
		"weight": 300,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
		"forms": [
			{
				"name": "electabuzz",
				"url": "https://pokeapi.co/api/v2/pokemon-form/125/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png"
	},
	{
		"id": 126,
		"name": "magmar",
		"weight": 445,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
		"forms": [
			{
				"name": "magmar",
				"url": "https://pokeapi.co/api/v2/pokemon-form/126/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png"
	},
	{
		"id": 127,
		"name": "pinsir",
		"weight": 550,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
		"forms": [
			{
				"name": "pinsir",
				"url": "https://pokeapi.co/api/v2/pokemon-form/127/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png"
	},
	{
		"id": 128,
		"name": "tauros",
		"weight": 884,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
		"forms": [
			{
				"name": "tauros",
				"url": "https://pokeapi.co/api/v2/pokemon-form/128/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png"
	},
	{
		"id": 129,
		"name": "magikarp",
		"weight": 100,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
		"forms": [
			{
				"name": "magikarp",
				"url": "https://pokeapi.co/api/v2/pokemon-form/129/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png"
	},
	{
		"id": 130,
		"name": "gyarados",
		"weight": 2350,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
		"forms": [
			{
				"name": "gyarados",
				"url": "https://pokeapi.co/api/v2/pokemon-form/130/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png"
	},
	{
		"id": 131,
		"name": "lapras",
		"weight": 2200,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
		"forms": [
			{
				"name": "lapras",
				"url": "https://pokeapi.co/api/v2/pokemon-form/131/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png"
	},
	{
		"id": 132,
		"name": "ditto",
		"weight": 40,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
		"forms": [
			{
				"name": "ditto",
				"url": "https://pokeapi.co/api/v2/pokemon-form/132/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
	},
	{
		"id": 133,
		"name": "eevee",
		"weight": 65,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
		"forms": [
			{
				"name": "eevee",
				"url": "https://pokeapi.co/api/v2/pokemon-form/133/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"
	},
	{
		"id": 134,
		"name": "vaporeon",
		"weight": 290,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
		"forms": [
			{
				"name": "vaporeon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/134/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png"
	},
	{
		"id": 135,
		"name": "jolteon",
		"weight": 245,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
		"forms": [
			{
				"name": "jolteon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/135/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png"
	},
	{
		"id": 136,
		"name": "flareon",
		"weight": 250,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
		"forms": [
			{
				"name": "flareon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/136/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png"
	},
	{
		"id": 137,
		"name": "porygon",
		"weight": 365,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
		"forms": [
			{
				"name": "porygon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/137/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png"
	},
	{
		"id": 138,
		"name": "omanyte",
		"weight": 75,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
		"forms": [
			{
				"name": "omanyte",
				"url": "https://pokeapi.co/api/v2/pokemon-form/138/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png"
	},
	{
		"id": 139,
		"name": "omastar",
		"weight": 350,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
		"forms": [
			{
				"name": "omastar",
				"url": "https://pokeapi.co/api/v2/pokemon-form/139/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png"
	},
	{
		"id": 140,
		"name": "kabuto",
		"weight": 115,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
		"forms": [
			{
				"name": "kabuto",
				"url": "https://pokeapi.co/api/v2/pokemon-form/140/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png"
	},
	{
		"id": 141,
		"name": "kabutops",
		"weight": 405,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
		"forms": [
			{
				"name": "kabutops",
				"url": "https://pokeapi.co/api/v2/pokemon-form/141/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png"
	},
	{
		"id": 142,
		"name": "aerodactyl",
		"weight": 590,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
		"forms": [
			{
				"name": "aerodactyl",
				"url": "https://pokeapi.co/api/v2/pokemon-form/142/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png"
	},
	{
		"id": 143,
		"name": "snorlax",
		"weight": 4600,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
		"forms": [
			{
				"name": "snorlax",
				"url": "https://pokeapi.co/api/v2/pokemon-form/143/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
	},
	{
		"id": 144,
		"name": "articuno",
		"weight": 554,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
		"forms": [
			{
				"name": "articuno",
				"url": "https://pokeapi.co/api/v2/pokemon-form/144/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png"
	},
	{
		"id": 145,
		"name": "zapdos",
		"weight": 526,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
		"forms": [
			{
				"name": "zapdos",
				"url": "https://pokeapi.co/api/v2/pokemon-form/145/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png"
	},
	{
		"id": 146,
		"name": "moltres",
		"weight": 600,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
		"forms": [
			{
				"name": "moltres",
				"url": "https://pokeapi.co/api/v2/pokemon-form/146/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png"
	},
	{
		"id": 147,
		"name": "dratini",
		"weight": 33,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
		"forms": [
			{
				"name": "dratini",
				"url": "https://pokeapi.co/api/v2/pokemon-form/147/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png"
	},
	{
		"id": 148,
		"name": "dragonair",
		"weight": 165,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
		"forms": [
			{
				"name": "dragonair",
				"url": "https://pokeapi.co/api/v2/pokemon-form/148/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png"
	},
	{
		"id": 149,
		"name": "dragonite",
		"weight": 2100,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
		"forms": [
			{
				"name": "dragonite",
				"url": "https://pokeapi.co/api/v2/pokemon-form/149/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"
	},
	{
		"id": 150,
		"name": "mewtwo",
		"weight": 1220,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
		"forms": [
			{
				"name": "mewtwo",
				"url": "https://pokeapi.co/api/v2/pokemon-form/150/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
	},
	{
		"id": 151,
		"name": "mew",
		"weight": 40,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
		"forms": [
			{
				"name": "mew",
				"url": "https://pokeapi.co/api/v2/pokemon-form/151/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
	},
	{
		"id": 152,
		"name": "chikorita",
		"weight": 64,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
		"forms": [
			{
				"name": "chikorita",
				"url": "https://pokeapi.co/api/v2/pokemon-form/152/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png"
	},
	{
		"id": 153,
		"name": "bayleef",
		"weight": 158,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
		"forms": [
			{
				"name": "bayleef",
				"url": "https://pokeapi.co/api/v2/pokemon-form/153/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png"
	},
	{
		"id": 154,
		"name": "meganium",
		"weight": 1005,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
		"forms": [
			{
				"name": "meganium",
				"url": "https://pokeapi.co/api/v2/pokemon-form/154/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png"
	},
	{
		"id": 155,
		"name": "cyndaquil",
		"weight": 79,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
		"forms": [
			{
				"name": "cyndaquil",
				"url": "https://pokeapi.co/api/v2/pokemon-form/155/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png"
	},
	{
		"id": 156,
		"name": "quilava",
		"weight": 190,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
		"forms": [
			{
				"name": "quilava",
				"url": "https://pokeapi.co/api/v2/pokemon-form/156/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png"
	},
	{
		"id": 157,
		"name": "typhlosion",
		"weight": 795,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
		"forms": [
			{
				"name": "typhlosion",
				"url": "https://pokeapi.co/api/v2/pokemon-form/157/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png"
	},
	{
		"id": 158,
		"name": "totodile",
		"weight": 95,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
		"forms": [
			{
				"name": "totodile",
				"url": "https://pokeapi.co/api/v2/pokemon-form/158/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png"
	},
	{
		"id": 159,
		"name": "croconaw",
		"weight": 250,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
		"forms": [
			{
				"name": "croconaw",
				"url": "https://pokeapi.co/api/v2/pokemon-form/159/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png"
	},
	{
		"id": 160,
		"name": "feraligatr",
		"weight": 888,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
		"forms": [
			{
				"name": "feraligatr",
				"url": "https://pokeapi.co/api/v2/pokemon-form/160/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png"
	},
	{
		"id": 161,
		"name": "sentret",
		"weight": 60,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png",
		"forms": [
			{
				"name": "sentret",
				"url": "https://pokeapi.co/api/v2/pokemon-form/161/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png"
	},
	{
		"id": 162,
		"name": "furret",
		"weight": 325,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
		"forms": [
			{
				"name": "furret",
				"url": "https://pokeapi.co/api/v2/pokemon-form/162/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png"
	},
	{
		"id": 163,
		"name": "hoothoot",
		"weight": 212,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",
		"forms": [
			{
				"name": "hoothoot",
				"url": "https://pokeapi.co/api/v2/pokemon-form/163/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png"
	},
	{
		"id": 164,
		"name": "noctowl",
		"weight": 408,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
		"forms": [
			{
				"name": "noctowl",
				"url": "https://pokeapi.co/api/v2/pokemon-form/164/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png"
	},
	{
		"id": 165,
		"name": "ledyba",
		"weight": 108,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png",
		"forms": [
			{
				"name": "ledyba",
				"url": "https://pokeapi.co/api/v2/pokemon-form/165/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png"
	},
	{
		"id": 166,
		"name": "ledian",
		"weight": 356,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
		"forms": [
			{
				"name": "ledian",
				"url": "https://pokeapi.co/api/v2/pokemon-form/166/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png"
	},
	{
		"id": 167,
		"name": "spinarak",
		"weight": 85,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png",
		"forms": [
			{
				"name": "spinarak",
				"url": "https://pokeapi.co/api/v2/pokemon-form/167/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png"
	},
	{
		"id": 168,
		"name": "ariados",
		"weight": 335,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
		"forms": [
			{
				"name": "ariados",
				"url": "https://pokeapi.co/api/v2/pokemon-form/168/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png"
	},
	{
		"id": 169,
		"name": "crobat",
		"weight": 750,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
		"forms": [
			{
				"name": "crobat",
				"url": "https://pokeapi.co/api/v2/pokemon-form/169/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png"
	},
	{
		"id": 170,
		"name": "chinchou",
		"weight": 120,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",
		"forms": [
			{
				"name": "chinchou",
				"url": "https://pokeapi.co/api/v2/pokemon-form/170/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png"
	},
	{
		"id": 171,
		"name": "lanturn",
		"weight": 225,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
		"forms": [
			{
				"name": "lanturn",
				"url": "https://pokeapi.co/api/v2/pokemon-form/171/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png"
	},
	{
		"id": 172,
		"name": "pichu",
		"weight": 20,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
		"forms": [
			{
				"name": "pichu-spiky-eared",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10065/"
			},
			{
				"name": "pichu",
				"url": "https://pokeapi.co/api/v2/pokemon-form/172/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png"
	},
	{
		"id": 173,
		"name": "cleffa",
		"weight": 30,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
		"forms": [
			{
				"name": "cleffa",
				"url": "https://pokeapi.co/api/v2/pokemon-form/173/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png"
	},
	{
		"id": 174,
		"name": "igglybuff",
		"weight": 10,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
		"forms": [
			{
				"name": "igglybuff",
				"url": "https://pokeapi.co/api/v2/pokemon-form/174/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png"
	},
	{
		"id": 175,
		"name": "togepi",
		"weight": 15,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
		"forms": [
			{
				"name": "togepi",
				"url": "https://pokeapi.co/api/v2/pokemon-form/175/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png"
	},
	{
		"id": 176,
		"name": "togetic",
		"weight": 32,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
		"forms": [
			{
				"name": "togetic",
				"url": "https://pokeapi.co/api/v2/pokemon-form/176/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png"
	},
	{
		"id": 177,
		"name": "natu",
		"weight": 20,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png",
		"forms": [
			{
				"name": "natu",
				"url": "https://pokeapi.co/api/v2/pokemon-form/177/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png"
	},
	{
		"id": 178,
		"name": "xatu",
		"weight": 150,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",
		"forms": [
			{
				"name": "xatu",
				"url": "https://pokeapi.co/api/v2/pokemon-form/178/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png"
	},
	{
		"id": 179,
		"name": "mareep",
		"weight": 78,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",
		"forms": [
			{
				"name": "mareep",
				"url": "https://pokeapi.co/api/v2/pokemon-form/179/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png"
	},
	{
		"id": 180,
		"name": "flaaffy",
		"weight": 133,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",
		"forms": [
			{
				"name": "flaaffy",
				"url": "https://pokeapi.co/api/v2/pokemon-form/180/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png"
	},
	{
		"id": 181,
		"name": "ampharos",
		"weight": 615,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
		"forms": [
			{
				"name": "ampharos",
				"url": "https://pokeapi.co/api/v2/pokemon-form/181/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png"
	},
	{
		"id": 182,
		"name": "bellossom",
		"weight": 58,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
		"forms": [
			{
				"name": "bellossom",
				"url": "https://pokeapi.co/api/v2/pokemon-form/182/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png"
	},
	{
		"id": 183,
		"name": "marill",
		"weight": 85,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
		"forms": [
			{
				"name": "marill",
				"url": "https://pokeapi.co/api/v2/pokemon-form/183/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png"
	},
	{
		"id": 184,
		"name": "azumarill",
		"weight": 285,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
		"forms": [
			{
				"name": "azumarill",
				"url": "https://pokeapi.co/api/v2/pokemon-form/184/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png"
	},
	{
		"id": 185,
		"name": "sudowoodo",
		"weight": 380,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",
		"forms": [
			{
				"name": "sudowoodo",
				"url": "https://pokeapi.co/api/v2/pokemon-form/185/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png"
	},
	{
		"id": 186,
		"name": "politoed",
		"weight": 339,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
		"forms": [
			{
				"name": "politoed",
				"url": "https://pokeapi.co/api/v2/pokemon-form/186/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png"
	},
	{
		"id": 187,
		"name": "hoppip",
		"weight": 5,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",
		"forms": [
			{
				"name": "hoppip",
				"url": "https://pokeapi.co/api/v2/pokemon-form/187/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png"
	},
	{
		"id": 188,
		"name": "skiploom",
		"weight": 10,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",
		"forms": [
			{
				"name": "skiploom",
				"url": "https://pokeapi.co/api/v2/pokemon-form/188/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png"
	},
	{
		"id": 189,
		"name": "jumpluff",
		"weight": 30,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
		"forms": [
			{
				"name": "jumpluff",
				"url": "https://pokeapi.co/api/v2/pokemon-form/189/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png"
	},
	{
		"id": 190,
		"name": "aipom",
		"weight": 115,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
		"forms": [
			{
				"name": "aipom",
				"url": "https://pokeapi.co/api/v2/pokemon-form/190/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png"
	},
	{
		"id": 191,
		"name": "sunkern",
		"weight": 18,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png",
		"forms": [
			{
				"name": "sunkern",
				"url": "https://pokeapi.co/api/v2/pokemon-form/191/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png"
	},
	{
		"id": 192,
		"name": "sunflora",
		"weight": 85,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
		"forms": [
			{
				"name": "sunflora",
				"url": "https://pokeapi.co/api/v2/pokemon-form/192/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png"
	},
	{
		"id": 193,
		"name": "yanma",
		"weight": 380,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",
		"forms": [
			{
				"name": "yanma",
				"url": "https://pokeapi.co/api/v2/pokemon-form/193/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png"
	},
	{
		"id": 194,
		"name": "wooper",
		"weight": 85,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
		"forms": [
			{
				"name": "wooper",
				"url": "https://pokeapi.co/api/v2/pokemon-form/194/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/194.png"
	},
	{
		"id": 195,
		"name": "quagsire",
		"weight": 750,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
		"forms": [
			{
				"name": "quagsire",
				"url": "https://pokeapi.co/api/v2/pokemon-form/195/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png"
	},
	{
		"id": 196,
		"name": "espeon",
		"weight": 265,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
		"forms": [
			{
				"name": "espeon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/196/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png"
	},
	{
		"id": 197,
		"name": "umbreon",
		"weight": 270,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
		"forms": [
			{
				"name": "umbreon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/197/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png"
	},
	{
		"id": 198,
		"name": "murkrow",
		"weight": 21,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",
		"forms": [
			{
				"name": "murkrow",
				"url": "https://pokeapi.co/api/v2/pokemon-form/198/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png"
	},
	{
		"id": 199,
		"name": "slowking",
		"weight": 795,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
		"forms": [
			{
				"name": "slowking",
				"url": "https://pokeapi.co/api/v2/pokemon-form/199/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/199.png"
	},
	{
		"id": 200,
		"name": "misdreavus",
		"weight": 10,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
		"forms": [
			{
				"name": "misdreavus",
				"url": "https://pokeapi.co/api/v2/pokemon-form/200/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png"
	},
	{
		"id": 201,
		"name": "unown",
		"weight": 50,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",
		"forms": [
			{
				"name": "unown-a",
				"url": "https://pokeapi.co/api/v2/pokemon-form/201/"
			},
			{
				"name": "unown-b",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10001/"
			},
			{
				"name": "unown-c",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10002/"
			},
			{
				"name": "unown-d",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10003/"
			},
			{
				"name": "unown-e",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10004/"
			},
			{
				"name": "unown-f",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10005/"
			},
			{
				"name": "unown-g",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10006/"
			},
			{
				"name": "unown-h",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10007/"
			},
			{
				"name": "unown-i",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10008/"
			},
			{
				"name": "unown-j",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10009/"
			},
			{
				"name": "unown-k",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10010/"
			},
			{
				"name": "unown-l",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10011/"
			},
			{
				"name": "unown-m",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10012/"
			},
			{
				"name": "unown-n",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10013/"
			},
			{
				"name": "unown-o",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10014/"
			},
			{
				"name": "unown-p",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10015/"
			},
			{
				"name": "unown-q",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10016/"
			},
			{
				"name": "unown-r",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10017/"
			},
			{
				"name": "unown-s",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10018/"
			},
			{
				"name": "unown-t",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10019/"
			},
			{
				"name": "unown-u",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10020/"
			},
			{
				"name": "unown-v",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10021/"
			},
			{
				"name": "unown-w",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10022/"
			},
			{
				"name": "unown-x",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10023/"
			},
			{
				"name": "unown-y",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10024/"
			},
			{
				"name": "unown-z",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10025/"
			},
			{
				"name": "unown-exclamation",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10026/"
			},
			{
				"name": "unown-question",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10027/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png"
	},
	{
		"id": 202,
		"name": "wobbuffet",
		"weight": 285,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
		"forms": [
			{
				"name": "wobbuffet",
				"url": "https://pokeapi.co/api/v2/pokemon-form/202/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png"
	},
	{
		"id": 203,
		"name": "girafarig",
		"weight": 415,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",
		"forms": [
			{
				"name": "girafarig",
				"url": "https://pokeapi.co/api/v2/pokemon-form/203/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/203.png"
	},
	{
		"id": 204,
		"name": "pineco",
		"weight": 72,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png",
		"forms": [
			{
				"name": "pineco",
				"url": "https://pokeapi.co/api/v2/pokemon-form/204/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png"
	},
	{
		"id": 205,
		"name": "forretress",
		"weight": 1258,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
		"forms": [
			{
				"name": "forretress",
				"url": "https://pokeapi.co/api/v2/pokemon-form/205/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png"
	},
	{
		"id": 206,
		"name": "dunsparce",
		"weight": 140,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png",
		"forms": [
			{
				"name": "dunsparce",
				"url": "https://pokeapi.co/api/v2/pokemon-form/206/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png"
	},
	{
		"id": 207,
		"name": "gligar",
		"weight": 648,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",
		"forms": [
			{
				"name": "gligar",
				"url": "https://pokeapi.co/api/v2/pokemon-form/207/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png"
	},
	{
		"id": 208,
		"name": "steelix",
		"weight": 4000,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
		"forms": [
			{
				"name": "steelix",
				"url": "https://pokeapi.co/api/v2/pokemon-form/208/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png"
	},
	{
		"id": 209,
		"name": "snubbull",
		"weight": 78,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",
		"forms": [
			{
				"name": "snubbull",
				"url": "https://pokeapi.co/api/v2/pokemon-form/209/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png"
	},
	{
		"id": 210,
		"name": "granbull",
		"weight": 487,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
		"forms": [
			{
				"name": "granbull",
				"url": "https://pokeapi.co/api/v2/pokemon-form/210/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png"
	},
	{
		"id": 211,
		"name": "qwilfish",
		"weight": 39,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",
		"forms": [
			{
				"name": "qwilfish",
				"url": "https://pokeapi.co/api/v2/pokemon-form/211/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/211.png"
	},
	{
		"id": 212,
		"name": "scizor",
		"weight": 1180,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
		"forms": [
			{
				"name": "scizor",
				"url": "https://pokeapi.co/api/v2/pokemon-form/212/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png"
	},
	{
		"id": 213,
		"name": "shuckle",
		"weight": 205,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",
		"forms": [
			{
				"name": "shuckle",
				"url": "https://pokeapi.co/api/v2/pokemon-form/213/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png"
	},
	{
		"id": 214,
		"name": "heracross",
		"weight": 540,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
		"forms": [
			{
				"name": "heracross",
				"url": "https://pokeapi.co/api/v2/pokemon-form/214/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png"
	},
	{
		"id": 215,
		"name": "sneasel",
		"weight": 280,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png",
		"forms": [
			{
				"name": "sneasel",
				"url": "https://pokeapi.co/api/v2/pokemon-form/215/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png"
	},
	{
		"id": 216,
		"name": "teddiursa",
		"weight": 88,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",
		"forms": [
			{
				"name": "teddiursa",
				"url": "https://pokeapi.co/api/v2/pokemon-form/216/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png"
	},
	{
		"id": 217,
		"name": "ursaring",
		"weight": 1258,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",
		"forms": [
			{
				"name": "ursaring",
				"url": "https://pokeapi.co/api/v2/pokemon-form/217/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png"
	},
	{
		"id": 218,
		"name": "slugma",
		"weight": 350,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png",
		"forms": [
			{
				"name": "slugma",
				"url": "https://pokeapi.co/api/v2/pokemon-form/218/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png"
	},
	{
		"id": 219,
		"name": "magcargo",
		"weight": 550,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
		"forms": [
			{
				"name": "magcargo",
				"url": "https://pokeapi.co/api/v2/pokemon-form/219/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/219.png"
	},
	{
		"id": 220,
		"name": "swinub",
		"weight": 65,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png",
		"forms": [
			{
				"name": "swinub",
				"url": "https://pokeapi.co/api/v2/pokemon-form/220/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png"
	},
	{
		"id": 221,
		"name": "piloswine",
		"weight": 558,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",
		"forms": [
			{
				"name": "piloswine",
				"url": "https://pokeapi.co/api/v2/pokemon-form/221/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png"
	},
	{
		"id": 222,
		"name": "corsola",
		"weight": 50,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png",
		"forms": [
			{
				"name": "corsola",
				"url": "https://pokeapi.co/api/v2/pokemon-form/222/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png"
	},
	{
		"id": 223,
		"name": "remoraid",
		"weight": 120,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png",
		"forms": [
			{
				"name": "remoraid",
				"url": "https://pokeapi.co/api/v2/pokemon-form/223/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png"
	},
	{
		"id": 224,
		"name": "octillery",
		"weight": 285,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
		"forms": [
			{
				"name": "octillery",
				"url": "https://pokeapi.co/api/v2/pokemon-form/224/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png"
	},
	{
		"id": 225,
		"name": "delibird",
		"weight": 160,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
		"forms": [
			{
				"name": "delibird",
				"url": "https://pokeapi.co/api/v2/pokemon-form/225/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png"
	},
	{
		"id": 226,
		"name": "mantine",
		"weight": 2200,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",
		"forms": [
			{
				"name": "mantine",
				"url": "https://pokeapi.co/api/v2/pokemon-form/226/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/226.png"
	},
	{
		"id": 227,
		"name": "skarmory",
		"weight": 505,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",
		"forms": [
			{
				"name": "skarmory",
				"url": "https://pokeapi.co/api/v2/pokemon-form/227/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png"
	},
	{
		"id": 228,
		"name": "houndour",
		"weight": 108,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",
		"forms": [
			{
				"name": "houndour",
				"url": "https://pokeapi.co/api/v2/pokemon-form/228/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png"
	},
	{
		"id": 229,
		"name": "houndoom",
		"weight": 350,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
		"forms": [
			{
				"name": "houndoom",
				"url": "https://pokeapi.co/api/v2/pokemon-form/229/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png"
	},
	{
		"id": 230,
		"name": "kingdra",
		"weight": 1520,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
		"forms": [
			{
				"name": "kingdra",
				"url": "https://pokeapi.co/api/v2/pokemon-form/230/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png"
	},
	{
		"id": 231,
		"name": "phanpy",
		"weight": 335,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
		"forms": [
			{
				"name": "phanpy",
				"url": "https://pokeapi.co/api/v2/pokemon-form/231/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png"
	},
	{
		"id": 232,
		"name": "donphan",
		"weight": 1200,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
		"forms": [
			{
				"name": "donphan",
				"url": "https://pokeapi.co/api/v2/pokemon-form/232/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png"
	},
	{
		"id": 233,
		"name": "porygon2",
		"weight": 325,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
		"forms": [
			{
				"name": "porygon2",
				"url": "https://pokeapi.co/api/v2/pokemon-form/233/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png"
	},
	{
		"id": 234,
		"name": "stantler",
		"weight": 712,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png",
		"forms": [
			{
				"name": "stantler",
				"url": "https://pokeapi.co/api/v2/pokemon-form/234/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png"
	},
	{
		"id": 235,
		"name": "smeargle",
		"weight": 580,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",
		"forms": [
			{
				"name": "smeargle",
				"url": "https://pokeapi.co/api/v2/pokemon-form/235/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png"
	},
	{
		"id": 236,
		"name": "tyrogue",
		"weight": 210,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
		"forms": [
			{
				"name": "tyrogue",
				"url": "https://pokeapi.co/api/v2/pokemon-form/236/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png"
	},
	{
		"id": 237,
		"name": "hitmontop",
		"weight": 480,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
		"forms": [
			{
				"name": "hitmontop",
				"url": "https://pokeapi.co/api/v2/pokemon-form/237/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/237.png"
	},
	{
		"id": 238,
		"name": "smoochum",
		"weight": 60,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",
		"forms": [
			{
				"name": "smoochum",
				"url": "https://pokeapi.co/api/v2/pokemon-form/238/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png"
	},
	{
		"id": 239,
		"name": "elekid",
		"weight": 235,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",
		"forms": [
			{
				"name": "elekid",
				"url": "https://pokeapi.co/api/v2/pokemon-form/239/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png"
	},
	{
		"id": 240,
		"name": "magby",
		"weight": 214,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",
		"forms": [
			{
				"name": "magby",
				"url": "https://pokeapi.co/api/v2/pokemon-form/240/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png"
	},
	{
		"id": 241,
		"name": "miltank",
		"weight": 755,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
		"forms": [
			{
				"name": "miltank",
				"url": "https://pokeapi.co/api/v2/pokemon-form/241/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png"
	},
	{
		"id": 242,
		"name": "blissey",
		"weight": 468,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
		"forms": [
			{
				"name": "blissey",
				"url": "https://pokeapi.co/api/v2/pokemon-form/242/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png"
	},
	{
		"id": 243,
		"name": "raikou",
		"weight": 1780,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
		"forms": [
			{
				"name": "raikou",
				"url": "https://pokeapi.co/api/v2/pokemon-form/243/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png"
	},
	{
		"id": 244,
		"name": "entei",
		"weight": 1980,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
		"forms": [
			{
				"name": "entei",
				"url": "https://pokeapi.co/api/v2/pokemon-form/244/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png"
	},
	{
		"id": 245,
		"name": "suicune",
		"weight": 1870,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
		"forms": [
			{
				"name": "suicune",
				"url": "https://pokeapi.co/api/v2/pokemon-form/245/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png"
	},
	{
		"id": 246,
		"name": "larvitar",
		"weight": 720,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",
		"forms": [
			{
				"name": "larvitar",
				"url": "https://pokeapi.co/api/v2/pokemon-form/246/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png"
	},
	{
		"id": 247,
		"name": "pupitar",
		"weight": 1520,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",
		"forms": [
			{
				"name": "pupitar",
				"url": "https://pokeapi.co/api/v2/pokemon-form/247/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/247.png"
	},
	{
		"id": 248,
		"name": "tyranitar",
		"weight": 2020,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
		"forms": [
			{
				"name": "tyranitar",
				"url": "https://pokeapi.co/api/v2/pokemon-form/248/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png"
	},
	{
		"id": 249,
		"name": "lugia",
		"weight": 2160,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
		"forms": [
			{
				"name": "lugia",
				"url": "https://pokeapi.co/api/v2/pokemon-form/249/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png"
	},
	{
		"id": 250,
		"name": "ho-oh",
		"weight": 1990,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
		"forms": [
			{
				"name": "ho-oh",
				"url": "https://pokeapi.co/api/v2/pokemon-form/250/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png"
	},
	{
		"id": 251,
		"name": "celebi",
		"weight": 50,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
		"forms": [
			{
				"name": "celebi",
				"url": "https://pokeapi.co/api/v2/pokemon-form/251/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png"
	},
	{
		"id": 252,
		"name": "treecko",
		"weight": 50,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
		"forms": [
			{
				"name": "treecko",
				"url": "https://pokeapi.co/api/v2/pokemon-form/252/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png"
	},
	{
		"id": 253,
		"name": "grovyle",
		"weight": 216,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
		"forms": [
			{
				"name": "grovyle",
				"url": "https://pokeapi.co/api/v2/pokemon-form/253/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png"
	},
	{
		"id": 254,
		"name": "sceptile",
		"weight": 522,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
		"forms": [
			{
				"name": "sceptile",
				"url": "https://pokeapi.co/api/v2/pokemon-form/254/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png"
	},
	{
		"id": 255,
		"name": "torchic",
		"weight": 25,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
		"forms": [
			{
				"name": "torchic",
				"url": "https://pokeapi.co/api/v2/pokemon-form/255/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png"
	},
	{
		"id": 256,
		"name": "combusken",
		"weight": 195,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
		"forms": [
			{
				"name": "combusken",
				"url": "https://pokeapi.co/api/v2/pokemon-form/256/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png"
	},
	{
		"id": 257,
		"name": "blaziken",
		"weight": 520,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
		"forms": [
			{
				"name": "blaziken",
				"url": "https://pokeapi.co/api/v2/pokemon-form/257/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png"
	},
	{
		"id": 258,
		"name": "mudkip",
		"weight": 76,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
		"forms": [
			{
				"name": "mudkip",
				"url": "https://pokeapi.co/api/v2/pokemon-form/258/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png"
	},
	{
		"id": 259,
		"name": "marshtomp",
		"weight": 280,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
		"forms": [
			{
				"name": "marshtomp",
				"url": "https://pokeapi.co/api/v2/pokemon-form/259/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/259.png"
	},
	{
		"id": 260,
		"name": "swampert",
		"weight": 819,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
		"forms": [
			{
				"name": "swampert",
				"url": "https://pokeapi.co/api/v2/pokemon-form/260/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png"
	},
	{
		"id": 261,
		"name": "poochyena",
		"weight": 136,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png",
		"forms": [
			{
				"name": "poochyena",
				"url": "https://pokeapi.co/api/v2/pokemon-form/261/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png"
	},
	{
		"id": 262,
		"name": "mightyena",
		"weight": 370,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png",
		"forms": [
			{
				"name": "mightyena",
				"url": "https://pokeapi.co/api/v2/pokemon-form/262/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png"
	},
	{
		"id": 263,
		"name": "zigzagoon",
		"weight": 175,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",
		"forms": [
			{
				"name": "zigzagoon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/263/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png"
	},
	{
		"id": 264,
		"name": "linoone",
		"weight": 325,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png",
		"forms": [
			{
				"name": "linoone",
				"url": "https://pokeapi.co/api/v2/pokemon-form/264/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png"
	},
	{
		"id": 265,
		"name": "wurmple",
		"weight": 36,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png",
		"forms": [
			{
				"name": "wurmple",
				"url": "https://pokeapi.co/api/v2/pokemon-form/265/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png"
	},
	{
		"id": 266,
		"name": "silcoon",
		"weight": 100,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png",
		"forms": [
			{
				"name": "silcoon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/266/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png"
	},
	{
		"id": 267,
		"name": "beautifly",
		"weight": 284,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",
		"forms": [
			{
				"name": "beautifly",
				"url": "https://pokeapi.co/api/v2/pokemon-form/267/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png"
	},
	{
		"id": 268,
		"name": "cascoon",
		"weight": 115,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png",
		"forms": [
			{
				"name": "cascoon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/268/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png"
	},
	{
		"id": 269,
		"name": "dustox",
		"weight": 316,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png",
		"forms": [
			{
				"name": "dustox",
				"url": "https://pokeapi.co/api/v2/pokemon-form/269/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/269.png"
	},
	{
		"id": 270,
		"name": "lotad",
		"weight": 26,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png",
		"forms": [
			{
				"name": "lotad",
				"url": "https://pokeapi.co/api/v2/pokemon-form/270/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/270.png"
	},
	{
		"id": 271,
		"name": "lombre",
		"weight": 325,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png",
		"forms": [
			{
				"name": "lombre",
				"url": "https://pokeapi.co/api/v2/pokemon-form/271/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/271.png"
	},
	{
		"id": 272,
		"name": "ludicolo",
		"weight": 550,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
		"forms": [
			{
				"name": "ludicolo",
				"url": "https://pokeapi.co/api/v2/pokemon-form/272/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/272.png"
	},
	{
		"id": 273,
		"name": "seedot",
		"weight": 40,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png",
		"forms": [
			{
				"name": "seedot",
				"url": "https://pokeapi.co/api/v2/pokemon-form/273/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/273.png"
	},
	{
		"id": 274,
		"name": "nuzleaf",
		"weight": 280,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png",
		"forms": [
			{
				"name": "nuzleaf",
				"url": "https://pokeapi.co/api/v2/pokemon-form/274/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/274.png"
	},
	{
		"id": 275,
		"name": "shiftry",
		"weight": 596,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",
		"forms": [
			{
				"name": "shiftry",
				"url": "https://pokeapi.co/api/v2/pokemon-form/275/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png"
	},
	{
		"id": 276,
		"name": "taillow",
		"weight": 23,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png",
		"forms": [
			{
				"name": "taillow",
				"url": "https://pokeapi.co/api/v2/pokemon-form/276/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/276.png"
	},
	{
		"id": 277,
		"name": "swellow",
		"weight": 198,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",
		"forms": [
			{
				"name": "swellow",
				"url": "https://pokeapi.co/api/v2/pokemon-form/277/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/277.png"
	},
	{
		"id": 278,
		"name": "wingull",
		"weight": 95,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png",
		"forms": [
			{
				"name": "wingull",
				"url": "https://pokeapi.co/api/v2/pokemon-form/278/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png"
	},
	{
		"id": 279,
		"name": "pelipper",
		"weight": 280,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",
		"forms": [
			{
				"name": "pelipper",
				"url": "https://pokeapi.co/api/v2/pokemon-form/279/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png"
	},
	{
		"id": 280,
		"name": "ralts",
		"weight": 66,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
		"forms": [
			{
				"name": "ralts",
				"url": "https://pokeapi.co/api/v2/pokemon-form/280/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/280.png"
	},
	{
		"id": 281,
		"name": "kirlia",
		"weight": 202,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",
		"forms": [
			{
				"name": "kirlia",
				"url": "https://pokeapi.co/api/v2/pokemon-form/281/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png"
	},
	{
		"id": 282,
		"name": "gardevoir",
		"weight": 484,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
		"forms": [
			{
				"name": "gardevoir",
				"url": "https://pokeapi.co/api/v2/pokemon-form/282/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png"
	},
	{
		"id": 283,
		"name": "surskit",
		"weight": 17,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png",
		"forms": [
			{
				"name": "surskit",
				"url": "https://pokeapi.co/api/v2/pokemon-form/283/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/283.png"
	},
	{
		"id": 284,
		"name": "masquerain",
		"weight": 36,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",
		"forms": [
			{
				"name": "masquerain",
				"url": "https://pokeapi.co/api/v2/pokemon-form/284/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/284.png"
	},
	{
		"id": 285,
		"name": "shroomish",
		"weight": 45,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
		"forms": [
			{
				"name": "shroomish",
				"url": "https://pokeapi.co/api/v2/pokemon-form/285/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/285.png"
	},
	{
		"id": 286,
		"name": "breloom",
		"weight": 392,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
		"forms": [
			{
				"name": "breloom",
				"url": "https://pokeapi.co/api/v2/pokemon-form/286/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/286.png"
	},
	{
		"id": 287,
		"name": "slakoth",
		"weight": 240,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",
		"forms": [
			{
				"name": "slakoth",
				"url": "https://pokeapi.co/api/v2/pokemon-form/287/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/287.png"
	},
	{
		"id": 288,
		"name": "vigoroth",
		"weight": 465,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png",
		"forms": [
			{
				"name": "vigoroth",
				"url": "https://pokeapi.co/api/v2/pokemon-form/288/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png"
	},
	{
		"id": 289,
		"name": "slaking",
		"weight": 1305,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
		"forms": [
			{
				"name": "slaking",
				"url": "https://pokeapi.co/api/v2/pokemon-form/289/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png"
	},
	{
		"id": 290,
		"name": "nincada",
		"weight": 55,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png",
		"forms": [
			{
				"name": "nincada",
				"url": "https://pokeapi.co/api/v2/pokemon-form/290/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/290.png"
	},
	{
		"id": 291,
		"name": "ninjask",
		"weight": 120,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",
		"forms": [
			{
				"name": "ninjask",
				"url": "https://pokeapi.co/api/v2/pokemon-form/291/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/291.png"
	},
	{
		"id": 292,
		"name": "shedinja",
		"weight": 12,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png",
		"forms": [
			{
				"name": "shedinja",
				"url": "https://pokeapi.co/api/v2/pokemon-form/292/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/292.png"
	},
	{
		"id": 293,
		"name": "whismur",
		"weight": 163,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png",
		"forms": [
			{
				"name": "whismur",
				"url": "https://pokeapi.co/api/v2/pokemon-form/293/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/293.png"
	},
	{
		"id": 294,
		"name": "loudred",
		"weight": 405,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png",
		"forms": [
			{
				"name": "loudred",
				"url": "https://pokeapi.co/api/v2/pokemon-form/294/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/294.png"
	},
	{
		"id": 295,
		"name": "exploud",
		"weight": 840,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",
		"forms": [
			{
				"name": "exploud",
				"url": "https://pokeapi.co/api/v2/pokemon-form/295/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png"
	},
	{
		"id": 296,
		"name": "makuhita",
		"weight": 864,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png",
		"forms": [
			{
				"name": "makuhita",
				"url": "https://pokeapi.co/api/v2/pokemon-form/296/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png"
	},
	{
		"id": 297,
		"name": "hariyama",
		"weight": 2538,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",
		"forms": [
			{
				"name": "hariyama",
				"url": "https://pokeapi.co/api/v2/pokemon-form/297/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/297.png"
	},
	{
		"id": 298,
		"name": "azurill",
		"weight": 20,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png",
		"forms": [
			{
				"name": "azurill",
				"url": "https://pokeapi.co/api/v2/pokemon-form/298/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/298.png"
	},
	{
		"id": 299,
		"name": "nosepass",
		"weight": 970,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png",
		"forms": [
			{
				"name": "nosepass",
				"url": "https://pokeapi.co/api/v2/pokemon-form/299/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png"
	},
	{
		"id": 300,
		"name": "skitty",
		"weight": 110,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png",
		"forms": [
			{
				"name": "skitty",
				"url": "https://pokeapi.co/api/v2/pokemon-form/300/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png"
	},
	{
		"id": 301,
		"name": "delcatty",
		"weight": 326,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",
		"forms": [
			{
				"name": "delcatty",
				"url": "https://pokeapi.co/api/v2/pokemon-form/301/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png"
	},
	{
		"id": 302,
		"name": "sableye",
		"weight": 110,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",
		"forms": [
			{
				"name": "sableye",
				"url": "https://pokeapi.co/api/v2/pokemon-form/302/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png"
	},
	{
		"id": 303,
		"name": "mawile",
		"weight": 115,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png",
		"forms": [
			{
				"name": "mawile",
				"url": "https://pokeapi.co/api/v2/pokemon-form/303/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png"
	},
	{
		"id": 304,
		"name": "aron",
		"weight": 600,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png",
		"forms": [
			{
				"name": "aron",
				"url": "https://pokeapi.co/api/v2/pokemon-form/304/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/304.png"
	},
	{
		"id": 305,
		"name": "lairon",
		"weight": 1200,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png",
		"forms": [
			{
				"name": "lairon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/305/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/305.png"
	},
	{
		"id": 306,
		"name": "aggron",
		"weight": 3600,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
		"forms": [
			{
				"name": "aggron",
				"url": "https://pokeapi.co/api/v2/pokemon-form/306/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png"
	},
	{
		"id": 307,
		"name": "meditite",
		"weight": 112,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png",
		"forms": [
			{
				"name": "meditite",
				"url": "https://pokeapi.co/api/v2/pokemon-form/307/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/307.png"
	},
	{
		"id": 308,
		"name": "medicham",
		"weight": 315,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
		"forms": [
			{
				"name": "medicham",
				"url": "https://pokeapi.co/api/v2/pokemon-form/308/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png"
	},
	{
		"id": 309,
		"name": "electrike",
		"weight": 152,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png",
		"forms": [
			{
				"name": "electrike",
				"url": "https://pokeapi.co/api/v2/pokemon-form/309/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png"
	},
	{
		"id": 310,
		"name": "manectric",
		"weight": 402,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
		"forms": [
			{
				"name": "manectric",
				"url": "https://pokeapi.co/api/v2/pokemon-form/310/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png"
	},
	{
		"id": 311,
		"name": "plusle",
		"weight": 42,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png",
		"forms": [
			{
				"name": "plusle",
				"url": "https://pokeapi.co/api/v2/pokemon-form/311/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/311.png"
	},
	{
		"id": 312,
		"name": "minun",
		"weight": 42,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png",
		"forms": [
			{
				"name": "minun",
				"url": "https://pokeapi.co/api/v2/pokemon-form/312/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/312.png"
	},
	{
		"id": 313,
		"name": "volbeat",
		"weight": 177,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png",
		"forms": [
			{
				"name": "volbeat",
				"url": "https://pokeapi.co/api/v2/pokemon-form/313/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/313.png"
	},
	{
		"id": 314,
		"name": "illumise",
		"weight": 177,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png",
		"forms": [
			{
				"name": "illumise",
				"url": "https://pokeapi.co/api/v2/pokemon-form/314/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/314.png"
	},
	{
		"id": 315,
		"name": "roselia",
		"weight": 20,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png",
		"forms": [
			{
				"name": "roselia",
				"url": "https://pokeapi.co/api/v2/pokemon-form/315/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/315.png"
	},
	{
		"id": 316,
		"name": "gulpin",
		"weight": 103,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png",
		"forms": [
			{
				"name": "gulpin",
				"url": "https://pokeapi.co/api/v2/pokemon-form/316/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/316.png"
	},
	{
		"id": 317,
		"name": "swalot",
		"weight": 800,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png",
		"forms": [
			{
				"name": "swalot",
				"url": "https://pokeapi.co/api/v2/pokemon-form/317/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/317.png"
	},
	{
		"id": 318,
		"name": "carvanha",
		"weight": 208,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",
		"forms": [
			{
				"name": "carvanha",
				"url": "https://pokeapi.co/api/v2/pokemon-form/318/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/318.png"
	},
	{
		"id": 319,
		"name": "sharpedo",
		"weight": 888,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
		"forms": [
			{
				"name": "sharpedo",
				"url": "https://pokeapi.co/api/v2/pokemon-form/319/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png"
	},
	{
		"id": 320,
		"name": "wailmer",
		"weight": 1300,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png",
		"forms": [
			{
				"name": "wailmer",
				"url": "https://pokeapi.co/api/v2/pokemon-form/320/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/320.png"
	},
	{
		"id": 321,
		"name": "wailord",
		"weight": 3980,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
		"forms": [
			{
				"name": "wailord",
				"url": "https://pokeapi.co/api/v2/pokemon-form/321/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png"
	},
	{
		"id": 322,
		"name": "numel",
		"weight": 240,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png",
		"forms": [
			{
				"name": "numel",
				"url": "https://pokeapi.co/api/v2/pokemon-form/322/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/322.png"
	},
	{
		"id": 323,
		"name": "camerupt",
		"weight": 2200,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
		"forms": [
			{
				"name": "camerupt",
				"url": "https://pokeapi.co/api/v2/pokemon-form/323/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/323.png"
	},
	{
		"id": 324,
		"name": "torkoal",
		"weight": 804,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",
		"forms": [
			{
				"name": "torkoal",
				"url": "https://pokeapi.co/api/v2/pokemon-form/324/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png"
	},
	{
		"id": 325,
		"name": "spoink",
		"weight": 306,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png",
		"forms": [
			{
				"name": "spoink",
				"url": "https://pokeapi.co/api/v2/pokemon-form/325/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/325.png"
	},
	{
		"id": 326,
		"name": "grumpig",
		"weight": 715,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",
		"forms": [
			{
				"name": "grumpig",
				"url": "https://pokeapi.co/api/v2/pokemon-form/326/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/326.png"
	},
	{
		"id": 327,
		"name": "spinda",
		"weight": 50,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png",
		"forms": [
			{
				"name": "spinda",
				"url": "https://pokeapi.co/api/v2/pokemon-form/327/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/327.png"
	},
	{
		"id": 328,
		"name": "trapinch",
		"weight": 150,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png",
		"forms": [
			{
				"name": "trapinch",
				"url": "https://pokeapi.co/api/v2/pokemon-form/328/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/328.png"
	},
	{
		"id": 329,
		"name": "vibrava",
		"weight": 153,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png",
		"forms": [
			{
				"name": "vibrava",
				"url": "https://pokeapi.co/api/v2/pokemon-form/329/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/329.png"
	},
	{
		"id": 330,
		"name": "flygon",
		"weight": 820,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
		"forms": [
			{
				"name": "flygon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/330/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png"
	},
	{
		"id": 331,
		"name": "cacnea",
		"weight": 513,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png",
		"forms": [
			{
				"name": "cacnea",
				"url": "https://pokeapi.co/api/v2/pokemon-form/331/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/331.png"
	},
	{
		"id": 332,
		"name": "cacturne",
		"weight": 774,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",
		"forms": [
			{
				"name": "cacturne",
				"url": "https://pokeapi.co/api/v2/pokemon-form/332/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png"
	},
	{
		"id": 333,
		"name": "swablu",
		"weight": 12,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png",
		"forms": [
			{
				"name": "swablu",
				"url": "https://pokeapi.co/api/v2/pokemon-form/333/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/333.png"
	},
	{
		"id": 334,
		"name": "altaria",
		"weight": 206,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
		"forms": [
			{
				"name": "altaria",
				"url": "https://pokeapi.co/api/v2/pokemon-form/334/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png"
	},
	{
		"id": 335,
		"name": "zangoose",
		"weight": 403,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png",
		"forms": [
			{
				"name": "zangoose",
				"url": "https://pokeapi.co/api/v2/pokemon-form/335/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/335.png"
	},
	{
		"id": 336,
		"name": "seviper",
		"weight": 525,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png",
		"forms": [
			{
				"name": "seviper",
				"url": "https://pokeapi.co/api/v2/pokemon-form/336/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/336.png"
	},
	{
		"id": 337,
		"name": "lunatone",
		"weight": 1680,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png",
		"forms": [
			{
				"name": "lunatone",
				"url": "https://pokeapi.co/api/v2/pokemon-form/337/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png"
	},
	{
		"id": 338,
		"name": "solrock",
		"weight": 1540,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png",
		"forms": [
			{
				"name": "solrock",
				"url": "https://pokeapi.co/api/v2/pokemon-form/338/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png"
	},
	{
		"id": 339,
		"name": "barboach",
		"weight": 19,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png",
		"forms": [
			{
				"name": "barboach",
				"url": "https://pokeapi.co/api/v2/pokemon-form/339/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/339.png"
	},
	{
		"id": 340,
		"name": "whiscash",
		"weight": 236,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
		"forms": [
			{
				"name": "whiscash",
				"url": "https://pokeapi.co/api/v2/pokemon-form/340/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png"
	},
	{
		"id": 341,
		"name": "corphish",
		"weight": 115,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png",
		"forms": [
			{
				"name": "corphish",
				"url": "https://pokeapi.co/api/v2/pokemon-form/341/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/341.png"
	},
	{
		"id": 342,
		"name": "crawdaunt",
		"weight": 328,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",
		"forms": [
			{
				"name": "crawdaunt",
				"url": "https://pokeapi.co/api/v2/pokemon-form/342/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/342.png"
	},
	{
		"id": 343,
		"name": "baltoy",
		"weight": 215,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png",
		"forms": [
			{
				"name": "baltoy",
				"url": "https://pokeapi.co/api/v2/pokemon-form/343/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/343.png"
	},
	{
		"id": 344,
		"name": "claydol",
		"weight": 1080,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
		"forms": [
			{
				"name": "claydol",
				"url": "https://pokeapi.co/api/v2/pokemon-form/344/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png"
	},
	{
		"id": 345,
		"name": "lileep",
		"weight": 238,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png",
		"forms": [
			{
				"name": "lileep",
				"url": "https://pokeapi.co/api/v2/pokemon-form/345/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/345.png"
	},
	{
		"id": 346,
		"name": "cradily",
		"weight": 604,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",
		"forms": [
			{
				"name": "cradily",
				"url": "https://pokeapi.co/api/v2/pokemon-form/346/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/346.png"
	},
	{
		"id": 347,
		"name": "anorith",
		"weight": 125,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",
		"forms": [
			{
				"name": "anorith",
				"url": "https://pokeapi.co/api/v2/pokemon-form/347/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/347.png"
	},
	{
		"id": 348,
		"name": "armaldo",
		"weight": 682,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",
		"forms": [
			{
				"name": "armaldo",
				"url": "https://pokeapi.co/api/v2/pokemon-form/348/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/348.png"
	},
	{
		"id": 349,
		"name": "feebas",
		"weight": 74,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png",
		"forms": [
			{
				"name": "feebas",
				"url": "https://pokeapi.co/api/v2/pokemon-form/349/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/349.png"
	},
	{
		"id": 350,
		"name": "milotic",
		"weight": 1620,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
		"forms": [
			{
				"name": "milotic",
				"url": "https://pokeapi.co/api/v2/pokemon-form/350/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png"
	},
	{
		"id": 351,
		"name": "castform",
		"weight": 8,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png",
		"forms": [
			{
				"name": "castform",
				"url": "https://pokeapi.co/api/v2/pokemon-form/351/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png"
	},
	{
		"id": 352,
		"name": "kecleon",
		"weight": 220,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png",
		"forms": [
			{
				"name": "kecleon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/352/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/352.png"
	},
	{
		"id": 353,
		"name": "shuppet",
		"weight": 23,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png",
		"forms": [
			{
				"name": "shuppet",
				"url": "https://pokeapi.co/api/v2/pokemon-form/353/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/353.png"
	},
	{
		"id": 354,
		"name": "banette",
		"weight": 125,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
		"forms": [
			{
				"name": "banette",
				"url": "https://pokeapi.co/api/v2/pokemon-form/354/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png"
	},
	{
		"id": 355,
		"name": "duskull",
		"weight": 150,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png",
		"forms": [
			{
				"name": "duskull",
				"url": "https://pokeapi.co/api/v2/pokemon-form/355/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png"
	},
	{
		"id": 356,
		"name": "dusclops",
		"weight": 306,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",
		"forms": [
			{
				"name": "dusclops",
				"url": "https://pokeapi.co/api/v2/pokemon-form/356/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png"
	},
	{
		"id": 357,
		"name": "tropius",
		"weight": 1000,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png",
		"forms": [
			{
				"name": "tropius",
				"url": "https://pokeapi.co/api/v2/pokemon-form/357/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png"
	},
	{
		"id": 358,
		"name": "chimecho",
		"weight": 10,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png",
		"forms": [
			{
				"name": "chimecho",
				"url": "https://pokeapi.co/api/v2/pokemon-form/358/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/358.png"
	},
	{
		"id": 359,
		"name": "absol",
		"weight": 470,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",
		"forms": [
			{
				"name": "absol",
				"url": "https://pokeapi.co/api/v2/pokemon-form/359/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png"
	},
	{
		"id": 360,
		"name": "wynaut",
		"weight": 140,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png",
		"forms": [
			{
				"name": "wynaut",
				"url": "https://pokeapi.co/api/v2/pokemon-form/360/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/360.png"
	},
	{
		"id": 361,
		"name": "snorunt",
		"weight": 168,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png",
		"forms": [
			{
				"name": "snorunt",
				"url": "https://pokeapi.co/api/v2/pokemon-form/361/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png"
	},
	{
		"id": 362,
		"name": "glalie",
		"weight": 2565,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",
		"forms": [
			{
				"name": "glalie",
				"url": "https://pokeapi.co/api/v2/pokemon-form/362/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png"
	},
	{
		"id": 363,
		"name": "spheal",
		"weight": 395,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png",
		"forms": [
			{
				"name": "spheal",
				"url": "https://pokeapi.co/api/v2/pokemon-form/363/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/363.png"
	},
	{
		"id": 364,
		"name": "sealeo",
		"weight": 876,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png",
		"forms": [
			{
				"name": "sealeo",
				"url": "https://pokeapi.co/api/v2/pokemon-form/364/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png"
	},
	{
		"id": 365,
		"name": "walrein",
		"weight": 1506,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",
		"forms": [
			{
				"name": "walrein",
				"url": "https://pokeapi.co/api/v2/pokemon-form/365/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png"
	},
	{
		"id": 366,
		"name": "clamperl",
		"weight": 525,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png",
		"forms": [
			{
				"name": "clamperl",
				"url": "https://pokeapi.co/api/v2/pokemon-form/366/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/366.png"
	},
	{
		"id": 367,
		"name": "huntail",
		"weight": 270,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",
		"forms": [
			{
				"name": "huntail",
				"url": "https://pokeapi.co/api/v2/pokemon-form/367/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/367.png"
	},
	{
		"id": 368,
		"name": "gorebyss",
		"weight": 226,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png",
		"forms": [
			{
				"name": "gorebyss",
				"url": "https://pokeapi.co/api/v2/pokemon-form/368/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/368.png"
	},
	{
		"id": 369,
		"name": "relicanth",
		"weight": 234,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png",
		"forms": [
			{
				"name": "relicanth",
				"url": "https://pokeapi.co/api/v2/pokemon-form/369/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/369.png"
	},
	{
		"id": 370,
		"name": "luvdisc",
		"weight": 87,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png",
		"forms": [
			{
				"name": "luvdisc",
				"url": "https://pokeapi.co/api/v2/pokemon-form/370/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png"
	},
	{
		"id": 371,
		"name": "bagon",
		"weight": 421,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png",
		"forms": [
			{
				"name": "bagon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/371/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/371.png"
	},
	{
		"id": 372,
		"name": "shelgon",
		"weight": 1105,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png",
		"forms": [
			{
				"name": "shelgon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/372/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/372.png"
	},
	{
		"id": 373,
		"name": "salamence",
		"weight": 1026,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
		"forms": [
			{
				"name": "salamence",
				"url": "https://pokeapi.co/api/v2/pokemon-form/373/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png"
	},
	{
		"id": 374,
		"name": "beldum",
		"weight": 952,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png",
		"forms": [
			{
				"name": "beldum",
				"url": "https://pokeapi.co/api/v2/pokemon-form/374/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/374.png"
	},
	{
		"id": 375,
		"name": "metang",
		"weight": 2025,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png",
		"forms": [
			{
				"name": "metang",
				"url": "https://pokeapi.co/api/v2/pokemon-form/375/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/375.png"
	},
	{
		"id": 376,
		"name": "metagross",
		"weight": 5500,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
		"forms": [
			{
				"name": "metagross",
				"url": "https://pokeapi.co/api/v2/pokemon-form/376/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png"
	},
	{
		"id": 377,
		"name": "regirock",
		"weight": 2300,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png",
		"forms": [
			{
				"name": "regirock",
				"url": "https://pokeapi.co/api/v2/pokemon-form/377/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png"
	},
	{
		"id": 378,
		"name": "regice",
		"weight": 1750,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png",
		"forms": [
			{
				"name": "regice",
				"url": "https://pokeapi.co/api/v2/pokemon-form/378/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/378.png"
	},
	{
		"id": 379,
		"name": "registeel",
		"weight": 2050,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png",
		"forms": [
			{
				"name": "registeel",
				"url": "https://pokeapi.co/api/v2/pokemon-form/379/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/379.png"
	},
	{
		"id": 380,
		"name": "latias",
		"weight": 400,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
		"forms": [
			{
				"name": "latias",
				"url": "https://pokeapi.co/api/v2/pokemon-form/380/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/380.png"
	},
	{
		"id": 381,
		"name": "latios",
		"weight": 600,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
		"forms": [
			{
				"name": "latios",
				"url": "https://pokeapi.co/api/v2/pokemon-form/381/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/381.png"
	},
	{
		"id": 382,
		"name": "kyogre",
		"weight": 3520,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
		"forms": [
			{
				"name": "kyogre",
				"url": "https://pokeapi.co/api/v2/pokemon-form/382/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png"
	},
	{
		"id": 383,
		"name": "groudon",
		"weight": 9500,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
		"forms": [
			{
				"name": "groudon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/383/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png"
	},
	{
		"id": 384,
		"name": "rayquaza",
		"weight": 2065,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
		"forms": [
			{
				"name": "rayquaza",
				"url": "https://pokeapi.co/api/v2/pokemon-form/384/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png"
	},
	{
		"id": 385,
		"name": "jirachi",
		"weight": 11,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png",
		"forms": [
			{
				"name": "jirachi",
				"url": "https://pokeapi.co/api/v2/pokemon-form/385/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png"
	},
	{
		"id": 386,
		"name": "deoxys-normal",
		"weight": 608,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png",
		"forms": [
			{
				"name": "deoxys-normal",
				"url": "https://pokeapi.co/api/v2/pokemon-form/386/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/386.png"
	},
	{
		"id": 387,
		"name": "turtwig",
		"weight": 102,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
		"forms": [
			{
				"name": "turtwig",
				"url": "https://pokeapi.co/api/v2/pokemon-form/387/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png"
	},
	{
		"id": 388,
		"name": "grotle",
		"weight": 970,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
		"forms": [
			{
				"name": "grotle",
				"url": "https://pokeapi.co/api/v2/pokemon-form/388/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png"
	},
	{
		"id": 389,
		"name": "torterra",
		"weight": 3100,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
		"forms": [
			{
				"name": "torterra",
				"url": "https://pokeapi.co/api/v2/pokemon-form/389/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png"
	},
	{
		"id": 390,
		"name": "chimchar",
		"weight": 62,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
		"forms": [
			{
				"name": "chimchar",
				"url": "https://pokeapi.co/api/v2/pokemon-form/390/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png"
	},
	{
		"id": 391,
		"name": "monferno",
		"weight": 220,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",
		"forms": [
			{
				"name": "monferno",
				"url": "https://pokeapi.co/api/v2/pokemon-form/391/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/391.png"
	},
	{
		"id": 392,
		"name": "infernape",
		"weight": 550,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
		"forms": [
			{
				"name": "infernape",
				"url": "https://pokeapi.co/api/v2/pokemon-form/392/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png"
	},
	{
		"id": 393,
		"name": "piplup",
		"weight": 52,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
		"forms": [
			{
				"name": "piplup",
				"url": "https://pokeapi.co/api/v2/pokemon-form/393/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png"
	},
	{
		"id": 394,
		"name": "prinplup",
		"weight": 230,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",
		"forms": [
			{
				"name": "prinplup",
				"url": "https://pokeapi.co/api/v2/pokemon-form/394/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/394.png"
	},
	{
		"id": 395,
		"name": "empoleon",
		"weight": 845,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
		"forms": [
			{
				"name": "empoleon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/395/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png"
	},
	{
		"id": 396,
		"name": "starly",
		"weight": 20,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png",
		"forms": [
			{
				"name": "starly",
				"url": "https://pokeapi.co/api/v2/pokemon-form/396/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/396.png"
	},
	{
		"id": 397,
		"name": "staravia",
		"weight": 155,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png",
		"forms": [
			{
				"name": "staravia",
				"url": "https://pokeapi.co/api/v2/pokemon-form/397/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/397.png"
	},
	{
		"id": 398,
		"name": "staraptor",
		"weight": 249,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",
		"forms": [
			{
				"name": "staraptor",
				"url": "https://pokeapi.co/api/v2/pokemon-form/398/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/398.png"
	},
	{
		"id": 399,
		"name": "bidoof",
		"weight": 200,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",
		"forms": [
			{
				"name": "bidoof",
				"url": "https://pokeapi.co/api/v2/pokemon-form/399/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/399.png"
	},
	{
		"id": 400,
		"name": "bibarel",
		"weight": 315,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",
		"forms": [
			{
				"name": "bibarel",
				"url": "https://pokeapi.co/api/v2/pokemon-form/400/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/400.png"
	},
	{
		"id": 401,
		"name": "kricketot",
		"weight": 22,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png",
		"forms": [
			{
				"name": "kricketot",
				"url": "https://pokeapi.co/api/v2/pokemon-form/401/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/401.png"
	},
	{
		"id": 402,
		"name": "kricketune",
		"weight": 255,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png",
		"forms": [
			{
				"name": "kricketune",
				"url": "https://pokeapi.co/api/v2/pokemon-form/402/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/402.png"
	},
	{
		"id": 403,
		"name": "shinx",
		"weight": 95,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",
		"forms": [
			{
				"name": "shinx",
				"url": "https://pokeapi.co/api/v2/pokemon-form/403/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png"
	},
	{
		"id": 404,
		"name": "luxio",
		"weight": 305,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",
		"forms": [
			{
				"name": "luxio",
				"url": "https://pokeapi.co/api/v2/pokemon-form/404/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/404.png"
	},
	{
		"id": 405,
		"name": "luxray",
		"weight": 420,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",
		"forms": [
			{
				"name": "luxray",
				"url": "https://pokeapi.co/api/v2/pokemon-form/405/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png"
	},
	{
		"id": 406,
		"name": "budew",
		"weight": 12,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png",
		"forms": [
			{
				"name": "budew",
				"url": "https://pokeapi.co/api/v2/pokemon-form/406/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png"
	},
	{
		"id": 407,
		"name": "roserade",
		"weight": 145,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
		"forms": [
			{
				"name": "roserade",
				"url": "https://pokeapi.co/api/v2/pokemon-form/407/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png"
	},
	{
		"id": 408,
		"name": "cranidos",
		"weight": 315,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png",
		"forms": [
			{
				"name": "cranidos",
				"url": "https://pokeapi.co/api/v2/pokemon-form/408/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/408.png"
	},
	{
		"id": 409,
		"name": "rampardos",
		"weight": 1025,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png",
		"forms": [
			{
				"name": "rampardos",
				"url": "https://pokeapi.co/api/v2/pokemon-form/409/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png"
	},
	{
		"id": 410,
		"name": "shieldon",
		"weight": 570,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png",
		"forms": [
			{
				"name": "shieldon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/410/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/410.png"
	},
	{
		"id": 411,
		"name": "bastiodon",
		"weight": 1495,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png",
		"forms": [
			{
				"name": "bastiodon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/411/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/411.png"
	},
	{
		"id": 412,
		"name": "burmy",
		"weight": 34,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",
		"forms": [
			{
				"name": "burmy-trash",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10035/"
			},
			{
				"name": "burmy-sandy",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10034/"
			},
			{
				"name": "burmy-plant",
				"url": "https://pokeapi.co/api/v2/pokemon-form/412/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/412.png"
	},
	{
		"id": 413,
		"name": "wormadam-plant",
		"weight": 65,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png",
		"forms": [
			{
				"name": "wormadam-plant",
				"url": "https://pokeapi.co/api/v2/pokemon-form/413/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/413.png"
	},
	{
		"id": 414,
		"name": "mothim",
		"weight": 233,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png",
		"forms": [
			{
				"name": "mothim-trash",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10270/"
			},
			{
				"name": "mothim-sandy",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10269/"
			},
			{
				"name": "mothim-plant",
				"url": "https://pokeapi.co/api/v2/pokemon-form/414/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/414.png"
	},
	{
		"id": 415,
		"name": "combee",
		"weight": 55,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png",
		"forms": [
			{
				"name": "combee",
				"url": "https://pokeapi.co/api/v2/pokemon-form/415/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/415.png"
	},
	{
		"id": 416,
		"name": "vespiquen",
		"weight": 385,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",
		"forms": [
			{
				"name": "vespiquen",
				"url": "https://pokeapi.co/api/v2/pokemon-form/416/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/416.png"
	},
	{
		"id": 417,
		"name": "pachirisu",
		"weight": 39,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",
		"forms": [
			{
				"name": "pachirisu",
				"url": "https://pokeapi.co/api/v2/pokemon-form/417/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/417.png"
	},
	{
		"id": 418,
		"name": "buizel",
		"weight": 295,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png",
		"forms": [
			{
				"name": "buizel",
				"url": "https://pokeapi.co/api/v2/pokemon-form/418/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/418.png"
	},
	{
		"id": 419,
		"name": "floatzel",
		"weight": 335,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png",
		"forms": [
			{
				"name": "floatzel",
				"url": "https://pokeapi.co/api/v2/pokemon-form/419/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/419.png"
	},
	{
		"id": 420,
		"name": "cherubi",
		"weight": 33,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png",
		"forms": [
			{
				"name": "cherubi",
				"url": "https://pokeapi.co/api/v2/pokemon-form/420/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/420.png"
	},
	{
		"id": 421,
		"name": "cherrim",
		"weight": 93,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png",
		"forms": [
			{
				"name": "cherrim-sunshine",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10038/"
			},
			{
				"name": "cherrim-overcast",
				"url": "https://pokeapi.co/api/v2/pokemon-form/421/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/421.png"
	},
	{
		"id": 422,
		"name": "shellos",
		"weight": 63,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png",
		"forms": [
			{
				"name": "shellos-east",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10039/"
			},
			{
				"name": "shellos-west",
				"url": "https://pokeapi.co/api/v2/pokemon-form/422/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/422.png"
	},
	{
		"id": 423,
		"name": "gastrodon",
		"weight": 299,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png",
		"forms": [
			{
				"name": "gastrodon-east",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10040/"
			},
			{
				"name": "gastrodon-west",
				"url": "https://pokeapi.co/api/v2/pokemon-form/423/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/423.png"
	},
	{
		"id": 424,
		"name": "ambipom",
		"weight": 203,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",
		"forms": [
			{
				"name": "ambipom",
				"url": "https://pokeapi.co/api/v2/pokemon-form/424/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/424.png"
	},
	{
		"id": 425,
		"name": "drifloon",
		"weight": 12,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png",
		"forms": [
			{
				"name": "drifloon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/425/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/425.png"
	},
	{
		"id": 426,
		"name": "drifblim",
		"weight": 150,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",
		"forms": [
			{
				"name": "drifblim",
				"url": "https://pokeapi.co/api/v2/pokemon-form/426/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/426.png"
	},
	{
		"id": 427,
		"name": "buneary",
		"weight": 55,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png",
		"forms": [
			{
				"name": "buneary",
				"url": "https://pokeapi.co/api/v2/pokemon-form/427/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/427.png"
	},
	{
		"id": 428,
		"name": "lopunny",
		"weight": 333,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",
		"forms": [
			{
				"name": "lopunny",
				"url": "https://pokeapi.co/api/v2/pokemon-form/428/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png"
	},
	{
		"id": 429,
		"name": "mismagius",
		"weight": 44,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
		"forms": [
			{
				"name": "mismagius",
				"url": "https://pokeapi.co/api/v2/pokemon-form/429/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png"
	},
	{
		"id": 430,
		"name": "honchkrow",
		"weight": 273,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
		"forms": [
			{
				"name": "honchkrow",
				"url": "https://pokeapi.co/api/v2/pokemon-form/430/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/430.png"
	},
	{
		"id": 431,
		"name": "glameow",
		"weight": 39,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png",
		"forms": [
			{
				"name": "glameow",
				"url": "https://pokeapi.co/api/v2/pokemon-form/431/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/431.png"
	},
	{
		"id": 432,
		"name": "purugly",
		"weight": 438,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png",
		"forms": [
			{
				"name": "purugly",
				"url": "https://pokeapi.co/api/v2/pokemon-form/432/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/432.png"
	},
	{
		"id": 433,
		"name": "chingling",
		"weight": 6,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png",
		"forms": [
			{
				"name": "chingling",
				"url": "https://pokeapi.co/api/v2/pokemon-form/433/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/433.png"
	},
	{
		"id": 434,
		"name": "stunky",
		"weight": 192,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png",
		"forms": [
			{
				"name": "stunky",
				"url": "https://pokeapi.co/api/v2/pokemon-form/434/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/434.png"
	},
	{
		"id": 435,
		"name": "skuntank",
		"weight": 380,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",
		"forms": [
			{
				"name": "skuntank",
				"url": "https://pokeapi.co/api/v2/pokemon-form/435/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/435.png"
	},
	{
		"id": 436,
		"name": "bronzor",
		"weight": 605,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png",
		"forms": [
			{
				"name": "bronzor",
				"url": "https://pokeapi.co/api/v2/pokemon-form/436/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/436.png"
	},
	{
		"id": 437,
		"name": "bronzong",
		"weight": 1870,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png",
		"forms": [
			{
				"name": "bronzong",
				"url": "https://pokeapi.co/api/v2/pokemon-form/437/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/437.png"
	},
	{
		"id": 438,
		"name": "bonsly",
		"weight": 150,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png",
		"forms": [
			{
				"name": "bonsly",
				"url": "https://pokeapi.co/api/v2/pokemon-form/438/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/438.png"
	},
	{
		"id": 439,
		"name": "mime-jr",
		"weight": 130,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png",
		"forms": [
			{
				"name": "mime-jr",
				"url": "https://pokeapi.co/api/v2/pokemon-form/439/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/439.png"
	},
	{
		"id": 440,
		"name": "happiny",
		"weight": 244,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png",
		"forms": [
			{
				"name": "happiny",
				"url": "https://pokeapi.co/api/v2/pokemon-form/440/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/440.png"
	},
	{
		"id": 441,
		"name": "chatot",
		"weight": 19,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",
		"forms": [
			{
				"name": "chatot",
				"url": "https://pokeapi.co/api/v2/pokemon-form/441/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/441.png"
	},
	{
		"id": 442,
		"name": "spiritomb",
		"weight": 1080,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
		"forms": [
			{
				"name": "spiritomb",
				"url": "https://pokeapi.co/api/v2/pokemon-form/442/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png"
	},
	{
		"id": 443,
		"name": "gible",
		"weight": 205,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",
		"forms": [
			{
				"name": "gible",
				"url": "https://pokeapi.co/api/v2/pokemon-form/443/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/443.png"
	},
	{
		"id": 444,
		"name": "gabite",
		"weight": 560,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png",
		"forms": [
			{
				"name": "gabite",
				"url": "https://pokeapi.co/api/v2/pokemon-form/444/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/444.png"
	},
	{
		"id": 445,
		"name": "garchomp",
		"weight": 950,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
		"forms": [
			{
				"name": "garchomp",
				"url": "https://pokeapi.co/api/v2/pokemon-form/445/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png"
	},
	{
		"id": 446,
		"name": "munchlax",
		"weight": 1050,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
		"forms": [
			{
				"name": "munchlax",
				"url": "https://pokeapi.co/api/v2/pokemon-form/446/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/446.png"
	},
	{
		"id": 447,
		"name": "riolu",
		"weight": 202,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
		"forms": [
			{
				"name": "riolu",
				"url": "https://pokeapi.co/api/v2/pokemon-form/447/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png"
	},
	{
		"id": 448,
		"name": "lucario",
		"weight": 540,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
		"forms": [
			{
				"name": "lucario",
				"url": "https://pokeapi.co/api/v2/pokemon-form/448/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png"
	},
	{
		"id": 449,
		"name": "hippopotas",
		"weight": 495,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png",
		"forms": [
			{
				"name": "hippopotas",
				"url": "https://pokeapi.co/api/v2/pokemon-form/449/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/449.png"
	},
	{
		"id": 450,
		"name": "hippowdon",
		"weight": 3000,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",
		"forms": [
			{
				"name": "hippowdon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/450/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png"
	},
	{
		"id": 451,
		"name": "skorupi",
		"weight": 120,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png",
		"forms": [
			{
				"name": "skorupi",
				"url": "https://pokeapi.co/api/v2/pokemon-form/451/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/451.png"
	},
	{
		"id": 452,
		"name": "drapion",
		"weight": 615,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png",
		"forms": [
			{
				"name": "drapion",
				"url": "https://pokeapi.co/api/v2/pokemon-form/452/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/452.png"
	},
	{
		"id": 453,
		"name": "croagunk",
		"weight": 230,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png",
		"forms": [
			{
				"name": "croagunk",
				"url": "https://pokeapi.co/api/v2/pokemon-form/453/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/453.png"
	},
	{
		"id": 454,
		"name": "toxicroak",
		"weight": 444,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",
		"forms": [
			{
				"name": "toxicroak",
				"url": "https://pokeapi.co/api/v2/pokemon-form/454/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/454.png"
	},
	{
		"id": 455,
		"name": "carnivine",
		"weight": 270,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png",
		"forms": [
			{
				"name": "carnivine",
				"url": "https://pokeapi.co/api/v2/pokemon-form/455/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/455.png"
	},
	{
		"id": 456,
		"name": "finneon",
		"weight": 70,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png",
		"forms": [
			{
				"name": "finneon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/456/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/456.png"
	},
	{
		"id": 457,
		"name": "lumineon",
		"weight": 240,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png",
		"forms": [
			{
				"name": "lumineon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/457/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/457.png"
	},
	{
		"id": 458,
		"name": "mantyke",
		"weight": 650,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png",
		"forms": [
			{
				"name": "mantyke",
				"url": "https://pokeapi.co/api/v2/pokemon-form/458/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/458.png"
	},
	{
		"id": 459,
		"name": "snover",
		"weight": 505,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png",
		"forms": [
			{
				"name": "snover",
				"url": "https://pokeapi.co/api/v2/pokemon-form/459/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/459.png"
	},
	{
		"id": 460,
		"name": "abomasnow",
		"weight": 1355,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",
		"forms": [
			{
				"name": "abomasnow",
				"url": "https://pokeapi.co/api/v2/pokemon-form/460/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png"
	},
	{
		"id": 461,
		"name": "weavile",
		"weight": 340,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
		"forms": [
			{
				"name": "weavile",
				"url": "https://pokeapi.co/api/v2/pokemon-form/461/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png"
	},
	{
		"id": 462,
		"name": "magnezone",
		"weight": 1800,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
		"forms": [
			{
				"name": "magnezone",
				"url": "https://pokeapi.co/api/v2/pokemon-form/462/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png"
	},
	{
		"id": 463,
		"name": "lickilicky",
		"weight": 1400,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",
		"forms": [
			{
				"name": "lickilicky",
				"url": "https://pokeapi.co/api/v2/pokemon-form/463/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/463.png"
	},
	{
		"id": 464,
		"name": "rhyperior",
		"weight": 2828,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
		"forms": [
			{
				"name": "rhyperior",
				"url": "https://pokeapi.co/api/v2/pokemon-form/464/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/464.png"
	},
	{
		"id": 465,
		"name": "tangrowth",
		"weight": 1286,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",
		"forms": [
			{
				"name": "tangrowth",
				"url": "https://pokeapi.co/api/v2/pokemon-form/465/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png"
	},
	{
		"id": 466,
		"name": "electivire",
		"weight": 1386,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
		"forms": [
			{
				"name": "electivire",
				"url": "https://pokeapi.co/api/v2/pokemon-form/466/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png"
	},
	{
		"id": 467,
		"name": "magmortar",
		"weight": 680,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
		"forms": [
			{
				"name": "magmortar",
				"url": "https://pokeapi.co/api/v2/pokemon-form/467/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/467.png"
	},
	{
		"id": 468,
		"name": "togekiss",
		"weight": 380,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
		"forms": [
			{
				"name": "togekiss",
				"url": "https://pokeapi.co/api/v2/pokemon-form/468/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png"
	},
	{
		"id": 469,
		"name": "yanmega",
		"weight": 515,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",
		"forms": [
			{
				"name": "yanmega",
				"url": "https://pokeapi.co/api/v2/pokemon-form/469/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/469.png"
	},
	{
		"id": 470,
		"name": "leafeon",
		"weight": 255,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
		"forms": [
			{
				"name": "leafeon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/470/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png"
	},
	{
		"id": 471,
		"name": "glaceon",
		"weight": 259,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
		"forms": [
			{
				"name": "glaceon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/471/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png"
	},
	{
		"id": 472,
		"name": "gliscor",
		"weight": 425,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
		"forms": [
			{
				"name": "gliscor",
				"url": "https://pokeapi.co/api/v2/pokemon-form/472/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/472.png"
	},
	{
		"id": 473,
		"name": "mamoswine",
		"weight": 2910,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
		"forms": [
			{
				"name": "mamoswine",
				"url": "https://pokeapi.co/api/v2/pokemon-form/473/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/473.png"
	},
	{
		"id": 474,
		"name": "porygon-z",
		"weight": 340,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
		"forms": [
			{
				"name": "porygon-z",
				"url": "https://pokeapi.co/api/v2/pokemon-form/474/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/474.png"
	},
	{
		"id": 475,
		"name": "gallade",
		"weight": 520,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",
		"forms": [
			{
				"name": "gallade",
				"url": "https://pokeapi.co/api/v2/pokemon-form/475/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/475.png"
	},
	{
		"id": 476,
		"name": "probopass",
		"weight": 3400,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",
		"forms": [
			{
				"name": "probopass",
				"url": "https://pokeapi.co/api/v2/pokemon-form/476/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/476.png"
	},
	{
		"id": 477,
		"name": "dusknoir",
		"weight": 1066,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
		"forms": [
			{
				"name": "dusknoir",
				"url": "https://pokeapi.co/api/v2/pokemon-form/477/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/477.png"
	},
	{
		"id": 478,
		"name": "froslass",
		"weight": 266,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
		"forms": [
			{
				"name": "froslass",
				"url": "https://pokeapi.co/api/v2/pokemon-form/478/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/478.png"
	},
	{
		"id": 479,
		"name": "rotom",
		"weight": 3,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",
		"forms": [
			{
				"name": "rotom",
				"url": "https://pokeapi.co/api/v2/pokemon-form/479/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png"
	},
	{
		"id": 480,
		"name": "uxie",
		"weight": 3,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png",
		"forms": [
			{
				"name": "uxie",
				"url": "https://pokeapi.co/api/v2/pokemon-form/480/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/480.png"
	},
	{
		"id": 481,
		"name": "mesprit",
		"weight": 3,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",
		"forms": [
			{
				"name": "mesprit",
				"url": "https://pokeapi.co/api/v2/pokemon-form/481/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/481.png"
	},
	{
		"id": 482,
		"name": "azelf",
		"weight": 3,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png",
		"forms": [
			{
				"name": "azelf",
				"url": "https://pokeapi.co/api/v2/pokemon-form/482/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/482.png"
	},
	{
		"id": 483,
		"name": "dialga",
		"weight": 6830,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
		"forms": [
			{
				"name": "dialga",
				"url": "https://pokeapi.co/api/v2/pokemon-form/483/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png"
	},
	{
		"id": 484,
		"name": "palkia",
		"weight": 3360,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
		"forms": [
			{
				"name": "palkia",
				"url": "https://pokeapi.co/api/v2/pokemon-form/484/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png"
	},
	{
		"id": 485,
		"name": "heatran",
		"weight": 4300,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
		"forms": [
			{
				"name": "heatran",
				"url": "https://pokeapi.co/api/v2/pokemon-form/485/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/485.png"
	},
	{
		"id": 486,
		"name": "regigigas",
		"weight": 4200,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png",
		"forms": [
			{
				"name": "regigigas",
				"url": "https://pokeapi.co/api/v2/pokemon-form/486/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/486.png"
	},
	{
		"id": 487,
		"name": "giratina-altered",
		"weight": 7500,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
		"forms": [
			{
				"name": "giratina-altered",
				"url": "https://pokeapi.co/api/v2/pokemon-form/487/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png"
	},
	{
		"id": 488,
		"name": "cresselia",
		"weight": 856,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
		"forms": [
			{
				"name": "cresselia",
				"url": "https://pokeapi.co/api/v2/pokemon-form/488/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/488.png"
	},
	{
		"id": 489,
		"name": "phione",
		"weight": 31,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png",
		"forms": [
			{
				"name": "phione",
				"url": "https://pokeapi.co/api/v2/pokemon-form/489/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/489.png"
	},
	{
		"id": 490,
		"name": "manaphy",
		"weight": 14,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png",
		"forms": [
			{
				"name": "manaphy",
				"url": "https://pokeapi.co/api/v2/pokemon-form/490/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/490.png"
	},
	{
		"id": 491,
		"name": "darkrai",
		"weight": 505,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
		"forms": [
			{
				"name": "darkrai",
				"url": "https://pokeapi.co/api/v2/pokemon-form/491/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png"
	},
	{
		"id": 492,
		"name": "shaymin-land",
		"weight": 21,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png",
		"forms": [
			{
				"name": "shaymin-land",
				"url": "https://pokeapi.co/api/v2/pokemon-form/492/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/492.png"
	},
	{
		"id": 493,
		"name": "arceus",
		"weight": 3200,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",
		"forms": [
			{
				"name": "arceus-normal",
				"url": "https://pokeapi.co/api/v2/pokemon-form/493/"
			},
			{
				"name": "arceus-bug",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10041/"
			},
			{
				"name": "arceus-dark",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10042/"
			},
			{
				"name": "arceus-dragon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10043/"
			},
			{
				"name": "arceus-electric",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10044/"
			},
			{
				"name": "arceus-fighting",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10045/"
			},
			{
				"name": "arceus-fire",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10046/"
			},
			{
				"name": "arceus-flying",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10047/"
			},
			{
				"name": "arceus-ghost",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10048/"
			},
			{
				"name": "arceus-grass",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10049/"
			},
			{
				"name": "arceus-ground",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10050/"
			},
			{
				"name": "arceus-ice",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10051/"
			},
			{
				"name": "arceus-poison",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10052/"
			},
			{
				"name": "arceus-psychic",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10053/"
			},
			{
				"name": "arceus-rock",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10054/"
			},
			{
				"name": "arceus-steel",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10055/"
			},
			{
				"name": "arceus-water",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10056/"
			},
			{
				"name": "arceus-unknown",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10057/"
			},
			{
				"name": "arceus-fairy",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10085/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png"
	},
	{
		"id": 494,
		"name": "victini",
		"weight": 40,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png",
		"forms": [
			{
				"name": "victini",
				"url": "https://pokeapi.co/api/v2/pokemon-form/494/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png"
	},
	{
		"id": 495,
		"name": "snivy",
		"weight": 81,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
		"forms": [
			{
				"name": "snivy",
				"url": "https://pokeapi.co/api/v2/pokemon-form/495/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/495.png"
	},
	{
		"id": 496,
		"name": "servine",
		"weight": 160,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",
		"forms": [
			{
				"name": "servine",
				"url": "https://pokeapi.co/api/v2/pokemon-form/496/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/496.png"
	},
	{
		"id": 497,
		"name": "serperior",
		"weight": 630,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
		"forms": [
			{
				"name": "serperior",
				"url": "https://pokeapi.co/api/v2/pokemon-form/497/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png"
	},
	{
		"id": 498,
		"name": "tepig",
		"weight": 99,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
		"forms": [
			{
				"name": "tepig",
				"url": "https://pokeapi.co/api/v2/pokemon-form/498/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/498.png"
	},
	{
		"id": 499,
		"name": "pignite",
		"weight": 555,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",
		"forms": [
			{
				"name": "pignite",
				"url": "https://pokeapi.co/api/v2/pokemon-form/499/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/499.png"
	},
	{
		"id": 500,
		"name": "emboar",
		"weight": 1500,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
		"forms": [
			{
				"name": "emboar",
				"url": "https://pokeapi.co/api/v2/pokemon-form/500/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png"
	},
	{
		"id": 501,
		"name": "oshawott",
		"weight": 59,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
		"forms": [
			{
				"name": "oshawott",
				"url": "https://pokeapi.co/api/v2/pokemon-form/501/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png"
	},
	{
		"id": 502,
		"name": "dewott",
		"weight": 245,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png",
		"forms": [
			{
				"name": "dewott",
				"url": "https://pokeapi.co/api/v2/pokemon-form/502/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/502.png"
	},
	{
		"id": 503,
		"name": "samurott",
		"weight": 946,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",
		"forms": [
			{
				"name": "samurott",
				"url": "https://pokeapi.co/api/v2/pokemon-form/503/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/503.png"
	},
	{
		"id": 504,
		"name": "patrat",
		"weight": 116,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png",
		"forms": [
			{
				"name": "patrat",
				"url": "https://pokeapi.co/api/v2/pokemon-form/504/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/504.png"
	},
	{
		"id": 505,
		"name": "watchog",
		"weight": 270,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png",
		"forms": [
			{
				"name": "watchog",
				"url": "https://pokeapi.co/api/v2/pokemon-form/505/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/505.png"
	},
	{
		"id": 506,
		"name": "lillipup",
		"weight": 41,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png",
		"forms": [
			{
				"name": "lillipup",
				"url": "https://pokeapi.co/api/v2/pokemon-form/506/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/506.png"
	},
	{
		"id": 507,
		"name": "herdier",
		"weight": 147,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png",
		"forms": [
			{
				"name": "herdier",
				"url": "https://pokeapi.co/api/v2/pokemon-form/507/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/507.png"
	},
	{
		"id": 508,
		"name": "stoutland",
		"weight": 610,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png",
		"forms": [
			{
				"name": "stoutland",
				"url": "https://pokeapi.co/api/v2/pokemon-form/508/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/508.png"
	},
	{
		"id": 509,
		"name": "purrloin",
		"weight": 101,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png",
		"forms": [
			{
				"name": "purrloin",
				"url": "https://pokeapi.co/api/v2/pokemon-form/509/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/509.png"
	},
	{
		"id": 510,
		"name": "liepard",
		"weight": 375,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png",
		"forms": [
			{
				"name": "liepard",
				"url": "https://pokeapi.co/api/v2/pokemon-form/510/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png"
	},
	{
		"id": 511,
		"name": "pansage",
		"weight": 105,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png",
		"forms": [
			{
				"name": "pansage",
				"url": "https://pokeapi.co/api/v2/pokemon-form/511/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/511.png"
	},
	{
		"id": 512,
		"name": "simisage",
		"weight": 305,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png",
		"forms": [
			{
				"name": "simisage",
				"url": "https://pokeapi.co/api/v2/pokemon-form/512/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/512.png"
	},
	{
		"id": 513,
		"name": "pansear",
		"weight": 110,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png",
		"forms": [
			{
				"name": "pansear",
				"url": "https://pokeapi.co/api/v2/pokemon-form/513/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/513.png"
	},
	{
		"id": 514,
		"name": "simisear",
		"weight": 280,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png",
		"forms": [
			{
				"name": "simisear",
				"url": "https://pokeapi.co/api/v2/pokemon-form/514/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/514.png"
	},
	{
		"id": 515,
		"name": "panpour",
		"weight": 135,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png",
		"forms": [
			{
				"name": "panpour",
				"url": "https://pokeapi.co/api/v2/pokemon-form/515/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/515.png"
	},
	{
		"id": 516,
		"name": "simipour",
		"weight": 290,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png",
		"forms": [
			{
				"name": "simipour",
				"url": "https://pokeapi.co/api/v2/pokemon-form/516/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/516.png"
	},
	{
		"id": 517,
		"name": "munna",
		"weight": 233,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png",
		"forms": [
			{
				"name": "munna",
				"url": "https://pokeapi.co/api/v2/pokemon-form/517/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/517.png"
	},
	{
		"id": 518,
		"name": "musharna",
		"weight": 605,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png",
		"forms": [
			{
				"name": "musharna",
				"url": "https://pokeapi.co/api/v2/pokemon-form/518/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/518.png"
	},
	{
		"id": 519,
		"name": "pidove",
		"weight": 21,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png",
		"forms": [
			{
				"name": "pidove",
				"url": "https://pokeapi.co/api/v2/pokemon-form/519/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/519.png"
	},
	{
		"id": 520,
		"name": "tranquill",
		"weight": 150,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png",
		"forms": [
			{
				"name": "tranquill",
				"url": "https://pokeapi.co/api/v2/pokemon-form/520/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/520.png"
	},
	{
		"id": 521,
		"name": "unfezant",
		"weight": 290,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png",
		"forms": [
			{
				"name": "unfezant",
				"url": "https://pokeapi.co/api/v2/pokemon-form/521/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/521.png"
	},
	{
		"id": 522,
		"name": "blitzle",
		"weight": 298,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png",
		"forms": [
			{
				"name": "blitzle",
				"url": "https://pokeapi.co/api/v2/pokemon-form/522/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/522.png"
	},
	{
		"id": 523,
		"name": "zebstrika",
		"weight": 795,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png",
		"forms": [
			{
				"name": "zebstrika",
				"url": "https://pokeapi.co/api/v2/pokemon-form/523/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/523.png"
	},
	{
		"id": 524,
		"name": "roggenrola",
		"weight": 180,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png",
		"forms": [
			{
				"name": "roggenrola",
				"url": "https://pokeapi.co/api/v2/pokemon-form/524/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/524.png"
	},
	{
		"id": 525,
		"name": "boldore",
		"weight": 1020,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png",
		"forms": [
			{
				"name": "boldore",
				"url": "https://pokeapi.co/api/v2/pokemon-form/525/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/525.png"
	},
	{
		"id": 526,
		"name": "gigalith",
		"weight": 2600,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png",
		"forms": [
			{
				"name": "gigalith",
				"url": "https://pokeapi.co/api/v2/pokemon-form/526/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png"
	},
	{
		"id": 527,
		"name": "woobat",
		"weight": 21,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png",
		"forms": [
			{
				"name": "woobat",
				"url": "https://pokeapi.co/api/v2/pokemon-form/527/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/527.png"
	},
	{
		"id": 528,
		"name": "swoobat",
		"weight": 105,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png",
		"forms": [
			{
				"name": "swoobat",
				"url": "https://pokeapi.co/api/v2/pokemon-form/528/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/528.png"
	},
	{
		"id": 529,
		"name": "drilbur",
		"weight": 85,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png",
		"forms": [
			{
				"name": "drilbur",
				"url": "https://pokeapi.co/api/v2/pokemon-form/529/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/529.png"
	},
	{
		"id": 530,
		"name": "excadrill",
		"weight": 404,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png",
		"forms": [
			{
				"name": "excadrill",
				"url": "https://pokeapi.co/api/v2/pokemon-form/530/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/530.png"
	},
	{
		"id": 531,
		"name": "audino",
		"weight": 310,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png",
		"forms": [
			{
				"name": "audino",
				"url": "https://pokeapi.co/api/v2/pokemon-form/531/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/531.png"
	},
	{
		"id": 532,
		"name": "timburr",
		"weight": 125,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png",
		"forms": [
			{
				"name": "timburr",
				"url": "https://pokeapi.co/api/v2/pokemon-form/532/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/532.png"
	},
	{
		"id": 533,
		"name": "gurdurr",
		"weight": 400,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png",
		"forms": [
			{
				"name": "gurdurr",
				"url": "https://pokeapi.co/api/v2/pokemon-form/533/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/533.png"
	},
	{
		"id": 534,
		"name": "conkeldurr",
		"weight": 870,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png",
		"forms": [
			{
				"name": "conkeldurr",
				"url": "https://pokeapi.co/api/v2/pokemon-form/534/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/534.png"
	},
	{
		"id": 535,
		"name": "tympole",
		"weight": 45,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png",
		"forms": [
			{
				"name": "tympole",
				"url": "https://pokeapi.co/api/v2/pokemon-form/535/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/535.png"
	},
	{
		"id": 536,
		"name": "palpitoad",
		"weight": 170,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png",
		"forms": [
			{
				"name": "palpitoad",
				"url": "https://pokeapi.co/api/v2/pokemon-form/536/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/536.png"
	},
	{
		"id": 537,
		"name": "seismitoad",
		"weight": 620,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png",
		"forms": [
			{
				"name": "seismitoad",
				"url": "https://pokeapi.co/api/v2/pokemon-form/537/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/537.png"
	},
	{
		"id": 538,
		"name": "throh",
		"weight": 555,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png",
		"forms": [
			{
				"name": "throh",
				"url": "https://pokeapi.co/api/v2/pokemon-form/538/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/538.png"
	},
	{
		"id": 539,
		"name": "sawk",
		"weight": 510,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png",
		"forms": [
			{
				"name": "sawk",
				"url": "https://pokeapi.co/api/v2/pokemon-form/539/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/539.png"
	},
	{
		"id": 540,
		"name": "sewaddle",
		"weight": 25,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png",
		"forms": [
			{
				"name": "sewaddle",
				"url": "https://pokeapi.co/api/v2/pokemon-form/540/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/540.png"
	},
	{
		"id": 541,
		"name": "swadloon",
		"weight": 73,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png",
		"forms": [
			{
				"name": "swadloon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/541/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/541.png"
	},
	{
		"id": 542,
		"name": "leavanny",
		"weight": 205,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png",
		"forms": [
			{
				"name": "leavanny",
				"url": "https://pokeapi.co/api/v2/pokemon-form/542/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/542.png"
	},
	{
		"id": 543,
		"name": "venipede",
		"weight": 53,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png",
		"forms": [
			{
				"name": "venipede",
				"url": "https://pokeapi.co/api/v2/pokemon-form/543/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/543.png"
	},
	{
		"id": 544,
		"name": "whirlipede",
		"weight": 585,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png",
		"forms": [
			{
				"name": "whirlipede",
				"url": "https://pokeapi.co/api/v2/pokemon-form/544/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/544.png"
	},
	{
		"id": 545,
		"name": "scolipede",
		"weight": 2005,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png",
		"forms": [
			{
				"name": "scolipede",
				"url": "https://pokeapi.co/api/v2/pokemon-form/545/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/545.png"
	},
	{
		"id": 546,
		"name": "cottonee",
		"weight": 6,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png",
		"forms": [
			{
				"name": "cottonee",
				"url": "https://pokeapi.co/api/v2/pokemon-form/546/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/546.png"
	},
	{
		"id": 547,
		"name": "whimsicott",
		"weight": 66,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png",
		"forms": [
			{
				"name": "whimsicott",
				"url": "https://pokeapi.co/api/v2/pokemon-form/547/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/547.png"
	},
	{
		"id": 548,
		"name": "petilil",
		"weight": 66,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png",
		"forms": [
			{
				"name": "petilil",
				"url": "https://pokeapi.co/api/v2/pokemon-form/548/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/548.png"
	},
	{
		"id": 549,
		"name": "lilligant",
		"weight": 163,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png",
		"forms": [
			{
				"name": "lilligant",
				"url": "https://pokeapi.co/api/v2/pokemon-form/549/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/549.png"
	},
	{
		"id": 550,
		"name": "basculin-red-striped",
		"weight": 180,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png",
		"forms": [
			{
				"name": "basculin-red-striped",
				"url": "https://pokeapi.co/api/v2/pokemon-form/550/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/550.png"
	},
	{
		"id": 551,
		"name": "sandile",
		"weight": 152,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png",
		"forms": [
			{
				"name": "sandile",
				"url": "https://pokeapi.co/api/v2/pokemon-form/551/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/551.png"
	},
	{
		"id": 552,
		"name": "krokorok",
		"weight": 334,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png",
		"forms": [
			{
				"name": "krokorok",
				"url": "https://pokeapi.co/api/v2/pokemon-form/552/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/552.png"
	},
	{
		"id": 553,
		"name": "krookodile",
		"weight": 963,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png",
		"forms": [
			{
				"name": "krookodile",
				"url": "https://pokeapi.co/api/v2/pokemon-form/553/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/553.png"
	},
	{
		"id": 554,
		"name": "darumaka",
		"weight": 375,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png",
		"forms": [
			{
				"name": "darumaka",
				"url": "https://pokeapi.co/api/v2/pokemon-form/554/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/554.png"
	},
	{
		"id": 555,
		"name": "darmanitan-standard",
		"weight": 929,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png",
		"forms": [
			{
				"name": "darmanitan-standard",
				"url": "https://pokeapi.co/api/v2/pokemon-form/555/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/555.png"
	},
	{
		"id": 556,
		"name": "maractus",
		"weight": 280,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png",
		"forms": [
			{
				"name": "maractus",
				"url": "https://pokeapi.co/api/v2/pokemon-form/556/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/556.png"
	},
	{
		"id": 557,
		"name": "dwebble",
		"weight": 145,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png",
		"forms": [
			{
				"name": "dwebble",
				"url": "https://pokeapi.co/api/v2/pokemon-form/557/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/557.png"
	},
	{
		"id": 558,
		"name": "crustle",
		"weight": 2000,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png",
		"forms": [
			{
				"name": "crustle",
				"url": "https://pokeapi.co/api/v2/pokemon-form/558/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/558.png"
	},
	{
		"id": 559,
		"name": "scraggy",
		"weight": 118,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png",
		"forms": [
			{
				"name": "scraggy",
				"url": "https://pokeapi.co/api/v2/pokemon-form/559/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/559.png"
	},
	{
		"id": 560,
		"name": "scrafty",
		"weight": 300,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png",
		"forms": [
			{
				"name": "scrafty",
				"url": "https://pokeapi.co/api/v2/pokemon-form/560/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/560.png"
	},
	{
		"id": 561,
		"name": "sigilyph",
		"weight": 140,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png",
		"forms": [
			{
				"name": "sigilyph",
				"url": "https://pokeapi.co/api/v2/pokemon-form/561/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/561.png"
	},
	{
		"id": 562,
		"name": "yamask",
		"weight": 15,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png",
		"forms": [
			{
				"name": "yamask",
				"url": "https://pokeapi.co/api/v2/pokemon-form/562/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/562.png"
	},
	{
		"id": 563,
		"name": "cofagrigus",
		"weight": 765,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png",
		"forms": [
			{
				"name": "cofagrigus",
				"url": "https://pokeapi.co/api/v2/pokemon-form/563/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/563.png"
	},
	{
		"id": 564,
		"name": "tirtouga",
		"weight": 165,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png",
		"forms": [
			{
				"name": "tirtouga",
				"url": "https://pokeapi.co/api/v2/pokemon-form/564/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/564.png"
	},
	{
		"id": 565,
		"name": "carracosta",
		"weight": 810,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png",
		"forms": [
			{
				"name": "carracosta",
				"url": "https://pokeapi.co/api/v2/pokemon-form/565/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/565.png"
	},
	{
		"id": 566,
		"name": "archen",
		"weight": 95,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png",
		"forms": [
			{
				"name": "archen",
				"url": "https://pokeapi.co/api/v2/pokemon-form/566/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/566.png"
	},
	{
		"id": 567,
		"name": "archeops",
		"weight": 320,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png",
		"forms": [
			{
				"name": "archeops",
				"url": "https://pokeapi.co/api/v2/pokemon-form/567/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/567.png"
	},
	{
		"id": 568,
		"name": "trubbish",
		"weight": 310,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png",
		"forms": [
			{
				"name": "trubbish",
				"url": "https://pokeapi.co/api/v2/pokemon-form/568/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png"
	},
	{
		"id": 569,
		"name": "garbodor",
		"weight": 1073,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png",
		"forms": [
			{
				"name": "garbodor",
				"url": "https://pokeapi.co/api/v2/pokemon-form/569/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/569.png"
	},
	{
		"id": 570,
		"name": "zorua",
		"weight": 125,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png",
		"forms": [
			{
				"name": "zorua",
				"url": "https://pokeapi.co/api/v2/pokemon-form/570/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/570.png"
	},
	{
		"id": 571,
		"name": "zoroark",
		"weight": 811,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png",
		"forms": [
			{
				"name": "zoroark",
				"url": "https://pokeapi.co/api/v2/pokemon-form/571/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png"
	},
	{
		"id": 572,
		"name": "minccino",
		"weight": 58,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png",
		"forms": [
			{
				"name": "minccino",
				"url": "https://pokeapi.co/api/v2/pokemon-form/572/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/572.png"
	},
	{
		"id": 573,
		"name": "cinccino",
		"weight": 75,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png",
		"forms": [
			{
				"name": "cinccino",
				"url": "https://pokeapi.co/api/v2/pokemon-form/573/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/573.png"
	},
	{
		"id": 574,
		"name": "gothita",
		"weight": 58,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png",
		"forms": [
			{
				"name": "gothita",
				"url": "https://pokeapi.co/api/v2/pokemon-form/574/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/574.png"
	},
	{
		"id": 575,
		"name": "gothorita",
		"weight": 180,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png",
		"forms": [
			{
				"name": "gothorita",
				"url": "https://pokeapi.co/api/v2/pokemon-form/575/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/575.png"
	},
	{
		"id": 576,
		"name": "gothitelle",
		"weight": 440,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png",
		"forms": [
			{
				"name": "gothitelle",
				"url": "https://pokeapi.co/api/v2/pokemon-form/576/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/576.png"
	},
	{
		"id": 577,
		"name": "solosis",
		"weight": 10,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png",
		"forms": [
			{
				"name": "solosis",
				"url": "https://pokeapi.co/api/v2/pokemon-form/577/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/577.png"
	},
	{
		"id": 578,
		"name": "duosion",
		"weight": 80,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png",
		"forms": [
			{
				"name": "duosion",
				"url": "https://pokeapi.co/api/v2/pokemon-form/578/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/578.png"
	},
	{
		"id": 579,
		"name": "reuniclus",
		"weight": 201,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png",
		"forms": [
			{
				"name": "reuniclus",
				"url": "https://pokeapi.co/api/v2/pokemon-form/579/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/579.png"
	},
	{
		"id": 580,
		"name": "ducklett",
		"weight": 55,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png",
		"forms": [
			{
				"name": "ducklett",
				"url": "https://pokeapi.co/api/v2/pokemon-form/580/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/580.png"
	},
	{
		"id": 581,
		"name": "swanna",
		"weight": 242,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png",
		"forms": [
			{
				"name": "swanna",
				"url": "https://pokeapi.co/api/v2/pokemon-form/581/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/581.png"
	},
	{
		"id": 582,
		"name": "vanillite",
		"weight": 57,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png",
		"forms": [
			{
				"name": "vanillite",
				"url": "https://pokeapi.co/api/v2/pokemon-form/582/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/582.png"
	},
	{
		"id": 583,
		"name": "vanillish",
		"weight": 410,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png",
		"forms": [
			{
				"name": "vanillish",
				"url": "https://pokeapi.co/api/v2/pokemon-form/583/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/583.png"
	},
	{
		"id": 584,
		"name": "vanilluxe",
		"weight": 575,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png",
		"forms": [
			{
				"name": "vanilluxe",
				"url": "https://pokeapi.co/api/v2/pokemon-form/584/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/584.png"
	},
	{
		"id": 585,
		"name": "deerling",
		"weight": 195,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png",
		"forms": [
			{
				"name": "deerling-winter",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10070/"
			},
			{
				"name": "deerling-autumn",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10069/"
			},
			{
				"name": "deerling-summer",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10068/"
			},
			{
				"name": "deerling-spring",
				"url": "https://pokeapi.co/api/v2/pokemon-form/585/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/585.png"
	},
	{
		"id": 586,
		"name": "sawsbuck",
		"weight": 925,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png",
		"forms": [
			{
				"name": "sawsbuck-winter",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10073/"
			},
			{
				"name": "sawsbuck-autumn",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10072/"
			},
			{
				"name": "sawsbuck-summer",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10071/"
			},
			{
				"name": "sawsbuck-spring",
				"url": "https://pokeapi.co/api/v2/pokemon-form/586/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/586.png"
	},
	{
		"id": 587,
		"name": "emolga",
		"weight": 50,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png",
		"forms": [
			{
				"name": "emolga",
				"url": "https://pokeapi.co/api/v2/pokemon-form/587/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/587.png"
	},
	{
		"id": 588,
		"name": "karrablast",
		"weight": 59,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png",
		"forms": [
			{
				"name": "karrablast",
				"url": "https://pokeapi.co/api/v2/pokemon-form/588/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/588.png"
	},
	{
		"id": 589,
		"name": "escavalier",
		"weight": 330,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
		"forms": [
			{
				"name": "escavalier",
				"url": "https://pokeapi.co/api/v2/pokemon-form/589/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/589.png"
	},
	{
		"id": 590,
		"name": "foongus",
		"weight": 10,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png",
		"forms": [
			{
				"name": "foongus",
				"url": "https://pokeapi.co/api/v2/pokemon-form/590/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/590.png"
	},
	{
		"id": 591,
		"name": "amoonguss",
		"weight": 105,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
		"forms": [
			{
				"name": "amoonguss",
				"url": "https://pokeapi.co/api/v2/pokemon-form/591/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/591.png"
	},
	{
		"id": 592,
		"name": "frillish",
		"weight": 330,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png",
		"forms": [
			{
				"name": "frillish",
				"url": "https://pokeapi.co/api/v2/pokemon-form/592/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/592.png"
	},
	{
		"id": 593,
		"name": "jellicent",
		"weight": 1350,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png",
		"forms": [
			{
				"name": "jellicent",
				"url": "https://pokeapi.co/api/v2/pokemon-form/593/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/593.png"
	},
	{
		"id": 594,
		"name": "alomomola",
		"weight": 316,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png",
		"forms": [
			{
				"name": "alomomola",
				"url": "https://pokeapi.co/api/v2/pokemon-form/594/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/594.png"
	},
	{
		"id": 595,
		"name": "joltik",
		"weight": 6,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png",
		"forms": [
			{
				"name": "joltik",
				"url": "https://pokeapi.co/api/v2/pokemon-form/595/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/595.png"
	},
	{
		"id": 596,
		"name": "galvantula",
		"weight": 143,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png",
		"forms": [
			{
				"name": "galvantula",
				"url": "https://pokeapi.co/api/v2/pokemon-form/596/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/596.png"
	},
	{
		"id": 597,
		"name": "ferroseed",
		"weight": 188,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png",
		"forms": [
			{
				"name": "ferroseed",
				"url": "https://pokeapi.co/api/v2/pokemon-form/597/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/597.png"
	},
	{
		"id": 598,
		"name": "ferrothorn",
		"weight": 1100,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png",
		"forms": [
			{
				"name": "ferrothorn",
				"url": "https://pokeapi.co/api/v2/pokemon-form/598/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/598.png"
	},
	{
		"id": 599,
		"name": "klink",
		"weight": 210,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png",
		"forms": [
			{
				"name": "klink",
				"url": "https://pokeapi.co/api/v2/pokemon-form/599/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/599.png"
	},
	{
		"id": 600,
		"name": "klang",
		"weight": 510,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png",
		"forms": [
			{
				"name": "klang",
				"url": "https://pokeapi.co/api/v2/pokemon-form/600/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/600.png"
	},
	{
		"id": 601,
		"name": "klinklang",
		"weight": 810,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png",
		"forms": [
			{
				"name": "klinklang",
				"url": "https://pokeapi.co/api/v2/pokemon-form/601/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/601.png"
	},
	{
		"id": 602,
		"name": "tynamo",
		"weight": 3,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png",
		"forms": [
			{
				"name": "tynamo",
				"url": "https://pokeapi.co/api/v2/pokemon-form/602/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/602.png"
	},
	{
		"id": 603,
		"name": "eelektrik",
		"weight": 220,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png",
		"forms": [
			{
				"name": "eelektrik",
				"url": "https://pokeapi.co/api/v2/pokemon-form/603/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/603.png"
	},
	{
		"id": 604,
		"name": "eelektross",
		"weight": 805,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png",
		"forms": [
			{
				"name": "eelektross",
				"url": "https://pokeapi.co/api/v2/pokemon-form/604/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/604.png"
	},
	{
		"id": 605,
		"name": "elgyem",
		"weight": 90,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png",
		"forms": [
			{
				"name": "elgyem",
				"url": "https://pokeapi.co/api/v2/pokemon-form/605/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/605.png"
	},
	{
		"id": 606,
		"name": "beheeyem",
		"weight": 345,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png",
		"forms": [
			{
				"name": "beheeyem",
				"url": "https://pokeapi.co/api/v2/pokemon-form/606/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/606.png"
	},
	{
		"id": 607,
		"name": "litwick",
		"weight": 31,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png",
		"forms": [
			{
				"name": "litwick",
				"url": "https://pokeapi.co/api/v2/pokemon-form/607/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/607.png"
	},
	{
		"id": 608,
		"name": "lampent",
		"weight": 130,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png",
		"forms": [
			{
				"name": "lampent",
				"url": "https://pokeapi.co/api/v2/pokemon-form/608/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/608.png"
	},
	{
		"id": 609,
		"name": "chandelure",
		"weight": 343,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
		"forms": [
			{
				"name": "chandelure",
				"url": "https://pokeapi.co/api/v2/pokemon-form/609/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png"
	},
	{
		"id": 610,
		"name": "axew",
		"weight": 180,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png",
		"forms": [
			{
				"name": "axew",
				"url": "https://pokeapi.co/api/v2/pokemon-form/610/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/610.png"
	},
	{
		"id": 611,
		"name": "fraxure",
		"weight": 360,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png",
		"forms": [
			{
				"name": "fraxure",
				"url": "https://pokeapi.co/api/v2/pokemon-form/611/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/611.png"
	},
	{
		"id": 612,
		"name": "haxorus",
		"weight": 1055,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png",
		"forms": [
			{
				"name": "haxorus",
				"url": "https://pokeapi.co/api/v2/pokemon-form/612/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/612.png"
	},
	{
		"id": 613,
		"name": "cubchoo",
		"weight": 85,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png",
		"forms": [
			{
				"name": "cubchoo",
				"url": "https://pokeapi.co/api/v2/pokemon-form/613/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/613.png"
	},
	{
		"id": 614,
		"name": "beartic",
		"weight": 2600,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png",
		"forms": [
			{
				"name": "beartic",
				"url": "https://pokeapi.co/api/v2/pokemon-form/614/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/614.png"
	},
	{
		"id": 615,
		"name": "cryogonal",
		"weight": 1480,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png",
		"forms": [
			{
				"name": "cryogonal",
				"url": "https://pokeapi.co/api/v2/pokemon-form/615/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/615.png"
	},
	{
		"id": 616,
		"name": "shelmet",
		"weight": 77,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png",
		"forms": [
			{
				"name": "shelmet",
				"url": "https://pokeapi.co/api/v2/pokemon-form/616/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/616.png"
	},
	{
		"id": 617,
		"name": "accelgor",
		"weight": 253,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png",
		"forms": [
			{
				"name": "accelgor",
				"url": "https://pokeapi.co/api/v2/pokemon-form/617/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/617.png"
	},
	{
		"id": 618,
		"name": "stunfisk",
		"weight": 110,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png",
		"forms": [
			{
				"name": "stunfisk",
				"url": "https://pokeapi.co/api/v2/pokemon-form/618/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/618.png"
	},
	{
		"id": 619,
		"name": "mienfoo",
		"weight": 200,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png",
		"forms": [
			{
				"name": "mienfoo",
				"url": "https://pokeapi.co/api/v2/pokemon-form/619/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/619.png"
	},
	{
		"id": 620,
		"name": "mienshao",
		"weight": 355,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png",
		"forms": [
			{
				"name": "mienshao",
				"url": "https://pokeapi.co/api/v2/pokemon-form/620/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/620.png"
	},
	{
		"id": 621,
		"name": "druddigon",
		"weight": 1390,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png",
		"forms": [
			{
				"name": "druddigon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/621/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/621.png"
	},
	{
		"id": 622,
		"name": "golett",
		"weight": 920,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png",
		"forms": [
			{
				"name": "golett",
				"url": "https://pokeapi.co/api/v2/pokemon-form/622/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/622.png"
	},
	{
		"id": 623,
		"name": "golurk",
		"weight": 3300,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png",
		"forms": [
			{
				"name": "golurk",
				"url": "https://pokeapi.co/api/v2/pokemon-form/623/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/623.png"
	},
	{
		"id": 624,
		"name": "pawniard",
		"weight": 102,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png",
		"forms": [
			{
				"name": "pawniard",
				"url": "https://pokeapi.co/api/v2/pokemon-form/624/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/624.png"
	},
	{
		"id": 625,
		"name": "bisharp",
		"weight": 700,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png",
		"forms": [
			{
				"name": "bisharp",
				"url": "https://pokeapi.co/api/v2/pokemon-form/625/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/625.png"
	},
	{
		"id": 626,
		"name": "bouffalant",
		"weight": 946,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png",
		"forms": [
			{
				"name": "bouffalant",
				"url": "https://pokeapi.co/api/v2/pokemon-form/626/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/626.png"
	},
	{
		"id": 627,
		"name": "rufflet",
		"weight": 105,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png",
		"forms": [
			{
				"name": "rufflet",
				"url": "https://pokeapi.co/api/v2/pokemon-form/627/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/627.png"
	},
	{
		"id": 628,
		"name": "braviary",
		"weight": 410,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png",
		"forms": [
			{
				"name": "braviary",
				"url": "https://pokeapi.co/api/v2/pokemon-form/628/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/628.png"
	},
	{
		"id": 629,
		"name": "vullaby",
		"weight": 90,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png",
		"forms": [
			{
				"name": "vullaby",
				"url": "https://pokeapi.co/api/v2/pokemon-form/629/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/629.png"
	},
	{
		"id": 630,
		"name": "mandibuzz",
		"weight": 395,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png",
		"forms": [
			{
				"name": "mandibuzz",
				"url": "https://pokeapi.co/api/v2/pokemon-form/630/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/630.png"
	},
	{
		"id": 631,
		"name": "heatmor",
		"weight": 580,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png",
		"forms": [
			{
				"name": "heatmor",
				"url": "https://pokeapi.co/api/v2/pokemon-form/631/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/631.png"
	},
	{
		"id": 632,
		"name": "durant",
		"weight": 330,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png",
		"forms": [
			{
				"name": "durant",
				"url": "https://pokeapi.co/api/v2/pokemon-form/632/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/632.png"
	},
	{
		"id": 633,
		"name": "deino",
		"weight": 173,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png",
		"forms": [
			{
				"name": "deino",
				"url": "https://pokeapi.co/api/v2/pokemon-form/633/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/633.png"
	},
	{
		"id": 634,
		"name": "zweilous",
		"weight": 500,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png",
		"forms": [
			{
				"name": "zweilous",
				"url": "https://pokeapi.co/api/v2/pokemon-form/634/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/634.png"
	},
	{
		"id": 635,
		"name": "hydreigon",
		"weight": 1600,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png",
		"forms": [
			{
				"name": "hydreigon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/635/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/635.png"
	},
	{
		"id": 636,
		"name": "larvesta",
		"weight": 288,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png",
		"forms": [
			{
				"name": "larvesta",
				"url": "https://pokeapi.co/api/v2/pokemon-form/636/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/636.png"
	},
	{
		"id": 637,
		"name": "volcarona",
		"weight": 460,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
		"forms": [
			{
				"name": "volcarona",
				"url": "https://pokeapi.co/api/v2/pokemon-form/637/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/637.png"
	},
	{
		"id": 638,
		"name": "cobalion",
		"weight": 2500,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png",
		"forms": [
			{
				"name": "cobalion",
				"url": "https://pokeapi.co/api/v2/pokemon-form/638/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/638.png"
	},
	{
		"id": 639,
		"name": "terrakion",
		"weight": 2600,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png",
		"forms": [
			{
				"name": "terrakion",
				"url": "https://pokeapi.co/api/v2/pokemon-form/639/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/639.png"
	},
	{
		"id": 640,
		"name": "virizion",
		"weight": 2000,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png",
		"forms": [
			{
				"name": "virizion",
				"url": "https://pokeapi.co/api/v2/pokemon-form/640/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/640.png"
	},
	{
		"id": 641,
		"name": "tornadus-incarnate",
		"weight": 630,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png",
		"forms": [
			{
				"name": "tornadus-incarnate",
				"url": "https://pokeapi.co/api/v2/pokemon-form/641/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/641.png"
	},
	{
		"id": 642,
		"name": "thundurus-incarnate",
		"weight": 610,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png",
		"forms": [
			{
				"name": "thundurus-incarnate",
				"url": "https://pokeapi.co/api/v2/pokemon-form/642/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/642.png"
	},
	{
		"id": 643,
		"name": "reshiram",
		"weight": 3300,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
		"forms": [
			{
				"name": "reshiram",
				"url": "https://pokeapi.co/api/v2/pokemon-form/643/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png"
	},
	{
		"id": 644,
		"name": "zekrom",
		"weight": 3450,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png",
		"forms": [
			{
				"name": "zekrom",
				"url": "https://pokeapi.co/api/v2/pokemon-form/644/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/644.png"
	},
	{
		"id": 645,
		"name": "landorus-incarnate",
		"weight": 680,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png",
		"forms": [
			{
				"name": "landorus-incarnate",
				"url": "https://pokeapi.co/api/v2/pokemon-form/645/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/645.png"
	},
	{
		"id": 646,
		"name": "kyurem",
		"weight": 3250,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png",
		"forms": [
			{
				"name": "kyurem",
				"url": "https://pokeapi.co/api/v2/pokemon-form/646/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/646.png"
	},
	{
		"id": 647,
		"name": "keldeo-ordinary",
		"weight": 485,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png",
		"forms": [
			{
				"name": "keldeo-ordinary",
				"url": "https://pokeapi.co/api/v2/pokemon-form/647/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/647.png"
	},
	{
		"id": 648,
		"name": "meloetta-aria",
		"weight": 65,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png",
		"forms": [
			{
				"name": "meloetta-aria",
				"url": "https://pokeapi.co/api/v2/pokemon-form/648/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/648.png"
	},
	{
		"id": 649,
		"name": "genesect",
		"weight": 825,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png",
		"forms": [
			{
				"name": "genesect-chill",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10078/"
			},
			{
				"name": "genesect-burn",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10077/"
			},
			{
				"name": "genesect-shock",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10076/"
			},
			{
				"name": "genesect-douse",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10075/"
			},
			{
				"name": "genesect",
				"url": "https://pokeapi.co/api/v2/pokemon-form/649/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/649.png"
	},
	{
		"id": 650,
		"name": "chespin",
		"weight": 90,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
		"forms": [
			{
				"name": "chespin",
				"url": "https://pokeapi.co/api/v2/pokemon-form/650/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/650.png"
	},
	{
		"id": 651,
		"name": "quilladin",
		"weight": 290,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png",
		"forms": [
			{
				"name": "quilladin",
				"url": "https://pokeapi.co/api/v2/pokemon-form/651/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/651.png"
	},
	{
		"id": 652,
		"name": "chesnaught",
		"weight": 900,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png",
		"forms": [
			{
				"name": "chesnaught",
				"url": "https://pokeapi.co/api/v2/pokemon-form/652/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/652.png"
	},
	{
		"id": 653,
		"name": "fennekin",
		"weight": 94,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
		"forms": [
			{
				"name": "fennekin",
				"url": "https://pokeapi.co/api/v2/pokemon-form/653/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/653.png"
	},
	{
		"id": 654,
		"name": "braixen",
		"weight": 145,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png",
		"forms": [
			{
				"name": "braixen",
				"url": "https://pokeapi.co/api/v2/pokemon-form/654/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/654.png"
	},
	{
		"id": 655,
		"name": "delphox",
		"weight": 390,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
		"forms": [
			{
				"name": "delphox",
				"url": "https://pokeapi.co/api/v2/pokemon-form/655/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/655.png"
	},
	{
		"id": 656,
		"name": "froakie",
		"weight": 70,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
		"forms": [
			{
				"name": "froakie",
				"url": "https://pokeapi.co/api/v2/pokemon-form/656/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/656.png"
	},
	{
		"id": 657,
		"name": "frogadier",
		"weight": 109,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png",
		"forms": [
			{
				"name": "frogadier",
				"url": "https://pokeapi.co/api/v2/pokemon-form/657/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/657.png"
	},
	{
		"id": 658,
		"name": "greninja",
		"weight": 400,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
		"forms": [
			{
				"name": "greninja",
				"url": "https://pokeapi.co/api/v2/pokemon-form/658/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png"
	},
	{
		"id": 659,
		"name": "bunnelby",
		"weight": 50,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png",
		"forms": [
			{
				"name": "bunnelby",
				"url": "https://pokeapi.co/api/v2/pokemon-form/659/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/659.png"
	},
	{
		"id": 660,
		"name": "diggersby",
		"weight": 424,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png",
		"forms": [
			{
				"name": "diggersby",
				"url": "https://pokeapi.co/api/v2/pokemon-form/660/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/660.png"
	},
	{
		"id": 661,
		"name": "fletchling",
		"weight": 17,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png",
		"forms": [
			{
				"name": "fletchling",
				"url": "https://pokeapi.co/api/v2/pokemon-form/661/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/661.png"
	},
	{
		"id": 662,
		"name": "fletchinder",
		"weight": 160,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png",
		"forms": [
			{
				"name": "fletchinder",
				"url": "https://pokeapi.co/api/v2/pokemon-form/662/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/662.png"
	},
	{
		"id": 663,
		"name": "talonflame",
		"weight": 245,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png",
		"forms": [
			{
				"name": "talonflame",
				"url": "https://pokeapi.co/api/v2/pokemon-form/663/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/663.png"
	},
	{
		"id": 664,
		"name": "scatterbug",
		"weight": 25,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png",
		"forms": [
			{
				"name": "scatterbug-icy-snow",
				"url": "https://pokeapi.co/api/v2/pokemon-form/664/"
			},
			{
				"name": "scatterbug-polar",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10271/"
			},
			{
				"name": "scatterbug-tundra",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10272/"
			},
			{
				"name": "scatterbug-continental",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10273/"
			},
			{
				"name": "scatterbug-garden",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10274/"
			},
			{
				"name": "scatterbug-elegant",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10275/"
			},
			{
				"name": "scatterbug-meadow",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10276/"
			},
			{
				"name": "scatterbug-modern",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10277/"
			},
			{
				"name": "scatterbug-marine",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10278/"
			},
			{
				"name": "scatterbug-archipelago",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10279/"
			},
			{
				"name": "scatterbug-high-plains",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10280/"
			},
			{
				"name": "scatterbug-sandstorm",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10281/"
			},
			{
				"name": "scatterbug-river",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10282/"
			},
			{
				"name": "scatterbug-monsoon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10283/"
			},
			{
				"name": "scatterbug-savanna",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10284/"
			},
			{
				"name": "scatterbug-sun",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10285/"
			},
			{
				"name": "scatterbug-ocean",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10286/"
			},
			{
				"name": "scatterbug-jungle",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10287/"
			},
			{
				"name": "scatterbug-fancy",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10288/"
			},
			{
				"name": "scatterbug-poke-ball",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10289/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/664.png"
	},
	{
		"id": 665,
		"name": "spewpa",
		"weight": 84,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png",
		"forms": [
			{
				"name": "spewpa-icy-snow",
				"url": "https://pokeapi.co/api/v2/pokemon-form/665/"
			},
			{
				"name": "spewpa-polar",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10290/"
			},
			{
				"name": "spewpa-tundra",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10291/"
			},
			{
				"name": "spewpa-continental",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10292/"
			},
			{
				"name": "spewpa-garden",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10293/"
			},
			{
				"name": "spewpa-elegant",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10294/"
			},
			{
				"name": "spewpa-meadow",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10295/"
			},
			{
				"name": "spewpa-modern",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10296/"
			},
			{
				"name": "spewpa-marine",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10297/"
			},
			{
				"name": "spewpa-archipelago",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10298/"
			},
			{
				"name": "spewpa-high-plains",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10299/"
			},
			{
				"name": "spewpa-sandstorm",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10300/"
			},
			{
				"name": "spewpa-river",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10301/"
			},
			{
				"name": "spewpa-monsoon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10302/"
			},
			{
				"name": "spewpa-savanna",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10303/"
			},
			{
				"name": "spewpa-sun",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10304/"
			},
			{
				"name": "spewpa-ocean",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10305/"
			},
			{
				"name": "spewpa-jungle",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10306/"
			},
			{
				"name": "spewpa-fancy",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10307/"
			},
			{
				"name": "spewpa-poke-ball",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10308/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/665.png"
	},
	{
		"id": 666,
		"name": "vivillon",
		"weight": 170,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png",
		"forms": [
			{
				"name": "vivillon-meadow",
				"url": "https://pokeapi.co/api/v2/pokemon-form/666/"
			},
			{
				"name": "vivillon-icy-snow",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10086/"
			},
			{
				"name": "vivillon-polar",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10087/"
			},
			{
				"name": "vivillon-tundra",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10088/"
			},
			{
				"name": "vivillon-continental",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10089/"
			},
			{
				"name": "vivillon-garden",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10090/"
			},
			{
				"name": "vivillon-elegant",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10091/"
			},
			{
				"name": "vivillon-modern",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10092/"
			},
			{
				"name": "vivillon-marine",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10093/"
			},
			{
				"name": "vivillon-archipelago",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10094/"
			},
			{
				"name": "vivillon-high-plains",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10095/"
			},
			{
				"name": "vivillon-sandstorm",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10096/"
			},
			{
				"name": "vivillon-river",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10097/"
			},
			{
				"name": "vivillon-monsoon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10098/"
			},
			{
				"name": "vivillon-savanna",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10099/"
			},
			{
				"name": "vivillon-sun",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10100/"
			},
			{
				"name": "vivillon-ocean",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10101/"
			},
			{
				"name": "vivillon-jungle",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10102/"
			},
			{
				"name": "vivillon-fancy",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10161/"
			},
			{
				"name": "vivillon-poke-ball",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10162/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/666.png"
	},
	{
		"id": 667,
		"name": "litleo",
		"weight": 135,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png",
		"forms": [
			{
				"name": "litleo",
				"url": "https://pokeapi.co/api/v2/pokemon-form/667/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/667.png"
	},
	{
		"id": 668,
		"name": "pyroar",
		"weight": 815,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png",
		"forms": [
			{
				"name": "pyroar",
				"url": "https://pokeapi.co/api/v2/pokemon-form/668/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/668.png"
	},
	{
		"id": 669,
		"name": "flabebe",
		"weight": 1,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png",
		"forms": [
			{
				"name": "flabebe-white",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10106/"
			},
			{
				"name": "flabebe-blue",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10105/"
			},
			{
				"name": "flabebe-orange",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10104/"
			},
			{
				"name": "flabebe-yellow",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10103/"
			},
			{
				"name": "flabebe-red",
				"url": "https://pokeapi.co/api/v2/pokemon-form/669/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/669.png"
	},
	{
		"id": 670,
		"name": "floette",
		"weight": 9,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png",
		"forms": [
			{
				"name": "floette-white",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10110/"
			},
			{
				"name": "floette-blue",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10109/"
			},
			{
				"name": "floette-orange",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10108/"
			},
			{
				"name": "floette-yellow",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10107/"
			},
			{
				"name": "floette-red",
				"url": "https://pokeapi.co/api/v2/pokemon-form/670/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/670.png"
	},
	{
		"id": 671,
		"name": "florges",
		"weight": 100,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png",
		"forms": [
			{
				"name": "florges-white",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10114/"
			},
			{
				"name": "florges-blue",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10113/"
			},
			{
				"name": "florges-orange",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10112/"
			},
			{
				"name": "florges-yellow",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10111/"
			},
			{
				"name": "florges-red",
				"url": "https://pokeapi.co/api/v2/pokemon-form/671/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/671.png"
	},
	{
		"id": 672,
		"name": "skiddo",
		"weight": 310,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png",
		"forms": [
			{
				"name": "skiddo",
				"url": "https://pokeapi.co/api/v2/pokemon-form/672/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/672.png"
	},
	{
		"id": 673,
		"name": "gogoat",
		"weight": 910,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png",
		"forms": [
			{
				"name": "gogoat",
				"url": "https://pokeapi.co/api/v2/pokemon-form/673/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/673.png"
	},
	{
		"id": 674,
		"name": "pancham",
		"weight": 80,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png",
		"forms": [
			{
				"name": "pancham",
				"url": "https://pokeapi.co/api/v2/pokemon-form/674/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/674.png"
	},
	{
		"id": 675,
		"name": "pangoro",
		"weight": 1360,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png",
		"forms": [
			{
				"name": "pangoro",
				"url": "https://pokeapi.co/api/v2/pokemon-form/675/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/675.png"
	},
	{
		"id": 676,
		"name": "furfrou",
		"weight": 280,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png",
		"forms": [
			{
				"name": "furfrou-pharaoh",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10123/"
			},
			{
				"name": "furfrou-kabuki",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10122/"
			},
			{
				"name": "furfrou-la-reine",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10121/"
			},
			{
				"name": "furfrou-dandy",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10120/"
			},
			{
				"name": "furfrou-matron",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10119/"
			},
			{
				"name": "furfrou-debutante",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10118/"
			},
			{
				"name": "furfrou-diamond",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10117/"
			},
			{
				"name": "furfrou-star",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10116/"
			},
			{
				"name": "furfrou-heart",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10115/"
			},
			{
				"name": "furfrou-natural",
				"url": "https://pokeapi.co/api/v2/pokemon-form/676/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/676.png"
	},
	{
		"id": 677,
		"name": "espurr",
		"weight": 35,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png",
		"forms": [
			{
				"name": "espurr",
				"url": "https://pokeapi.co/api/v2/pokemon-form/677/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/677.png"
	},
	{
		"id": 678,
		"name": "meowstic-male",
		"weight": 85,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png",
		"forms": [
			{
				"name": "meowstic-male",
				"url": "https://pokeapi.co/api/v2/pokemon-form/678/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/678.png"
	},
	{
		"id": 679,
		"name": "honedge",
		"weight": 20,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png",
		"forms": [
			{
				"name": "honedge",
				"url": "https://pokeapi.co/api/v2/pokemon-form/679/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/679.png"
	},
	{
		"id": 680,
		"name": "doublade",
		"weight": 45,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png",
		"forms": [
			{
				"name": "doublade",
				"url": "https://pokeapi.co/api/v2/pokemon-form/680/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/680.png"
	},
	{
		"id": 681,
		"name": "aegislash-shield",
		"weight": 530,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png",
		"forms": [
			{
				"name": "aegislash-shield",
				"url": "https://pokeapi.co/api/v2/pokemon-form/681/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png"
	},
	{
		"id": 682,
		"name": "spritzee",
		"weight": 5,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png",
		"forms": [
			{
				"name": "spritzee",
				"url": "https://pokeapi.co/api/v2/pokemon-form/682/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/682.png"
	},
	{
		"id": 683,
		"name": "aromatisse",
		"weight": 155,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png",
		"forms": [
			{
				"name": "aromatisse",
				"url": "https://pokeapi.co/api/v2/pokemon-form/683/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/683.png"
	},
	{
		"id": 684,
		"name": "swirlix",
		"weight": 35,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png",
		"forms": [
			{
				"name": "swirlix",
				"url": "https://pokeapi.co/api/v2/pokemon-form/684/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/684.png"
	},
	{
		"id": 685,
		"name": "slurpuff",
		"weight": 50,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png",
		"forms": [
			{
				"name": "slurpuff",
				"url": "https://pokeapi.co/api/v2/pokemon-form/685/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/685.png"
	},
	{
		"id": 686,
		"name": "inkay",
		"weight": 35,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png",
		"forms": [
			{
				"name": "inkay",
				"url": "https://pokeapi.co/api/v2/pokemon-form/686/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/686.png"
	},
	{
		"id": 687,
		"name": "malamar",
		"weight": 470,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png",
		"forms": [
			{
				"name": "malamar",
				"url": "https://pokeapi.co/api/v2/pokemon-form/687/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/687.png"
	},
	{
		"id": 688,
		"name": "binacle",
		"weight": 310,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png",
		"forms": [
			{
				"name": "binacle",
				"url": "https://pokeapi.co/api/v2/pokemon-form/688/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/688.png"
	},
	{
		"id": 689,
		"name": "barbaracle",
		"weight": 960,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png",
		"forms": [
			{
				"name": "barbaracle",
				"url": "https://pokeapi.co/api/v2/pokemon-form/689/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/689.png"
	},
	{
		"id": 690,
		"name": "skrelp",
		"weight": 73,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png",
		"forms": [
			{
				"name": "skrelp",
				"url": "https://pokeapi.co/api/v2/pokemon-form/690/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/690.png"
	},
	{
		"id": 691,
		"name": "dragalge",
		"weight": 815,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png",
		"forms": [
			{
				"name": "dragalge",
				"url": "https://pokeapi.co/api/v2/pokemon-form/691/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/691.png"
	},
	{
		"id": 692,
		"name": "clauncher",
		"weight": 83,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png",
		"forms": [
			{
				"name": "clauncher",
				"url": "https://pokeapi.co/api/v2/pokemon-form/692/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/692.png"
	},
	{
		"id": 693,
		"name": "clawitzer",
		"weight": 353,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png",
		"forms": [
			{
				"name": "clawitzer",
				"url": "https://pokeapi.co/api/v2/pokemon-form/693/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/693.png"
	},
	{
		"id": 694,
		"name": "helioptile",
		"weight": 60,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png",
		"forms": [
			{
				"name": "helioptile",
				"url": "https://pokeapi.co/api/v2/pokemon-form/694/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/694.png"
	},
	{
		"id": 695,
		"name": "heliolisk",
		"weight": 210,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png",
		"forms": [
			{
				"name": "heliolisk",
				"url": "https://pokeapi.co/api/v2/pokemon-form/695/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/695.png"
	},
	{
		"id": 696,
		"name": "tyrunt",
		"weight": 260,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png",
		"forms": [
			{
				"name": "tyrunt",
				"url": "https://pokeapi.co/api/v2/pokemon-form/696/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/696.png"
	},
	{
		"id": 697,
		"name": "tyrantrum",
		"weight": 2700,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png",
		"forms": [
			{
				"name": "tyrantrum",
				"url": "https://pokeapi.co/api/v2/pokemon-form/697/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/697.png"
	},
	{
		"id": 698,
		"name": "amaura",
		"weight": 252,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png",
		"forms": [
			{
				"name": "amaura",
				"url": "https://pokeapi.co/api/v2/pokemon-form/698/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/698.png"
	},
	{
		"id": 699,
		"name": "aurorus",
		"weight": 2250,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png",
		"forms": [
			{
				"name": "aurorus",
				"url": "https://pokeapi.co/api/v2/pokemon-form/699/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/699.png"
	},
	{
		"id": 700,
		"name": "sylveon",
		"weight": 235,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
		"forms": [
			{
				"name": "sylveon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/700/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png"
	},
	{
		"id": 701,
		"name": "hawlucha",
		"weight": 215,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png",
		"forms": [
			{
				"name": "hawlucha",
				"url": "https://pokeapi.co/api/v2/pokemon-form/701/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/701.png"
	},
	{
		"id": 702,
		"name": "dedenne",
		"weight": 22,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png",
		"forms": [
			{
				"name": "dedenne",
				"url": "https://pokeapi.co/api/v2/pokemon-form/702/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/702.png"
	},
	{
		"id": 703,
		"name": "carbink",
		"weight": 57,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png",
		"forms": [
			{
				"name": "carbink",
				"url": "https://pokeapi.co/api/v2/pokemon-form/703/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/703.png"
	},
	{
		"id": 704,
		"name": "goomy",
		"weight": 28,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png",
		"forms": [
			{
				"name": "goomy",
				"url": "https://pokeapi.co/api/v2/pokemon-form/704/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/704.png"
	},
	{
		"id": 705,
		"name": "sliggoo",
		"weight": 175,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png",
		"forms": [
			{
				"name": "sliggoo",
				"url": "https://pokeapi.co/api/v2/pokemon-form/705/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/705.png"
	},
	{
		"id": 706,
		"name": "goodra",
		"weight": 1505,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png",
		"forms": [
			{
				"name": "goodra",
				"url": "https://pokeapi.co/api/v2/pokemon-form/706/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png"
	},
	{
		"id": 707,
		"name": "klefki",
		"weight": 30,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png",
		"forms": [
			{
				"name": "klefki",
				"url": "https://pokeapi.co/api/v2/pokemon-form/707/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/707.png"
	},
	{
		"id": 708,
		"name": "phantump",
		"weight": 70,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png",
		"forms": [
			{
				"name": "phantump",
				"url": "https://pokeapi.co/api/v2/pokemon-form/708/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/708.png"
	},
	{
		"id": 709,
		"name": "trevenant",
		"weight": 710,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png",
		"forms": [
			{
				"name": "trevenant",
				"url": "https://pokeapi.co/api/v2/pokemon-form/709/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/709.png"
	},
	{
		"id": 710,
		"name": "pumpkaboo-average",
		"weight": 50,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png",
		"forms": [
			{
				"name": "pumpkaboo-average",
				"url": "https://pokeapi.co/api/v2/pokemon-form/710/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/710.png"
	},
	{
		"id": 711,
		"name": "gourgeist-average",
		"weight": 125,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png",
		"forms": [
			{
				"name": "gourgeist-average",
				"url": "https://pokeapi.co/api/v2/pokemon-form/711/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/711.png"
	},
	{
		"id": 712,
		"name": "bergmite",
		"weight": 995,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png",
		"forms": [
			{
				"name": "bergmite",
				"url": "https://pokeapi.co/api/v2/pokemon-form/712/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/712.png"
	},
	{
		"id": 713,
		"name": "avalugg",
		"weight": 5050,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png",
		"forms": [
			{
				"name": "avalugg",
				"url": "https://pokeapi.co/api/v2/pokemon-form/713/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/713.png"
	},
	{
		"id": 714,
		"name": "noibat",
		"weight": 80,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png",
		"forms": [
			{
				"name": "noibat",
				"url": "https://pokeapi.co/api/v2/pokemon-form/714/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/714.png"
	},
	{
		"id": 715,
		"name": "noivern",
		"weight": 850,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png",
		"forms": [
			{
				"name": "noivern",
				"url": "https://pokeapi.co/api/v2/pokemon-form/715/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/715.png"
	},
	{
		"id": 716,
		"name": "xerneas",
		"weight": 2150,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png",
		"forms": [
			{
				"name": "xerneas-neutral",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10132/"
			},
			{
				"name": "xerneas-active",
				"url": "https://pokeapi.co/api/v2/pokemon-form/716/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png"
	},
	{
		"id": 717,
		"name": "yveltal",
		"weight": 2030,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png",
		"forms": [
			{
				"name": "yveltal",
				"url": "https://pokeapi.co/api/v2/pokemon-form/717/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/717.png"
	},
	{
		"id": 718,
		"name": "zygarde",
		"weight": 3050,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png",
		"forms": [
			{
				"name": "zygarde",
				"url": "https://pokeapi.co/api/v2/pokemon-form/718/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/718.png"
	},
	{
		"id": 719,
		"name": "diancie",
		"weight": 88,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png",
		"forms": [
			{
				"name": "diancie",
				"url": "https://pokeapi.co/api/v2/pokemon-form/719/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/719.png"
	},
	{
		"id": 720,
		"name": "hoopa",
		"weight": 90,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png",
		"forms": [
			{
				"name": "hoopa",
				"url": "https://pokeapi.co/api/v2/pokemon-form/720/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/720.png"
	},
	{
		"id": 721,
		"name": "volcanion",
		"weight": 1950,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png",
		"forms": [
			{
				"name": "volcanion",
				"url": "https://pokeapi.co/api/v2/pokemon-form/721/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/721.png"
	},
	{
		"id": 722,
		"name": "rowlet",
		"weight": 15,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png",
		"forms": [
			{
				"name": "rowlet",
				"url": "https://pokeapi.co/api/v2/pokemon-form/722/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png"
	},
	{
		"id": 723,
		"name": "dartrix",
		"weight": 160,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png",
		"forms": [
			{
				"name": "dartrix",
				"url": "https://pokeapi.co/api/v2/pokemon-form/723/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/723.png"
	},
	{
		"id": 724,
		"name": "decidueye",
		"weight": 366,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png",
		"forms": [
			{
				"name": "decidueye",
				"url": "https://pokeapi.co/api/v2/pokemon-form/724/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/724.png"
	},
	{
		"id": 725,
		"name": "litten",
		"weight": 43,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png",
		"forms": [
			{
				"name": "litten",
				"url": "https://pokeapi.co/api/v2/pokemon-form/725/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/725.png"
	},
	{
		"id": 726,
		"name": "torracat",
		"weight": 250,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png",
		"forms": [
			{
				"name": "torracat",
				"url": "https://pokeapi.co/api/v2/pokemon-form/726/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/726.png"
	},
	{
		"id": 727,
		"name": "incineroar",
		"weight": 830,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
		"forms": [
			{
				"name": "incineroar",
				"url": "https://pokeapi.co/api/v2/pokemon-form/727/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png"
	},
	{
		"id": 728,
		"name": "popplio",
		"weight": 75,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png",
		"forms": [
			{
				"name": "popplio",
				"url": "https://pokeapi.co/api/v2/pokemon-form/728/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/728.png"
	},
	{
		"id": 729,
		"name": "brionne",
		"weight": 175,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png",
		"forms": [
			{
				"name": "brionne",
				"url": "https://pokeapi.co/api/v2/pokemon-form/729/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/729.png"
	},
	{
		"id": 730,
		"name": "primarina",
		"weight": 440,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png",
		"forms": [
			{
				"name": "primarina",
				"url": "https://pokeapi.co/api/v2/pokemon-form/730/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png"
	},
	{
		"id": 731,
		"name": "pikipek",
		"weight": 12,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png",
		"forms": [
			{
				"name": "pikipek",
				"url": "https://pokeapi.co/api/v2/pokemon-form/731/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/731.png"
	},
	{
		"id": 732,
		"name": "trumbeak",
		"weight": 148,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png",
		"forms": [
			{
				"name": "trumbeak",
				"url": "https://pokeapi.co/api/v2/pokemon-form/732/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/732.png"
	},
	{
		"id": 733,
		"name": "toucannon",
		"weight": 260,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png",
		"forms": [
			{
				"name": "toucannon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/733/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/733.png"
	},
	{
		"id": 734,
		"name": "yungoos",
		"weight": 60,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png",
		"forms": [
			{
				"name": "yungoos",
				"url": "https://pokeapi.co/api/v2/pokemon-form/734/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/734.png"
	},
	{
		"id": 735,
		"name": "gumshoos",
		"weight": 142,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png",
		"forms": [
			{
				"name": "gumshoos",
				"url": "https://pokeapi.co/api/v2/pokemon-form/735/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/735.png"
	},
	{
		"id": 736,
		"name": "grubbin",
		"weight": 44,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png",
		"forms": [
			{
				"name": "grubbin",
				"url": "https://pokeapi.co/api/v2/pokemon-form/736/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/736.png"
	},
	{
		"id": 737,
		"name": "charjabug",
		"weight": 105,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png",
		"forms": [
			{
				"name": "charjabug",
				"url": "https://pokeapi.co/api/v2/pokemon-form/737/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/737.png"
	},
	{
		"id": 738,
		"name": "vikavolt",
		"weight": 450,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png",
		"forms": [
			{
				"name": "vikavolt",
				"url": "https://pokeapi.co/api/v2/pokemon-form/738/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/738.png"
	},
	{
		"id": 739,
		"name": "crabrawler",
		"weight": 70,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png",
		"forms": [
			{
				"name": "crabrawler",
				"url": "https://pokeapi.co/api/v2/pokemon-form/739/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/739.png"
	},
	{
		"id": 740,
		"name": "crabominable",
		"weight": 1800,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png",
		"forms": [
			{
				"name": "crabominable",
				"url": "https://pokeapi.co/api/v2/pokemon-form/740/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/740.png"
	},
	{
		"id": 741,
		"name": "oricorio-baile",
		"weight": 34,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png",
		"forms": [
			{
				"name": "oricorio-baile",
				"url": "https://pokeapi.co/api/v2/pokemon-form/741/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/741.png"
	},
	{
		"id": 742,
		"name": "cutiefly",
		"weight": 2,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png",
		"forms": [
			{
				"name": "cutiefly",
				"url": "https://pokeapi.co/api/v2/pokemon-form/742/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/742.png"
	},
	{
		"id": 743,
		"name": "ribombee",
		"weight": 5,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png",
		"forms": [
			{
				"name": "ribombee",
				"url": "https://pokeapi.co/api/v2/pokemon-form/743/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/743.png"
	},
	{
		"id": 744,
		"name": "rockruff",
		"weight": 92,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png",
		"forms": [
			{
				"name": "rockruff",
				"url": "https://pokeapi.co/api/v2/pokemon-form/744/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png"
	},
	{
		"id": 745,
		"name": "lycanroc-midday",
		"weight": 250,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png",
		"forms": [
			{
				"name": "lycanroc-midday",
				"url": "https://pokeapi.co/api/v2/pokemon-form/745/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/745.png"
	},
	{
		"id": 746,
		"name": "wishiwashi-solo",
		"weight": 3,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png",
		"forms": [
			{
				"name": "wishiwashi-solo",
				"url": "https://pokeapi.co/api/v2/pokemon-form/746/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/746.png"
	},
	{
		"id": 747,
		"name": "mareanie",
		"weight": 80,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png",
		"forms": [
			{
				"name": "mareanie",
				"url": "https://pokeapi.co/api/v2/pokemon-form/747/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/747.png"
	},
	{
		"id": 748,
		"name": "toxapex",
		"weight": 145,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png",
		"forms": [
			{
				"name": "toxapex",
				"url": "https://pokeapi.co/api/v2/pokemon-form/748/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/748.png"
	},
	{
		"id": 749,
		"name": "mudbray",
		"weight": 1100,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png",
		"forms": [
			{
				"name": "mudbray",
				"url": "https://pokeapi.co/api/v2/pokemon-form/749/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/749.png"
	},
	{
		"id": 750,
		"name": "mudsdale",
		"weight": 9200,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",
		"forms": [
			{
				"name": "mudsdale",
				"url": "https://pokeapi.co/api/v2/pokemon-form/750/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/750.png"
	},
	{
		"id": 751,
		"name": "dewpider",
		"weight": 40,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png",
		"forms": [
			{
				"name": "dewpider",
				"url": "https://pokeapi.co/api/v2/pokemon-form/751/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/751.png"
	},
	{
		"id": 752,
		"name": "araquanid",
		"weight": 820,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png",
		"forms": [
			{
				"name": "araquanid",
				"url": "https://pokeapi.co/api/v2/pokemon-form/752/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/752.png"
	},
	{
		"id": 753,
		"name": "fomantis",
		"weight": 15,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png",
		"forms": [
			{
				"name": "fomantis",
				"url": "https://pokeapi.co/api/v2/pokemon-form/753/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/753.png"
	},
	{
		"id": 754,
		"name": "lurantis",
		"weight": 185,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png",
		"forms": [
			{
				"name": "lurantis",
				"url": "https://pokeapi.co/api/v2/pokemon-form/754/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/754.png"
	},
	{
		"id": 755,
		"name": "morelull",
		"weight": 15,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png",
		"forms": [
			{
				"name": "morelull",
				"url": "https://pokeapi.co/api/v2/pokemon-form/755/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/755.png"
	},
	{
		"id": 756,
		"name": "shiinotic",
		"weight": 115,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png",
		"forms": [
			{
				"name": "shiinotic",
				"url": "https://pokeapi.co/api/v2/pokemon-form/756/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/756.png"
	},
	{
		"id": 757,
		"name": "salandit",
		"weight": 48,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png",
		"forms": [
			{
				"name": "salandit",
				"url": "https://pokeapi.co/api/v2/pokemon-form/757/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/757.png"
	},
	{
		"id": 758,
		"name": "salazzle",
		"weight": 222,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png",
		"forms": [
			{
				"name": "salazzle",
				"url": "https://pokeapi.co/api/v2/pokemon-form/758/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/758.png"
	},
	{
		"id": 759,
		"name": "stufful",
		"weight": 68,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png",
		"forms": [
			{
				"name": "stufful",
				"url": "https://pokeapi.co/api/v2/pokemon-form/759/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/759.png"
	},
	{
		"id": 760,
		"name": "bewear",
		"weight": 1350,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png",
		"forms": [
			{
				"name": "bewear",
				"url": "https://pokeapi.co/api/v2/pokemon-form/760/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/760.png"
	},
	{
		"id": 761,
		"name": "bounsweet",
		"weight": 32,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png",
		"forms": [
			{
				"name": "bounsweet",
				"url": "https://pokeapi.co/api/v2/pokemon-form/761/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/761.png"
	},
	{
		"id": 762,
		"name": "steenee",
		"weight": 82,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png",
		"forms": [
			{
				"name": "steenee",
				"url": "https://pokeapi.co/api/v2/pokemon-form/762/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/762.png"
	},
	{
		"id": 763,
		"name": "tsareena",
		"weight": 214,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png",
		"forms": [
			{
				"name": "tsareena",
				"url": "https://pokeapi.co/api/v2/pokemon-form/763/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/763.png"
	},
	{
		"id": 764,
		"name": "comfey",
		"weight": 3,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png",
		"forms": [
			{
				"name": "comfey",
				"url": "https://pokeapi.co/api/v2/pokemon-form/764/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/764.png"
	},
	{
		"id": 765,
		"name": "oranguru",
		"weight": 760,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png",
		"forms": [
			{
				"name": "oranguru",
				"url": "https://pokeapi.co/api/v2/pokemon-form/765/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/765.png"
	},
	{
		"id": 766,
		"name": "passimian",
		"weight": 828,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png",
		"forms": [
			{
				"name": "passimian",
				"url": "https://pokeapi.co/api/v2/pokemon-form/766/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/766.png"
	},
	{
		"id": 767,
		"name": "wimpod",
		"weight": 120,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png",
		"forms": [
			{
				"name": "wimpod",
				"url": "https://pokeapi.co/api/v2/pokemon-form/767/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/767.png"
	},
	{
		"id": 768,
		"name": "golisopod",
		"weight": 1080,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png",
		"forms": [
			{
				"name": "golisopod",
				"url": "https://pokeapi.co/api/v2/pokemon-form/768/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/768.png"
	},
	{
		"id": 769,
		"name": "sandygast",
		"weight": 700,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png",
		"forms": [
			{
				"name": "sandygast",
				"url": "https://pokeapi.co/api/v2/pokemon-form/769/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/769.png"
	},
	{
		"id": 770,
		"name": "palossand",
		"weight": 2500,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png",
		"forms": [
			{
				"name": "palossand",
				"url": "https://pokeapi.co/api/v2/pokemon-form/770/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/770.png"
	},
	{
		"id": 771,
		"name": "pyukumuku",
		"weight": 12,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png",
		"forms": [
			{
				"name": "pyukumuku",
				"url": "https://pokeapi.co/api/v2/pokemon-form/771/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/771.png"
	},
	{
		"id": 772,
		"name": "type-null",
		"weight": 1205,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png",
		"forms": [
			{
				"name": "type-null",
				"url": "https://pokeapi.co/api/v2/pokemon-form/772/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/772.png"
	},
	{
		"id": 773,
		"name": "silvally",
		"weight": 1005,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png",
		"forms": [
			{
				"name": "silvally-normal",
				"url": "https://pokeapi.co/api/v2/pokemon-form/773/"
			},
			{
				"name": "silvally-fighting",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10232/"
			},
			{
				"name": "silvally-flying",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10233/"
			},
			{
				"name": "silvally-poison",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10234/"
			},
			{
				"name": "silvally-ground",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10235/"
			},
			{
				"name": "silvally-rock",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10236/"
			},
			{
				"name": "silvally-bug",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10237/"
			},
			{
				"name": "silvally-ghost",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10238/"
			},
			{
				"name": "silvally-steel",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10239/"
			},
			{
				"name": "silvally-fire",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10240/"
			},
			{
				"name": "silvally-water",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10241/"
			},
			{
				"name": "silvally-grass",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10242/"
			},
			{
				"name": "silvally-electric",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10243/"
			},
			{
				"name": "silvally-psychic",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10244/"
			},
			{
				"name": "silvally-ice",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10245/"
			},
			{
				"name": "silvally-dragon",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10246/"
			},
			{
				"name": "silvally-dark",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10247/"
			},
			{
				"name": "silvally-fairy",
				"url": "https://pokeapi.co/api/v2/pokemon-form/10248/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/773.png"
	},
	{
		"id": 774,
		"name": "minior-red-meteor",
		"weight": 400,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png",
		"forms": [
			{
				"name": "minior-red-meteor",
				"url": "https://pokeapi.co/api/v2/pokemon-form/774/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/774.png"
	},
	{
		"id": 775,
		"name": "komala",
		"weight": 199,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png",
		"forms": [
			{
				"name": "komala",
				"url": "https://pokeapi.co/api/v2/pokemon-form/775/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/775.png"
	},
	{
		"id": 776,
		"name": "turtonator",
		"weight": 2120,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png",
		"forms": [
			{
				"name": "turtonator",
				"url": "https://pokeapi.co/api/v2/pokemon-form/776/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/776.png"
	},
	{
		"id": 777,
		"name": "togedemaru",
		"weight": 33,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png",
		"forms": [
			{
				"name": "togedemaru",
				"url": "https://pokeapi.co/api/v2/pokemon-form/777/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/777.png"
	},
	{
		"id": 778,
		"name": "mimikyu-disguised",
		"weight": 7,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
		"forms": [
			{
				"name": "mimikyu-disguised",
				"url": "https://pokeapi.co/api/v2/pokemon-form/778/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png"
	},
	{
		"id": 779,
		"name": "bruxish",
		"weight": 190,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png",
		"forms": [
			{
				"name": "bruxish",
				"url": "https://pokeapi.co/api/v2/pokemon-form/779/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/779.png"
	},
	{
		"id": 780,
		"name": "drampa",
		"weight": 1850,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png",
		"forms": [
			{
				"name": "drampa",
				"url": "https://pokeapi.co/api/v2/pokemon-form/780/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/780.png"
	},
	{
		"id": 781,
		"name": "dhelmise",
		"weight": 2100,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png",
		"forms": [
			{
				"name": "dhelmise",
				"url": "https://pokeapi.co/api/v2/pokemon-form/781/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/781.png"
	},
	{
		"id": 782,
		"name": "jangmo-o",
		"weight": 297,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png",
		"forms": [
			{
				"name": "jangmo-o",
				"url": "https://pokeapi.co/api/v2/pokemon-form/782/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/782.png"
	},
	{
		"id": 783,
		"name": "hakamo-o",
		"weight": 470,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png",
		"forms": [
			{
				"name": "hakamo-o",
				"url": "https://pokeapi.co/api/v2/pokemon-form/783/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/783.png"
	},
	{
		"id": 784,
		"name": "kommo-o",
		"weight": 782,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png",
		"forms": [
			{
				"name": "kommo-o",
				"url": "https://pokeapi.co/api/v2/pokemon-form/784/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/784.png"
	},
	{
		"id": 785,
		"name": "tapu-koko",
		"weight": 205,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png",
		"forms": [
			{
				"name": "tapu-koko",
				"url": "https://pokeapi.co/api/v2/pokemon-form/785/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/785.png"
	},
	{
		"id": 786,
		"name": "tapu-lele",
		"weight": 186,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png",
		"forms": [
			{
				"name": "tapu-lele",
				"url": "https://pokeapi.co/api/v2/pokemon-form/786/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/786.png"
	},
	{
		"id": 787,
		"name": "tapu-bulu",
		"weight": 455,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png",
		"forms": [
			{
				"name": "tapu-bulu",
				"url": "https://pokeapi.co/api/v2/pokemon-form/787/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/787.png"
	},
	{
		"id": 788,
		"name": "tapu-fini",
		"weight": 212,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png",
		"forms": [
			{
				"name": "tapu-fini",
				"url": "https://pokeapi.co/api/v2/pokemon-form/788/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/788.png"
	},
	{
		"id": 789,
		"name": "cosmog",
		"weight": 1,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png",
		"forms": [
			{
				"name": "cosmog",
				"url": "https://pokeapi.co/api/v2/pokemon-form/789/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/789.png"
	},
	{
		"id": 790,
		"name": "cosmoem",
		"weight": 9999,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png",
		"forms": [
			{
				"name": "cosmoem",
				"url": "https://pokeapi.co/api/v2/pokemon-form/790/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/790.png"
	},
	{
		"id": 791,
		"name": "solgaleo",
		"weight": 2300,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png",
		"forms": [
			{
				"name": "solgaleo",
				"url": "https://pokeapi.co/api/v2/pokemon-form/791/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png"
	},
	{
		"id": 792,
		"name": "lunala",
		"weight": 1200,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png",
		"forms": [
			{
				"name": "lunala",
				"url": "https://pokeapi.co/api/v2/pokemon-form/792/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/792.png"
	},
	{
		"id": 793,
		"name": "nihilego",
		"weight": 555,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png",
		"forms": [
			{
				"name": "nihilego",
				"url": "https://pokeapi.co/api/v2/pokemon-form/793/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/793.png"
	},
	{
		"id": 794,
		"name": "buzzwole",
		"weight": 3336,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png",
		"forms": [
			{
				"name": "buzzwole",
				"url": "https://pokeapi.co/api/v2/pokemon-form/794/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/794.png"
	},
	{
		"id": 795,
		"name": "pheromosa",
		"weight": 250,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png",
		"forms": [
			{
				"name": "pheromosa",
				"url": "https://pokeapi.co/api/v2/pokemon-form/795/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/795.png"
	},
	{
		"id": 796,
		"name": "xurkitree",
		"weight": 1000,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png",
		"forms": [
			{
				"name": "xurkitree",
				"url": "https://pokeapi.co/api/v2/pokemon-form/796/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/796.png"
	},
	{
		"id": 797,
		"name": "celesteela",
		"weight": 9999,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png",
		"forms": [
			{
				"name": "celesteela",
				"url": "https://pokeapi.co/api/v2/pokemon-form/797/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/797.png"
	},
	{
		"id": 798,
		"name": "kartana",
		"weight": 1,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png",
		"forms": [
			{
				"name": "kartana",
				"url": "https://pokeapi.co/api/v2/pokemon-form/798/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/798.png"
	},
	{
		"id": 799,
		"name": "guzzlord",
		"weight": 8880,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png",
		"forms": [
			{
				"name": "guzzlord",
				"url": "https://pokeapi.co/api/v2/pokemon-form/799/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/799.png"
	},
	{
		"id": 800,
		"name": "necrozma",
		"weight": 2300,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png",
		"forms": [
			{
				"name": "necrozma",
				"url": "https://pokeapi.co/api/v2/pokemon-form/800/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/800.png"
	},
	{
		"id": 801,
		"name": "magearna",
		"weight": 805,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png",
		"forms": [
			{
				"name": "magearna",
				"url": "https://pokeapi.co/api/v2/pokemon-form/801/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/801.png"
	},
	{
		"id": 802,
		"name": "marshadow",
		"weight": 222,
		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png",
		"forms": [
			{
				"name": "marshadow",
				"url": "https://pokeapi.co/api/v2/pokemon-form/802/"
			}
		],
		"imageHQ": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/802.png"
	}
]; export default POKEMONS;