import useSWR from "swr";
import { fetcher } from "../fetcher";

function LastSalesPage() {
  const { data, error, isLoading } = useSWR(
    "https://nextjs-79a04-default-rtdb.firebaseio.com/sales.json",
    fetcher
  );

  if (error) return <p>Failed to fetch</p>;

  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((sale) => (
        <li key={sale.id}>
          {sale.username} - <span style={{ color: "green" }}>$</span>
          {sale.volume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalesPage;
