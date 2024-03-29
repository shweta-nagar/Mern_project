import React, { useRef, useState } from "react";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import "../App.css";
const AdminService = () => {
   const [service_name,setService_name] = useState("")
   const [description,setDescription] = useState("");
   const [uploadFile,setUploadFile] = useState("");
   const file = useRef('');


   const addService = async (e) =>{
    e.preventDefault()

    const data = new FormData()
    data.append('service_name',service_name)
    data.append('description',description)
    //data.append('image',document.
    data.append('uploadFile',uploadFile);
   

    try{
      const dataToAdd = await fetch('http://localhost:5000/api/admin/post/service',
      {method:"POST",
      body:data
      })
      const res = await dataToAdd.json()
      console.log(res)
      alert('data submitted');
      }
      catch(error){
          console.log(error)
      }
      setService_name('');
      setDescription('');
      file.current.value=""

    

      }
     

  return (
    <>
      <div className="container">
        <div class="col-md-6 offset-md-3 border shadow ">
          <h2 className="text-center mt-3">Add New Service</h2>
          <form class="p-3" onSubmit={addService} encType='multipart/form-data'>
            <div class="form-field d-flex align-items-center">
              <input
                type="text"
                name="Service-Name"
                value={service_name}
                onChange={(e)=>setService_name(e.target.value)}
                id="userName"
                placeholder="Service-Name"
                className="app-form-control"
              />
            </div>
            <div class="form-field d-flex align-items-center">
              <input
                type="text"
                name="service-description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                placeholder="Service-description"
                className="app-form-control mt-3 mb-3"
              />
            </div>
            <input
              type="file"
                onChange={(e)=>setUploadFile(e.target.files[0])}
                ref={file}
              placeholder="Service-description"
              className="app-form-control mt-3 mb-3"
            />

            <button
              type="submit"
              className="btn btn-outline-primary shadow w-100 mt-2"
            >
              Add Service
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminService;
