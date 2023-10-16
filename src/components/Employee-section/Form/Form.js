import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./Form.css";
import { Controller, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
// import {
//   CountryDropdown,
//   RegionDropdown,
//   CountryRegionData,
// } from "react-country-region-selector";
import "react-toastify/dist/ReactToastify.css";
const FormEl = () => {
  const [file, setFile] = useState(null);
  const {
    register,
    handleSubmit,
    control,
    reset,
    resetField,
    formState: { errors },
  } = useForm();
  // console.log(errors);
  const onSubmit = async (data) => {
    // handleUpload()
    console.log("base64 data image",base64Data);
    console.log(data);
    data.image = base64Data;

    // console.log(file);
    // data.image = file;

    console.log("after adding image data",data);
    const responseforuser = await axios.post(
      "http://www.localhost:8000/api/mailsend/employersrequesttalentsendtouser",
      data
    );
    console.log(responseforuser);

    const responseforhost = await axios.post(
      "http://www.localhost:8000/api/mailsend/employersrequestatalent",
      data
    );
    console.log(responseforhost);

    // console.log(data);
    reset();
    resetField();
    toast.success("your form has been submitted");
  };
  // const handleFileChange = (e) => {
  //   const img = {
  //     preview: URL.createObjectURL(e.target.files[0]),
  //     data: e.target.files[0],
  //   };
  //   console.log(img);
  //   setFile(img);
  // };
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const selectCountry = (val) => setCountry(val);
  const selectRegion = (val) => {
    setRegion(val);
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const [base64Data, setBase64Data] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');

  // const convertBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };

  //     fileReader.error = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

    const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;// Get the base64 data (omit the "data:image/jpeg;base64," prefix)
        console.log(base64);
        setBase64Data(base64);
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
    }
  };

  // const handleUpload = () => {
  //   console.log('yo chalyo ta?');
  //   if (base64Data) {
  //     // Make a POST request to your API with the base64 data
  //     fetch('YOUR_API_ENDPOINT', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ base64Data }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setUploadStatus('File uploaded successfully');
  //         // Handle the API response as needed
  //       })
  //       .catch((error) => {
  //         setUploadStatus('File upload failed');
  //         console.error('Error uploading file:', error);
  //       });
  //   }
  // };

  return (
    <div className="form-container">
      <div className="form-left">
        <p className="frompara">Request Talent</p>
        {/* <p className="spanclass">
          Please fill out the form with your details. We will contact you soon.
        </p> */}
        <ToastContainer position="top-center" />
        <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="outlined-basic"
            className="textfield"
            label="Full Name"
            fullWidth
            variant="filled"
            size="small"
            margin="dense"
            name="name"
            autoComplete="off"
            sx={{
              "& .MuiFilledInput-underline:before": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:after": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
            }}
            {...register("name", { required: "Required", minLength: 3 })}
            error={!!errors?.name}
          />

          <TextField
            id="outlined-basic"
            className="textfield"
            label="Company Email"
            fullWidth
            variant="filled"
            size="small"
            margin="dense"
            name="email"
            autoComplete="off"
            sx={{
              "& .MuiFilledInput-underline:before": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:after": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before": {
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

          <TextField
            id="outlined-basic"
            label="Phone Number"
            className="textfield"
            fullWidth
            variant="filled"
            size="small"
            margin="dense"
            name="phoneNumber"
            autoComplete="off"
            sx={{
              "& .MuiFilledInput-underline:before": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:after": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
            }}
            {...register("phoneNumber", { required: "Required" })}
            error={!!errors?.phoneNumber}
          />
          <div className="wrap">
            <div className="first">
              <div className="apple">
                <TextField
                  id="outlined-basic"
                  label="Company Name"
                  className="textfield"
                  variant="filled"
                  size="small"
                  margin="dense"
                  name="CompanyName"
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
                  {...register("CompanyName", { required: "Required" })}
                  error={!!errors?.CompanyName}
                />

                <TextField
                  id="outlined-basic"
                  label="Job Title"
                  className="textfield"
                  variant="filled"
                  size="small"
                  margin="dense"
                  name="Job"
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
                  {...register("Job", { required: "Required" })}
                  error={!!errors?.Job}
                />
              </div>
            </div>
            <div className="second">
              <div className="country">
                <TextField
                  id="outlined-basic"
                  label="Country"
                  className="textfield"
                  variant="filled"
                  size="small"
                  margin="dense"
                  name="Country"
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
                  {...register("Country", { required: "Required" })}
                  error={!!errors?.Country}
                />
                {/* <CountryDropdown
                  value={country}
                  onChange={(val) => selectCountry(val)}
                /> */}

                <TextField
                  id="outlined-basic"
                  label="City/State"
                  className="textfield"
                  variant="filled"
                  size="small"
                  name="city"
                  margin="dense"
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
                  {...register("city", { required: "Required" })}
                  error={!!errors?.city}
                />
                {/* 
                <RegionDropdown
                  country={country}
                  value={region}
                  onChange={(val) => selectRegion(val)}
                /> */}
              </div>
            </div>
          </div>
          {/* <TextField
            fullWidth
            multiline
            rows={3}
            label="Message"
            margin="dense"
            name="message"
            variant="filled"
            placeholder="Your Message"
            className="txtfield_country_code"
            autoComplete="off"
            sx={{
              "& .MuiFilledInput-underline:before": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:after": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
            }}
            {...register("message")}
          /> */}

          <TextField
            fullWidth
            multiline
            rows={3}
            label="Message"
            margin="dense"
            name="message"
            variant="filled"
            style={{ background: "#FFFFFF" }}
            placeholder="Your Message"
            className="txtfield_message_box message_box"
            // value={myForm.values.message}
            // onChange={myForm.handleChange}
            // error={!!myForm.errors.companyName}
            // helperText={myForm.errors.message}
            autoComplete="off"
            sx={{
              "& .MuiFilledInput-underline:before": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:after": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
            }}
            {...register("message", { required: "Required" })}
            error={!!errors?.message}
          />
          <div className="form-file">
            <input type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />
            <label htmlFor="upload_file">
              {/* <Controller
                name="image"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <input
                    type="file"
                    onChange={async (e) => {
                      field.onChange(e.target.files[0]);
                      setFile(e.target.files[0]);
                      const touploadfile = e.target.files[0];
                      console.log(e.target.files[0]);
                      const base64 = await convertBase64(touploadfile);
                      console.log(base64);
                    }}
                  />
                )}
                {...register("file")}
              /> */}
              {/* <input type='file' name='upload_file' onChange={handleFileChange} {...register("upload_file")}></input> */}
              {/* <input
                style={{ display: "none" }}
                id="upload_file"
                name="upload_file"
                type="file"
             
                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/png, image/jpeg,.pdf"
                {...register("upload_file")}
              /> */}
              {/* <Button
                variant="contained"
                component="span"
                className="file_button mt-3"
              >
                Upload Files
              </Button> */}

              {/* <small style={{ color: "#b1a40d" }}>Upload file </small> */}
            </label>
          </div>

          <div className="submit-button">
            <Button
              className="btn btn-primary mt-4"
              style={{
                display: "block",
                margin: "auto",
                width: "6rem",
                color: "black",
                backgroundColor: "#6acaffab",
              }}
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>

      <div className="form-right">
        <h2 className="connected">Let's get Connected!</h2>
        <p className="info">
          We provide exceptional service, with a focus on building long-term
          relationships and proactively addressing staffing needs.
        </p>
        <h5 className="contact-details">Contact Details</h5>
        <div className="contact-container">
          <div className="contact">
            <div className="icon-container">
              <i className="fa fa-phone"></i>
            </div>
            <div className="icon-text">+1-214-382-6161</div>
          </div>

          <div className="contact">
            <div className="icon-container">
              <i className="fa fa-envelope"></i>
            </div>
            <div className="icon-text">info@neutrosys.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEl;
