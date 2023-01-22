import React, { memo, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Paper } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  fullName: "",
  dob: "",
  phone: "",
  monthlyPayment: "",
  faceAmount: "",
  health: "",
  email: "",
  beneficiaries: "",
  bankingDetails: "",
  outcome: "",
  address: "",
  agent: "",
  source: "",
  notes: "",
  socialSecurity: "",
};

const URL = "https://hooks.zapier.com/hooks/catch/14132423/bvbhar9/";
const Form = () => {
  const [message, setMessage] = useState("Success");

  const notify = () => toast(message);

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      try {
        const request = await axios.get(
          URL,
          {
            params: values,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        console.log("Success", request);
        if (request.status === 200) {
          setMessage("Record Created Successfully.");
          // console.log('Record Created Successfully.');
          notify();
        } else {
          setMessage("Something went wrong, try again.");
          notify();

          // console.log('Something went wrong, try again.');
        }
      } catch (error) {
        console.log("Error", error);
        setMessage("Something went wrong, try again.");
        notify();
      }
    },
  });
  const resetForm = () => {
    formik.resetForm({
      initialValues,
    });
  };
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          color: "white",
          bgcolor: "secondary.main",
          textAlign: "center",
          padding: "15px",
          fontSize: "33px",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpaceing: "0.50em",
        }}
      >
        Lead Form
      </Paper>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ maxWidth: "800px", margin: "0 auto", padding: "15px" }}>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box >
              <TextField
                fullWidth
                name="fullName"
                id="fullName"
                label="Full Name"
                variant="outlined"
                margin="normal"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                size="small"
              />

              <TextField
                fullWidth
                name="dob"
                id="dob"
                label="Date of Birth (dd-mm-yyyy)"
                variant="outlined"
                margin="normal"
                value={formik.values.dob}
                onChange={formik.handleChange}
                size="small"
              />
              <TextField
                fullWidth
                name="phone"
                id="phone"
                label="Phone"
                variant="outlined"
                margin="normal"
                value={formik.values.phone}
                onChange={formik.handleChange}
                size="small"
              />
              <Box sx={{ display: "flex", gap: "10px" }}>
                <TextField
                  fullWidth
                  name="monthlyPayment"
                  id="monthlyPayment"
                  label="Monthly payment"
                  variant="outlined"
                  margin="normal"
                  value={formik.values.monthlyPayment}
                  onChange={formik.handleChange}
                  size="small"
                />
                <TextField
                  fullWidth
                  name="faceAmount"
                  id="faceAmount"
                  label="Face Amount"
                  variant="outlined"
                  margin="normal"
                  value={formik.values.faceAmount}
                  onChange={formik.handleChange}
                  size="small"
                />
              </Box>
              <TextField
                fullWidth
                id="health"
                name="health"
                label="Health and Medications"
                variant="outlined"
                margin="normal"
                multiline
                maxRows={4}
                value={formik.values.health}
                onChange={formik.handleChange}
                size="small"
              />
              <TextField
                fullWidth
                id="agent"
                name="agent"
                label="Agent"
                variant="outlined"
                margin="normal"
                multiline
                maxRows={4}
                value={formik.values.agent}
                onChange={formik.handleChange}
                size="small"
              />
            </Box>
            <Box sx={{width: '100%'}}>
              <TextField
                fullWidth
                name="email"
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                margin="normal"
                value={formik.values.email}
                onChange={formik.handleChange}
                size="small"
              />

              <TextField
                fullWidth
                id="socialSecurity"
                name="socialSecurity"
                label="Social Security"
                variant="outlined"
                margin="normal"
                value={formik.values.socialSecurity}
                onChange={formik.handleChange}
                size="small"
              />

              <TextField
                fullWidth
                id="beneficiaries"
                name="beneficiaries"
                label="Beneficiaries"
                variant="outlined"
                margin="normal"
                value={formik.values.beneficiaries}
                onChange={formik.handleChange}
                size="small"
              />
              <TextField
                fullWidth
                id="banking details"
                name="bankingDetails"
                label="Banking Details"
                variant="outlined"
                margin="normal"
                value={formik.values.bankingDetails}
                onChange={formik.handleChange}
                size="small"
              />

              <FormControl fullWidth margin="normal" size="small">
                <InputLabel id="demo-simple-select-label">
                  Outcome of the Call{" "}
                </InputLabel>
                <Select
                  name="outcome"
                  labelId="outcome"
                  id="outcome"
                  label="Outcome of the Call"
                  value={formik.values.outcome}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="Appointment-Set">Appointment Set</MenuItem>
                  <MenuItem value="Not Interested">Not Interested</MenuItem>
                  <MenuItem value="Pending App">Pending App</MenuItem>
                  <MenuItem value="Sold">Sold</MenuItem>
                  <MenuItem value="disconnected">Disconnected</MenuItem>
                </Select>
              </FormControl>

              <TextField
                fullWidth
                id="source"
                name="source"
                label="Source"
                variant="outlined"
                margin="normal"
                multiline
                maxRows={4}
                value={formik.values.source}
                onChange={formik.handleChange}
                size="small"
              />
            </Box>
          </Box>
          <Box sx={{ padding: "10px 0px" }}>
            <TextField
              fullWidth
              id="address"
              name="address"
              label="Address"
              variant="outlined"
              type="text"
              margin="normal"
              multiline
              maxRows={4}
              value={formik.values.address}
              onChange={formik.handleChange}
              size="small"
            />
            <TextField
              fullWidth
              id="notes"
              name="notes"
              label="Notes"
              variant="outlined"
              type="text"
              margin="normal"
              multiline
              maxRows={4}
              value={formik.values.notes}
              onChange={formik.handleChange}
              size="small"
            />
            <Button
              type="submit"
              variant="contained"
              size="small"
              sx={{ marginRight: "10px" }}
            >
              Submit
            </Button>
            <Button variant="contained" size="small" onClick={resetForm}>
              Reset
            </Button>
          </Box>
        </Box>
      </form>

      <ToastContainer />
    </>
  );
};

export default memo(Form);
