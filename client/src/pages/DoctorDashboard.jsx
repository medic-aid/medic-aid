import React from "react";
import DoctorDashboardNav from "../components/DoctorDashboardNav";
const DoctorDashboard = () => {
  return (
    <>
      <div className="w-full flex md:flex-row flex-col h-screen min-h-screen">
        <DoctorDashboardNav />
        <div className="xl:w-10/12 md:w-11/12 h-screen flex flex-col gap-10 bg-slate-200">
          <div className="flex justify-between items-center p-10">
            <h4 className="font-semibold text-2xl text-gray-600">Dashboard</h4>
          </div>
          <div className="flex justify-center items-center gap-20">
            <div className="bg-white rounded-md p-3 w-3/12 h-4/12 text-center text-gray-600 ml-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium totam cum minus molestiae qui consequatur maiores
              quia. Accusantium praesentium corporis laboriosam maiores ipsa,
              soluta facere ut consequatur, nobis dolorem similique?
            </div>
            <div className="bg-white rounded-md p-3 w-3/12 h-4/12 text-center text-gray-600 ml-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium totam cum minus molestiae qui consequatur maiores
              quia. Accusantium praesentium corporis laboriosam maiores ipsa,
              soluta facere ut consequatur, nobis dolorem similique?
            </div>
            <div className="bg-white rounded-md p-3 w-3/12 h-4/12 text-center text-gray-600 ml-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium totam cum minus molestiae qui consequatur maiores
              quia. Accusantium praesentium corporis laboriosam maiores ipsa,
              soluta facere ut consequatur, nobis dolorem similique?
            </div>
          </div>
          <div className="flex flex-col justify-center px-10 mt-10">
            <div class="w-full sm:px-6">
              <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                <div class="sm:flex items-center justify-between">
                  <p
                    tabindex="0"
                    class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 "
                  >
                    <h2 className="text-gray-700 text-2xl">Current Patients</h2>
                  </p>
                </div>
              </div>
              <div class="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                <table class="w-full whitespace-nowrap">
                  <thead>
                    <tr
                      tabindex="0"
                      class="focus:outline-none h-16 w-full text-sm leading-none text-gray-800"
                    >
                      <th class="font-normal text-left pl-4">Patient</th>
                      <th class="font-normal text-left pl-12">Phone</th>
                      <th class="font-normal text-left pl-12">Branch</th>
                      <th class="font-normal text-left pl-20">Diseases</th>
                    </tr>
                  </thead>
                  <tbody class="w-full">
                    <tr
                      tabindex="0"
                      class="focus:outline-none h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100 text-2xl"
                    >
                      <td class="pl-4 cursor-pointer">
                        <div class="flex items-center">
                          <div class="w-10 h-10">
                            <img
                              class="w-full h-full"
                              src="https://cdn.tuk.dev/assets/templates/olympus/projects.png"
                              alt="UX Design and Visual Strategy"
                            />
                          </div>
                          <div class="pl-4">
                            <p class="font-medium">Oguntola &amp; Oyeyemi</p>
                            <p class="text-xs leading-3 text-gray-600 pt-2">
                              Ogbomoso,Nigeria
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="pl-12">
                        <p class="text-sm font-medium leading-none text-gray-800">
                          09089786799
                        </p>
                        <div class="w-24 h-3 bg-gray-100  rounded-full mt-2">
                          <div class="w-20 h-3 bg-green-progress rounded-full"></div>
                        </div>
                      </td>
                      <td class="pl-12">
                        <p class="text-sm font-medium leading-none text-gray-800">
                          Neurology
                        </p>
                        <div class="w-24 h-3 bg-gray-100  rounded-full mt-2">
                          <div class="w-20 h-3 bg-green-progress rounded-full"></div>
                        </div>
                      </td>
                      <td class="pl-20">
                        <p class="font-medium">Depression disorder</p>
                        <p class="text-xs leading-3 text-gray-600 mt-2">
                          $4,200 left
                        </p>
                      </td>
                      <td class="pl-20">
                        <p class="font-medium">22.12.21</p>
                        <p class="text-xs leading-3 text-gray-600 mt-2">
                          34 days
                        </p>
                      </td>
                      <td class="pl-16">
                        <div class="flex items-center">
                          <img
                            class="shadow-md w-8 h-8 rounded-full"
                            src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                            alt="collaborator 1"
                          />
                          <img
                            class="shadow-md w-8 h-8 rounded-full -ml-2"
                            src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                            alt="collaborator 2"
                          />
                          <img
                            class="shadow-md w-8 h-8 rounded-full -ml-2"
                            src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                            alt="collaborator 3"
                          />
                          <img
                            class="shadow-md w-8 h-8 rounded-full -ml-2"
                            src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                            alt="collaborator 4"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default DoctorDashboard;
