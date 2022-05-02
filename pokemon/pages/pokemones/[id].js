const Pokemon = ({ data }) => {
  return <p>Lala</p>;
};

export default Pokemon;

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );
  const data = await response.json();
  return { props: { data } };
};
