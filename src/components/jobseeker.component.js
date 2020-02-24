import React, { Component } from "react";
import User from "../profile.jpg";
export default class jobseeker extends Component {
    render() {
        return (
            <form>
               <img src= {User}alt="profile" class="profile" ></img>
                
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Phone number</label>
                    <input type="phone" className="form-control" placeholder="Enter phone number" />
                </div>

                <div className="form-group">
                    <label>D.OB</label>
                    <input type="D.O.B" className="form-control" placeholder="Enter date of Birth" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Physical address</label>
                    <input type="address" className="form-control" placeholder="Enter physical Address" />
                </div>
                <div className="form-group">
                <label>Location</label>
                <select name="location" id="location">
        <option value="Lugari ">Lugari</option>
        <option value="Likuyani">Likuyani</option>
        <option value="Malava">Malava</option>
        <option value="Navakholo">Navakholo</option>
         </select>
         </div>

         <div className="form-group">
                    <label>Upload Resume </label>
                <div class="d-flex justify-content-center">
      <div class="btn btn-mdb-color btn-rounded float-left">
        <input type="file"></input>
      </div>
      </div>
      </div>
      <div class="btn-toolbar">
                <input class="btn btn-primary" type="reset" value="Reset"></input>
               
                <input class="btn btn-primary" type="submit" value="Submit"></input>
                </div>
                 
 
            </form>
        );
    }
}