import { useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import { searchUser } from "../../services";

const Search = () => {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const fetchSearchUser = async () => {
    const data = await searchUser(username);

    console.log(data);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Buscar usuario de instagram"
            onChange={handleInputChange}
            value={username}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={fetchSearchUser} variant="contained" fullWidth>
            Buscar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Search;