import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

const AboutPage = () => {
  return (
    <>
        {/* major content */}
        <div class="h-screen overflow-y-auto">
            {/* Hero content  */}
            <div className="h-screen">
                {/* Nav bar */}
                <Navbar/>
                <div class="flex md:h-5/6 h-5/6 md:px-10 xl:px-16 mt-10 md:mt-0">
                    <div class="md:w-3/5 w-full text-gray-800 px-5 md:px-0 h-full flex items-center">
                        <div class="animate__animated  animate__slow animate__wobble">
                            <h4 class="uppercase font-semibold text-5xl animate__animated  animate__slow animate__wobble">About Us</h4>
                            <p class="mt-8 xl:w-3/5 md:w-4/5">Medic aid is an online medical platform that allows you to have your medical records at your fingertip. The app also allows user to be able to message doctors and find nearest clinics, pharmacies, or hospitals around them. We also bring
                                to you medical tips that might be healpful to you or your neighbour.
                            </p>
                            <button class="px-10 py-3.5 text-sm rounded-full text-white landing_bg mt-8">Contact Us</button>
                        </div>
                    </div>
                    <div class="md:w-2/5 hidden md:block text-gray-800 animate__bounceInRight animate__animated  animate__slow" id="bg-img"></div>
                </div>
            </div>

            {/* our vision */}
            <div class="md:px-10 xl:px-16 px-5 mt-10 md:mt-0 xl:mt-10 flex flex-wrap md:flex-row flex-col justify-between items-center">
                <div class="md:w-2/5 w-full">
                    <h4 id="about_text" class="font-semibold text-3xl">Our Vision</h4>
                    {/* first vision */}
                    <div class="w-full shadow-lg rounded p-7 mt-5">
                        <div class="flex justify-center flex-col">
                            <p class="text-5xl h-5 font-bold" id="about_text">“</p>
                            <p class="w-5/6 mx-auto">We aim to make people have no issues to locate hospitals especially in a totally new environment</p>
                            <p class="text-5xl h-5 font-bold text-right" id="about_text">“</p>
                        </div>
                    </div>
                </div>
                {/* second and third vision */}
                <div class="flex flex-col flex-wrap md:w-3/6 w-full mt-10 md:mt-0">
                    {/* second vision */}
                    <div class="w-full shadow-lg rounded p-7">
                        <div class="flex justify-center flex-col">
                            <p class="text-5xl h-5 font-bold" id="about_text">“</p>
                            <p class="w-5/6 mx-auto">We keep detailed and up to edited medical information that can easily be accessible by you anytime anyday</p>
                            <p class="text-5xl h-5 font-bold text-right" id="about_text">“</p>
                        </div>
                    </div>
                    {/* third vision */}
                    <div class="w-full shadow-lg rounded p-7 mt-10">
                        <div class="flex justify-center flex-col">
                            <p class="text-5xl h-5 font-bold" id="about_text">“</p>
                            <p class="w-5/6 mx-auto">We aim to make every single user educated on some basic and simple medical informations they need to know</p>
                            <p class="text-5xl h-5 font-bold text-right" id="about_text">“</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* what we do */}
            <div class="md:px-10 xl:px-16 px-5 mt-10 md:mt-16 xl:mt-10">
                <h4 id="about_text" class="font-semibold text-3xl capitalize">What we do</h4>
                {/* first card pair */}
                <div class="flex flex-wrap">

                    {/* card 1 */}
                    <Link to="/" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 mt-10">
                        <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/assets/images/records.png" alt="Record"/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight" id="about_text">Keep medical records </h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">We make your medical records fully online and at the same time easily accessible by you anytime and anywhere in the world.</p>
                        </div>
                    </Link>
                    {/* card 2  */}
                    <Link to="/" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 mt-10 ml-auto">
                        <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/assets/images/doctor-card.png" alt="Doctor With A Card"/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight" id="about_text">Get in touch with doctors</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">We make your medical records fully online and at the same time easily accessible by you anytime and anywhere in the world.</p>
                        </div>
                    </Link>
                </div>
                {/* second card pair */}
                <div class="flex flex-wrap">

                    {/* card 3 */}
                    <Link to="/" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 mt-10">
                        <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/assets/images/health.png" alt="Health"/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight" id="about_text">First aid as soon as possible</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">We make your medical records fully online and at the same time easily accessible by you anytime and anywhere in the world.</p>
                        </div>
                    </Link>
                    {/* card 4  */}
                    <Link to="/" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 mt-10 ml-auto">
                        <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/assets/images/show.png" alt="Doctor Saving Life"/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight" id="about_text">Learn life saving medical tips</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">We make your medical records fully online and at the same time easily accessible by you anytime and anywhere in the world.</p>
                        </div>
                    </Link>
                </div>
            </div>

            {/* footer */}
            <Footer/>
        </div>
    </>
  )
}

export default AboutPage