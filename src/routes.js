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
import Transformations from './views/Transformations'
import TransformationImport from './views/TransformationImport'
import TransformationDetails from './views/TransformationDetails'
import Datasets from './views/Datasets'
import DatasetCreation from './views/DatasetCreation'
import DatasetDetails from './views/DatasetDetails'
import DatasetProcess from './views/DatasetProcess'

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
    path: "/datasets/:id",
    name: "Dataset details",
    icon: "tim-icons icon-paper",
    component: DatasetDetails,
    layout: "/admin",
    noNav: true,
  },
  {
    path: "/datasets/:id/process",
    name: "Run new transformation",
    icon: "tim-icons icon-spaceship",
    component: DatasetProcess,
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
  }
];
export default routes;
