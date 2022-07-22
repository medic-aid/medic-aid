import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
const Signup = () => {
  return (
    <>
        <div class="w-full pb-10 bg-gray-100">
            <Navbar/>
            <form action="/login" method="post" class="py-10 px-10 md:px-16 w-full md:w-6/12 xl:w-4/12 2xl:w-3/12 md:shadow-xl flex flex-col md:rounded overflow-y-auto gap-7 bg-white mx-auto mt-10">
                <h3 class="font-bold text-3xl pl-2" id="signup">Signup</h3>
                <div>
                    <input type="text" placeholder="Username" class="border-b md:m-0 xl:mt-1 px-2 py-1.5 outline-none hover:border-blue-400 focus:border-blue-400 transition duration-500 text-sm w-full text-gray-500" formControlName="username"/>
                </div>
                <div>
                    <input type="number" placeholder="Phone Number" class="border-b md:m-0 xl:mt-1 px-2 py-1.5 outline-none hover:border-blue-400 focus:border-blue-400 transition duration-500 text-sm w-full text-gray-500" formControlName="phone_number"/>
                </div>
                <div>
                    <input type="password" placeholder="Password" class="border-b md:m-0 xl:mt-1 px-2 py-1.5 outline-none hover:border-blue-400 focus:border-blue-400 transition duration-500 text-sm w-full text-gray-500" formControlName="password"/>
                </div>
                <div>
                    <input type="password" placeholder="Re-type Password" class="border-b md:m-0 xl:mt-1 px-2 py-1.5 outline-none hover:border-blue-400 focus:border-blue-400 transition duration-500 text-sm w-full text-gray-500" formControlName="confirm_password"/>
                </div>
                <div class="flex items-center">
                    <input type="checkbox" class="accent-pink-500 bg-blue-500"/>
                    <label for="Read terms" class="text-xs text-gray-500 ml-2">By clicking, you have agreed to <span class="underline  -pointer" id="signup">Terms and condition</span> </label>
                </div>
                <button class="font-semibold text-xl text-white py-1 rounded" id="signup_btn">Sign up</button>
                <button class="w-4/5 2xl:w-4/5 py-1.5 border border-gray-300 text-gray-400 hover:border-gray-400 hover:text-gray-500 transition duration-500 mx-auto rounded text-sm flex items-center justify-center"><img src="/assets/icons/google.png" alt="Google Logo" class="w-5 h-5 mr-5"/> Sign Up with Google</button>
                <p class="mt-1.5 text-xs text-center text-gray-400 text-semibold">Already Have An Account? <Link to='/signin' class="font-semibold text-blue-300 underline cursor-pointer">Sign In</Link></p>
            </form>
        </div>
    </>
  )
}

export default Signup