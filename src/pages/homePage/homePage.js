import React from 'react'
import "./homePage.css"
import FeaturedInfo from "../../components/featuredInfo/featuredInfo"
import Chart from "../../components/chart/chart"
import {userData} from "../../Data"
const HomePage = () => {
    return (
        <div className = "homePage">
           <FeaturedInfo />
           <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>       
            </div>
    )
}

export default HomePage
