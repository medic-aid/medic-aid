import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import Slider from "react-slick";
const LandingPage = () => {
    // const settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     // centerPadding: "60px",
    //     slidesToShow: 3,
    //     speed: 500
    // };
  return (
    <>
        {/* major content */}
        <div class="min-h-screen">
            {/* Hero */}
            <div className='h-screen'>
                <Navbar/>
                <div class="flex md:h-5/6 h-5/6 md:px-16">
                    <div class="md:w-3/5 w-full text-gray-800 px-5 md:px-0 h-full flex items-center">
                        <div class="animate__animated  animate__slow animate__wobble">
                            <h4 class="uppercase font-semibold text-5xl animate__animated  animate__slow animate__wobble">Your Online <br/> hospital</h4>
                            <p class="mt-8 md:w-3/5">Get your health records at your fingertips and learn more about health daily</p>
                            <button class="px-5 py-2 text-sm rounded-full text-white landing_bg mt-8">Get Started</button>
                        </div>
                    </div>
                    <div class="md:w-2/5 hidden md:block text-gray-800 animate__bounceInRight animate__animated  animate__slow" id="bg-img"></div>
                </div>
            </div>
            {/* with us u can do */}
            <div class="px-5 mt-5 md:mt-5 md:px-16 md:mb-5 md:mx-auto">
                <h4 class="font-semibold md:text-5xl text-3xl">With Us</h4>
                <p class="mt-3">It is possible to do the following</p>
                <div class="flex flex-wrap justify-between xl:justify-between md:justify-around items-center md:mt-8">
                    <div class="xl:w-3/12 md:w-5/12 w-full mt-8 md:mt-0 text-gray-800 shadow-xl">
                        <div class="w-full h-48" id="records"></div>
                        <div class="px-5 py-5">
                            <p class="mt-2 font-semibold">Keep basic medical records on the app</p>
                            <button class="px-3 py-1.5 text-white rounded mt-3 landing_bg">Learn More<span class="ml-2"><i class="fa-solid fa-arrow-right"></i></span></button>
                        </div>
                    </div>
                    <div class="xl:w-3/12 md:w-5/12 w-full mt-8 md:mt-0 text-gray-800 shadow-xl">
                        <div class="w-full h-48" id="bandage"></div>
                        <div class="px-5 py-5">
                            <p class="mt-2 font-semibold">Get in touch with your doctors as soon as possible</p>
                            <button class="px-3 py-1.5 text-white rounded mt-3 landing_bg">Learn More<span class="ml-2"><i class="fa-solid fa-arrow-right"></i></span></button>
                        </div>
                    </div>
                    <div class="xl:w-3/12 md:w-5/12 w-full mt-8 md:mt-10 xl:mt-0 text-gray-800 shadow-xl">
                        <div class="w-full h-48" id="doctor"></div>
                        <div class="px-5 py-5">
                            <p class="mt-2 font-semibold">Learn basic medical first aid tips from doctors all over</p>
                            <button class="px-3 py-1.5 text-white rounded mt-3 landing_bg">Learn More<span class="ml-2"><i class="fa-solid fa-arrow-right"></i></span></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hear About Our Users */}
            {/* footer */}
            <Footer/>
        </div>
    </>
  )
}

export default LandingPage