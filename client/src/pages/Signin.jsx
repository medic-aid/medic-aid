import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useFormik } from "formik";
 import axios from "axios"
//  import { useSnackbar } from 'notistack';
 
  
const Signin = () => {
  // const [message, setmessage] = useState("")
   const url ="https://medic-aid.herokuapp.com/api/user/signin"
  //  const navigate= useNavigate()
  //  const { enqueueSnackbar } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      firstInp: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios.post(url,values).then((res)=>{
        console.log(res);

      })
    },
    validate: (values) => {
      let errors = {};
      if (values.firstInp === "") {
        errors.firstInp = "This field is required";
      }
      if (values.password === "") {
        errors.password = "This field is required";
      } else if (values.password > 8) {
        errors.password = "Invalid password";
      }
      return errors;
    },
  });
  return (
    <>
      <div class="h-screen w-full bg-gray-100">
        <Navbar />
        <div class="w-full h-4/12 md:pt-2 md:flex justify-center items-center mt-10">
          <div class="h-full py-16 px-10 md:px-16 w-full md:w-5/12 xl:w-4/12 2xl:w-4/12 md:shadow-xl flex flex-col md:rounded overflow-y-auto gap-8 bg-white">
            <h3 class="font-bold text-3xl" id="signin">
              Sign In
            </h3>
            <form
              action="/dashboard"
              method="post"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <input
                  type="text"
                  placeholder="Username or Phone number"
                  class="border-b px-2 py-1.5 outline-none hover:border-blue-400 focus:border-blue-400 font-semibold transition duration-500 text-sm w-full text-gray-500"
                  name="firstInp"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <small className="text-danger">{formik.errors.firstInp}</small>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  class="border-b px-2 py-1.5 outline-none hover:border-blue-400 focus:border-blue-400 font-semibold transition duration-500 text-sm w-full text-gray-500"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <small className="text-danger">{formik.errors.password}</small>
              </div>
              <button
                class="font-semibold text-xl text-white py-1 rounded w-full mx-auto"
                id="signinbtn"
                type="submit"
              >
                Sign In
              </button>
            </form>
            <button class="xl:w-3/5 md:w-full py-1.5 border border-gray-300 text-gray-400 mx-auto rounded text-sm flex items-center justify-center">
              <img
                src="/assets/icons/google.png"
                alt="Google Icon"
                class="w-5 h-5 mr-5"
              />{" "}
              Sign in with Google
            </button>
            <p class=" text-xs text-center text-gray-400 text-semibold">
              Don't Have An Account?{" "}
              <Link
                to="/signup"
                class="font-semibold text-blue-300 underline cursor-pointer"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
