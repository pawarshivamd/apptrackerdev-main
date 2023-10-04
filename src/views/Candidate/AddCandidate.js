import { Box, Button, Card, Checkbox, Divider, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Loading from '../../layout/Loader/Loading'
import Navbar from '../navbar/topmenu/Navbar'
import styled from 'styled-components';
import BusinessIcon from '@mui/icons-material/Business';
const status = [
    {
        value: 'pending',
        label: 'pending',
    },
    {
        value: 'approved',
        label: 'approved',
    },
    {
        value: 'in-progress',
        label: 'in-progress',
    },
];
const CustomTextField = styled(TextField)`
  padding:0;
  background-color: #f0f0f082;
  font-size: 16px;
  input {
    height:10px;
    borderRadius:7px;
    ${'' /* border:1px solid red; */}
  }
  .css-18iclro-MuiInputBase-root-MuiOutlinedInput-root{
    height:42px;

  } 
  select {
    height: 10px;
    borderRadius: 7px;
    border:1px solid red;

    /* Add your select-specific styles here */
  }
`;
const AddCandidate = ({ loading }) => {
    const [selectedRoles, setSelectedRoles] = useState("");

    const handleRoleClick = (role) => {
        // Toggle the selection of the role
        setSelectedRoles((prevSelectedRoles) => {
            if (prevSelectedRoles.includes(role)) {
                return prevSelectedRoles.filter((selectedRole) => selectedRole !== role);
            } else {
                return [...prevSelectedRoles, role];
            }
        });
    };
    return (
        <Box sx={{ display: "flex", background: "#eef2f6", minHeight: "100vh", overflowX: "auto" }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1, p: 3, my: 10, marginInline: 4, background: "#ffffff", height: "100%", borderRadius: 5 }}>
                {loading ? (
                    <Loading />
                ) : (
                    <Box className="plan" sx={{ overflowX: 'auto', }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: "10px" }}>
                            <Typography variant='h5'>Add Users</Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ mt: 2 }}>
                            <FormControl fullWidth className='user-from-section'>
                                <Grid container direction={{ xs: 'column', md: 'row' }} columnSpacing={5} rowSpacing={3}>
                                    <Grid xs={12} item><Box sx={{ fontWeight: "600" , fontSize:"18px" }}>Personal Details</Box></Grid>

                                    <Grid component="form" item xs={4}>
                                        <label htmlFor="cn" className='text-label'>Candidate Surname</label>
                                        <CustomTextField type="text" id="cn" fullWidth />
                                    </Grid>
                                    <Grid component="form" item xs={4}>
                                        <label htmlFor="CN" className='text-label'>Candidate Name</label>
                                        <CustomTextField InputLabelProps={{ shrink: true }} type="text" id="cn" fullWidth />
                                    </Grid>
                                    <Grid component="form" item xs={4}>
                                        <label htmlFor="Nationality" className='text-label'>Nationality</label>
                                        <CustomTextField type="text" id="Nationality" fullWidth />
                                    </Grid>
                                    <Grid component="form" item xs={4}>
                                        <label htmlFor="passport-number" className='text-label'>Passport Number</label>
                                        <CustomTextField type="text" id="passport-number" fullWidth />
                                    </Grid>

                                    <Grid component="form" item xs={4}>
                                        <label htmlFor="passprt-ex-date" className='text-label'>Passport Expire Date</label>
                                        <CustomTextField type="date" id="passprt-ex-date" fullWidth />
                                    </Grid>
                                    <Grid component="form" item xs={4} >
                                        <label htmlFor="status" className='text-label' >Status</label>
                                        <CustomTextField select id="status" fullWidth >
                                            {status.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </CustomTextField>
                                    </Grid>
                                    <Grid item xs={12}><Divider /></Grid>
                                    <Grid lg={12} xs={12} item><Box sx={{ fontWeight: "600" , fontSize:"18px" }}>Personal Details</Box></Grid>
                                    <Grid component="form" item xs={4} >
                                        <label htmlFor="education" className='text-label' >Education</label>
                                        <CustomTextField select id="education" fullWidth >
                                            {status.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </CustomTextField>
                                    </Grid>
                                    <Grid component="form" item xs={4}>
                                        <label htmlFor="experience" className='text-label'>Experience</label>
                                        <CustomTextField type="number" id="experience" fullWidth />
                                    </Grid>
                                    {/* PCC Details */}
                                    <Grid item xs={12}><Divider /></Grid>
                                    <Grid lg={12} xs={12} item><Box sx={{ fontWeight: "600" , fontSize:"18px" }}>PCC Details</Box></Grid>
                                    <Grid component="form" item xs={4}>
                                        <label htmlFor="pcc-issue-date" className='text-label'>PCC Issue date</label>
                                        <CustomTextField type="date" id="pcc-issue-date" fullWidth />
                                    </Grid>
                                    <Grid component="form" item xs={4}>
                                        <label htmlFor="pcc-expire-date" className='text-label'>PCC Expire Date</label>
                                        <CustomTextField type="date" id="pcc-expire-date" fullWidth />
                                    </Grid>
                                    <Grid component="form" item xs={4} >
                                        <label htmlFor="status" className='text-label' >Status</label>
                                        <CustomTextField select id="status" fullWidth >
                                            {status.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </CustomTextField>
                                    </Grid>
                                    <Grid item xs={12}><Divider /></Grid>

                                    <Grid lg={12} xs={12} item><Box sx={{ fontWeight: "600" , fontSize:"18px" }}>Work visa details </Box></Grid>
                                    <Grid component="form" item xs={4}>
                                        <label htmlFor="visa-number" className='text-label'>Visa Application No</label>
                                        <CustomTextField type="text" id="visa-number" fullWidth />
                                    </Grid>
                                    <Grid component="form" item xs={4}>
                                        <label htmlFor="visa-app-date" className='text-label'>Visa Application date</label>
                                        <CustomTextField type="date" id="visa-app-date" fullWidth />
                                    </Grid>
                                    <Grid component="form" item xs={4}>
                                        <label htmlFor="e-visa-number" className='text-label'>E-visa File No</label>
                                        <CustomTextField type="text" id="e-visa-number" fullWidth />
                                    </Grid>
                                    <Grid component="form" item xs={4}>
                                        <label htmlFor="visa-issue-date" className='text-label'>Visa Issue Date</label>
                                        <CustomTextField type="date" id="visa-issue-date" fullWidth />
                                    </Grid>
                                    <Grid component="form" item xs={4}>
                                        <label htmlFor="visa-expiry-date" className='text-label'>Visa Expiry Date</label>
                                        <CustomTextField type="date" id="visa-expiry-date" fullWidth />
                                    </Grid>
                                    <Grid component="form" item xs={4}>
                                        <label htmlFor="visa-date-time" className='text-label'>Date & Time of Entry</label>
                                        <CustomTextField type="datetime-local" id="visa-date-time" fullWidth />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormLabel id="demo-row-checkboxes-group-label" sx={{fontWeight:"600", fontSize:"14px" , color:"#364152"}}>Select Roles</FormLabel>
                                        <Grid container spacing={2}>
                                            <Grid component="form" item lg={3} md={4} sm={12} xs={12}>
                                                <Card
                                                    className={selectedRoles.includes("BackOffice") ? "radio-card-box selected-card" : "radio-card-box"}
                                                    onClick={() => handleRoleClick("BackOffice")}
                                                >
                                                  <Box sx={{display:"flex" , justifyContent:"end" }}>  <Checkbox checked={selectedRoles.includes("BackOffice")} readOnly /></Box>
                                                    <Box className='icon-box'>
                                                        <BusinessIcon />
                                                    </Box>
                                                    <Typography className='text-main'>Work Permit</Typography>
                                                </Card>
                                            </Grid>
                                            <Grid component="form" item lg={3} md={4} sm={12} xs={12}>
                                                <Card
                                                    className={selectedRoles.includes("Manpower-Company") ? "radio-card-box selected-card" : "radio-card-box"}
                                                    onClick={() => handleRoleClick("Manpower-Company")}
                                                >
                                                    <Box sx={{display:"flex" , justifyContent:"end" }}><Checkbox checked={selectedRoles.includes("Manpower-Company")} readOnly /></Box>
                                                    <Box className='icon-box'>
                                                        <BusinessIcon />
                                                    </Box>
                                                    <Typography className='text-main'>Work Visa</Typography>
                                                </Card>
                                            </Grid>
                                            <Grid component="form" item lg={3} md={4} sm={12} xs={12}>
                                                <Card
                                                    className={selectedRoles.includes("Recruiter") ? "radio-card-box selected-card" : "radio-card-box"}
                                                    onClick={() => handleRoleClick("Recruiter")}
                                                >
                                                   <Box sx={{display:"flex" , justifyContent:"end" }}> <Checkbox checked={selectedRoles.includes("Recruiter")} readOnly /></Box>
                                                    <Box className='icon-box'>
                                                        <BusinessIcon />
                                                    </Box>
                                                    <Typography className='text-main'>Residence Card</Typography>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item lg={12} display="flex" justifyContent="end" >
                                        <Button variant='contained' type='submit' sx={{ mr: 2 }}>save</Button>
                                        <Button variant='outlined'>Cancel</Button>
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default AddCandidate
