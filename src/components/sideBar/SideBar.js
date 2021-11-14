import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StoreIcon from '@mui/icons-material/Store';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import "./SideBar.css"
const SideBar = () => {
    return (
        <div className = "sideBar">
            <div className = "sideBarWrapper">
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Dashboard</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">
                            <LineStyleIcon className="sideBarIcon"/>
                            Home
                        </li>
                        <li className="sideBarListItem">
                            <TimelineIcon className="sideBarIcon" />
                            Analytics
                        </li>
                        <li className="sideBarListItem">
                            <TrendingUpIcon className="sideBarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Quick Menu</h3>
                    <ul className="sideBarList">
                    <li className="sideBarListItem">
                            <PermIdentityIcon className="sideBarIcon"/>
                            Users
                        </li>
                        <li className="sideBarListItem">
                            <StoreIcon className="sideBarIcon"/>
                            Products
                        </li>
                        <li className="sideBarListItem">
                            <AttachMoneyIcon className="sideBarIcon" />
                            Transactions
                        </li>
                        <li className="sideBarListItem">
                            <BarChartIcon className="sideBarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Notifications</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">
                            <MailOutlineIcon className="sideBarIcon"/>
                            Mail
                        </li>
                        <li className="sideBarListItem">
                            <DynamicFeedIcon className="sideBarIcon" />
                            Feedback
                        </li>
                        <li className="sideBarListItem">
                            <ChatBubbleOutlineIcon className="sideBarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Staff</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">
                            <WorkOutlineIcon className="sideBarIcon"/>
                            Manage
                        </li>
                        <li className="sideBarListItem">
                            <TimelineIcon className="sideBarIcon" />
                            Analytics
                        </li>
                        <li className="sideBarListItem">
                            <ReportIcon className="sideBarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default SideBar
