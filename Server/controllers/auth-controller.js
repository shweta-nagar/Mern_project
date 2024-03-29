const student = require("./../models/studentSchema");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const home = async (req, res) => {
  try {
    res.status(200).send("We are using router");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  const { name, email, contact, password, confirmpassword } = req.body;

  if (!name || !email || !contact || !password || !confirmpassword) {
    return res.status(400).json({ msg: "All fields are required" });
  } else {
    const emailExist = await student.findOne({ email: email });
    if (emailExist) {
      return res.status(400).json({ msg: "Email already exists." });
    } else {
      if (password == confirmpassword) {
        try {
          const hashpass = await bcrypt.hash(password, 10);
          const data = new student({
            name: name,
            email: email,
            contact: contact,
            password: hashpass,
          });

          const studentCreated = await data.save();
          const storedData=await student.findOne({ email: email });
          const token = jwt.sign({ _id: storedData._id },process.env.JWT_SECRET_KEY,{ expiresIn: "2h" });
          

          res.status(200).json({msg: studentCreated,'token':token});
        } catch (error) {
          console.log(error);
          res.status(400).json({ msg: "Unable to Register!" });
        }
      } else {
        return res.status(400).json({msg: "Password does not match"});
      }
    }
  }
};

// const register = async (req, res) => {
//     // console.log(req.body)
//     const hashedpass = await bcrypt.hash(req.body.password,10);
//     const hashedcpass = await bcrypt.hash(req.body.confirmpassword,10);

//     const data = new student({
//         name: req.body.name,
//         email: req.body.email,
//         contact: req.body.contact,
//         password: hashedpass,
//         confirmpassword: hashedcpass
//     })

//     try{
//         // res.status(200).send(req.body)

//         const chmail = await student.findOne({email: req.body.email})

//         if (!data.name || !data.email || !data.password || !data.contact) {

//             res.status(400).json({msg: 'all fields are required'})

//         } else {
//             if(chmail){
//                 res.status(400).json({msg: 'already existing'})
//             }else{
//                 if(req.body.password===req.body.confirmpassword){
//                     const studentCreated = await data.save()
//                     res.status(200).json(studentCreated)
//                 }else{
//                     res.status(400).json({msg: 'Invalid password'})
//                 }

//             }
//         }

//     }
//     catch(error){
//         res.status(500).send({msg: 'Internal server error'})
//     }
// }

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      const userExist = await student.findOne({ email: email });
      if (userExist) {
        const isMatch = await bcrypt.compare(password, userExist.password);

        if (userExist.email === email && isMatch) {
          const token = jwt.sign({ _id: userExist._id },process.env.JWT_SECRET_KEY,{ expiresIn: "2h" });
          res.status(200).json({ msg: "Match! You have loged in",token: token });
        } else {
          res.status(401).json({ msg: "Invalid Email or Password" });
        }
      } else {
        res.status(400).json({ msg: " you are not a registerde user" });
      }
    } else {
      return res.status(400).json("Please enter all fields");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "unable to log in!" });
  }
};
module.exports = { home, register, login };
