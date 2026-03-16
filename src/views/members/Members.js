import React from 'react'
import {CButton, 
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {Link} from "react-router-dom";
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'

import { DocsExample } from 'src/components'

const membersData = [
    {
        id: 1,
        image: '/assets/images/Subhakar-Alapati.jpg',
        slug: 'subhakar-alapati',
        name: 'Subhakar Alapati',
        designation: 'President',
		description: 'Dramatically leverage existing fully researched platforms vis-a-vis viral.',        
        socialNetwork: [
            { icon: "lni lni-facebook-filled",url: '#' },
			{ icon: "lni lni-linkedin",url: '#' },
			{ icon: "lni lni-instagram-original",url: '#' },
			{ icon: "lni lni-twitter-filled",url: '#' }			
        ]
       
    },
    {
        id: 2,
        image: '/assets/images/Satyajit-Reddy.jpg',
        slug: 'satyajit-reddy',
        name: 'Satyajit Reddy',
        designation: 'General Secretary',
		description: 'Dramatically leverage existing fully researched platforms vis-a-vis viral.',        
        socialNetwork: [
            { icon: "lni lni-facebook-filled",url: '#' },
			{ icon: "lni lni-linkedin",url: '#' },
			{ icon: "lni lni-instagram-original",url: '#' },
			{ icon: "lni lni-twitter-filled",url: '#' }			
        ]
       
    },
    {
        id: 3,
        image: '/assets/images/Yeshwanth-Nag.jpeg',
        slug: 'yeshwanth-nag',
        name: 'Yeshwanth Nag',
        designation: 'Membership Chair',
		description: 'Dramatically leverage existing fully researched platforms vis-a-vis viral.',        
        socialNetwork: [
            { icon: "lni lni-facebook-filled",url: '#' },
			{ icon: "lni lni-linkedin",url: '#' },
			{ icon: "lni lni-instagram-original",url: '#' },
			{ icon: "lni lni-twitter-filled",url: '#' }			
        ]
       
    },
    {
        id: 4,
        image: '/assets/images/Aman-Chainani.jpg',
        slug: 'aman-chainani',
        name: 'Aman Chainani',
        designation: 'Event Chair',
		description: 'Dramatically leverage existing fully researched platforms vis-a-vis viral.',        
        socialNetwork: [
            { icon: "lni lni-facebook-filled",url: '#' },
			{ icon: "lni lni-linkedin",url: '#' },
			{ icon: "lni lni-instagram-original",url: '#' },
			{ icon: "lni lni-twitter-filled",url: '#' }			
        ]
       
    },
    {
        id: 5,
        image: '/assets/images/Rahul.jpg',
        slug: 'rc-rahul',
        name: 'RC Rahul',
        designation: 'Creative Chair',
		description: 'Dramatically leverage existing fully researched platforms vis-a-vis viral.',        
        socialNetwork: [
            { icon: "lni lni-facebook-filled",url: '#' },
			{ icon: "lni lni-linkedin",url: '#' },
			{ icon: "lni lni-instagram-original",url: '#' },
			{ icon: "lni lni-twitter-filled",url: '#' }			
        ]
       
    },
    {
        id: 6,
        image: '/assets/images/Ashish-Kapoor.jpeg',
        slug: 'ashish-kapoor',
        name: 'Ashish Kapoor',
        designation: 'Event Chair',
		description: 'Dramatically leverage existing fully researched platforms vis-a-vis viral.',        
        socialNetwork: [
            { icon: "lni lni-facebook-filled",url: '#' },
			{ icon: "lni lni-linkedin",url: '#' },
			{ icon: "lni lni-instagram-original",url: '#' },
			{ icon: "lni lni-twitter-filled",url: '#' }			
        ]
       
    },
    {
        id: 7,
        image: '/assets/images/Chetan-Picture.jpg',
        slug: 'chetan-agarwal',
        name: 'Chetan Agarwal',
        designation: 'Finance Chair',
		description: 'Dramatically leverage existing fully researched platforms vis-a-vis viral.',        
        socialNetwork: [
            { icon: "lni lni-facebook-filled",url: '#' },
			{ icon: "lni lni-linkedin",url: '#' },
			{ icon: "lni lni-instagram-original",url: '#' },
			{ icon: "lni lni-twitter-filled",url: '#' }			
        ]
       
    }
    

    
    
]


const Members = () => {
  return (
    <>
<CRow className="align-items-center mb-3">
  <CCol xs>
  <Link to="/cms/member-add">
    <CButton color="primary float-end">      
      <CIcon icon={cilPlus} className="me-2 text-white" />
       Member Add
    </CButton>
    </Link>
  </CCol>
</CRow>
<CRow>
  <CCol xs={12}>
    <CCard className="mb-4">
      <CCardHeader>
        <strong>Members</strong>
      </CCardHeader>
      <DocsExample href="components/table#bordered-tables">
        <div className="table-responsive">
          <CTable bordered>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">Full Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Designation</CTableHeaderCell>
                <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                <CTableHeaderCell scope="col">Image</CTableHeaderCell>
                <CTableHeaderCell scope="col">More</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
            {membersData.map((data, index) => ( 
              <CTableRow>
                <CTableHeaderCell scope="row">{data.id}</CTableHeaderCell>
                <CTableDataCell>{data.name}</CTableDataCell>
                <CTableDataCell>{data.designation}</CTableDataCell>
                <CTableDataCell>{data.description}</CTableDataCell>
                <CTableDataCell><img src={data.image} style={{maxHeight:'75px'}}/></CTableDataCell>
                <CTableDataCell>
                    <CDropdown>
                        <CDropdownToggle color="primary">More</CDropdownToggle>
                            <CDropdownMenu>
                            <CDropdownItem href="#">View More</CDropdownItem>
                            <CDropdownItem href="#">Edit</CDropdownItem>
                            <CDropdownItem href="#">Delete</CDropdownItem>
                            </CDropdownMenu>
                    </CDropdown>
              </CTableDataCell>
              </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </div>
      </DocsExample>
    </CCard>
  </CCol>
</CRow>
    </>
  )
}

export default Members
