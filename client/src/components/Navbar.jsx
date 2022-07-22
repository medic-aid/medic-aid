import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        {/* mobile responsiveness */}
        <div class="flex md:hidden justify-between items-center px-5 py-3 shadow">
            <h4 class="font-semibold text-xl">Medic_Aid</h4>
            <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="text-gray-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><i class="fa-solid fa-bars text-xl"></i></button>

            {/* Dropdown menu */}
            <div id="dropdownDivider" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 font-semibold">
                <ul class="py-1" aria-labelledby="dropdownDividerButton">
                    <li>
                        <Link to="/" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white underline">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutus" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contactus" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Contact Us</Link>
                    </li>
                </ul>
                <div class="py-1">
                    <Link to="" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign In / Sign Up</Link>
                </div>
            </div>
        </div>

        {/* desktop mode navbar */}
        <div class="hidden md:flex justify-between px-10 py-6 text-gray-800 bg-white shadow">
            <h4 class="font-semibold text-3xl">Medic Aid</h4>
            <nav class="w-2/6 flex items-center justify-around">
                <Link to="/" class="cursor-pointer active border-b border-gray-800">Home</Link>
                <Link to="/aboutus" class="cursor-pointer">About Us</Link>
                <Link to="/contactus" class="cursor-pointer">Contact Us</Link>
            </nav>
            <p class="flex justify-center items-center"><Link to="/signin" class="cursor-pointer ">Sign In </Link> / <Link to="/signup" class="cursor-pointer "> Sign Up</Link></p>
        </div>
    </>
  )
}

export default Navbar