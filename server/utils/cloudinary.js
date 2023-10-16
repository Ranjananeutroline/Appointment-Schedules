import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: 'deepak878',
//   api_key: '548578381444353',
//   api_secret: 'KI2cKyIh3I-ZSMLM1fe_CEAZWaM'
// });
cloudinary.config({
  cloud_name: "dympntpr2",
  api_key: "522363245927347",
  api_secret: "gYlEejEjpDrxVm8GmL1IbgEA7J8",
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

// const uploadImage = async (image) => {
//   return await new Promise(async(resolve, reject) => {
//     console.log('yeha samma aayo');
//     try {
//       console.log('huruhri');
//       const result = await cloudinary.uploader.upload(image, opts);
//       console.log('ueti');
//       if (result && result.secure_url) {
//         // console.log(result.secure_url);
//         resolve(result.secure_url);
//       } else {
//         console.log("Error uploading image");
//         reject({ message: "Error uploading image" });
//       }
//     } catch (error) {
//       console.log(' k bho yr feri');
//       console.log(error.message);
//       reject({ message: error.message });
//     }
   
//   });
// };

export  {cloudinary }
