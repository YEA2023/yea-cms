import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilRoom,
  cilNewspaper,
  cilChartLine,
  cilUser,
  cilCalendar,
  cilSpeedometer,
  cilImage,
  cilGlobeAlt
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/cms/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
  },  
  {
    component: CNavItem,
    name: 'Members',
    to: '/cms/members',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Businesses',
    to: '/cms/businesses',
    icon: <CIcon icon={cilRoom} customClassName="nav-icon" />,
  },  
  {
    component: CNavItem,
    name: 'Events',
    to: '/cms/events',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'News',
    to: '/cms/news',
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Annual Highlights',
    to: '/cms/annual-highlights',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
  },  
  {
    component: CNavTitle,
    name: 'EXTRAS',
  },
  {
    component: CNavItem,
    name: 'Banners',
    to: '/cms/banners',
    icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Website Info',
    to: '/cms/website-info',
    icon: <CIcon icon={cilGlobeAlt} customClassName="nav-icon" />,
  }
]

export default _nav
