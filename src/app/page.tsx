import ProductsGrid from "@/components/ProductsGrid/ProductsGrid";
import { getProducts } from "@/utils/products";

interface HomePageProps {
  params?: Record<string, string>;
  searchParams?: Record<string, string>;
}

export default async function Home({ searchParams }: HomePageProps) {
  const page = typeof searchParams?.page === "string" ? Number(searchParams.page) : 1;
  const size = typeof searchParams?.size === "string" ? Number(searchParams.size) : 10;

  const products = await getProducts(page, size);

  return (
    <main>
      <ProductsGrid products={products} />
    </main>
  );
}
