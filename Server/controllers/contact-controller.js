const contact = require('./../models/contactSchema');

const contactform= async (req, res) =>{

    const {name,email,msg}=req.body;
   

    if(!name||!email||!msg){
        return res.status(400).json({msg:"Please fill your name and email and message"});
    }else{

        try {
           
              const info = new contact({
                name:name,
                email:email,
                message:msg
            });

            const infoCreated = await info.save()
            res.status(201).json(infoCreated)

           
        
        } catch (error) {
            console.log(error);
            res.status(400).json({ msg: "Someting  went wrong!" });
            
        }
    }
}

module.exports=contactform