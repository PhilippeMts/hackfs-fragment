/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Settings from "./views/Settings";
import Transformations from './views/Transformations'
import TransformationImport from './views/TransformationImport'
import TransformationDetails from './views/TransformationDetails'
import Datasets from './views/Datasets'
import DatasetCreation from './views/DatasetCreation'

var routes = [
  {
    path: "/datasets",
    name: "Datasets",
    icon: "tim-icons icon-bullet-list-67",
    component: Datasets,
    layout: "/admin",
  },
  {
    path: "/datasets/new",
    name: "Create new dataset",
    icon: "tim-icons icon-cloud-upload-94",
    component: DatasetCreation,
    layout: "/admin",
    noNav: true,
  },
  {
    path: "/transformations",
    name: "Transformations",
    icon: "tim-icons icon-app",
    component: Transformations,
    layout: "/admin",
  },
  {
    path: "/transformations/new",
    name: "Import new transformation",
    icon: "tim-icons icon-cloud-upload-94",
    component: TransformationImport,
    layout: "/admin",
    noNav: true,
  },
  {
    path: "/transformations/:id",
    name: "Transformation details",
    icon: "tim-icons icon-paper",
    component: TransformationDetails,
    layout: "/admin",
    noNav: true,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "tim-icons icon-settings",
    component: Settings,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin",
  },
];
export default routes;
