import React from 'react'
import Sidebar from '../Dashboard/Component/SidebarSection/Sidebar'
// import { Sidebar } from '../Dashboard/Component/SidebarSection/Sidebar' 


const Dashboard = () => {
    return (
      <div className="dashboard flex">
        <div className="dashboardContainer flex">
        {/* <RouterProvider router={router}/> */}
        <Sidebar/>
        <a href="/" className='btnn'><button>LOG OUT</button></a>
        </div>
      </div>
    )
}
export default Dashboard