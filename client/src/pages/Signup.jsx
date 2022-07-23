import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useFormik } from "formik";
import axios from "axios";
import { useSnackbar } from 'notistack';
import {useNavigate} from "react-router-dom"

const Signup = () => {
  const [confirmPassword, setconfirmPassword] = useState("");
  const [confirmError, setconfirmError] = useState("");
  
  const url = "https://medic-aid.herokuapp.com/api/user/signup";
  const { enqueueSnackbar } = useSnackbar();
  const navigate= useNavigate()
  

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      name: "",
      phone_no: "",
      password: "",
    },
    onSubmit: (values) => {
   
      axios.post(url, values).then((res) => {
     
        if(res.data.status){
            // variant could be success, error, warning, info, or default
            enqueueSnackbar(`${res.data.message}`, { variant: 'success' });
            navigate("/signin")

          } else {
            enqueueSnackbar(`${res.data.message}`, { variant: 'error' });
        }
      }).catch(err=>{
        enqueueSnackbar(`${err.message}`, { variant: 'error' });
      })
    },
    validate:(values) => {
       let errors = {};
      let regexForphone_no = /^[\d]{10}$/;

      if(values.firstname === "") {
        errors.firstname = "This field is required";
      }
      if (values.lastname === "") {
        errors.lastname = "This field is required";
      }
      if (values.name === "") {
        errors.name = "This field is required";
      }
      if (values.phone_no === "") {
        errors.phone_no = "This field is required";
      } else if (!regexForphone_no.test(values.phone_no)) {
        errors.phone_no = "The phone number must be 11 (eleven digit)";
      }

      if (values.password === "") {
        errors.password = "This field is required";
      } else if (values.password.length < 8) {
        errors.password = "The password must be at least 8 characters";
      }
      if (confirmPassword === "") {
        setconfirmError( "This field is required")
      } else if (values.password !== confirmPassword) {
        setconfirmError("Password does not match");
      }

      return errors;
    },
  });
  return (
    <>
      <div class="w-full pb-10 bg-gray-100 min-h-screen">
        <Navbar />
        <form
          action="/login"
          method="post"
          onSubmit={formik.handleSubmit}
          class="py-10 px-10 md:px-16 w-full md:w-6/12 xl:w-4/12 2xl:w-3/12 md:shadow-xl flex flex-col md:rounded overflow-y-auto gap-7 bg-white mx-auto mt-10"
        >
          <h3 class="font-bold text-3xl pl-2" id="signup">
            Signup
          </h3>
          <div>
            <input
              type="text"
              placeholder="Firstname"
              class="border-b md:m-0 xl:mt-1 px-2 py-1.5 outline-none hover:border-blue-400 focus:border-blue-400 transition duration-500 text-sm w-full text-gray-500"
              formControlName="name"
              name="firstname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstname ? (
              <small className="text-danger">{formik.errors.firstname}</small>
            ) : (
              ""
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Lastname"
              class="border-b md:m-0 xl:mt-1 px-2 py-1.5 outline-none hover:border-blue-400 focus:border-blue-400 transition duration-500 text-sm w-full text-gray-500"
              formControlName="name"
              name="lastname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastname ? (
              <small className="text-danger">{formik.errors.lastname}</small>
            ) : (
              ""
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="username"
              class="border-b md:m-0 xl:mt-1 px-2 py-1.5 outline-none hover:border-blue-400 focus:border-blue-400 transition duration-500 text-sm w-full text-gray-500"
              formControlName="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name ? (
              <small className="text-danger">{formik.errors.name}</small>
            ) : (
              ""
            )}
          </div>

          <div>
            <input
              type="number"
              placeholder="Phone Number"
              class="border-b md:m-0 xl:mt-1 px-2 py-1.5 outline-none hover:border-blue-400 focus:border-blue-400 transition duration-500 text-sm w-full text-gray-500"
              formControlName="phone_number"
              name="phone_no"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone_no ? (
              <small className="text-danger">{formik.errors.phone_no}</small>
            ) : (
              ""
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              class="border-b md:m-0 xl:mt-1 px-2 py-1.5 outline-none hover:border-blue-400 focus:border-blue-400 transition duration-500 text-sm w-full text-gray-500"
              formControlName="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password ? (
              <small className="text-danger">{formik.errors.password}</small>
            ) : (
              ""
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Re-type Password"
              class="border-b md:m-0 xl:mt-1 px-2 py-1.5 outline-none hover:border-blue-400 focus:border-blue-400 transition duration-500 text-sm w-full text-gray-500"
              formControlName="confirm_password"
              name="confirmPassword"
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
             {confirmError ? (
              <small className="text-danger">{confirmError} </small>
            ):"" } 
          </div>    
          <div class="flex items-center">
            <input
              type="checkbox"
              class="accent-pink-500 bg-blue-500"
              name="checkBox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label for="Read terms" class="text-xs text-gray-500 ml-2">
              By clicking, you have agreed to{" "}
              <span class="underline  -pointer" id="signup">
                Terms and condition
              </span>{" "}
            </label>
          </div>
          <button
            class="font-semibold text-xl text-white py-1 rounded"
            id="signup_btn"
            // disabled={formik.checkBox === false}
            type="submit"
          >
            Sign up
          </button>
          <button class="w-4/5 2xl:w-4/5 py-1.5 border border-gray-300 text-gray-400 hover:border-gray-400 hover:text-gray-500 transition duration-500 mx-auto rounded text-sm flex items-center justify-center">
            <img
              src="/assets/icons/google.png"
              alt="Google Logo"
              class="w-5 h-5 mr-5"
            />{" "}
            Sign Up with Google
          </button>
          <p class="mt-1.5 text-xs text-center text-gray-400 text-semibold">
            Already Have An Account?{" "}
            <Link
              to="/signin"
              class="font-semibold text-blue-300 underline cursor-pointer"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
