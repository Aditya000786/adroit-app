import React, { useState, useEffect } from "react";
import ProductOrder from "./ProductOrder";
import OrderList from "./OrderList";
import Product from "../../interfaces/Product";

// function createData(
//   productId: number,
//   label: string,
//   pack: string,
//   batchNo: string,
//   hsn: string,
//   expDate: string,
//   mrp: number,
//   ptr: number,
//   pts: number,
//   gst: number
// ): Product {
//   return {
//     productId,
//     label,
//     pack,
//     batchNo,
//     hsn,
//     expDate,
//     mrp,
//     ptr,
//     pts,
//     gst,
//   };
// }
// const rows = [
//   createData(
//     1,
//     "Lycorit Plus Cap",
//     "1*10 Cap",
//     "SPC-18383",
//     "30049099",
//     "OCT-23",
//     130,
//     92.86,
//     83.57,
//     12
//   ),
//   createData(
//     2,
//     "Adrofer XT Tab",
//     "1*10 Cap",
//     "SPC-18383",
//     "30049099",
//     "OCT-23",
//     130,
//     92.86,
//     83.57,
//     12
//   ),
// ];
function OrdersPage(props: any) {
  const [addedProducts, setAddedProducts] = useState<Array<Product>>([]);
  const addProduct = (product: Product) => {
    console.log(product);
    let temp = addedProducts;
    temp.push(product);
    setAddedProducts(JSON.parse(JSON.stringify(temp)));
  };
  const removeProducts = (productsToRemove: Array<Product>) => {
    console.log(productsToRemove);
    let toRemove = productsToRemove.map((x: Product) => x.productId);
    let temp = addedProducts.filter(
      (x: Product) => toRemove.indexOf(x.productId) === -1
    );
    setAddedProducts(JSON.parse(JSON.stringify(temp)));
  };
  return (
    <>
      <ProductOrder addProduct={addProduct} addedProducts={addedProducts} />
      <OrderList rows={addedProducts} removeProducts={removeProducts} />
    </>
  );
}
export default OrdersPage;
