import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer class="landing_bg mt-7 text-white md:h-2/6 flex justify-center flex-col items-center py-5 md:py-10">
        <div class="w-full">
            <div class="flex flex-wrap md:px-10 px-5 mt-3 justify-around items-center">
                <div class="md:w-3/12 w-full flex flex-col justify-between">
                    <h4 class="text-2xl mb-3 text-left">Medic Aid</h4>
                    <Link to="/landingpage">Home</Link>
                    <Link to="/landingpage">About Us</Link>
                    <Link to="/contactus">Contact Us</Link>
                    <Link to="/">Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
                <div class="md:w-3/12 w-full flex flex-col mt-5">
                    <h4 class="font-semibold text-xl">Subscribe to our news letter</h4>
                    <input type="email" placeholder="Enter your email here" class="border bg-transparent border-white rounded outline-none text-sm px-5 py-1 text-white mt-2 placeholder-white"/>
                    <button class="bg-white mt-5 rounded py-1.5" id="landing_text">Subscribe</button>
                    <div class="flex justify-betwwen text-white ">

                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer