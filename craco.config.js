const CracoAlias = require("craco-alias");

const pathConfig = {
	"@App": "./src/components/App/view/index",
	"@Store": "./src/Store/store.js",
	"@APIutils": "./src/utils/API",
	"@ErrorBoundary": "./src/utils/ErrorBoundary",
	"@pokemonDataArray": "./src/utils/pokemonDataArray",
	"@ImageContainer": "./src/components/ImageContainer/ImageContainer",
	"@MainContainer": "./src/components/MainContainer/mainContainer",
	"@HeaderLine": "./src/components/HeaderLine/HeaderLine",
	"@Search": "./src/components/Search/Search",
	"@DetailedPage": "./src/components/DetailedPage/DetailedPage",
	"@Abilities": "./src/components/DetailedPage/Abilities",
	"@Stats": "./src/components/DetailedPage/Stats",
	"@EvolutionForms": "./src/components/DetailedPage/EvolutionForms",
	"@GetButton": "./src/components/GetButton/GetButton",
	"@PokemonCard": "./src/components/MainContainer/PokemonCard",
	"@Heading": "./src/components/MainContainer/Heading",
	"@Logo": "./src/components/MainContainer/Logo",
	"@Player": "./src/components/Player/Player",
	"@PokemonsPageAll": "./src/components/PokemonsPageAll/index",
	"@ListView": "./src/components/PokemonsPageAll/ListView",
	"@CatalogView": "./src/components/PokemonsPageAll/CatalogView",
	"@ErrorPage": "./src/components/ErrorPage/ErrorPage"
}

module.exports = {
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: "options",
				baseUrl: "./",
				aliases: pathConfig
			}
		}
	]
};