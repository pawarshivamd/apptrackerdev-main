import { Box, Button, Card, Divider, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Input, InputLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../navbar/topmenu/Navbar'
import Loading from '../../layout/Loader/Loading'
import BusinessIcon from '@mui/icons-material/Business';
import styled from 'styled-components';

const CustomTextField = styled(TextField)`
  padding:0;
  background-color: #f0f0f082;
  font-size: 16px;
  input {
    height:10px;
    borderRadius:7px;
  }
`;
const Adduser = ({ loading }) => {
    const [selectedRole, setSelectedRole] = useState(""); // Initialize with a default value

    const handleRadioChange = (value) => {
        setSelectedRole(value);
    };
    return (
        <Box sx={{ display: "flex", background: "#eef2f6", minHeight: "100vh", overflowX: "auto" }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 10, marginInline: 4, background: "#ffffff", height: "100%", borderRadius: 5 }}>
                {loading ? (
                    <Loading />
                ) : (
                    <Box className="plan" sx={{ overflowX: 'auto', }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" , py:"10px" }}>
                            <Typography variant='h5'>Add New Users</Typography>
                        </Box>
                         <Divider />
                         <Box sx={{mt:2}}>
                        <FormControl fullWidth className='user-from-section'>
                            <Grid container direction={{ xs: 'column', md: 'row' }} columnSpacing={5} rowSpacing={3}>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="name" className='text-label'>Name</label>
                                    <CustomTextField type="text" id="name"  fullWidth  />
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="Mobile" className='text-label'>Mobile</label>
                                    <CustomTextField InputLabelProps={{ shrink: true }} type="number" id="Mobile" fullWidth tel="true" />
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="Email" className='text-label'>Email</label>
                                    <CustomTextField type="email" id="Email" fullWidth />
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="Company" className='text-label'>Company</label>
                                    <CustomTextField type="text" id="Company" fullWidth />
                                </Grid>

                                <Grid component="form" item xs={4}>
                                    <label htmlFor="Location" className='text-label'>Location</label>
                                    <CustomTextField type="text" id="Location" fullWidth />
                                </Grid>

                                <Grid component="form" item xs={4}> </Grid>
                                    <Grid item xs={12}>
                                        <FormLabel id="demo-row-radio-buttons-group-label" sx={{fontWeight:"600", fontSize:"14px" , color:"#364152"}}>Select Role</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                            value={selectedRole} // Set the value to the selected role
                                            onChange={(event) => handleRadioChange(event.target.value)}
                                        >
                                          <Grid container spacing={2}>
                                                <Grid component="form" item lg={3} md={4} sm={12} xs={12}>
                                                    <Card
                                                        className={selectedRole === "BackOffice" ? "radio-card-box selected-card" : "radio-card-box"}
                                                        onClick={() => handleRadioChange("BackOffice")}
                                                    >
                                                        <FormControlLabel value="BackOffice" control={<Radio />} label="" sx={{ display:"flex" , justifyContent:"end"}}  />
                                                        <Box className='icon-box'>
                                                            <BusinessIcon />
                                                        </Box>
                                                        <Typography className='text-main'>BackOffice</Typography>
                                                    </Card>
                                                </Grid>
                                                <Grid component="form" item lg={3} md={4} sm={12} xs={12}>
                                                    <Card
                                                        className={selectedRole === "Manpower-Company" ? "radio-card-box selected-card" : "radio-card-box"}
                                                        onClick={() => handleRadioChange("Manpower-Company")}
                                                    >
                                                        <FormControlLabel value="Manpower-Company" control={<Radio />} label="" sx={{ display:"flex" , justifyContent:"end"}} />
                                                        <Box className='icon-box'>
                                                            <BusinessIcon />
                                                        </Box>
                                                        <Typography className='text-main'>Manpower Company</Typography>
                                                    </Card>
                                                </Grid>
                                                <Grid component="form" item lg={3} md={4} sm={12} xs={12}>
                                                    <Card
                                                        className={selectedRole === "Recruiter" ? "radio-card-box selected-card" : "radio-card-box"}
                                                        onClick={() => handleRadioChange("Recruiter")}
                                                    >
                                                        <FormControlLabel value="Recruiter" control={<Radio />} label="" sx={{ display:"flex" , justifyContent:"end"}} />
                                                        <Box className='icon-box'>
                                                            <BusinessIcon />
                                                        </Box>
                                                        <Typography className='text-main'>Recruiter </Typography>
                                                    </Card>
                                                </Grid>
                                            </Grid>
                                        </RadioGroup>
                                    </Grid>
                                    <Grid item lg={12} display="flex" justifyContent="end" >
                                        <Button variant='contained' type='submit' sx={{mr:2}}>save</Button>
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

export default Adduser
