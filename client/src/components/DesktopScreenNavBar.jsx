import React from 'react'

function DesktopScreenNavBar() {
  return (
    <div>
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
    </div>
  )
}

export default DesktopScreenNavBar