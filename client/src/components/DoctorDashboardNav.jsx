import { Link } from "react-router-dom";

const DoctorDashboardNav = () => {
  return (
    <>
      <div className="h-screen md:flex flex hidden xl:w-1/10 md:w-2/12">
        <div className="w-full flex flex-col bg-white shadow">
          <div className="mt-10 flex justify-center items-center">
            <h4 className="text-gray-600 text-center font-bold text-2xl">
              Medic Aid
            </h4>
          </div>
          <div className="flex flex-col gap-28 px-8">
            <div className="mt-28 flex flex-col gap-10 justify-center">
              <div class="flex items-center w-3/5">
                <i class="fa-solid fa-table-columns text-gray-700 text-xl"></i>
                <Link to="/doctorDashboard" class="text-gray-600 ml-3 text-xl">
                  Dashboard
                </Link>
              </div>
              <div class="flex items-center w-3/5">
                <i class="fa-solid fa-table-columns text-gray-700 text-xl"></i>
                <Link to="/" class="text-gray-600 ml-3 text-xl">
                  Patients
                </Link>
              </div>
              <div class="flex items-center w-3/5">
                <i class="fa-solid fa-table-columns text-gray-700 text-xl"></i>
                <Link to="/" class="text-gray-600 ml-3 text-xl">
                  Report
                </Link>
              </div>
            </div>
            <div className="flex items-center h-20 w-full">
              <div class="flex w-3/5">
                <i class="fa-solid fa-table-columns text-gray-700 text-xl"></i>
                <p class="text-gray-600 ml-3 text-xl">Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDashboardNav;
