import React, { useEffect, useState } from 'react'

const AdmindeleteServices = () => {
    const [sdata,setSdata] = useState([])
 

    const servicedata = async () => {
        try {
          const data = await fetch("http://localhost:5000/api/admin/service/delete");
          const result = await data.json();
          console.log(result);
          setSdata(result);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
       servicedata ();
      }, []);
    

      const servicdelete =async(id)=> {
        try {
           const response =  await fetch(`http://localhost:5000/api/admin/service/delete/${id}`, { method: 'DELETE' });
           const data= await response.json()
          servicedata()
          
          }catch(ar){
           console.log("error")
         }
     }






  return (
    <div>
          <table class="student-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Service-name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sdata.map((all,index) => {
            return (
              <tr>
                <td>{index+1}</td>
                <td>{all.service_name}</td>
                <td> {all.description}</td>
                <td><img src={`http://localhost:5000/assets/${all.image}`} height='80px' width='80px'/></td>
                <button
                  className="btn-delete rounded"
                 onClick={()=>servicdelete(all._id)}
                  // onClick={() => setSdata(all._id)}
                >Delete</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AdmindeleteServices