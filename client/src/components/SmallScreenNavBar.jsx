import React from 'react'
import { Link } from 'react-router-dom'

function SmallScreenNavBar() {
    return (
        <div>
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
            
        </div>
    )
}

export default SmallScreenNavBar
