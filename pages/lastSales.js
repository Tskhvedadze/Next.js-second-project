import useSWR from "swr";
import { fetcher } from "../fetcher";

const URL = "https://nextjs-79a04-default-rtdb.firebaseio.com/sales.json";

function LastSalesPage({ sales }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  //   if (error) return <p>Failed to fetch</p>;

  //   if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - <span style={{ color: "green" }}>$</span>
          {sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  return fetch(URL).then((response) =>
    response.json().then((data) => {
      const transformedData = [];
      for (const key in data) {
        transformedData.push(data[key]);
      }
      return {
        props: { sales: transformedData },
      };
    })
  );
}

export default LastSalesPage;
