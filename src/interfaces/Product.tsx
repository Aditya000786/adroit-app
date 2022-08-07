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
  ptsValue?: number;
  ptrValue?: number;
}

export default Product;
