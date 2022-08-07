import { Autocomplete, TextField } from "@mui/material";

function ProductOrder(props: any) {
  const productSelected = (event: any, selectedProduct: any) => {
    console.log(selectedProduct);
  };
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
  ];
  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        onChange={productSelected}
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  );
}
export default ProductOrder;
