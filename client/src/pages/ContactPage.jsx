import Navbar from "../components/Navbar"

const ContactPage = () => {
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
        </div>
    </>
  )
}

export default ContactPage