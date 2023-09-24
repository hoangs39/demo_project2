import React, { useState, useEffect } from "react";
import { getProduct } from "../../../api/seller";
import ProductTable from "./ProductTable";
import AddProduct from "./AddProduct";
const ProductManagement = ({ showToast }) => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const data = await getProduct();
    if (data) {
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <h2 className="text-center mt-2 mb-3">Product Management</h2>
      <AddProduct
        setProducts={setProducts}
        fProduct={fetchProduct}
        showToast={showToast}
      />
      <ProductTable products={products}></ProductTable>
    </div>
  );
};

export default ProductManagement;
