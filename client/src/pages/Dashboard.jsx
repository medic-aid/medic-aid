import { Link } from 'react-router-dom'
import DashboardNav from '../components/DashboardNav'
const Dashboard = () => {
  return (
    <>
    <div class="w-full flex md:flex-row flex-col h-screen">
        {/* desktop nav */}
        <DashboardNav/>
    {/* content */}
    <div class="xl:w-10/12 md:w-11/12 h-screen flex flex-col">
        <div class="flex md:hidden justify-between items-center px-5 py-3 shadow">
            <h4 class="font-semibold text-xl">Medic_Aid</h4>
            <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="text-gray-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><i class="fa-solid fa-bars text-xl"></i></button>

            <div id="dropdownDivider" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 font-semibold">
                <ul class="py-1" aria-labelledby="dropdownDividerButton">
                    <li>
                        <Link to="/dashboard" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white underline">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/aboutus" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Today Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Records</Link>
                    </li>
                    <li>
                        <Link to="/contact" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Medical tips</Link>
                    </li>
                    <li>
                        <Link to="/contact" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">History</Link>
                    </li>
                </ul>
                <div class="py-1">
                    <Link to="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign In / Sign Up</Link>
                </div>
            </div>
        </div>
        {/* top desktop nav */}
        <div class='md:flex hidden xl:px-10 px-5 justify-between items-center pt-10'>
            <div class="flex w-2/6">
                <input type="text" class="border border-gray-200 rounded-l rounded-r-0 px-3 py-1.5 w-full outline-none hover:border-gray-300 focus:border-gray-300 text-gray-500" placeholder="Search"/>
                <div class="flex justify-center items-center text-gray-100 px-3 rounded-r rounded-l-0" id="dashboard_bg">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div class="xl:w-1/5 md:w-2/5 flex items-center justify-around">
                <i class="fa-solid fa-bell text-gray-600 text-xl"></i>
                <div class="w-10 h-10 rounded-full" id="dashboard_bg">

                </div>
                <h4 class="text-gray-500 capitalize">Ajayi Kelvin</h4>
            </div>
        </div>

        {/* content  */}
        <div class="md:flex md:h-4/5 h-5/6 w-full mt-5">
            <div class="flex md:justify-between h-full w-full xl:pl-10 xl:pr-10 md:pl-5 md:pr-5 pl-5">
                {/* main content */}
                <div class="md:w-3/5 w-full md:h-full h-full rounded pr-5 overflow-y-auto">
                    {/* background video */}
                    <div class="w-full h-2/5 bg-blue-300 rounded flex justify-center items-center" id="intro-video">
                        <div class="w-16 h-16 rounded-full bg-white flex justify-center items-center">
                            <i class="fa-solid fa-play text-xl"></i>
                        </div>
                    </div>

                    {/* cards */}
                    <div>
                        <div class="flex flex-wrap justify-center mt-5">
                            <div class="border rounded border-blue-300 h-20 md:w-32 text-center w-48 mt-3 md:mx-2 flex justify-center items-center">
                                <p class="font-semibold text-2xl" id="dashboard_text">SOS</p>
                            </div>
                            <div class="border rounded border-blue-300 h-20 md:w-32 text-center w-48 mt-3 md:mx-2 flex justify-center items-center">
                                <p class="font-semibold text-2xl" id="dashboard_text">Records</p>
                            </div>
                            <div class="border rounded border-blue-300 h-20 md:w-32 text-center w-48 mt-3 md:mt-5 xl:mt-3 md:mx-2 flex justify-center items-center">
                                <p class="font-semibold text-2xl" id="dashboard_text">Medical Tips</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-center md:mt-5">
                            <div class="border rounded border-blue-300 h-20 md:w-32 text-center w-48 mt-3 md:mx-2 flex justify-center items-center">
                                <p class="font-semibold text-2xl" id="dashboard_text">SOS</p>
                            </div>
                            <div class="border rounded border-blue-300 h-20 md:w-32 text-center w-48 mt-3 md:mx-2 flex justify-center items-center">
                                <p class="font-semibold text-2xl" id="dashboard_text">SOS</p>
                            </div>
                        </div>
                    </div>

                    {/* medical tips video */}
                    <div class="mt-8 h-3/6">
                        <p class="text-xl mb-3 text-gray-800">Basic Medical Tips</p>
                        <div class="w-full h-4/5 bg-blue-300 rounded flex items-center" id="medic-tips">
                            <div class="md:ml-8 ml-5 text-xl font-semibold text-white">
                                <h4>How to save yourself from <br/> COVID-19</h4>
                                <button class="text-sm bg-red-500 rounded px-3 py-1 font-semibold mt-4">Read more</button>
                            </div>
                        </div>
                    </div>

                    {/* appointment stuff */}
                    <div class="w-full mt-8 h-2/5 bg-transparent border border-gray-300 rounded overflow-x-auto">
                        <div class="flex px-3 py-3 justify-between">
                            <p class="text-xs xl:text-xl">Your Next Appointment</p>
                            <input type="date" class="px-2 ml-4 border border-gray-300 bg-transparent rounded outline-none w-4/5 xl:w-2/5" placeholder="Select a date"/>
                        </div>
                        <div class="mt-3">
                            {/* 1 */}
                            <div class="flex px-5 justify-between items-center">
                                {/* image and name */}
                                <div class="flex">
                                    <div class="w-8 h-8 rounded-full flex justify-center items-center bg-gray-700">

                                    </div>
                                    <div class="ml-3">
                                        <h4>Ajayi Kelvin</h4>
                                        <p class="text-xs">You are Kelvin</p>
                                    </div>
                                </div>
                                {/* remove */}
                                <div>
                                    <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="outline-none">
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="dropdownSmall" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                                            <li>
                                                <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</Link>
                                            </li>
                                            <li>
                                                <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* 2 */}
                            <div class="flex px-5 justify-between items-center mt-3">
                                {/* image and name */}
                                <div class="flex">
                                    <div class="w-8 h-8 rounded-full flex justify-center items-center bg-gray-700">

                                    </div>
                                    <div class="ml-3">
                                        <h4>Ajayi Kelvin</h4>
                                        <p class="text-xs">You are Kelvin</p>
                                    </div>
                                </div>
                                {/* remove */}
                                <div>
                                    <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="outline-none">
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="dropdownSmall" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                                            <li>
                                                <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</Link>
                                            </li>
                                            <li>
                                                <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* 3 */}
                            <div class="flex px-5 justify-between items-center mt-3">
                                {/* image and name */}
                                <div class="flex">
                                    <div class="w-8 h-8 rounded-full flex justify-center items-center bg-gray-700">

                                    </div>
                                    <div class="ml-3">
                                        <h4>Ajayi Kelvin</h4>
                                        <p class="text-xs">You are Kelvin</p>
                                    </div>
                                </div>
                                {/* remove */}
                                <div>
                                    <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="outline-none">
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="dropdownSmall" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                                            <li>
                                                <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</Link>
                                            </li>
                                            <li>
                                                <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* 4 */}
                            <div class="flex px-5 justify-between items-center mt-3">
                                {/* image and name */}
                                <div class="flex">
                                    <div class="w-8 h-8 rounded-full flex justify-center items-center bg-gray-700">

                                    </div>
                                    <div class="ml-3">
                                        <h4>Ajayi Kelvin</h4>
                                        <p class="text-xs">You are Kelvin</p>
                                    </div>
                                </div>
                                {/* remove */}
                                <div>
                                    <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="outline-none">
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="dropdownSmall" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                                            <li>
                                                <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</Link>
                                            </li>
                                            <li>
                                                <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center items-center text-gray-500 mt-3">
                                <i class="fa-solid fa-plus text-sm cursor-pointer"></i>
                                <p class="font-semibold text-sm ml-3 cursor-pointer">Add Appointment Details</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right side desktop mode */}
                <div class="xl:w-4/12 md:w-5/12 h-full flex flex-col justify-between hidden md:block">
                    <div class="h-5/6 overflow-y-auto px-3">
                        {/* 1 */}
                        <div class="flex px-5 justify-between items-center border border-gray-300 rounded py-1">
                            {/* image and name */}
                            <div class="flex items-center">
                                <div class="w-8 h-8 rounded-full flex justify-center items-center bg-gray-700">

                                </div>
                                <div class="ml-3">
                                    <h4>Ajayi Kelvin</h4>
                                    <p class="text-xs">Software Developer</p>
                                </div>
                            </div>
                            {/* remove */}
                            <div>
                                <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="outline-none">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                {/* Dropdown menu */}
                                <div id="dropdownSmall" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</Link>
                                        </li>
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div class="flex px-5 justify-between items-center border border-gray-300 rounded py-1 mt-5">
                            {/* image and name */}
                            <div class="flex items-center">
                                <div class="w-8 h-8 rounded-full flex justify-center items-center bg-gray-700">

                                </div>
                                <div class="ml-3">
                                    <h4>Folagbade Olowfela</h4>
                                    <p class="text-xs">Doctor</p>
                                </div>
                            </div>
                            {/* remove */}
                            <div>
                                <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="outline-none">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                {/* Dropdown menu */}
                                <div id="dropdownSmall" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</Link>
                                        </li>
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* 3 */}
                        <div class="flex px-5 justify-between items-center border border-gray-300 rounded py-1 mt-5">
                            {/* image and name */}
                            <div class="flex items-center">
                                <div class="w-8 h-8 rounded-full flex justify-center items-center bg-gray-700">

                                </div>
                                <div class="ml-3">
                                    <h4>Folagbade Olowfela</h4>
                                    <p class="text-xs">Doctor</p>
                                </div>
                            </div>
                            {/* remove */}
                            <div>
                                <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="outline-none">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                {/* Dropdown menu */}
                                <div id="dropdownSmall" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</Link>
                                        </li>
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* 4 */}
                        <div class="flex px-5 justify-between items-center border border-gray-300 rounded py-1 mt-5">
                            {/* image and name */}
                            <div class="flex items-center">
                                <div class="w-8 h-8 rounded-full flex justify-center items-center bg-gray-700">

                                </div>
                                <div class="ml-3">
                                    <h4>Folagbade Olowfela</h4>
                                    <p class="text-xs">Doctor</p>
                                </div>
                            </div>
                            {/* remove */}
                            <div>
                                <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="outline-none">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                {/* Dropdown menu */}
                                <div id="dropdownSmall" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</Link>
                                        </li>
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* 5 */}
                        <div class="flex px-5 justify-between items-center border border-gray-300 rounded py-1 mt-5">
                            {/* image and name */}
                            <div class="flex items-center">
                                <div class="w-8 h-8 rounded-full flex justify-center items-center bg-gray-700">

                                </div>
                                <div class="ml-3">
                                    <h4>Folagbade Olowfela</h4>
                                    <p class="text-xs">Doctor</p>
                                </div>
                            </div>
                            {/* remove */}
                            <div>
                                <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="outline-none">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                {/* Dropdown menu */}
                                <div id="dropdownSmall" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</Link>
                                        </li>
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* 6 */}
                        <div class="flex px-5 justify-between items-center border border-gray-300 rounded py-1 mt-5">
                            {/* image and name */}
                            <div class="flex items-center">
                                <div class="w-8 h-8 rounded-full flex justify-center items-center bg-gray-700">

                                </div>
                                <div class="ml-3">
                                    <h4>Folagbade</h4>
                                    <p class="text-xs">Software Developer</p>
                                </div>
                            </div>
                            {/* remove */}
                            <div>
                                <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="outline-none">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                {/* Dropdown menu */}
                                <div id="dropdownSmall" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</Link>
                                        </li>
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* 7 */}
                        <div class="flex px-5 justify-between items-center border border-gray-300 rounded py-1 mt-5">
                            {/* image and name */}
                            <div class="flex items-center">
                                <div class="w-8 h-8 rounded-full flex justify-center items-center bg-gray-700">

                                </div>
                                <div class="ml-3">
                                    <h4>Folagbade</h4>
                                    <p class="text-xs">Software Developer</p>
                                </div>
                            </div>
                            {/* remove */}
                            <div>
                                <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="outline-none">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                {/* Dropdown menu */}
                                <div id="dropdownSmall" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</Link>
                                        </li>
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* 8 */}
                        <div class="flex px-5 justify-between items-center border border-gray-300 rounded py-1 mt-5">
                            {/* image and name */}
                            <div class="flex items-center">
                                <div class="w-8 h-8 rounded-full flex justify-center items-center bg-gray-700">

                                </div>
                                <div class="ml-3">
                                    <h4>Folagbade Folakonkolo</h4>
                                    <p class="text-xs">Doctor</p>
                                </div>
                            </div>
                            {/* remove */}
                            <div>
                                <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="outline-none">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                {/* Dropdown menu */}
                                <div id="dropdownSmall" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</Link>
                                        </li>
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* 9 */}
                        <div class="flex px-5 justify-between items-center border border-gray-300 rounded py-1 mt-5">
                            {/* image and name */}
                            <div class="flex items-center">
                                <div class="w-8 h-8 rounded-full flex justify-center items-center bg-gray-700">

                                </div>
                                <div class="ml-3">
                                    <h4>Folagbade Olowfela</h4>
                                    <p class="text-xs">Doctor</p>
                                </div>
                            </div>
                            {/* remove */}
                            <div>
                                <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="outline-none">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                {/* Dropdown menu */}
                                <div id="dropdownSmall" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</Link>
                                        </li>
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 10 */}
                        <div class="flex px-5 justify-between items-center border border-gray-300 rounded py-1 mt-5">
                            {/* image and name */}
                            <div class="flex items-center">
                                <div class="w-8 h-8 rounded-full flex justify-center items-center bg-gray-700">

                                </div>
                                <div class="ml-3">
                                    <h4>Mr.Dolapo</h4>
                                    <p class="text-xs">CSC</p>
                                </div>
                            </div>
                            {/* remove */}
                            <div>
                                <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="outline-none">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                {/* Dropdown men */}
                                <div id="dropdownSmall" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</Link>
                                        </li>
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* 11 */}
                        <div class="flex px-5 justify-between items-center border border-gray-300 rounded py-1 mt-5">
                            {/* image and name */}
                            <div class="flex items-center">
                                <div class="w-8 h-8 rounded-full flex justify-center items-center bg-gray-700">

                                </div>
                                <div class="ml-3">
                                    <h4>Mr.Dolapo</h4>
                                    <p class="text-xs">Animal Science</p>
                                </div>
                            </div>
                            {/* remove */}
                            <div>
                                <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="outline-none">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                {/* Dropdown menu */}
                                <div id="dropdownSmall" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</Link>
                                        </li>
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* 12 */}
                        <div class="flex px-5 justify-between items-center border border-gray-300 rounded py-1 mt-5">
                            {/* image and name */}
                            <div class="flex items-center">
                                <div class="w-8 h-8 rounded-full flex justify-center items-center bg-gray-700">

                                </div>
                                <div class="ml-3">
                                    <h4>Mr.Dolapo</h4>
                                    <p class="text-xs">Software</p>
                                </div>
                            </div>
                            {/* remove */}
                            <div>
                                <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="outline-none">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                {/* Dropdown menu */}
                                <div id="dropdownSmall" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</Link>
                                        </li>
                                        <li>
                                            <Link to="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="h-10 flex items-center justify-center text-gray-800">
                        <i class="fa-solid fa-plus text-sm cursor-pointer"></i>
                        <p class="ml-3 font-semibold">Add New Contact</p>
                    </div>
                </div>

            </div>
        </div>
        {/* <div class="md:flex md:h-1/5 w-full mt-1 h-2/6 mt-1" id="dashboard_bg">

        </div> */}
    </div>
</div>
    </>
  )
}

export default Dashboard