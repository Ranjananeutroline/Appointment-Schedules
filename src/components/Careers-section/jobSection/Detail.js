import React, { useMemo, useRef, useState } from "react";
import "./Detail.css";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Controller, useForm } from "react-hook-form";

import { MdEmail } from "react-icons/md";
import { HiPrinter } from "react-icons/hi";
import { MdFileCopy } from "react-icons/md";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Country, State, City } from "country-state-city";
import { FileUploader } from "react-drag-drop-files";
// import { ICountry } from "country-state-city";
import Button from "react-bootstrap/Button";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Modal } from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import { FaSuitcase } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import ReactToPrint from "react-to-print";
import { CopyToClipboard } from "react-copy-to-clipboard";
import swal from "sweetalert";
import { useDropzone } from "react-dropzone";
import { TextField } from "@mui/material";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import UploadFiles from "./UploadFiles";
import Select from "react-select";

const Detail = (props) => {
  const [mobile, setMobile] = useState("+977");

  const [state, setState] = useState(false);
  const countries = Country.getAllCountries();
  const [show, setShow] = useState(false);

  const data = {
    countries: [
      { name: "USA" },
      {
        name: "Nepal",
        states: [
          { name: "Province1" },
          { name: "Lumbini Province" },
          { name: "Bagmati Province" },
          { name: "Gandaki Province" },
          { name: "Karnali Province" },
          { name: "sudurpashchim Province" },
        ],
      },
    ],
  };

  const Componentref = useRef();
  // const setCou=countries.map(item=>item.isoCode)

  const states = State.getAllStates().filter(
    (item) => item.countryCode === "NP"
  );

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    control,
    formState: { errors, isSubmitted },
  } = useForm();
  console.log(control);
  console.log(errors);
  const onSubmit = async (data) => {
    console.log(data);
    data.coverletter = base64DataCV;
    data.resume = base64DataResume;
    const response = await axios.post(
      "http://www.localhost:8000/api/mailsend/confirmationafterjobapplytocandidate",
      data
    );
    console.log(response);
    const responseafterhost = await axios.post(
      "http://www.localhost:8000/api/mailsend/applytojobmailreceivedbyhost",
      data
    );
    console.log(responseafterhost);
    reset();
    resetField();
    swal("Form has been Submitted");
  };

  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [selectedRegion, setSelectedRegion] = React.useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [base64DataCV, setBase64DataCV] = useState("");
  const [base64DataResume, setBase64DataResume] = useState("");
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

  const selectOption = [
    { value: "Consulting", label: "Consulting" },
    { value: "Internal job", label: "Internal job" },
    { value: "Internship", label: "Internship" },
  ];
  const handleCVFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result; // Get the base64 data (omit the "data:image/jpeg;base64," prefix)
        console.log(base64);
        setBase64DataCV(base64);
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
    }
  };
  const handleResumeFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result; // Get the base64 data (omit the "data:image/jpeg;base64," prefix)
        console.log(base64);
        setBase64DataResume(base64);
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
    }
  };
  return (
    <div className="main-divbg">
      <Container className="details-container">
        <Row className="back-row">
          <Col className="back-col">
            <button className="back-btn" onClick={() => navigate(-1)}>
              Back
            </button>
          </Col>
        </Row>

        <Row className="top-row">
          <Col sm={9} className="jobs-top-col">
            <h2>Sales Intern - On-site</h2>
          </Col>

          <Col sm={3} className="jobs-top-col2">
            <button onClick={handleShow} className="jobs-top-btn">
              Apply Now
            </button>
          </Col>
        </Row>

        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          className="jobdetails-modal"
        >
          <Modal.Header closeButton className="jobs-modal-header">
            <Modal.Title className="top-form">
              ENTER YOUR INFORMATION
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="jobdetails-body">
            <form
              className="form details-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Row className="mt-1">
                <Col
                  lg={6}
                  md={12}
                  sm={12}
                  className="resume-form-col fname-width"
                >
                  <FloatingLabel
                    controlId="floatingInput"
                    label="First Name"
                    className="input-field"
                  >
                    <Form.Control
                      type="text"
                      placeholder="name@example.com"
                      name="name"
                      {...register("name", {
                        required: "Required",
                        minLength: 3,
                      })}
                      error={!!errors?.name}
                    />
                  </FloatingLabel>
                </Col>
                <Col
                  lg={6}
                  md={12}
                  sm={12}
                  className="resume-form-col mname-width"
                >
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Middle Name (If applicable)"
                    className="input-field"
                    name="middlename"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Middle Name(If applicable)"
                      {...register("middlename")}
                      error={!!errors?.middlename}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={12} sm={12} className="resume-form-col">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Last Name"
                    className="input-field p-0"
                    name="lastname"
                  >
                    <Form.Control
                      type="text"
                      placeholder="name@example.com"
                      error={!!errors?.lastname}
                      {...register("lastname", { required: "Required" })}
                    />
                  </FloatingLabel>
                </Col>

                <Col lg={6} md={12} sm={12} className="resume-form-col">
                  <Form.Select
                    aria-label="Default select example"
                    className="input-field gender-padding"
                    name="gender"
                    {...register("gender", { required: "Required" })}
                    error={!!errors?.gender}
                    label="gender"
                  >
                    <option disabled selected value>
                      {" "}
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unspecified">Unspecified</option>
                    <option value="undisclosed">Undisclosed</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row>
                <Col
                  lg={6}
                  md={12}
                  sm={12}
                  className="resume-form-col cc-width-div"
                >
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Country Code"
                    className="input-field"
                  >
                    <Form.Control
                      name="country_code"
                      placeholder="Nepal +977"
                      {...register("country_code", { required: "Required" })}
                      // error={!!errors?.phone}
                    />
                  </FloatingLabel>
                  {/* <TextField
                    // fullWidth
                    placeholder="Nepal +977"
                    label="Country Code"
                    margin="dense"
                    name="country_code"
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
                    className="job_country_code m-0"
                    {...register("country_code", { required: "Required" })}
                    error={!!errors?.country_code}
                  /> */}
                </Col>

                <Col
                  lg={6}
                  md={12}
                  sm={12}
                  className="resume-form-col p-width-div"
                >
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Phone Number"
                    className="input-field"
                  >
                    <Form.Control
                      type="number"
                      name="phone"
                      placeholder="phone"
                      {...register("phone", { required: "Required" })}
                      // error={!!errors?.phone}
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col
                  lg={6}
                  md={12}
                  sm={12}
                  className="resume-form-col mb-2 country-width"
                >
                  <Controller
                    name="countryname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <CountryDropdown
                        {...field}
                        className="input-field select"
                        style={{ color: "#000000d4", height: "3.7rem" }}
                        onChange={(val) => {
                          field.onChange(val); // Update the field value
                          handleCountryChange(val); // Handle country selection
                        }}
                      />
                    )}
                  />
                  {/* <CountryDropdown
                      className="input-field select input-resp"
                      style={{color: "#000000d4", height:"3.7rem" }}
                      value={country}
                      onChange={(val) => selectCountry(val)}
                      // showDefaultOption={false}
                    /> */}
                </Col>

                <Col
                  lg={6}
                  md={12}
                  sm={12}
                  className="resume-form-col mb-2 region-width"
                >
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
                        style={{ color: "#000000d4", height: "3.7rem" }}
                        blankOptionLabel="Select Region"
                        onChange={(val) => {
                          field.onChange(val); // Update the field value
                          handleRegionChange(val); // Handle region selection
                        }}
                      />
                    )}
                  />
                </Col>
              </Row>

              <Row>
                <Col lg={6} md={12} sm={12} className="resume-form-col">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="City"
                    className="input-field"
                  >
                    <Form.Control
                      type="text"
                      {...register("city", {
                        required: "Required field",
                      })}
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                </Col>

                <Col lg={6} md={12} sm={12} className="resume-form-col">
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Current Address"
                    className="input-field"
                  >
                    <Form.Control
                      type="text"
                      {...register("currentaddress", {
                        required: "Required field",
                      })}
                      placeholder="Middle Name (If applicable)"
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col
                  lg={6}
                  md={12}
                  sm={12}
                  className="resume-form-col email-width"
                >
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="input-field"
                  >
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      {...register("email", {
                        required: "Required field",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      error={!!errors?.email}
                    />
                  </FloatingLabel>
                </Col>

                <Col
                  lg={6}
                  md={12}
                  sm={12}
                  className="resume-form-col salary-width"
                >
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Expected Salary (Optional)"
                    className="input-field number-arrow"
                  >
                    <Form.Control
                      type="number"
                      {...register("expectedsalary", {
                        required: "Required field",
                      })}
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col
                  lg={6}
                  md={12}
                  sm={12}
                  className="resume-form-col level-width"
                >
                  <Controller
                    name="jobappliedfor"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Form.Select
                        aria-label="Default select example"
                        className="mb-3 input-field"
                        {...field}
                      >
                        <option value="">
                          Applying for Seniority Level of
                        </option>
                        <option value="Not Applicable">Not Applicable</option>
                        <option value="Internship">Internship</option>
                        <option value="Entry Level">Entry Level</option>
                        <option value="Associate(Junior)">
                          Associate(Junior)
                        </option>
                        <option value="Mid Level">Mid Level</option>
                        <option value="Senior">Senior</option>
                        <option value="Director">Director</option>
                        <option value="Executive">Executive</option>
                      </Form.Select>
                    )}
                  />
                  {/* <Form.Select
                      aria-label="Default select example"
                      className="mb-3 input-field"
                    >
                      <option>Applying for Seniority Level of</option>
                      <option value="1">Not Applicable</option>
                      <option value="2">Internship</option>
                      <option value="3">Entry Level</option>
                      <option value="4">Associate(Junior)</option>
                      <option value="5">Mid Level</option>
                      <option value="6">Senior</option>
                      <option value="7">Director</option>
                      <option value="5">Executive</option>
                    </Form.Select> */}
                </Col>

                <Col
                  lg={6}
                  md={12}
                  sm={12}
                  className="resume-form-col upload-width"
                >
                  {/* <div className="dashed-border input-field mb-3 ">
                      <FileUploader
                        multiple={true}
                        handleChange={handleChange}
                        name="file"
                        types={fileTypes}
                        label="Upload file"
                        dropMessageStyle={{ backgroundColor: "red" }}
                      />
                      <p>{file ? `File name: ${file[0].name}` : ""}</p>
                    </div> */}
                  {/* <UploadFiles
                    accept={["application/pdf"]}
                    name="Upload Cover Letter"
                  /> */}
                  <div className=" input-field ">
                    <label
                      for="inputcover"
                      style={{
                        float: "left",
                        display: "inline-block",
                        padding: "10px 20px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        cursor: "pointer",
                        borderRadius: "5px",
                        textAlign: "center",
                      }}
                    >
                      Upload Cover Letter (Optional)
                    </label>
                    <input
                      type="file"
                      id="inputcover"
                      accept=".jpg, .jpeg, .png, .pdf"
                      onChange={handleCVFileChange}
                      style={{ display: "none" }}
                    />
                  </div>
                </Col>
              </Row>

              <Row className="reverse-col">
                <Col
                  lg={6}
                  md={12}
                  sm={12}
                  className="resume-form-col msgtxt-width"
                >
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Message (Optional)"
                    className="input-field message-padding"
                  >
                    <Form.Control
                      as="textarea"
                      {...register("message", {
                        required: "Required field",
                      })}
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </Col>

                <Col
                  lg={6}
                  md={12}
                  sm={12}
                  className="resume-form-col second-upload"
                >
                  {/* <div className="dashed-border input-field mb-3 neutroDetail ">
                      <div className="uploadpart  ">
                        <FileUploader
                          className="file-upload-jobs"
                          multiple={true}
                          handleChange={handleChange2}
                          name="file2"
                          types={fileTypes2}
                          label="Upload File"
                        />
                        <p>{file2 ? `File name: ${file2[0].name}` : ""}</p>
                      </div>
                    </div> */}
                  {/* <UploadFiles accept={["image/*"]} name="Upload Resume/CV" /> */}
                  {/* <div> */}
                  <label
                    for="inputResume"
                    style={{
                      float: "left",
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      cursor: "pointer",
                      borderRadius: "5px",
                      textAlign: "center",
                    }}
                  >
                    Upload Resume Letter
                  </label>
                  <input
                    required
                    type="file"
                    id="inputResume"
                    accept=".jpg, .jpeg, .png, .pdf"
                    onChange={handleResumeFileChange}
                    style={{ display: "none" }}
                  />
                  {/* </div> */}
                  <>
                    {/* <input
                        style={{ display: "none" }}
                        id="upload_file"
                        name="file"
                        type="file"
                        accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/png, image/jpeg,.pdf"
                        />
                        <Button
                        variant="contained"
                        component="span"
                        className="file_button"
                        >
                        Upload Cover Letter(Optional)
                      </Button>
                      <small
                      style={{
                          color: "gray",
                          textAlign: "left",
                        }}
                      >
                      or drop them
                      </small> */}

                    {/* </div> */}
                  </>
                </Col>
              </Row>

              <Row>
                <Col lg={9} md={9} sm={12} className="check-container-col">
                  <div className="check-container">
                    {" "}
                    <input type="checkbox" name="check" id="applycheck" />
                    <p className="check">
                      By checking this box, I certify that the information
                      submitted in this application is true and correct to the
                      best of my knowledge.
                    </p>
                  </div>
                </Col>

                <Col lg={3} md={3} sm={12} className="submit-btn-col">
                  <Button id="submit-btn" type="submit">
                    Submit
                  </Button>{" "}
                </Col>
              </Row>
            </form>
            {/* </Form> */}
          </Modal.Body>
        </Modal>

        <Row className="jobs-outer-row">
          <Col sm={4} className="outer-col">
            <Row className="second-row">
              <Col sm={12} className="left-col">
                <h3>Job Overview</h3>
                <p>
                  Req #:<span> 1017</span>
                </p>

                <div className="section section-first">
                  <i className="fa-solid">
                    <ImLocation />
                  </i>
                  <div className="inner-section inner-loc">
                    <h1>Location:</h1>
                    <span>Irving, Texas, United States</span>
                  </div>
                </div>

                <div className="section">
                  <i className="fa-solid">
                    <FaSuitcase />
                  </i>
                  <div className="inner-section">
                    <h1>Job Category:</h1>
                    <span>Technology</span>
                  </div>
                </div>

                <div className="section">
                  <i className="fa-solid">
                    <FaRegClock />
                  </i>
                  <div className="inner-section">
                    <h1>Date Posted:</h1>
                    <span>2021-11-09 16:30:20</span>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="leftbottom-row">
              <Col sm={12} className="leftbottom-col">
                <h4>Share this job</h4>
                <Row className="share-row">
                  <Col sm={6} className="share-col ">
                    <div className="socials">
                      <a
                        href="https://www.facebook.com/Neutrosys"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands">
                          <ImFacebook2 />
                        </i>
                      </a>

                      <a
                        href="https://www.linkedin.com/company/neutrosys/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands">
                          <ImLinkedin />
                        </i>
                      </a>

                      <a href="/#">
                        <i className="fa-brands twitticon">
                          <FaTwitterSquare />
                        </i>
                      </a>
                    </div>
                  </Col>
                  <Col sm={6} className="share-col2">
                    <div className="vertical-div">
                      <p>
                        <MdEmail />
                        &nbsp;&nbsp;
                        <span
                          onClick={(e) => {
                            window.location.href =
                              "mailto:neutroline@gmail.com";
                          }}
                        >
                          Email this job
                        </span>
                      </p>
                      <p>
                        <HiPrinter />

                        <ReactToPrint
                          trigger={() => (
                            <span style={{ marginLeft: ".7rem" }}>Print</span>
                          )}
                          content={() => Componentref.current}
                        />
                      </p>
                      <p>
                        <MdFileCopy />
                        &nbsp;&nbsp;
                        <span>
                          <CopyToClipboard
                            text="http://localhost:3000/Details/sales#"
                            onCopy={() =>
                              swal({
                                title: "Good job!",
                                text: "Job link has been copied!",
                                icon: "success",
                                button: "ok",
                              })
                            }
                          >
                            <span>Copy</span>
                          </CopyToClipboard>
                        </span>
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col sm={8} className="right-col" ref={Componentref}>
            <h3>Job Description</h3>
            <p>
              Neutrosys Inc is looking for a few recent graduate individuals to
              join a growing office in the staffing business. This is a great
              opportunity to get your foot into the door with a staffing firm to
              start a career in either recruitment or sales. The ideal candidate
              would be a self-starter, self-motivated, persuasive, and
              enthusiastic, and enjoy working in a group or individual.
            </p>

            <h6>Responsibilities</h6>
            <ul>
              <li>Involve in new business development</li>
              <li>
                Update and manage all sales activities, opportunities, and
                account information
              </li>
              <li>Emailing/cold calling new accounts</li>
              <li>Information gathering and sorting</li>
              <li>Work closely with Recruitment and Operations teams</li>
            </ul>

            <h6> Qualifications:</h6>
            <ul>
              <li>1 year of relevant work experience is preferred</li>
              <li>Excellent communication skills (Written & Verbal)</li>
              <li>Ability to multitask, organize, and prioritize work</li>
              <li>
                Self-directed, can-do attitude and sense of humor appreciated
              </li>
              <li>Authorized to work in the United States</li>
            </ul>

            <h6>Why join us?</h6>
            <p>
              We are committed to a diversified and happy employee working
              culture with the opportunity to grow. We are a company that
              rewards employees for their performance and dedication. We believe
              that employees’ happiness is the key to level-up the company. We
              are committed to the enjoyable and flexible working environment.
            </p>

            <p className="benefits">Some of our benefits include:</p>
            <ul>
              <li>Competitive Base Salary</li>
              <li>Competitive Commission Structure</li>
              <li>Bonus</li>
              <li>PTO</li>
              <li>Flexible Working Hours</li>
            </ul>

            <p className="italic">
              Neutrosys Inc is an EEO Employer providing IT solutions in United
              States, Asia, and Europe.
            </p>
            <button
              className="apply-btn"
              // type="submit"
              onClick={handleShow}
            >
              <a href="/#">Apply Now</a>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
