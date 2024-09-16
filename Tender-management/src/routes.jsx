import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import { BASE_URL } from './config/constant';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Guard>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes = [
  {
    exact: 'true',
    path: '/login',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: 'true',
    path: '/auth/signin-1',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: 'true',
    path: '/auth/signup-1',
    element: lazy(() => import('./views/auth/signup/SignUp1'))
  },
  {
    path: '*',
    layout: AdminLayout,
    routes: [

      //  ------- user_management ---------
      {
        exact: 'true',
        path: '/user_management/profile_screen',
        element: lazy(() => import('./views/user management/Profile_screen'))
      },

      {
        exact: 'true',
        path: '/management_dashboard',
        element: lazy(() => import('./views/user management/Management_dashboard'))
      },

      // -----------

      // tender Managerment

      {
        exact: 'true',
        path: '/tender_management/tender_screen',
        element: lazy(() => import('./views/tender management/Tender_screen'))
      },
      {
        exact: 'true',
        path: '/tender_management/tenderlist',
        element: lazy(() => import('./views/tender management/Tenderlist'))
      },
      {
        exact: 'true',
        path: '/tender_management/tender_details',
        element: lazy(() => import('./views/tender management/Tenderdetails'))
      },

      // -------

      // vendor Management

      {
        exact: 'true',
        path: '/vendor_management/vendor_registration',
        element: lazy(() => import('./views/vendor management/VendorRegistration'))
      },
      {
        exact: 'true',
        path: 'vendor_management/VendorList',
        element: lazy(() => import('./views/vendor management/VendorList'))
      },

      {
        exact: 'true',
        path: '/vendor_management/vendorprofile',
        element: lazy(() => import('./views/vendor management/VendorProfile'))
      },

      // Bid_management

      {
        exact: 'true',
        path: '/bid_management/bid_submission',
        element: lazy(() => import('./views/Bid management/BidSubmission'))
      },
      {
        exact: 'true',
        path: '/bid_management/bid_list',
        element: lazy(() => import('./views/Bid management/BidList'))
      },
      {
        exact: 'true',
        path: '/bid_management/bid_evaluation',
        element: lazy(() => import('./views/Bid management/BidEvaluation'))
      },
      //Evalution
      {
        exact: 'true',
        path: '/evalution/evalution_setup',
        element: lazy(() => import('./views/Evaluation/EvalutionSetup'))
      },
      {
        exact: 'true',
        path: '/evalution/evalutionAssignment',
        element: lazy(() => import('./views/Evaluation/EvalutionAssignment'))
      },
      {
        exact: 'true',
        path: '/evalution/evalutionSummary',
        element: lazy(() => import('./views/Evaluation/EvalutionSummary'))
      },
      //Contract Award
      {
        exact: 'true',
        path: '/ContractAward/Recommendation',
        element: lazy(() => import('./views/ContractAward/Recommendation'))
      },
      {
        exact: 'true',
        path: '/ContractAward/ContractGeneration',
        element: lazy(() => import('./views/ContractAward/ContractGeneration'))
      },
      {
        exact: 'true',
        path: '/ContractAward/ContractSigning',
        element: lazy(() => import('./views/ContractAward/ContractSigning'))
      },
      //Document Management
      {
        exact: 'true',
        path: '/DocumentManagement/Upload',
        element: lazy(() => import('./views/DocumentManagement/Upload'))
      },
      {
        exact: 'true',
        path: '/DocumentManagement/Library',
        element: lazy(() => import('./views/DocumentManagement/Library'))
      },
      //Reporting and Analytics
      {
        exact: 'true',
        path: '/Reporting&Analytics/Generation',
        element: lazy(() => import('./views/Reporting/Generation'))
      },
      {
        exact: 'true',
        path: '/Reporting&Analytics/Customization',
        element: lazy(() => import('./views/Reporting/Customization'))
      },
      //System Administration
      {
        exact: 'true',
        path: '/Administration/Configurationscreen',
        element: lazy(() => import('./views/Administration/Configurationscreen'))
      },
      {
        exact: 'true',
        path: '/Administration/AuditLog',
        element: lazy(() => import('./views/Administration/AuditLog'))
      },
      // ----------
      {
        path: '*',
        exact: 'true',
        element: () => <Navigate to={BASE_URL} />
      }
    ]
  }
];

export default routes;
