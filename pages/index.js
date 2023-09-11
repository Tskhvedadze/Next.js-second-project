// import { getData } from "../fetchData";
import Link from "next/link";

function HomePage({ data }) {
  return (
    <>
      <ul>
        {data &&
          data?.products.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>{product.brand}</Link>
            </li>
          ))}
      </ul>
      <Link
        href={{
          pathname: "lastSales",
          query: {},
        }}
      >
        Go To The Last Sales Page
      </Link>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  if (data?.products.length === 0) {
    return { notFound: true };
  }

  return { props: { data }, revalidate: 10 };
}

export default HomePage;
