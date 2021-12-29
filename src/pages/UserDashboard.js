import React from "react";
import classes from "./userDashboard.module.css";
import {useNavigate} from 'react-router-dom';

const UserDashboard = (props) => {
  const navigate = useNavigate();
  const deliveryRegisterHandler = (event) => {
    event.preventDefault();
    navigate("../add-delivery")

  }
  return (
    <>
      <section
        className={`${"page-section "} ${classes["user-dashboard-container"]}`}
        id="user-dashboard"
      >
        <div className="container">
          <h2 className="text-center mt-0">User Dashboard page</h2>
          <div className="row"><button onClick={deliveryRegisterHandler}>Add delivery</button></div>
          <div className="row">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Delivery Date</th>
                  <th scope="col">Item name</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export default UserDashboard;
