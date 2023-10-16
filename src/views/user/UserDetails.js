import React, { useState } from 'react';
import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, FormControlLabel, FormLabel, Grid,  Radio, RadioGroup,  Typography } from '@mui/material'
import backofficeicon from '../../imgs/icon/backoffice.svg';
import manpowaricon from '../../imgs/icon/manpowarc.svg';
import recruitericon from '../../imgs/icon/Recruiter.svg';
import { Link } from 'react-router-dom';
import { CustomTextField } from '../../layout/TextFild';
import { WhitecardBox } from '../Dashbord/Dashbord';


const UserDetails = ({ Loading }) => {
    const [selectedRole, setSelectedRole] = useState("BackOffice");
    const [openDialogbox, setOpenDialogbox] = useState(false);
    const handleCloseDialogbox = () => {
        setOpenDialogbox(false);
    };
    const handleClickOpenDialogbox = () => {
        setOpenDialogbox(true);
    };
    const handleRadioChange = (value) => {
        setSelectedRole(value);
    };
    return (

        <Box component="main" sx={{ flexGrow: 1, my: 10, background: "transparent", height: "100%", }}>
            {Loading ? (
                <Loading />
            ) : (
                <WhitecardBox >
                    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", py: "10px" }}>
                        <Typography variant='h5'>User Details</Typography>
                        <Box>
                            <Button variant='contained' color='primary' sx={{ mr: 2 }}>Edit</Button>
                            <Button variant='contained' color='error' onClick={handleClickOpenDialogbox}>Delete</Button>
                        </Box>
                    </Box>
                    <Divider />
                    <Box sx={{ mt: 2 }}>
                        <FormControl fullWidth className='user-from-section'>
                            <Grid container direction={{ xs: 'column', md: 'row' }} columnSpacing={5} rowSpacing={3}>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="name" className='text-label'>Name</label>
                                    <CustomTextField type="text" id="name" fullWidth variant="outlined" value="Stacia Taree" />
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="Mobile" className='text-label'>Mobile</label>
                                    <CustomTextField type="number" id="Mobile" fullWidth tel="true" value="9725245872" />
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="Email" className='text-label'>Email</label>
                                    <CustomTextField type="email" id="Email" fullWidth value="ste0@fe.com" />
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="Company" className='text-label'>Company</label>
                                    <CustomTextField type="text" id="Company" fullWidth value="Codezeros" />
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="Location" className='text-label'>Location</label>
                                    <CustomTextField type="text" id="Location" fullWidth value="Romania" />
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
                                        <Grid container spacing={2} sx={{ my: 2 }}>
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
                                <Grid item lg={12} display="flex" justifyContent="end">
                                    <Button variant='contained' type='submit' sx={{ mr: 2 }}>save</Button>
                                    <Button variant='outlined' component={Link} to="/user" >Cancel</Button>

                                </Grid>
                            </Grid>
                        </FormControl>
                    </Box>
                    <Dialog
                        open={openDialogbox}
                        onClose={handleCloseDialogbox}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {""}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Are you sure want to delete user details?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialogbox}>No</Button>
                            <Button to="/user" component={Link} autoFocus>
                                Yes
                            </Button>
                        </DialogActions>
                    </Dialog>
                </WhitecardBox>
            )}
        </Box>

    )
}

export default UserDetails
