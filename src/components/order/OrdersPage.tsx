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
    let temp = addedProducts;
    temp.push(product);
    // console.log(rows);
    setAddedProducts(JSON.parse(JSON.stringify(temp)));
  };
  return (
    <>
      <ProductOrder addProduct={addProduct} addedProducts={addedProducts} />
      <OrderList rows={addedProducts} />
    </>
  );
}
export default OrdersPage;
