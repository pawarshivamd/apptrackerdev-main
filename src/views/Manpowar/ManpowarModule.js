import React, { useState } from 'react'
import Navbar from '../navbar/topmenu/Navbar'
import {  Box, Button, Divider, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography, } from '@mui/material';
import styled from '@emotion/styled';
import Loading from '../../layout/Loader/Loading';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Link } from 'react-router-dom';
const StyledTable = styled(Table)(() => ({
  overflowX: 'auto',
  whiteSpace: 'pre',
    
  '& thead': {
    '& tr': { '& th': { paddingLeft: 10, paddingRight: 0, fontWeight:600 } }
  },
  '& tbody': {
    '& tr': { '& td': { } }
  }
}));
const rows = [
  {
    id: 1,
    CompanyName:"OpenXcell",
    ContactName: "Sattar Patel",
    Mobile: "9365287848",
    Email: "sattarp01@fe.com",
    Designation:"Frontend developer",
  },
  {
    id: 2,
    CompanyName:"Agile Infoways Pvt Ltd",
    ContactName: "Harsh Patel",
    Mobile: "9725262848",
    Email: "harsh401@fe.com",
    Designation:"Backend developer",
  }, {
    id: 3,
    CompanyName:"RapidOps",
    ContactName: "Rishi Joshi",
    Mobile: "9725262848",
    Email: "rishij5020@gmail.com",
    Designation:"Full stack developer ",
  }, {
    id: 4,
    CompanyName:"RadixWeb",
    ContactName: "Jaydeep Rajwadi",
    Mobile: "9725262848",
    Email: "jaydeeprajwadi@yayoo.com",
    Designation:"Flutter developer",
  }, ];
const ManpowarModule = ({loading}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Box sx={{ display: "flex", background: "#eef2f6", minHeight: "100vh" , overflowX:"auto" }}>
    <Navbar />
    <Box component="main" sx={{ flexGrow: 1, my: 10, background: "transparent", height: "100%", }}>
      {loading ? (
        <Loading />
        ) : (
        <Box sx={{ overflowX: 'auto', background: "#ffffff", p: 3, borderRadius: 5, marginInline: 4, my: 2 }}>
            <Box sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , py:"10px"}}>
              <Typography variant='h5'>Manpowar</Typography>
              <Link to="/addmanpowar"><Button variant="contained" to="/adduser" > <AddIcon/> add</Button> </Link> 
            </Box>
            <Divider />
            <Box sx={{mt:2}}>
          <StyledTable>
            <TableHead>
              <TableRow>
                <TableCell align="center">Company Name</TableCell>
                <TableCell align="center">Contact Name</TableCell>
                <TableCell align="center">Mobile</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Designation</TableCell>
                <TableCell align="center">Action</TableCell>

              </TableRow>
            </TableHead>
            <TableBody style={{ padding: '20px' }}>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow
                  key={row.id}
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.CompanyName}
                  </TableCell>
                  <TableCell align="center">{row.ContactName}</TableCell>
                  <TableCell align="center">+40 {row.Mobile}</TableCell>
                  <TableCell align="center">{row.Email}</TableCell>
                  <TableCell align="center">{row.Designation}</TableCell>
                  <TableCell align="center"> <Link to="/manpowardetails"><RemoveRedEyeOutlinedIcon color='primary'/></Link></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>

          <TablePagination
            sx={{ px: 2 }}
            component="div"
            className="page"
            page={page}
            rowsPerPage={rowsPerPage}
            count={rows.length}
            onPageChange={handleChangePage}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={handleChangeRowsPerPage}
            nextIconButtonProps={{ 'aria-label': 'Next Page' }}
            backIconButtonProps={{ 'aria-label': 'Previous Page' }}
          />
          </Box>
        </Box>
      )}

    </Box>
  </Box>
  )
}

export default ManpowarModule
