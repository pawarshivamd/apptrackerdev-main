import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, Grid, Typography } from '@mui/material'
import Loading from '../../layout/Loader/Loading';
import { Link } from 'react-router-dom';
import { CustomTextField } from '../../layout/TextFild';
import { useState } from 'react';
import { WhitecardBox } from '../Dashbord/Dashbord';
const RecruiterDetails = ({ loading }) => {
    const [openDialogbox, setOpenDialogbox] = useState(false);
    const handleCloseDialogbox = () => {
        setOpenDialogbox(false);
    };
    const handleClickOpenDialogbox = () => {
        setOpenDialogbox(true);
    };
    return (
        <Box component="main" sx={{ flexGrow: 1, my: 10, background: "transparent", height: "100%", }}>
            {loading ? (
                <Loading />
            ) : (
                <WhitecardBox>
                    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", py: "10px" }}>
                        <Typography variant='h5'>Recuiter Details</Typography>
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
                                    <label htmlFor="c-name" className='text-label'>Company Name</label>
                                    <CustomTextField type="text" id="c-name" value="OpenXcell" fullWidth />
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="contact-name" className='text-label'>Contact Name</label>
                                    <CustomTextField type="text" id="contact-name" value="Sattar Patel" fullWidth />
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="Mobile" className='text-label'>Mobile</label>
                                    <CustomTextField type="number" id="Mobile" value="9365287848" fullWidth tel="true" />
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="Email" className='text-label'>Email</label>
                                    <CustomTextField type="email" id="Email" value="sattarp01@fe.com" fullWidth />
                                </Grid>


                                <Grid component="form" item xs={4}>
                                    <label htmlFor="Designation" className='text-label'>Designation</label>
                                    <CustomTextField type="text" id="Designation" value="Frontend developer" fullWidth />
                                </Grid>

                                <Grid component="form" item xs={4}> </Grid>


                                <Grid item lg={12} display="flex" justifyContent="end" >
                                    <Button variant='contained' type='submit' sx={{ mr: 2 }}>save</Button>
                                    <Button variant='outlined' component={Link} to="/recuiter" >Cancel</Button>
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
                                Are you sure want to delete recuiter details?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialogbox}>No</Button>
                            <Button to="/recuiter" component={Link} autoFocus>
                                Yes
                            </Button>
                        </DialogActions>
                    </Dialog>
                </WhitecardBox>
            )}
        </Box>
    )
}

export default RecruiterDetails
