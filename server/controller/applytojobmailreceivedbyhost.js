import nodemailer from "nodemailer";
import { cloudinary } from "../utils/cloudinary.js";

const applytojobmailreceivedbyhost = async (req, res) => {
  const userData = req.body;
  
  console.log('User email received', userData);

  const base64DataCoverLetter = userData.coverletter; // Replace with your actual base64 data
  const base64DataResume = userData.resume;

 
  const resultCoverLetter = await cloudinary.uploader
    .upload(base64DataCoverLetter)
    .then((result) => {
      console.log(result.secure_url);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
    });

  const resultResumeLetter = await cloudinary.uploader
    .upload(base64DataResume)
    .then((result) => {
      console.log(result.secure_url);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
    });
  

  let config = {
    service: "gmail",
    auth: {
      user: "Deepakb.neutroline@gmail.com",
      pass: "fsgfepuhfaplccsc",
    },
  };
  const transporter = nodemailer.createTransport(config);

  let message = await transporter.sendMail({
    from: '"Deepak.Neutroline👻" <foo@example.com>', // sender address
    to: userData.email, // list of receivers
    subject: "Someone Applied for a Job", // Subject line
    text: "Hello world k xa bro?", // plain text body
    html: `<center class="wrapper" style="max-width: 600px; margin: auto;">
    <table class="main" width="100%">
      <!-- logo section -->
      <tr>
        <td style="padding: 14px 0 4px;background-color: #3B82F6;">
          <table width="100%">
            <tr>
              <td class="two-columns">
                <table class="column" style="margin: auto;">
                  <tr>
                    <td>
                      <a href="www.neutroline.com"><img src="https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/163776951_128435092621858_8897926329467399816_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TjfZp2yZlksAX_rsa2m&_nc_ht=scontent.fktm16-1.fna&oh=00_AfB4lsDmQsQj-pqmNSqD9zs3i7faQFNG9NrZLvmzJwttGQ&oe=64CFA1E8" alt="" width="180px" title="logo"></a>
                    </td>
                  </tr>
  
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
  
      <!-- text section -->
      <tr style="background-color: #ECF0F1;">
        <td>
          <table width="100%"">
            <div style=" max-width: 80%; margin: auto;">
            <h1 style="font-size: 30px; line-height: 1.3;;">Hi,</h1>
            <h2 style="font-size: 22px; text-align: left;">${userData.name} has applied for the Job</h2>
            </div>
            <div style="padding:5px 10px; width: 80%; margin:auto; font-size: 20px;text-align: left; line-height: 1.8;">
  
              <div style="border-bottom: 1px solid rgb(232, 224, 224);;">
  
                <b>Full Name:</b> <span style="padding-left: 10px;">${userData.name} ${userData.middlename} ${userData.lastname}</span>
              </div>
              <div style="border-bottom: 1px solid rgb(232, 224, 224);;">
  
                <b>Email:</b> <span style="color: blue;padding-left: 10px;">${userData.email}</span>
              </div>
              <div style="border-bottom: 1px solid rgb(232, 224, 224);;">
                <b>Code:</b> <span style="padding-left: 10px;">${userData.country_code}</span>
  
              </div>
              <div style="border-bottom: 1px solid rgb(232, 224, 224);;">
  
                <b>Phone Number:</b> <span style="padding-left: 10px;"><u>${userData.phone}</u></span>
              </div>
  
             
              <div style="border-bottom: 1px solid rgb(232, 224, 224);;">
  
                <b>Country:</b> <span style="padding-left: 10px;">${userData.countryname}</span>
              </div>
              <div style="border-bottom: 1px solid rgb(232, 224, 224);;">
  
                <b>City:</b> <span style="padding-left: 10px;">${userData.city}</span>
              </div>
              <div style="border-bottom: 1px solid rgb(232, 224, 224);;">
  
                <b>Current Address:</b> <span style="padding-left: 10px;">${userData.currentaddress}</span>
              </div>
              <div style="border-bottom: 1px solid rgb(232, 224, 224);;">
  
                <b>Expected Salary:</b> <span style="padding-left: 10px;">${userData.expectedsalary}</span>
              </div>
  
              <div style="border-bottom: 1px solid rgb(232, 224, 224);;">
  
                <b>Applied For:</b> <span style="padding-left: 10px;">${userData.jobappliedfor}</span>
              </div>
              <div style="border-bottom: 1px solid rgb(232, 224, 224);;">
  
              <b>Cover Letter:</b> <span style="padding-left: 10px;"><a href="${resultCoverLetter?.secure_url}" target="_blank">Details : ${resultCoverLetter?.secure_url}</a> </span>
              </div>
              <div style="border-bottom: 1px solid rgb(232, 224, 224);;">
  
               
                <b>Resume Letter:</b> <span style="padding-left: 10px;"><a href="${resultResumeLetter?.secure_url}" target="_blank">Details : ${resultResumeLetter?.secure_url}</a></span>
              </div>
              <div style="border-bottom: 1px solid rgb(232, 224, 224);;">
  
                <b>Message:</b> <span style="padding-left: 10px;">${userData.message}</span>
              </div>
  
  
              <br>
          </table>
        </td>
      </tr>
  
    
  
  
    </table>
  
  </center>`, // html body
  });

  res.status(201).json("You should receive an email");
};

export default applytojobmailreceivedbyhost;
