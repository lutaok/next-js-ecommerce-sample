import ProductImages from "@/components/ProductImages/ProductImages";
import ProductInfo from "@/components/ProductInfo/ProductInfo";
import styles from "./product-detail.module.css";
import { getProductDetail } from "@/utils/products";

interface ProductDetailPageProps {
  params?: { id: string };
}

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const productDetail = await getProductDetail(params?.id);
  return (
    <main>
      <div className={styles["detail-container"]}>
        <ProductImages images={productDetail.images} />
        <ProductInfo product={productDetail} />
      </div>
    </main>
  );
};

export default ProductDetailPage;
