import React, { useRef, useState } from "react";
import "./resume.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Container, FloatingLabel, Form, Modal } from "react-bootstrap";
import { Country, State, City } from "country-state-city";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import UploadFiles from "../jobSection/UploadFiles";
// import ReactToPrint from 'react-to-print';
import Select from "react-select";

export default function Resume(props) {
  const wrapperRef = useRef(null);
  const [fileList, setFileList] = useState([]);
  const [mobile, setMobile] = useState("+977");
  const [state, setState] = useState(false);
  const countries = Country.getAllCountries();
  const [show, setShow] = useState(false);

  const Componentref = useRef();
  // const setCou=countries.map(item=>item.isoCode)

  const states = State.getAllStates().filter(
    (item) => item.countryCode === "IN"
  );

  // const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log('ok bro form bhariyo');
    reset();
    resetField();
    swal("Form has been Submitted");
  };

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };
  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const selectCountry = (val) => setCountry(val);
  const selectRegion = (val) => {
    setRegion(val);
  };

  const selectOption = [
    { value: "Contract Jobs", label: "Contract Jobs" },
    { value: "Internal Jobs", label: "Internal Jobs" },
    { value: "Internship", label: "Internship" },
  ];

  return (
    <>
      <div className="resume-maindiv">
        <Row className="resume-row">
          <Col className="resume-col1">
            <img src="./images/career/jobresume.jpg" alt="resume"></img>
          </Col>
          <Col className="resume-col2">
            <h2>Not finding the suitable role for you?</h2>
            <p>
              "Submit your resume and let us help you find your next career
              opportunity, including internships, consulting, or internal
              positions that match your skills and qualifications.”
            </p>

            <div className="btn-submitdiv">
              <Button size="lg" className="rbtn" onClick={handleShow}>
                Submit Resume
              </Button>

              <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                className="resume-modal"
              >
                <Modal.Header closeButton className="jobs-modal-header">
                  <Modal.Title className="top-form">
                    Enter your Information
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="resume-modal-body">
                  <form
                    className="form details-form"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <Row className="mt-1">
                      <Col sm={12} className="resume-form-col selectjob-width">
                        <Select
                          isMulti
                          name="colors"
                          placeholder="Select Job Type"
                          options={selectOption}
                          className="basic-multi-select select-bg"
                          classNamePrefix="select"
                          menuPortalTarget={document.body}
                          styles={{
                            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                          }}
                        />
                      </Col>
                    </Row>
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
                          // lg={3}
                          controlId="floatingPassword"
                          label="Middle Name (If applicable)"
                          className="input-field"
                          name="middlename"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Middle Name(If applicable)"
                            {...register("middlename")}
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
                            {...register("lastname", {
                              required: "Required",
                            })}
                            error={!!errors?.lastname}
                          />
                        </FloatingLabel>
                      </Col>

                      <Col lg={6} md={12} sm={12} className="resume-form-col">
                        <Form.Select
                          aria-label="Default select example"
                          className="p-3 input-field gender-padding"
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
                        {/* <PhoneInput
                            country={"nep"}
                            value={mobile}
                            // name="country_code"
                            inputProps={{}}
                            type="number"
                            onChange={(phone) => setMobile(phone)}
                            className="input-field country-padding"
                            // {...register("country_code", {
                            //   required: "Required",
                            // })}
                            // error={!!errors?.country_code}
                          /> */}
                        <FloatingLabel
                          controlId="floatingPassword"
                          label="Country Code"
                          className="input-field"
                        >
                          <Form.Control
                            name="country_code"
                            placeholder="Nepal +977"
                            // {...register("phone", { required: "Required" })}
                            // error={!!errors?.phone}
                          />
                        </FloatingLabel>
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
                            // {...register("phone", { required: "Required" })}
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
                        <CountryDropdown
                          className="input-field select input-resp"
                          value={country}
                          style={{ color: "#000000d4", height: "3.7rem" }}
                          onChange={(val) => selectCountry(val)}
                          // showDefaultOption={false}
                        />
                      </Col>

                      <Col
                        lg={6}
                        md={12}
                        sm={12}
                        className="resume-form-col mb-2 region-width"
                      >
                        <RegionDropdown
                          className="input-field select input-resp"
                          label="region"
                          // showDefaultOption={false}
                          country={country}
                          // showDefaultOption="true"
                          blankOptionLabel="Choose State/province"
                          style={{ color: "#000000d4", height: "3.7rem" }}
                          value={region}
                          onChange={(val) => selectRegion(val)}
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
                          className="input-field"
                        >
                          <Form.Control
                            type="number"
                            placeholder="Expected Salary/Salary Range(Optional)"
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
                        <Form.Select
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
                        </Form.Select>
                      </Col>

                      <Col
                        lg={6}
                        md={12}
                        sm={12}
                        className="resume-form-col upload-width"
                      >
                        {/* <div className="dashed-border input-field mb-3 "> */}
                        <UploadFiles
                          accept={["application/pdf"]}
                          name="Upload Cover Letter"
                        />
                        {/* </div> */}
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
                        <UploadFiles
                          accept={["application/pdf"]}
                          name="Upload Resume/CV"
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        lg={9}
                        md={9}
                        sm={12}
                        className="check-Rcontainer-col"
                      >
                        <div className="check-container">
                          {" "}
                          <input type="checkbox" name="check" id="" />
                          <p className="check">
                            By checking this box, I certify that the information
                            submitted in this application is true and correct to
                            the best of my knowledge.
                          </p>
                        </div>
                      </Col>

                      <Col lg={3} md={3} sm={12} className="Rsubmit-btn-col">
                        <Button variant="success" id="submit-btn" type="submit">
                          Submit
                        </Button>{" "}
                      </Col>
                    </Row>
                  </form>
                  {/* </Form> */}
                </Modal.Body>
              </Modal>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
