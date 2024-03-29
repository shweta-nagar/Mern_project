import React, { useEffect, useState } from "react";
import './../App.css'

const AdminContacts = () => {
  const [ucontact, setUcontact] = useState([]);
  const [dataid, setDataid] = useState("");

  const udata = async () => {
    try {
      const data = await fetch("http://localhost:5000/api/admin/contact");
      const result = await data.json();
      console.log(result);
      setUcontact(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    udata();
  }, []);


  const dataDelete =async(_id)=> {
    try {
       const response =  await fetch(`http://localhost:5000/api/admin/contact/delete/${_id}`, { method: 'DELETE' });
       const data= await response.json()
       if(data.msg){
        udata()
      }
      
      }catch(ar){
       console.log("error")
     }
 }
  return (
    <>
      {/* {ucontact.map((item) => {
      return <div>{item.name}</div>;
    })} */}
      <table class="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ucontact.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td> {item.email}</td>
                <td>{item.message}</td>
                <button
                  className="btn-delete rounded"
                  data-bs-toggle="modal"
                  data-bs-target="#delete"
                  onClick={() => setDataid(item._id)}
                >Delete</button>
              </tr>
            );
          })}
        </tbody>
      </table>


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

export default AdminContacts;
