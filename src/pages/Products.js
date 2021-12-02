import { Link } from "react-router-dom";

const Products = (props) => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/1">A Book</Link>
        </li>
        <li>
          <Link to="/products/2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
