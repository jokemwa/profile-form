//importing image from the source file
import React, { Component } from "react";
import User from "../kach.jpeg";

//creating a company profile form
export default class Company extends Component {
    render() {
        return (
            <form>
                 <img src= {User}alt="kach" class="kach" ></img>
                <h3>Company profile</h3>

                <div className="form-group">
                    <label>Company name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>


                <div className="form-group">
                    <label>Company Phone</label>
                    <input type="phone" className="form-control" placeholder="Phone number" />
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
                    <label>Company Location:</label>
                    <input type="address" className="form-control" placeholder="Enter Company Location" />
                </div>

               
                <div className="form-group">
                    <label>Company Website</label>
                    <input type="website" className="form-control" placeholder="Company Website" />
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