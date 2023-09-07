import fs from "fs/promises";
import path from "path";

function HomePage({ data: { products } }) {
  return (
    <ul>
      {products.map((rep) => (
        <li key={rep.id}>{rep.description}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return { props: { data } };
}

export default HomePage;
