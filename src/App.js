import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import NoMatch from './components/pages/NoMatch'
import Login from './components/pages/Login'
import ReaderStatus from './components/pages/reader-status/ReaderStatus'
import ReviewReport from './components/pages/reader-status/ReviewReport'
import Cassette from './components/pages/cassette/Cassette'
import CassetteManually from './components/pages/cassette/Manually'
import CassetteResult from './components/pages/cassette/Result'
import Maintenance from './components/pages/maintenance/Maintenance'
import MaintenanceLogin from './components/pages/maintenance/Login'
import Reports from './components/pages/reports/Reports'
import ReportsLogin from './components/pages/reports/Login'
import ReportsSample from './components/pages/reports/SampleReport'
import ReportsSupport from './components/pages/reports/Support'
import Order from './components/pages/order/Order'
import ProductDetail from './components/pages/order/ProductDetail'
import Support from './components/pages/Support'
import SystemSetup from './components/pages/system-setup/SystemSetup'
import SystemSetupIp from './components/pages/system-setup/SystemSetupIp'
import SystemSetupBInfo from './components/pages/system-setup/SystemSetupBusinessInfo'
import SystemSetupPInfo from './components/pages/system-setup/SystemSetupPersonalInfo'
import Header from './components/shared/Header'
import Sidebar from "./components/shared/Sidebar"
import SidebarLayout from "./components/shared/sidebarlayout"

function App() {
  return (
    <>
      <Router>
      <Header></Header>
      <div className="main-content-part">
      
     
        <Routes>
        <Route  element={<SidebarLayout />} >
          <Route exact path={`${process.env.PUBLIC_URL}/`} element={<ReaderStatus/>} />
          <Route path={`${process.env.PUBLIC_URL}/review-report`} element={<ReviewReport/>} />
          <Route path={`${process.env.PUBLIC_URL}/cassette`} element={<Cassette/>} />
          <Route path={`${process.env.PUBLIC_URL}/cassette/manually`} element={<CassetteManually/>} />
          <Route path={`${process.env.PUBLIC_URL}/cassette/result`} element={<CassetteResult/>} />
          <Route path={`${process.env.PUBLIC_URL}/maintenance`} element={<MaintenanceLogin/>} />
          <Route path={`${process.env.PUBLIC_URL}/maintenance/view`} element={<Maintenance/>} />
          <Route path={`${process.env.PUBLIC_URL}/reports`} element={<Reports/>} />
          <Route path={`${process.env.PUBLIC_URL}/reports/login`} element={<ReportsLogin/>} />
          <Route path={`${process.env.PUBLIC_URL}/reports/sample-report`} element={<ReportsSample/>} />
          <Route path={`${process.env.PUBLIC_URL}/reports/support`} element={<ReportsSupport/>} />
          <Route path={`${process.env.PUBLIC_URL}/order`} element={<Order/>} />
          <Route path={`${process.env.PUBLIC_URL}/order/:productSlug`} element={<ProductDetail/>} />
          <Route path={`${process.env.PUBLIC_URL}/system-setup`} element={<SystemSetup/>} />
          <Route path={`${process.env.PUBLIC_URL}/system-setup/ip`} element={<SystemSetupIp/>} />
          <Route path={`${process.env.PUBLIC_URL}/system-setup/business-info`} element={<SystemSetupBInfo/>} />
          <Route path={`${process.env.PUBLIC_URL}/system-setup/personal-info`} element={<SystemSetupPInfo/>} />
          <Route path={`${process.env.PUBLIC_URL}/support`} element={<Support/>} />
          <Route path="*" element={<NoMatch />} />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/Login`} element={<Login/>} />
        </Routes>
        
        </div>
      </Router>
    </>
  );
}

export default App;
