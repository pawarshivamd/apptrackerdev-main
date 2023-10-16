import React, { useState } from 'react'
import { Box, Card, Divider, Grid, InputBase, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, Typography, alpha, } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import WorkPermit from '../../imgs/icon/workpermit.svg';
import WorkVisa from '../../imgs/icon/workvisa.svg';
import Candidates from '../../imgs/icon/Candidates.svg';
import ResidenceCard from '../../imgs/icon/residencecard.svg';
import { LineChart } from '@mui/x-charts';
const uData = [50, 60, 100, 150, 80, 200, 170, 300, 450, 200, 550, 500];
const xLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

const Tablecontainer = styled(Box)(() => ({
    '@media (max-width: 767px)': {
        width: '257px',
    }

}))
export const WhitecardBox = styled(Box)(() => ({
    background: '#ffffff',
    padding: '24px',
    borderRadius: '20px',
    marginInline: '32px',
    marginBottom: '16px',

    '@media (max-width: 768px)': {
        marginInline: '16px',
    },
}))
const StyledTable = styled(Table)(() => ({
    overflowX: 'auto',
    whiteSpace: 'pre',
    '& thead': {
        '& tr': { '& th': { paddingLeft: 10, paddingRight: 0, fontWeight: 600 } }
    },
    '& tbody': {
        '& tr': { '& td': {} }
    },
}));
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid #bdd6f7',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
const rows = [
    {
        id: 1,
        Name: "Khushbu Patel",
        PassportNo: "EC7182392",
        Nationality: "Romania",
        wp: <CheckIcon color='success' />,
        wv: <CheckIcon color='success' />,
        Rc: <CheckIcon color='success' />,

    },
    {
        id: 2,
        Name: "Sattar Memon",
        PassportNo: "WB1266255",
        Nationality: "Thailand",
        wp: <CloseIcon color='error' />,
        wv: <CheckIcon color='success' />,
        Rc: <CloseIcon color='error' />,
    }, {
        id: 3,
        Name: "Tanvi Taree",
        PassportNo: "M79446042",
        Nationality: "Korea",
        wp: <CheckIcon color='success' />,
        wv: <CloseIcon color='error' />,
        Rc: <CloseIcon color='error' />,
    }, {
        id: 4,
        Name: "Shrey Rajwadi",
        PassportNo: "E05360350",
        Nationality: "China",
        wp: <CloseIcon color='error' />,
        wv: <CloseIcon color='error' />,
        Rc: <CloseIcon color='error' />,
    },];
const Dashbord = () => {
    const [page] = useState(0);
    const [rowsPerPage,] = useState(5);
    

    return (

        <Box component="main" sx={{ flexGrow: 1, my: 10, background: "transparent", height: "100%", }}>

            <WhitecardBox >
                <Box>
                    <Grid container spacing={2}>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Card sx={{ py: 3, px: 2, border: "1px solid #78a0da", minHeight: "164px" }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Box>
                                        <Typography variant='h4' sx={{ color: "#6b9ef0" }}>24</Typography>
                                    </Box>
                                    <Box>
                                        <img src={Candidates} alt='Candidates' />
                                    </Box>
                                </Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: "600", mt: 1 }}>Candidate</Typography>
                            </Card>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Card sx={{ py: 3, px: 2, border: "1px solid #78a0da", minHeight: "164px" }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Box>
                                        <Typography variant='h4' sx={{ color: "#6b9ef0" }}>15 <br /><Divider sx={{ width: "35px", border: "0.01px solid #aeaeae" }} />25</Typography>
                                    </Box>
                                    <Box>
                                        <img src={WorkPermit} alt='WorkPermit' />
                                    </Box>
                                </Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>WorkPermit</Typography>
                            </Card>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Card sx={{ py: 3, px: 2, border: "1px solid #78a0da", minHeight: "164px" }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Box>
                                        <Typography variant='h4' sx={{ color: "#6b9ef0" }}>15<br /><Divider sx={{ width: "35px", border: "0.01px solid #aeaeae" }} />25</Typography>
                                    </Box>
                                    <Box>
                                        <img src={WorkVisa} alt='WorkVisa' />
                                    </Box>
                                </Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>WorkVisa</Typography>
                            </Card>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Card sx={{ py: 3, px: 2, border: "1px solid #78a0da", minHeight: "164px" }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Box>
                                        <Typography variant='h4' sx={{ color: "#6b9ef0" }}>6 <br /><Divider sx={{ width: "35px", border: "0.01px solid #aeaeae" }} />10</Typography>
                                    </Box>
                                    <Box>
                                        <img src={ResidenceCard} alt='Residence Card' />
                                    </Box>
                                </Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>Residence Card</Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </WhitecardBox>
            <WhitecardBox >
                <Box
                    sx={{
                        width: '100%',
                        overflowX: 'auto',
                        // '@media (max-width: 768px)': {
                        //     width: '500px',
                        // overflowX: 'scroll',

                        // },
                    }}
                >
                    <LineChart
                        sx={{
                            width: '100%',
                            '@media (max-width: 768px)': {
                                width: '500px',
                                overflowX: 'auto',
                            },
                        }}
                        height={300}
                        series={[
                            { data: uData, label: 'Candidate' },
                        ]}
                        xAxis={[{ scaleType: 'point', data: xLabels }]}
                    />
                </Box>
            </WhitecardBox>
            <WhitecardBox>
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", py: "10px" }}>
                    <Typography variant='h5'>Recent Candidates</Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mr: 2 }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>

                    </Box>
                </Box>
                <Divider />
                <Tablecontainer sx={{ mt: 2, overflowX: 'auto' }}>

                    <StyledTable style={{ overflowX: 'auto' }} >

                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Passport No.</TableCell>
                                <TableCell align="center">Nationality</TableCell>
                                <TableCell align="center"><Tooltip title="Work Permit">WP</Tooltip></TableCell>
                                <TableCell align="center"><Tooltip title="Work Visa" >WV</Tooltip></TableCell>
                                <TableCell align="center"><Tooltip title="Residence Card"> RC</Tooltip></TableCell>
                                <TableCell align="center">Action</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody style={{ padding: '20px' }}>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                <TableRow
                                    key={row.id}
                                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                                >
                                    <TableCell align="center">{row.Name}</TableCell>
                                    <TableCell component="th" scope="row" align="center">
                                        {row.PassportNo}
                                    </TableCell>
                                    <TableCell align="center">{row.Nationality}</TableCell>
                                    <TableCell align="center">{row.wp}</TableCell>
                                    <TableCell align="center">{row.wv}</TableCell>
                                    <TableCell align="center" >{row.Rc}</TableCell>
                                    <TableCell align="center"> <Link to="/candidatesdetails"><RemoveRedEyeOutlinedIcon color='primary' /></Link></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </StyledTable>
                </Tablecontainer>
            </WhitecardBox>

        </Box>

    )
}

export default Dashbord
