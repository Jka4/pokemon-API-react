const CracoAlias = require("craco-alias");

const pathConfig = {
	"@App": "./src/components/App/view/index",
	"@Store": "./src/Store/store.js",
	"@APIutils": "./src/components/utils/API",
	"@ErrorBoundary": "./src/components/utils/ErrorBoundary",
	"@pokemonDataArray": "./src/components/utils/pokemonDataArray",
	"@ImageContainer": "./src/components/ImageContainer/ImageContainer",
	"@MainContainer": "./src/components/MainContainer/MainContainer",
	"@HeaderLine": "./src/components/HeaderLine/HeaderLine",
	"@SearchInput": "./src/components/SearchInput/SearchInput",
	"@DetailedPage": "./src/components/DetailedPage/DetailedPage",
	"@GetButton": "./src/components/GetButton/GetButton",
	"@PokemonCard": "./src/components/MainContainer/PokemonCard",
	"@Heading": "./src/components/MainContainer/Heading",
	"@Logo": "./src/components/MainContainer/Logo",
	"@Player": "./src/components/Player/Player",
	"@AllPokemonsPage": "./src/components/AllPokemonsPage/AllPokemonsPage"
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