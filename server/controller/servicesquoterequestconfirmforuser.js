import nodemailer from "nodemailer";
import emailTemplates from "../pages/applytojob.js";
const servicesquoterequestconfirmforuser = async (req, res) => {
  console.log("By user",req.body);
  const userData = req.body;

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
    subject: "Thankyou for quoting, We will contact you soon", // Subject line
    text: "", // plain text body
    html: ` <center class="wrapper" style="max-width: 600px; margin: auto;">
    <table class="main" width="100%">
    
      <!-- logo section -->
      <tr>
        <td style="padding: 14px 0 4px;background-color: #3B82F6;">
          <table width="100%">
            <tr>
              <td class="two-columns">
                <table class="column" style="margin: auto; text-align: center;">
                  <tr>
                    <td>
                      <a href="www.neutroline.com"><img src="https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/163776951_128435092621858_8897926329467399816_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TjfZp2yZlksAX_rsa2m&_nc_ht=scontent.fktm16-1.fna&oh=00_AfB4lsDmQsQj-pqmNSqD9zs3i7faQFNG9NrZLvmzJwttGQ&oe=64CFA1E8" alt="" width="180px" title="logo"></a>
                    </td>
                  </tr>
                  <tr>
                    <td style="color: white; font-size: 22px;font-weight: bold; ">
    
                      Thank you for the Quotation
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
            <h1 style="font-size: 24px; line-height: 1.3;;">Hi, ${userData.name}</h1>
            <p style="font-size: 20px; text-align: left; margin: auto;">Thank you for your information.We will check out your information and let you know our response.</p>
           
            </div>
            <div style="padding:5px 10px; max-width: 80%; margin:auto;  font-size: 20px;text-align: left; line-height: 1.8;">
    
              <div style="border-bottom: 1px solid rgb(226, 216, 216); margin-top: 20px;" >
                <div style="">
                  <span>Kind Regards</span> 
                </div>
                <div style="margin-top: -10px;">
                  <span style="color: green;">Neutrosys Pvt.Ltd</span>
                </div>
                <div style="margin-top: -10px;">
                <a href="www.neutrosys.com"><span>www.neutrosys.com</span></a>
                </div>
              </div>
              <br>
              <div className='note'>
                <div>
                  <span className='one' style="font-size:18px">****** PLEASE DONOT REPLY TO THIS EMAIL ******</span>
                </div>
                <div style="font-size: 16px; text-align: left;" className='two'>This is an auto generated email from <a href="https://neutrosys.net/contact-us">https://neutrosys.net/contact-us</a></div>
              </div>
          </table>
        </td>
      </tr>
    
      <!-- footer section -->
      <tr>
        <td>
          <table width="100%">
            
          </table>
        </td>
      </tr>
    
    
    </table>
    
    </center>
    ` // html body
  });

  res.status(201).json("You should receive an email");
};

export default servicesquoterequestconfirmforuser;
