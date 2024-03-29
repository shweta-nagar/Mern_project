const student = require("./../models/studentSchema");
const contact = require("./../models/contactSchema");
const service = require("./../models/serviceSchema");

const path = require("path");
const filePath = path.join(__dirname, "..", "assets");
const fs = require("fs");

const getAllStudents = async (req, res) => {
  try {
    const data = await student.find();

    if (!data || data.length === 0) {
      res.status(404).json({ message: "Couldn't find student" });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Someting  went wrong!" });
  }
};

const getAllContact = async (req, res) => {
  try {
    const datacon = await contact.find();
    if (!datacon) {
      res.status(404).json({ message: "Couldn't find student" });
    } else {
      res.status(200).json(datacon);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Someting  went wrong!" });
  }
};

const deleteContact = async (req, res) => {
  const id = req.params.id;
  try {
    const datadelete = await contact.deleteOne({ _id: id });
    if (!datadelete) {
      return res.status(404).json({ message: `${_id}is not delete` });
    } else {
      res.status(200).json({ msg: `${_id}delete succesfully` });
    }
  } catch (error) {
    res.status(500).json({ msg: "internal server error!" });
  }
};

const getSingleStudent = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await student.findOne({ _id: id });
    if (!data) {
      res.status(400).json({ error: "Couldn't find student" });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error!" });
  }
};

const deletesingleData = async (req, res) => {
  try {
    const id = req.params.id;
    await student.deleteOne({ _id: id });
    res.status(200).json({ msg: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server error!" });
  }
};
// const updatedata = await student.updateOne({_id:id}. { $set: req.body })

const updateData = async (req, res) => {
  const id = req.params.id;
  try {
    const update = await student.updateOne({ _id: id }, { $set: req.body });
    if (!update) {
      return res.status(400).json({ msg: "no entry with this id" });
    } else {
      res.status(201).json({ msg: "Data update sucessfully!" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal Server error!" });
  }
};

const addservices = async (req, res) => {
  try {
    const { service_name, description } = req.body;
    const { uploadFile } = req.files;
    console.log(uploadFile);

    if (!service_name || !description) {
      res.status(400).json({ msg: "all fields are required" });
    } else {
      const serviceExist = await service.findOne({
        service_name: service_name,
      });
      if (serviceExist) {
        res.status(400).json({ msg: "Service already exists." });
      } else {
        uploadFile.mv(path.join(filePath, uploadFile.name));
        const newService = new service({
          service_name,
          description,
          image: uploadFile.name,
        });
        const savedService = await newService.save();
        res.status(201).json({ msg: "Service saved.", data: savedService });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

const getAdmindata = async (req, res) => {
  try {
    const data = await service.find();
    if (!data) {
      res.status(400).json({ error: "Couldn't find service" });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error!" });
  }
};

const deleteAdmindata = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await service.findById(id);

    if (!data) {
      return res.status(404).json({ msg: "Data Not Found!" });
    }

    //delete the file from the static folder

    const filePath = path.join(__dirname, "..", "assets", data.image);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    await service.findByIdAndDelete(id);
    res.status(200).json({ msg: "Deleted Successfully!" });
  } catch (error) {
    console.log("Error : ", error);
    res.status(500).json({ msg: "Internal Server Error!" });
  }
};

module.exports = {
  getAllStudents,
  getAllContact,
  deleteContact,
  getSingleStudent,
  deletesingleData,
  updateData,
  addservices,
  getAdmindata,
  deleteAdmindata,
};
