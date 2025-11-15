import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import ProjectRoom from './pages/ProjectRoom'
import Assistant from './pages/Assistant'
import Proposals from './pages/Proposals'
import Invoices from './pages/Invoices'
import Meetings from './pages/Meetings'
import Chat from './pages/Chat'
import Tickets from './pages/Tickets'
import Files from './pages/Files'
import Notifications from './pages/Notifications'
import Settings from './pages/Settings'
import Changes from './pages/Changes'
import Audit from './pages/Audit'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectRoom />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/proposals" element={<Proposals />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/files" element={<Files />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/changes" element={<Changes />} />
        <Route path="/audit" element={<Audit />} />
      </Route>
    </Routes>
  )
}

export default App
