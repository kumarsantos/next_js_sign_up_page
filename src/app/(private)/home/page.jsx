import TableGrid from "@/components/TableGrid";
import Layout from "../../../components/Layout";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getData() {
  const res = await fetch("http://localhost:3000/api/crud");
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}

async function HomePage() {
  const { data } = await getData();
  return (
    <Layout>
      <TableGrid data={data} />
    </Layout>
  );
}

export default HomePage;
