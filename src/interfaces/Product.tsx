interface Product {
  productId: number;
  label: string;
  pack: string;
  batchNo: string;
  hsn: string;
  expDate: string;
  mrp: number;
  ptr: number;
  pts: number;
  gst: number;
  quantity?: number;
}

export default Product;
