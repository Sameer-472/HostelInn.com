import {
  FormGroup,
  FormControl,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";

function Forget() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:8000/forget-password",
        { email: email }
      );
      console.log(response);
      if (response.status === 200) {
        setLoading(false);
        setMessage("Email has been sent");
      }
      return response;
    } catch (error) {
      console.log(error);
      if (error.response.status === 403) {
        setMessage("Email Does not exist");
      }
      return error;
    }
  };
  // console.log(password)
  return (
    <FormControl style={{ textAlign: "center" }}>
      <FormGroup style={{ marginTop: 20 }}>
        <TextField
          style={{ borderRadius: 50, width: 300 }}
          variant="filled"
          label="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></TextField>
        <span>{loading && <Typography>Loading</Typography>}</span>
        {message && (
          <Typography style={{ fontSize: 12, color: "red" }}>
            {message}
          </Typography>
        )}
      </FormGroup>
      <Button onClick={() => handleReset()}> Reset </Button>
    </FormControl>
  );
}

export default Forget;
