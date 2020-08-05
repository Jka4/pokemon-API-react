const CracoAlias = require("craco-alias");

const pathConfig = {
	"@GetButton": "./src/components/GetButton/GetButton",
	"@Store": "./src/store.js",
	"@APIutils": "./src/components/utils/API",
	"@pokemonDataArray": "./src/components/utils/pokemonDataArray",
	"@ErrorBoundary": "./src/components/utils/ErrorBoundary",
	"@PokemonCard": "./src/components/MainContainer/PokemonCard",
	"@Heading": "./src/components/MainContainer/Heading",
	"@Logo": "./src/components/MainContainer/Logo",
	"@MainContainer": "./src/components/MainContainer/MainContainer",
	"@HeaderLine": "./src/components/HeaderLine/HeaderLine",
	"@DetailedPage": "./src/components/DetailedPage/DetailedPage",
	"@SearchInput": "./src/components/SearchInput/SearchInput",
	"@Player": "./src/components/Player/Player",
	"@App": "./src/components/App/view/index",
	"@MainContainer": "./src/components/MainContainer/MainContainer",
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