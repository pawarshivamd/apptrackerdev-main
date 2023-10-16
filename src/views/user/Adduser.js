import { Box, Button, Card, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import Loading from '../../layout/Loader/Loading'
import backofficeicon from '../../imgs/icon/backoffice.svg';
import manpowaricon from '../../imgs/icon/manpowarc.svg';
import recruitericon from '../../imgs/icon/Recruiter.svg';
import { Link } from 'react-router-dom';
import { CustomTextField } from '../../layout/TextFild';
import { WhitecardBox } from '../Dashbord/Dashbord';


const Adduser = ({ loading }) => {
    const [selectedRole, setSelectedRole] = useState("BackOffice");

    const handleRadioChange = (value) => {
        setSelectedRole(value);
    };
    return (

        <Box component="main" sx={{ flexGrow: 1, my: 10, background: "transparent", height: "100%", }}>
            {loading ? (
                <Loading />
            ) : (
                <WhitecardBox>
                    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", py: "10px" }}>
                        <Typography variant='h5'>Add User</Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ mt: 2 }}>
                        <FormControl fullWidth className='user-from-section'>
                            <Grid container direction={{ xs: 'column', md: 'row' }} columnSpacing={5} rowSpacing={3}>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="name" className='text-label'>Name</label>
                                    <CustomTextField type="text" id="name" fullWidth />
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
                                    <FormLabel sx={{ fontWeight: "600", fontSize: "14px", color: "#364152" }}>Select Roles</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        value={selectedRole} // Set the value to the selected role
                                        onChange={(event) => handleRadioChange(event.target.value)}
                                    >
                                        <Grid container spacing={2} sx={{ my: 1 }}>
                                            <Grid component="form" item lg={3} md={4} sm={12} xs={12}>
                                                <Card
                                                    className={selectedRole === "BackOffice" ? "radio-card-box selected-card" : "radio-card-box"}
                                                    onClick={() => handleRadioChange("BackOffice")}
                                                >
                                                    <FormControlLabel value="BackOffice" control={<Radio />} label="" sx={{ display: "flex", justifyContent: "end" }} />
                                                    <Box className='icon-box'>
                                                        <img src={backofficeicon} alt='back office' />
                                                    </Box>
                                                    <Typography className='text-main'>BackOffice</Typography>
                                                </Card>
                                            </Grid>
                                            <Grid component="form" item lg={3} md={4} sm={12} xs={12}>
                                                <Card
                                                    className={selectedRole === "Manpower-Company" ? "radio-card-box selected-card" : "radio-card-box"}
                                                    onClick={() => handleRadioChange("Manpower-Company")}
                                                >
                                                    <FormControlLabel value="Manpower-Company" control={<Radio />} label="" sx={{ display: "flex", justifyContent: "end" }} />
                                                    <Box className='icon-box'>
                                                        <img src={manpowaricon} alt='manpowar company' />
                                                    </Box>
                                                    <Typography className='text-main'>Manpower Company</Typography>
                                                </Card>
                                            </Grid>
                                            <Grid component="form" item lg={3} md={4} sm={12} xs={12}>
                                                <Card
                                                    className={selectedRole === "Recruiter" ? "radio-card-box selected-card" : "radio-card-box"}
                                                    onClick={() => handleRadioChange("Recruiter")}
                                                >
                                                    <FormControlLabel value="Recruiter" control={<Radio />} label="" sx={{ display: "flex", justifyContent: "end" }} />
                                                    <Box className='icon-box'>
                                                        <img src={recruitericon} alt='recruiter' />
                                                    </Box>
                                                    <Typography className='text-main'>Recruiter </Typography>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    </RadioGroup>
                                </Grid>
                                <Grid item lg={12} display="flex" justifyContent="end" >
                                    <Button variant='contained' type='submit' sx={{ mr: 2 }}>save</Button>
                                    <Button variant='outlined' component={Link} to="/user" >Cancel</Button>
                                </Grid>
                            </Grid>
                        </FormControl>
                    </Box>
                </WhitecardBox>
            )}
        </Box>
    )
}

export default Adduser
