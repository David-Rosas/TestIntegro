import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import {
  Button,
  CardContent,
  Card,
  Typography,
  TextField,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";

class PalindromeChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      result: null,
      validate: false,
      validateText: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  checkPalindrome = () => {
    this.setState({result : null, validate: false })
    // Check if the input is empty
    if (this.state.input.trim() === "") {
      this.setState({ validateText: "Input cannot be empty.", validate:true });
      return;
    }
   
    axios
      .post("http://localhost:8000/api/check-palindrome", {
        palindrome: this.state.input,
      })
      .then((response) => {
        this.setState({ result: response.data.is_palindrome });
      })
      .catch((error) => {
        this.setState({ result: "Error occurred. Please try again later." });
        console.error(error);
      });
  };

  render() {
    const { input, result, validate, validateText } = this.state;

    return (
      <Card className="card-style">
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Palindrome Checker
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                size="small"
                label="Check your Palindrome"
                value={input}
                onChange={this.handleInputChange}
                variant="outlined"
              />
              <Button
                sx={{ marginTop: "10px" }}
                variant="outlined"
                onClick={this.checkPalindrome}
              >
                Check
              </Button>
              {result === true && (
                <Alert severity="success">This text is a Palindrome!</Alert>
              )}
              {result === false && (
                <Alert severity="error">This text is Not Palindrome!</Alert>
              )}
              {validate === true && (
                <Alert severity="warning">{validateText}</Alert>
              )}
            </div>
          </Box>
        </CardContent>
      </Card>
    );
  }
}

export default PalindromeChecker;
