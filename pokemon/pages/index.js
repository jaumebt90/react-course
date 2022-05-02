export default function Pokemones({ pokemones }) {
  console.log(pokemones);
  return <p>Pokemon</p>;
}

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();

  return {
    props: { pokemones: data.results },
  };
};
