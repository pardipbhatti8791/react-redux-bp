import './reset.scss'
import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Login from './pages/public/login'
import PageBg from './components/svg/PageBg'
import Header from './components/Header'
import Footer from './components/Footer'
import { AuthProvider, RequireAuth } from './hoc/AuthProvider'
import { LandingPage } from './pages/public/landing-page'
import { Dashboard } from './pages/private/dashboard'
import SignupPage from './pages/public/register'
import ResetPasswordPage from './pages/public/ResetPassword'
import PricingPage from './pages/private/Pricing'
import PlanPage from './pages/private/Plan'
import Setting from './pages/private/Setting'
import Subscription from './pages/private/Subscription'
import Integration from './pages/private/Integration'
import Welcome from './pages/private/Welcome'
import { Toaster } from 'react-hot-toast';
import ConfirmPage from './pages/public/Confirm'
import { DiscoverPage } from './pages/private/Discover'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  & > svg {
    object-fit: fill;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    width: 98%;
  }
`
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <StyledContainer>
          <PageBg />
          <Header />
          <div className='content'>
            <Routes>

              <Route
                path='discover'
                element={
                  <RequireAuth>
                    <DiscoverPage />
                  </RequireAuth>
                  
                }
              />
              <Route path='/' element={<LandingPage />} />
              <Route path='/signup' element={<SignupPage />} />
              <Route path='/login' element={<Login />} />
              <Route path='setpassword' element={<ResetPasswordPage />} />
              <Route path='confirm' element={<ConfirmPage />} />
              <Route
                path='dashboard'
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                  
                }
              />
              <Route
                path='welcome'
                element={
                  <RequireAuth>
                    <Welcome />
                  </RequireAuth>
                  
                }
              />
              <Route
                path='pricing'
                element={
                  <RequireAuth>
                    <PricingPage />
                  </RequireAuth>
                  
                }
              />
              <Route
                path='plan'
                element={
                  <RequireAuth>
                    <PlanPage />
                  </RequireAuth>
                  
                }
              />
              <Route
                path='setting'
                element={
                  <RequireAuth>
                    <Setting />
                  </RequireAuth>
                  
                }
              />
              <Route
                path='subscription'
                element={
                  <RequireAuth>
                    <Subscription />
                  </RequireAuth>
                  
                }
              />
              <Route
                path='integration'
                element={
                  <RequireAuth>
                    <Integration />
                  </RequireAuth>
                  
                }
              />

            </Routes>
            
          </div>
          <Footer />
          <Toaster position="top-right" reverseOrder={false}/>
        </StyledContainer>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
