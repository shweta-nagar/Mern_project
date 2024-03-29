import React, { useEffect, useState } from "react";
import "./../App.css";
import "../../node_modules/bootstrap/dist/js/bootstrap";

const AdminStudents = () => {
  const [ustudent, setUstudent] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [dataid, setDataid] = useState("");
  const [userid,setUserid]= useState("");

  const udata = async () => {
    try {
      const data = await fetch("http://localhost:5000/api/admin/students");
      const result = await data.json();
      console.log(result);
      setUstudent(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    udata();
  }, []);

  const show = async (_id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/students/${_id}`
      );
      const data = await response.json();
      setName(data.name);
      setEmail(data.email);
      setContact(data.contact);
      setUserid(data._id);
    } catch (err) {
      console.log(err);
    }
  };


  const dataDelete =async(_id)=> {
    try {
       const response =  await fetch(`http://localhost:5000/api/admin/students/delete/${_id}`, { method: 'DELETE' });
       const data= await response.json()
       if(data.msg){
        udata()
      }
      
      }catch(ar){
       console.log("error")
     }
 }


 const dataUpdate = async(_id)=>{
  try{
    const response=await fetch(`http://localhost:5000/api/admin/students/update/${_id}`,{
     method:"PUt",
     body:JSON.stringify({
        name:name,
        email:email,
        contact:contact
     }),
     headers:{
      "Accept": "application/json",
       "Content-Type":"application/json"
     },
   });
   const data = await response.json();
   if(data.msg){
    udata()
  }
  
   }
  catch(er){
    console.log('Error');
  }
} 
 
  return(
  <>
    <table className="student-table">
      <thead>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {ustudent.map((item, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td> {item.name}</td>
              <td>{item.email}</td>
              <td> {item.contact}</td>
              <td>
                <button
                  className="btn-edit rounded"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                  onClick={() => show(item._id)}
                >
                  Edit
                </button>{" "}
                |{" "}
                <button
                  className="btn-delete rounded"
                  data-bs-toggle="modal"
                  data-bs-target="#delete"
                  onClick={() => setDataid(item._id)}
                >
                 Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
   
    </table>

    <div class="modal shadow" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h3 class="modal-title text-light">Edit Details</h3>
            <button
              type="button"
              class="btn-close bg-light"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div class="modal-body bg-dark">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  class="form-control mb-2"
                  placeholder="Enter your Name"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="form-control mb-2"
                  placeholder="Enter your Email"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  class="form-control"
                  placeholder="Enter your Contact"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer bg-dark">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={()=>{dataUpdate(userid)}}
            >
              Update
            </button>
            <button type="button" class="btn btn-danger " data-bs-dismiss='modal'>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal shadow" id="delete">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h3 class="modal-title text-light">Data Delete</h3>
            <button
              type="button"
              class="btn-close bg-light"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div class="modal-body bg-dark ">
            <p className="text-light">Are you sure you want to delete data?</p>
          </div>
          <div class="modal-footer bg-dark">
            <button
            onClick={()=>{dataDelete(dataid)}}
              type="button"
              class="btn btn-danger"
              data-dismiss="modal"
              data-bs-dismiss='modal'
            >
              ok
            </button>
            <button type="button" class="btn btn-primary" data-bs-dismiss='modal'>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};
export default AdminStudents;
