import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { createAccount, ProfileUpdate } = useContext(AuthContext);

  const submit = (e) => {
    e.preventDefault();
    const File = e.target;
    const FirstName = File.FirstName.value;
    const LastName = File.LastName.value;
    const FullName = FirstName + LastName;
    const Email = File.email.value;
    // const Photo = File.image.value;
    const Password = File.password.value;

    // console.log({ FirstName, LastName, Email, Password, Photo });

    createAccount(Email, Password)
      .then((res) => {
        updateProfile(FullName);
      })
      .catch((err) => console.error(err.code));
  };

  const updateProfile = (FullName) => {
    const details = {
      displayName: FullName,
    };
    ProfileUpdate(details)
      .then((res) => console.log(res))
      .then((err) => console.error(err));
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style={{
              backgroundImage: `url(${"https://source.unsplash.com/Mv9hjnEUHR4/600x800"})`,
            }}
          ></div>

          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
            <form
              onSubmit={submit}
              className="px-0 lg:px-8 pt-6 pb-8 mb-4 bg-white rounded"
            >
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    name="FirstName"
                  />
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    name="LastName"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
              {/* <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="photo"
                >
                  Photo
                </label>
                <input
                  type="file"
                  id="photo"
                  className="file-input w-full file-input-bordered"
                  name="image"
                />
              </div> */}
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </div>

              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register Account
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                Already have an account?
                <Link
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  to="/login"
                >
                  Login!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
