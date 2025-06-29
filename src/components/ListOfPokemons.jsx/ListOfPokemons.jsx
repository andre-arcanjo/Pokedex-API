import { useInfiniteQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom";

const fetchPokemons = async ({ pageParam = 0 }) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${pageParam}`)
    const data = await response.json()


    const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
        })
    );

    return {
        pokemons: pokemonDetails,
        nextOffset: data.next ? pageParam + 10 : undefined
    }
};

const ListOfPokemons = () => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
        error,
    } = useInfiniteQuery({
        queryKey: ['pokemons'],
        queryFn: fetchPokemons,
        getNextPageParam: (lastPage) => lastPage.nextOffset,
    });

    if (isLoading) return <p>Loading Pokemons...</p>
    if (isError) return <p>Failed to loading: {error.message}</p>

    return (
        <>
            <div className="title">
                <h1>Pokedex</h1>
            </div>
            <div className="container">
                {data.pages.flatMap((page) =>
                    page.pokemons.map((pokemon) => (
                        <Link key={pokemon.id} to={`/pokemon/${pokemon.name}`}>
                            <div className="card" key={pokemon.id}>
                                <h2>{pokemon.name}</h2>
                                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                            </div>
                        </Link>
                    ))
                )}
            </div>
            <div className="load-more-pokemons">
                <button
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage || !hasNextPage}
                >
                    {isFetchingNextPage
                        ? 'Loading...'
                        : hasNextPage
                            ? 'Load More Pokemons'
                            : 'All Pokemons Loaded'}
                </button>
            </div>
        </>
    )
}

export { ListOfPokemons }