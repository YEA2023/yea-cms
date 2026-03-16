import React, { useEffect, useState, useContext } from 'react'
import {
    CInputGroup, CInputGroupText,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import axios from "axios";
import { DocsExample } from 'src/components'



const MemberAdd = () => {
    const [newOrderSubmitted, setNewOrderSubmitted] = useState(false);

    const [memberDetails, setMemberDetails] = useState({
        first_name: "",
                last_name: "",
                email: "",
                password: "",
                phone: "",
                address: "",
                state: "",
                city: "",
                postalCode: "",
                about_notes: "",
                facebook_profile_url: "",
                twitter_profile_url: "",
                linkedin_profile_url: "",
                instagram_profile_url: "",
      });

    const addNewMember = () => {
        axios
          .post(
            "http://localhost:5000/membernew",
            {
              memberDetails,
            },
            { withCredentials: true }
          )
          .then((res) => {
            if (res.data === "success") {
              setMemberDetails({
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                phone: "",
                address: "",
                state: "",
                city: "",
                postalCode: "",
                about_notes: "",
                facebook_profile_url: "",
                twitter_profile_url: "",
                linkedin_profile_url: "",
                instagram_profile_url: "",
              });
              setNewOrderSubmitted(true);
            }
          });
      };

      
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Member Add</strong>
          </CCardHeader>
          
            <DocsExample href="forms/form-control">
              <CForm className="row">
              <CCol xs={6} className="mb-3">
                  <CFormLabel htmlFor="first_name">First Name</CFormLabel>
                  <CFormInput value={memberDetails.first_name}
                   onChange={(e) =>
                      setMemberDetails({
                        ...memberDetails,
                        first_name: e.target.value,
                      })
                    }
                    type="text"
                    id="first_name"
                    placeholder="First Name" required="required"
                  />
                </CCol>

                <CCol xs={6} className="mb-3">
                  <CFormLabel htmlFor="last_name">Last Name</CFormLabel>
                  <CFormInput value={memberDetails.last_name}
                    onChange={(e) =>
                      setMemberDetails({
                        ...memberDetails,
                        last_name: e.target.value,
                      })
                    }
                    type="text"
                    id="last_name"
                    placeholder="Last Name" required="required"
                  />
                </CCol>
                <CCol xs={6} className="mb-3">
                  <CFormLabel htmlFor="email">Email</CFormLabel>
                  <CFormInput value={memberDetails.email}
                    onChange={(e) =>
                      setMemberDetails({
                        ...memberDetails,
                        email: e.target.value,
                      })
                    }
                    type="email"
                    id="email"
                    placeholder="Email" required="required"
                  />
                </CCol>
                <CCol xs={6} className="mb-3">
                  <CFormLabel htmlFor="password">Password</CFormLabel>
                  <CFormInput value={memberDetails.password}
                    onChange={(e) =>
                      setMemberDetails({
                        ...memberDetails,
                        password: e.target.value,
                      })
                    }
                    type="password"
                    id="password"
                    placeholder="Password" required="required"
                  />
                </CCol>
                <CCol xs={6} className="mb-3">
                  <CFormLabel htmlFor="phone">Phone</CFormLabel>
                  <CInputGroup>
                    <CInputGroupText>+91</CInputGroupText>
                    <CFormInput value={memberDetails.phone}
                    onChange={(e) =>
                      setMemberDetails({
                        ...memberDetails,
                        phone: e.target.value,
                      })
                    } type="number" placeholder="Phone" id="phone" required="required"/>
                  </CInputGroup>
                </CCol>
                <CCol xs={6} className="mb-3">
                  <CFormLabel htmlFor="profile_picture">Profile Picture</CFormLabel>
                  <CFormInput
                    type="file"
                    id="profile_picture"
                    placeholder="Profile Picture"
                  />
                </CCol>
                <CCol xs={6} className="mb-3">
                  <CFormLabel htmlFor="address">Address</CFormLabel>
                  <CFormInput value={memberDetails.address}
                    onChange={(e) =>
                      setMemberDetails({
                        ...memberDetails,
                        address: e.target.value,
                      })
                    }
                    type="text"
                    id="address"
                    placeholder="Address" required="required"
                  />
                </CCol>
                <CCol xs={6} className="mb-3">
                  <CFormLabel htmlFor="city">City</CFormLabel>
                  <CFormInput value={memberDetails.city}
                    onChange={(e) =>
                      setMemberDetails({
                        ...memberDetails,
                        city: e.target.value,
                      })
                    }
                    type="text"
                    id="city"
                    placeholder="City" required="required"
                  />
                </CCol>
                <CCol xs={6} className="mb-3">
                  <CFormLabel htmlFor="state">State</CFormLabel>
                  <CFormInput value={memberDetails.state}
                    onChange={(e) =>
                      setMemberDetails({
                        ...memberDetails,
                        state: e.target.value,
                      })
                    }
                    type="text"
                    id="state"
                    placeholder="State" required="required"
                  />
                </CCol>
                <CCol xs={6} className="mb-3">
                  <CFormLabel htmlFor="postalcode">Postal Code</CFormLabel>
                  <CFormInput value={memberDetails.postalcode}
                    onChange={(e) =>
                      setMemberDetails({
                        ...memberDetails,
                        postalcode: e.target.value,
                      })
                    }
                    type="number"
                    id="postalcode"
                    placeholder="Postal Code" required="required"
                  />
                </CCol>
                
                <CCol xs={12} className="mb-3">
                  <CFormLabel htmlFor="about_notes">About Notes</CFormLabel>
                  <CFormTextarea id="about_notes" rows={2} placeholder='About Notes' value={memberDetails.about_notes}
                    onChange={(e) =>
                      setMemberDetails({
                        ...memberDetails,
                        about_notes: e.target.value,
                      })
                    }></CFormTextarea>
                </CCol>
                <CCol xs={6} className="mb-3">
                  <CFormLabel htmlFor="facebook_profile_url">Facebook Profile URL</CFormLabel>
                  <CFormInput value={memberDetails.facebook_profile_url}
                    onChange={(e) =>
                      setMemberDetails({
                        ...memberDetails,
                        facebook_profile_url: e.target.value,
                      })
                    }
                    type="text"
                    id="facebook_profile_url"
                    placeholder="Facebook Profile URL"
                  />
                </CCol>
                <CCol xs={6} className="mb-3">
                  <CFormLabel htmlFor="twitter_profile_url">Twitter Profile URL</CFormLabel>
                  <CFormInput value={memberDetails.twitter_profile_url}
                    onChange={(e) =>
                      setMemberDetails({
                        ...memberDetails,
                        twitter_profile_url: e.target.value,
                      })
                    }
                    type="text"
                    id="twitter_profile_url"
                    placeholder="Twitter Profile URL"
                  />
                </CCol>
                <CCol xs={6} className="mb-3">
                  <CFormLabel htmlFor="linkedin_profile_url">Linkedin Profile URL</CFormLabel>
                  <CFormInput value={memberDetails.linkedin_profile_url}
                    onChange={(e) =>
                      setMemberDetails({
                        ...memberDetails,
                        linkedin_profile_url: e.target.value,
                      })
                    }
                    type="text"
                    id="linkedin_profile_url"
                    placeholder="Linkedin Profile URL"
                  />
                </CCol>
                <CCol xs={6} className="mb-3">
                  <CFormLabel htmlFor="instagram_profile_url">Instagram Profile URL</CFormLabel>
                  <CFormInput value={memberDetails.instagram_profile_url}
                    onChange={(e) =>
                      setMemberDetails({
                        ...memberDetails,
                        instagram_profile_url: e.target.value,
                      })
                    }
                    type="text"
                    id="instagram_profile_url"
                    placeholder="Instagram Profile URL"
                  />
                </CCol>

                <CCol xs={12} className="mb-3">
                <CButton color="primary" type="submit" onClick={() => addNewMember()}>Submit</CButton>
                </CCol>
              </CForm>
            </DocsExample>
        </CCard>
      </CCol>
      

      
    </CRow>
  )
}

export default MemberAdd
