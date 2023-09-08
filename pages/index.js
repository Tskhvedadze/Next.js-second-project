// import { getData } from "../fetchData";
import Link from "next/link";

function HomePage({ data: { products } }) {
  return (
    <ul>
      {products.map((rep) => (
        <li key={rep.id}>
          <Link href={`/${rep.id}`}>{rep.brand}</Link>
        </li>
      ))}
    </ul>
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
