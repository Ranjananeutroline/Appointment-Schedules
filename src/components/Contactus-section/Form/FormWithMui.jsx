import { TextField, Button, ButtonGroup } from "@mui/material";
// import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Col, Row } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown"; 
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import checkboxClasses from "@mui/material/Checkbox";
import { green } from "@mui/material/colors";
import { style } from "@mui/system";
import axios from "axios";
import { pink } from '@mui/material/colors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Switch from '@mui/material/Switch';
export default function FormWithMui() {
  const[tick,setTick]=useState(false)
 const [state, setstate] = useState("white")
 
  const clickme=(id)=>{
  //   setTick(!tick);
  //  if(tick){
  //   setstate("white")
  
  //  }else{
  //   setstate("pink")
    
  //  }
 }

 const [options, setOptions] = useState([
  "Talent Solutions",
  "Out Sourcing",
  "Software Testing",
  "Software QA",
]);
 
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) => {
    console.log(data);
    console.log("base64 data image",base64Data);
    console.log(data);
    data.image = base64Data;

    // console.log(file);
    // data.image = file;

    console.log("after adding image data",data);
    const responseforhost = await axios.post("http://www.localhost:8000/api/mailsend/contactustohost",data)
    console.log(responseforhost);
    const responseforuser = await axios.post("http://www.localhost:8000/api/mailsend/contactussendtouser",data)
    console.log(responseforuser);
    reset();
    resetField();
    toast.success("your form has been submitted");
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const [base64Data, setBase64Data] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // const base64 = reader.result.split(',')[1]; // Get the base64 data (omit the "data:image/jpeg;base64," prefix)
        const base64 = reader.result;
        console.log(base64);
        setBase64Data(base64);
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
    }
  };
  return (
    <>
       <ToastContainer position="top-center" />
      <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
        <Row className="form-row mb-4">
          <Col sm={9} className="contactus-form-col ">
            <h4 className="heading-form">Contact Us</h4>            
            <Container className="mt-2 mb-1 formContainer">
              <TextField
                // required
                fullWidth
                label="Full Name"
                margin="dense"
                name="name"
                className="textfield"
                variant="filled"
                placeholder="Your Name"
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
                // required
                fullWidth
                label="Email"
                margin="dense"
                name="email"
                className="textfield"
                variant="filled"
                placeholder="Your Email"
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
                    "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before": {
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
                  className="txtfield_phone "
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
                  {...register("phone", { required: "Required" })}
                  error={!!errors?.phone}
                />
              </div>
              <TextField
                fullWidth
                label="Location"
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
                  "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before": {
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
                // value={myForm.values.subject}
                // onChange={myForm.handleChange}
                // error={!!myForm.errors.companyName}
                // helperText={myForm.errors.subject}

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
              <div style={{display:"flex", marginBottom:"1.5rem"}}>
              <input id="uploadfilehere" type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />
              <label htmlFor="upload_file">
                {/* <input
                  style={{ display: "none" }}
                  id="upload_file"
                  name="upload_file"
                  type="file"
                  // value={formValues.upload_file}
                  // value={""}
                  // onChange={handleChange}
                  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/png, image/jpeg,.pdf"
                  {...register("upload_file")}
                /> */}
                {/* <Button
                  // color="light"
                  variant="contained"
                  component="span"
                  className="file_button mt-3"
                >
                  Upload Files
                </Button> */}
                {/* <small style={{ color: "#b1a40d" }}>Upload file </small> */}
              </label>
              </div>
              <Button
                style={{ display: "block", margin: "auto", width: "7rem", color:"white",backgroundColor: "#3b6da7",  }}
                // disabled={!myForm.isValid}
                // onClick={myForm.submitForm}
                type="submit"
                variant="contained"
                
              >
                Submit
              </Button>
            </Container>
          </Col>
        </Row>
      </form>
    </>
  );
}
