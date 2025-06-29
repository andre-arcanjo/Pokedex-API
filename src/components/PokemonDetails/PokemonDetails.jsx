import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

const fetchPokemon = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    if (!response.ok) {
        throw new Error('Pokemon Not Found')
    }
    return await response.json()
}

const fetchAbilityDescription = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    const description = data.effect_entries.find(
        (entry) => entry.language.name === 'en'
    )
    return description ? description.short_effect : 'Description not available'
}

const PokemonDetails = () => {
    const { name } = useParams();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['pokemon', name],
        queryFn: () => fetchPokemon(name),
    });

    if (isLoading) return <p>Loading Pokemon Data...</p>
    if (isError) return <p>Failed to Loading: {error.message}</p>

    return (
        <div className="container-details">
            <div className="details">
                <div className="return">
                    <a href="/Pokedex-API">
                        <img src="/Pokedex-API/seta.webp" alt="Return to pokedex" />
                    </a>
                </div>
                <div className="img-title">
                    <img src={data.sprites.front_default} alt={data.name} />
                    <h1>{data.name}</h1>
                </div>
                <div className="type">
                    <h2>Types</h2>
                    <ul>{data.types.map((type) => (
                        <li key={type.type.name}>
                            {type.type.name}
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="habilities">
                    <h2>Habilities:</h2>
                    <ul>
                        {data.abilities.map((abilityObj) => (
                            <AbilityItem
                                key={abilityObj.ability.name}
                                url={abilityObj.ability.url}
                                name={abilityObj.ability.name}
                            />
                        ))}
                    </ul>
                </div>
                <div className="movies">
                    <h2>Movies:</h2>
                    <ul>
                        {data.moves.slice(0, 5).map((moveObj) => (
                            <li key={moveObj.move.name}>
                                {moveObj.move.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const AbilityItem = ({ url, name }) => {
    const { data, isLoading } = useQuery({
        queryKey: ['ability', name],
        queryFn: () => fetchAbilityDescription(url),
    });

    if (isLoading) return <li>Carregando {name}...</li>;

    return (
        <li>
            <strong style={{ textTransform: 'capitalize' }}>{name}:</strong> {data}
        </li>
    )
}

export { PokemonDetails }