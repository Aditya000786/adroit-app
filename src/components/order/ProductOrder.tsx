import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import Product from "../../interfaces/Product";
import AllProducts from "../../services/DataService";

function ProductOrder(props: any) {
  const { addedProducts } = props;
  const ReaminingProducts = AllProducts.filter(
    (x) => !addedProducts.find((ap: Product) => ap.productId === x.productId)
  );
  const [isLoading, setLoading] = useState(true);
  const [productValue, setProductValue] = useState({});
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
    if (quantityValue === "" || isNaN(Number(quantityValue))) return;
    props.addProduct({
      ...productValue,
      ...{ quantity: Number(quantityValue) },
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
      </Grid>
    </Box>
  ) : (
    <div>Loading...</div>
  );
}
export default ProductOrder;
