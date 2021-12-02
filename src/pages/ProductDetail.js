import { useParams } from "react-router";

const ProductDetail = (props) => {
  const params = useParams();
  console.log(
    "🚀 ~ file: ProductDetail.js ~ line 5 ~ ProductDetail ~ params",
    params,
  );
  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
