import React, { useContext, useState } from 'react'
import { Context } from './Globaldata'
import '../Assets/Profile.css'
function Profile() {
    const {Usrdata,SetusrData} = useContext(Context);
    const [currentContent,SetcurrentContent]= useState("");
  return (
    <div className='ProfileTotal'>
      <h1>User Profile</h1>
        <div className="Prof">
          <div className='Profilepic'></div>
          <p>{Usrdata.username}</p>
          <p>{Usrdata.email}</p>
          <button className='Viewbut' onClick={()=>{SetcurrentContent("View")}}>View Details</button>
          <button className='Editbut' value={currentContent} onClick={()=>{SetcurrentContent("Edit")}}>Edit Details</button><br />
          <button className='Closebut' value={currentContent} onClick={()=>{SetcurrentContent("Close")}}>Close Account</button>
        </div>        
        {currentContent === "View"?(<div className='viewdataspace'>
          <table>
            <tr>
              <td>Username</td>
              <td>{Usrdata.username}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{Usrdata.email}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>****</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>............................ <br />..............................
              <br /></td>
            </tr>
            <tr>
              <td>Bio</td>
              <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque error ratione officiis. Alias, beatae. Quaerat magnam nam rerum omnis ullam culpa, doloremque accusantium in eum quia. Distinctio eligendi ad iste.</td>
            </tr>
          </table>
        </div>):(null)}
        {currentContent === "Edit"?(<div className='editdataspace'></div>):(null)}
        {currentContent === "Close"?(<div className='closeaccountspace'></div>):(null)}
    </div>

  )
}

export default Profile