import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import Product from "../../interfaces/Product";
import AllProducts from "../../services/DataService";

function calculateValues(addedProducts: Array<any>) {
  const netPtsValue = addedProducts.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.ptsValue;
  }, 0);
  const netPtrValue = addedProducts.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.ptrValue;
  }, 0);
  return {
    nv: netPtsValue.toFixed(2),
    dr: netPtrValue.toFixed(2),
    tax: (netPtsValue * 0.12).toFixed(2),
    gv: (netPtsValue + netPtsValue * 0.12).toFixed(2),
  };
}
function ProductOrder(props: any) {
  const { addedProducts } = props;
  const amountValues = calculateValues(addedProducts);
  const ReaminingProducts = AllProducts.filter(
    (x) => !addedProducts.find((ap: Product) => ap.productId === x.productId)
  );
  const [isLoading, setLoading] = useState(true);
  const [productValue, setProductValue] = useState<any>({});
  const [quantityValue, setQuantityValue] = useState({});

  const productSelected = (event: any, selectedProduct: any) => {
    setProductValue(selectedProduct);
    // console.log(selectedProduct);
  };
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantityValue(event.target.value);
    // console.log(event.target.value);
  };
  const isOptionEqualToValue = (option: any, value: any) => {
    return option.productId === value.productId;
  };
  const addProduct = () => {
    let numQuantityValue = Number(quantityValue);
    if (
      quantityValue === "" ||
      isNaN(numQuantityValue) ||
      Object.keys(productValue).length === 0
    )
      return;
    props.addProduct({
      ...productValue,
      ...{
        quantity: numQuantityValue,
        ptsValue: Number((numQuantityValue * productValue.pts).toFixed(2)),
        ptrValue: Number((numQuantityValue * productValue.ptr).toFixed(2)),
      },
    });
    setProductValue({});
    console.log(quantityValue, productValue);
  };

  return isLoading ? (
    <Box sx={{ width: "80%", margin: "0 auto" }}>
      <Grid
        item
        direction="column"
        justifyContent="center"
        alignItems="center"
        container
        xs={12}
        p={2}
      >
        <Autocomplete
          isOptionEqualToValue={isOptionEqualToValue}
          disablePortal
          getOptionLabel={(option: any) => (option.label ? option.label : "")}
          value={productValue}
          id="combo-box-demo"
          onChange={productSelected}
          options={ReaminingProducts}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} label="Product  " />}
        />
        <br />
        <TextField
          sx={{ width: "100%" }}
          id="outlined-number"
          label="Quantity"
          type="number"
          onChange={handleQuantityChange}
        />
        <br />
        <Button sx={{ width: "100%" }} variant="outlined" onClick={addProduct}>
          Add Product
        </Button>
        <br />
        <Box sx={{ width: "100%" }}>
          Net Value: {amountValues.nv} <br />
          Dr Value: {amountValues.dr} <br /> Tax Value: {amountValues.tax}{" "}
          <br /> Gross Value: {amountValues.gv}
        </Box>
      </Grid>
    </Box>
  ) : (
    <div>Loading...</div>
  );
}
export default ProductOrder;
