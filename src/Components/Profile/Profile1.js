import React from "react";
import { Link } from "react-router-dom";
const Profile1 = () => {
  let userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center ">
      <div class="container max-w-screen-lg mx-auto">
        <div>
          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div class="text-gray-600 text-center">
                <p class="font-medium text-lg mt-16 text-xl "> Profile</p>

                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="User"
                    className=" ml-24 mt-12 rounded-full  "
                    width={120}
                  />
                  <div className="mt-3">
                    <h4>{userData?.name || "-"}</h4>

                    <br />
                    <button className="bg-orange-800 hover:bg-orange-800 text-white mr-2 font-bold py-2 px-4 rounded">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-2">
                <div className="card-body">
                  <div class="md:col-span-2">
                    <label for="mobile">Name</label>
                    <div className="col-sm-9 text-secondary h-10 border mt-1 rounded px-4 w-full bg-gray-200">
                      {userData?.address || "-"}
                    </div>
                  </div>
                  <div class="md:col-span-5">
                    <label for="email">Email Address</label>
                    <div className="col-sm-9 text-secondary h-10 border mt-1 rounded px-4 w-full bg-gray-200">
                      {userData?.address || "-"}
                    </div>
                  </div>
                  <div class="md:col-span-2">
                    <label for="mobile">Mobile no</label>
                    <div className="col-sm-9 text-secondary h-10 border mt-1 rounded px-4 w-full bg-gray-200">
                      {userData?.address || "-"}
                    </div>
                  </div>

                  <div class="md:col-span-3">
                    <label for="address">Address</label>
                    <div className="col-sm-9 text-secondary h-10 border mt-1 rounded px-4 w-full bg-gray-200">
                      {userData?.address || "-"}
                    </div>
                  </div>
                  <div class="md:col-span-2">
                    <label for="city">City</label>
                    <div className="col-sm-9 text-secondary h-10 border mt-1 rounded px-4 w-full bg-gray-200">
                      {userData?.address || "-"}
                    </div>
                  </div>
                  <div class="md:col-span-2">
                    <label for="city">State</label>
                    <div className="col-sm-9 text-secondary h-10 border mt-1 rounded  px-4 w-full bg-gray-200">
                      {userData?.address || "-"}
                    </div>
                  </div>
                  
                  <button class="bg-orange-800 hover:bg-orange-800 text-white mt-3  font-bold py-2 px-4 rounded">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile1;
