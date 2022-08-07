import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import AllProducts from "../../services/DataService";

function ProductOrder(props: any) {
  const [isLoading, setLoading] = useState(true);
  const [productValue, setProductValue] = useState({});
  const [quantityValue, setQuantityValue] = useState({});
  useEffect(() => {
    if (props && props.productId) {
      setProductValue(
        AllProducts.filter((x: any) => x.productId === props.productId)
      );
    } else {
      setProductValue(AllProducts[0]);
    }
  }, []);

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
    console.log(quantityValue, productValue);
  };

  return isLoading ? (
    <Box sx={{ width: "80%" }}>
      <Grid item container xs={12} p={2}>
        <Grid item xs={3}>
          <Autocomplete
            isOptionEqualToValue={isOptionEqualToValue}
            value={productValue}
            disablePortal
            id="combo-box-demo"
            onChange={productSelected}
            options={AllProducts}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Product  " />
            )}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-number"
            label="Quantity"
            type="number"
            onChange={handleQuantityChange}
          />
        </Grid>

        <Grid item xs={3}>
          <Button variant="outlined" onClick={addProduct}>
            Add Product
          </Button>
        </Grid>
      </Grid>
    </Box>
  ) : (
    <div>Loading...</div>
  );
}
export default ProductOrder;
