import { Box, Button, Divider, FormControl, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { CustomTextField } from '../../layout/TextFild';
import { WhitecardBox } from '../Dashbord/Dashbord';
import Loading from '../../layout/Loader/Loading';
const AddRecruiter = ({ loading }) => {
    return (

        <Box component="main" sx={{ flexGrow: 1, my: 10, background: "transparent", height: "100%", }}>
            {loading ? (
                <Loading />
            ) : (
                <WhitecardBox >
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: "10px" }}>
                        <Typography variant='h5'>Add Recuiter</Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ mt: 2 }}>
                        <FormControl fullWidth className='user-from-section'>
                            <Grid container direction={{ xs: 'column', md: 'row' }} columnSpacing={5} rowSpacing={3}>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="c-name" className='text-label'>Company Name</label>
                                    <CustomTextField type="text" id="c-name" fullWidth />
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="contact-name" className='text-label'>Contact Name</label>
                                    <CustomTextField type="text" id="contact-name" fullWidth />
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
                                    <label htmlFor="Designation" className='text-label'>Designation</label>
                                    <CustomTextField type="text" id="Designation" fullWidth />
                                </Grid>

                                <Grid component="form" item xs={4}> </Grid>


                                <Grid item lg={12} display="flex" justifyContent="end" >
                                    <Button variant='contained' type='submit' sx={{ mr: 2 }}>save</Button>
                                    <Button variant='outlined' component={Link} to="/recuiter" >Cancel</Button>
                                </Grid>
                            </Grid>
                        </FormControl>
                    </Box>
                </WhitecardBox>
            )}
        </Box>
    )
}

export default AddRecruiter
