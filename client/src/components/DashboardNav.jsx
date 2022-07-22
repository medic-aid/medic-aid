const DashboardNav = () => {
  return (
    <div class="h-screen md:flex flex hidden xl:w-2/12 md:w-3/12">
        <div class="w-full flex flex-col justify-between" id="dashboard_bg">
            <div class='mt-10 flex justify-center items-center'>
                <h4 class="text-white text-center font-bold text-2xl">Medic Aid</h4>
            </div>

            {/* main menu */}
            <div class="flex flex-col justify-center items-center w-full">
                <div class="flex items-center w-3/5">
                    <i class="fa-solid fa-table-columns text-gray-100 text-xl"></i>
                    <p class="text-white ml-3 text-sm">Dashboard</p>
                </div>

                <div class="flex items-center w-3/5 text-white mt-8">
                    <i class="fa-solid fa-calendar-day text-gray-100 text-xl"></i>
                    <p class="ml-3 text-sm">Today</p>
                </div>

                <div class="flex items-center w-3/5 text-white mt-8">
                    <i class="fa-solid fa-notes-medical text-gray-100 text-xl"></i>
                    <p class="ml-3 text-sm">Records</p>
                </div>

                <div class="flex items-center w-3/5 text-white mt-8">
                    <i class="fa-solid fa-lightbulb text-gray-100 text-xl"></i>
                    <p class="ml-3 text-sm">Medical Tips</p>
                </div>

                <div class="flex items-center w-3/5 text-white mt-8">
                    <i class="fa-solid fa-file-medical text-gray-100 text-xl"></i>
                    <p class="ml-3 text-sm">History</p>
                </div>
            </div>
            <div class="justify-center items-center flex h-20 w-full">
                <div class="flex items-center w-3/5">
                    <i class="fa-solid fa-arrow-right-from-bracket text-white "></i>
                    <p class="text-sm text-white ml-3">Logout</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardNav