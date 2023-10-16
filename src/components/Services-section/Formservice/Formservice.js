import React, { useRef } from "react";
import "./form.css";
import ReCAPTCHA from "react-google-recaptcha";
import { TextField, Button, ButtonGroup } from "@mui/material";
// import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { Col, Row } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown"; //multiselect Library
import { ErrorMessage } from "@hookform/error-message";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import checkboxClasses from "@mui/material/Checkbox";

import { green } from "@mui/material/colors";
import axios from "axios";
import { style } from "@mui/system";
import { pink } from "@mui/material/colors";
// import Switch from '@mui/material/Switch';
import Submission from "./Submission";
import swal from "sweetalert";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";

const Formservice = () => {
  const [options, setOptions] = useState([
    "Talent Solutions",
    "Software Development",
    "Outsourcing",
    "Software Testing",
  ]);


  const captchaRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    control,
    //  errors,
    formState: { errors, isSubmitted },
  } = useForm();
  // console.log(errors);
  // console.log(control);
    
  // console.log(control._formValues.service);
  
   const [service, setService] = useState([])
  const onSubmit = async (data, e) => {
    console.log('oko');
    reset();
    
    resetField();
    reset({ service: "" });
    setSelectedRegion("");
    setSelectedCountry("");

    // console.log(data);
    data.image = base64Data;
    const responseforhost = await axios.post(
      "http://www.localhost:8000/api/mailsend/servicesgetaquotereceivedbyhost",
      data
    );
    console.log(responseforhost);
    const responseforuser = await axios.post(
      "http://www.localhost:8000/api/mailsend/servicesquoterequestconfirmforuser",
      data
    );
    console.log(responseforuser);
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
    toast.success("Success\n your form has been submitted");
  };
  const onCaptchaComplete = (response) => {
    console.log(response);
  };
  const optionSelect = [
    { value: "Talent Solution", label: "Talent Solution" },
    { value: "Software Development", label: "Software Development" },
    { value: "Outsourcing", label: "Outsourcing" },
    { value: "Software Testing", label: "Software Testing" },
  ];

  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [selectedRegion, setSelectedRegion] = React.useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [base64Data, setBase64Data] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");
  // Function to handle country selection
  const handleCountryChange = (val) => {
    setSelectedCountry(val);
    setSelectedRegion(""); // Clear the region when the country changes
    register("countryname")(val); // Register the selected country
  };

  // Function to handle region selection
  const handleRegionChange = (val) => {
    setSelectedRegion(val);
    register("regionname")(val); // Register the selected region
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result; // Get the base64 data (omit the "data:image/jpeg;base64," prefix)
        console.log(base64);
        setBase64Data(base64);
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
    }
  };

  return (
    <div className="services-form-container">
      {" "}
      <div className="mainForm">
        <ToastContainer position="top-center" />
        <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
          <Row
            className="form-row m-0"
            style={{ height: "auto", width: "auto" }}
          >
            <Col sm={12} lg={12} md={12} className="form-col ">
              <Container className=" formContainer">
                <p className="heading-para">Connect with Us</p>
               
                <Controller
                  name="service"
                  control={control}
                  error={!!errors?.service}
                  render={({ field }) => (
                    <div>
                      <Select
                        isMulti
                        {...field}
                        options={optionSelect}
                        className={`basic-multi-select`}
                        // className="textfield"
                        classNamePrefix="select"
                        placeholder={`Select Services`}
                        // {...register("service")}
                        menuPortalTarget={document.body}
                        sx={{
                          "& .MuiFilledInput-underline:before": {
                            borderBottom: "none",
                          },
                          "& .MuiFilledInput-underline:after": {
                            borderBottom: "none",
                          },
                          "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                            {
                              borderBottom: "none",
                            },
                        }}
                        // {...register("service", { required: "Required" })}
                        error={!!errors?.service}
                        styles={{
                          placeholder: (base) => ({
                            ...base,
                            color: isSubmitted && !field.value ? 'red' : 'gray',
                            // color: control?._formValues?.service === undefined ? 'gray' : 'red',
                            textAlign:"left"
                          }),
                          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                        }}
                      />
                    </div>
                  )}
                />
                {/* <TextField
                  fullWidth
                  label="Select Services"
                  margin="dense"
                  name="service"
                  className="textfield"
                  variant="filled"
                  placeholder="Select Services"
                  autoComplete="off"
                  select
                  {...register("service", { required: "Required" })}
                  error={!!errors?.service}
                  SelectProps={{
                    isMulti: true,
                    options: optionSelect,
                    menuPortalTarget: document.body,
                    styles: {
                      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    },
                  }}
                  sx={{
                    "& .MuiFilledInput-underline:before": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:after": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                      {
                        borderBottom: "none",
                      },
                  }}
                /> */}

                <TextField
                  fullWidth
                  label="Full Name"
                  margin="dense"
                  name="name"
                  className="textfield"
                  variant="filled"
                  placeholder="Full Name"
                  autoComplete="off"
                  sx={{
                    "& .MuiFilledInput-underline:before": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:after": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                      {
                        borderBottom: "none",
                      },
                  }}
                  {...register("name", { required: "Required", minLength: 3 })}
                  error={!!errors?.name}
                />

                <TextField
                  fullWidth
                  label="Email"
                  margin="dense"
                  name="email"
                  className="textfield"
                  variant="filled"
                  placeholder="Email"
                  autoComplete="off"
                  sx={{
                    "& .MuiFilledInput-underline:before": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:after": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                      {
                        borderBottom: "none",
                      },
                  }}
                  {...register("email", {
                    required: "Required field",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={!!errors?.email}
                />
                <div className="tel">
                  <TextField
                    // fullWidth
                    placeholder="Nepal +977"
                    label="Country Code"
                    margin="dense"
                    name="country_code"
                    autoComplete="off"
                    variant="filled"
                    sx={{
                      "& .MuiFilledInput-underline:before": {
                        borderBottom: "none",
                      },
                      "& .MuiFilledInput-underline:after": {
                        borderBottom: "none",
                      },
                      "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                        {
                          borderBottom: "none",
                        },
                    }}
                    className="txtfield_country_code"
                    {...register("country_code", { required: "Required" })}
                    error={!!errors?.country_code}
                  />
                  <TextField
                    // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}

                    // fullWidth
                    label="Phone"
                    margin="dense"
                    name="phone"
                    autoComplete="off"
                    variant="filled"
                    placeholder=" Landline/Mobile Number"
                    type="number"
                    className="txtfield_phone "
                    sx={{
                      "& .MuiFilledInput-underline:before": {
                        borderBottom: "none",
                      },
                      "& .MuiFilledInput-underline:after": {
                        borderBottom: "none",
                      },
                      "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                        {
                          borderBottom: "none",
                        },
                    }}
                    {...register("phone", { required: "Required" })}
                    error={!!errors?.phone}
                  />
                </div>
                <div className="country-region-services">
                  <Controller
                    name="countryname"
                    control={control}
                    defaultValue=""
                    // color: isSubmitted && !field.value ? 'red' : 'gray',

                    error={!!errors?.countryname}
                    render={({ field }) => (
                      <CountryDropdown
                        {...field}
                        className="input-field select"
                       
                        style={{
                          // color:"red",
                          backgroundColor: "#e9ecef",
                          borderRadius: "9px",
                          color:isSubmitted && !field.value ? 'red' : 'gray',
                          // placeholder: (base) => ({
                          //   ...base,
                          //   color: isCountrySubmitted && !field.value ? 'red' : 'gray',
                          //   // color: control?._formValues?.countryname === [] ? 'green' : 'red',
                          //   textAlign:"left"
                          // }),
                        }}
                        onChange={(val) => {
                          field.onChange(val); // Update the field value
                          handleCountryChange(val); // Handle country selection
                        }}
                        error={errors?.countryname}
                      />
                    )}
                  />

                  {/* Region Dropdown */}
                  {
                    <Controller
                      name="regionname"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <RegionDropdown
                          {...field}
                          className="input-field select"
                          country={selectedCountry}
                          value={selectedRegion}
                          name="regionname"
                          style={{
                          color:isSubmitted && !field.value ? 'red' : 'gray',
                            backgroundColor: "#e9ecef",
                            borderRadius: "9px",
                          }}
                          blankOptionLabel="Select Region"
                          onChange={(val) => {
                            field.onChange(val); // Update the field value
                            handleRegionChange(val); // Handle region selection
                          }}
                          error={!!errors?.regionname}
                        />
                      )}
                    />
                  }
                </div>
                <TextField
                  fullWidth
                  label="City"
                  margin="dense"
                  name="location"
                  autoComplete="off"
                  variant="filled"
                  placeholder="Your Location"
                  className="txtfield_country_code"
                  sx={{
                    "& .MuiFilledInput-underline:before": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:after": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                      {
                        borderBottom: "none",
                      },
                  }}
                  {...register("location", { required: "Required" })}
                  error={!!errors?.location}
                />
                <TextField
                  fullWidth
                  label="Subject"
                  margin="dense"
                  name="subject"
                  variant="filled"
                  placeholder="Subject"
                  className="txtfield_country_code"
                  autoComplete="off"
                  sx={{
                    "& .MuiFilledInput-underline:before": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:after": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                      {
                        borderBottom: "none",
                      },
                  }}
                  {...register("subject", { required: "Required" })}
                  error={!!errors?.subject}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Message"
                  margin="dense"
                  name="message"
                  variant="filled"
                  placeholder="Your Meassage"
                  className="txtfield_country_code message_box"
                  autoComplete="off"
                  sx={{
                    "& .MuiFilledInput-underline:before": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:after": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                      {
                        borderBottom: "none",
                      },
                  }}
                  {...register("message", { required: "Required" })}
                  error={!!errors?.message}
                />
                <div style={{ display: "flex" }}>
                  <input
                    type="file"
                    accept=".jpg, .jpeg, .png, .pdf"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="upload_file">
                    {/* <input
                      style={{ display: "none" }}
                      id="upload_file"
                      name="upload_file"
                      type="file"
                      accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/png, image/jpeg,.pdf"
                      {...register("upload_file")}
                    /> */}
                    {/* <Button
                      // color="success"
                      variant="contained"
                      component="span"
                      className="file_button mt-3"
                    >
                      Upload Files
                    </Button> */}

                    {/* <small style={{ color: "#b1a40d" }}>Upload file </small> */}
                  </label>
                  {/* <label htmlFor="upload_file">
                    <input
                      style={{ display: "none" }}
                      id="upload_file"
                      name="upload_file"
                      type="file"
                      // value={formValues.upload_file}
                      // value={""}
                      // onChange={handleChange}
                      accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/png, image/jpeg,.pdf"
                      {...register("upload_file")}
                    />
                   
                    <Button
                      // color="light"
                      variant="contained"
                      component="span"
                      className="file_button mt-3"
                    >
                      Upload Files
                    </Button>
                    <ErrorMessage
                      className="errormsg"
                      errors={errors}
                      name="upload_file"
                      render={({ message }) => (
                        <p className="errorm">{message}</p>
                      )}
                    />
                  </label> */}
                </div>
                <div style={{ marginTop: 15, marginBottom: 8 }}>
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    ref={captchaRef}
                    onChange={onCaptchaComplete}
                    // style={{ padding: 6 }}
                    className="my-recaptcha"
                  />
                </div>
                <div className="buttonsubmit">
                  <Button
                    style={{
                      display: "block",
                      margin: "auto",
                      width: "7rem",
                      color: "white",
                      backgroundColor: "#3b6da7",
                    }}
                    // disabled={!myForm.isValid}
                    // onClick={myForm.submitForm}
                    type="submit"
                    variant="contained"
                  >
                    Submit
                  </Button>
                </div>
              </Container>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default Formservice;
