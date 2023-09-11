// import { getData } from "../fetchData";

function Product({ products }) {
  return (
    <>
      <h1>{products.title} </h1>
      <h2>{products.category} </h2>
      <p>{products.description}</p>
      <img src={products.thumbnail} alt={products.brand} />
    </>
  );
}

export async function getServerSideProps(conext) {
  const { params } = conext;
  const productId = params.pid;

  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const data = await response.json();

  // const product = data?.products?.find((product) => product.id === productId);

  // if (product) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      products: data,
    },
  };
}

export async function getServerSidePaths() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  return {
    paths: data?.products.map((product) => ({
      params: { pid: product.id.toString() },
    })),
    fallback: true,
  };
}

export default Product;
