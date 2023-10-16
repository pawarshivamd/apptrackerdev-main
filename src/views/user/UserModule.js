import React, { useState } from 'react';
import { Box, Button, Divider, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography, } from '@mui/material';
import styled from '@emotion/styled';
import Loading from '../../layout/Loader/Loading';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Link } from 'react-router-dom';
import { WhitecardBox } from '../Dashbord/Dashbord';


function getRoleBackgroundColor(role) {
  switch (role) {
    case 'Back office':
      return '#b9e6ad8c';
    case 'Manpower Company':
      return '#d0e6ffb3';
    case 'Recruiter':
      return '#d180f054';
    default:
      return 'inherit';
  }
}
const Tablecontainer = styled(Box)(() => ({
  '@media (max-width: 767px)': {
    width: '257px',
  }
}))
const StyledTable = styled(Table)(() => ({
  overflowX: 'auto',
  whiteSpace: 'pre',

  '& thead': {
    '& tr': { '& th': { paddingLeft: 10, paddingRight: 0, fontWeight: 600 } }
  },
  '& tbody': {
    '& tr': { '& td': {} }
  }
}));
const rows = [
  {
    id: 1,
    Name: "Stacia Taree",
    CompanyName: "Codezeros",
    Mobile: "9725245872",
    Email: "ste0@fe.com",
    Location: "Romania",
    Role: "Back office",

  },
  {
    id: 2,
    Name: "Harsh Patel",
    CompanyName: "Sophos",
    Mobile: "9725262848",
    Email: "harsh401@fe.com",
    Location: "Bulgaria",
    Role: "Manpower Company",
  }, {
    id: 3,
    Name: "Tony Taree",
    CompanyName: "Cybage Software",
    Mobile: "9725262848",
    Email: "tony102@fe.com",
    Location: "India",
    Role: "Recruiter",
  }, {
    id: 4,
    Name: "Jaydeep Rajwadi",
    CompanyName: "Codal",
    Mobile: "9725262848",
    Email: "jayp44@fe.com",
    Location: "Hungary",
    Role: "Back office",
  }, {
    id: 5,
    Name: "Sattar Patel",
    CompanyName: "Codezeros",
    Mobile: "9725262848",
    Email: "ssttsr300@fe.com",
    Location: "Serbia",
    Role: "Manpower Company",
  }, {
    id: 6,
    Name: "Mical Taree",
    CompanyName: "Codal",
    Mobile: "9725262848",
    Email: "mical@gmail.com",
    Location: "Ukraine",
    Role: "Recruiter",
  }, {
    id: 7,
    Name: "Roma Taree",
    CompanyName: "Cybage Software",
    Mobile: "9725262848",
    Email: "roma0@fe.com",
    Location: "United States",
    Role: "Manpower Company",
  },];
const UserModule = ({ loading }) => {
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

    <Box component="main" sx={{ flexGrow: 1, my: 10, background: "transparent", height: "100%", }}>
      {loading ? (
        <Loading />
      ) : (
        <WhitecardBox >
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", py: "10px" }}>
            <Typography variant='h5'>Users</Typography>
            <Button variant="contained" to="/adduser" component={Link} > <AddIcon /> add</Button>
          </Box>
          <Divider />
          <Tablecontainer sx={{ mt: 2, overflowX: 'auto' }}>
            <StyledTable>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Company</TableCell>
                  <TableCell align="center">Mobile</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Location</TableCell>
                  <TableCell align="center">Role</TableCell>
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
                      {row.CompanyName}
                    </TableCell>
                    <TableCell align="center">+40 {row.Mobile}</TableCell>
                    <TableCell align="center">{row.Email}</TableCell>
                    <TableCell align="center">{row.Location}</TableCell>
                    <TableCell align="center" >
                      <Box
                        style={{
                          backgroundColor: getRoleBackgroundColor(row.Role),
                          padding: "5px 10px",
                          width: "min(100% - 0px ,100%)",
                          marginInline: "auto",
                          borderRadius: "7px",
                        }}>
                        {row.Role}
                      </Box>
                    </TableCell>
                    <TableCell align="center"> <Link to="/userdetails"><RemoveRedEyeOutlinedIcon color='primary' /></Link></TableCell>
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
          </Tablecontainer>
        </WhitecardBox>
      )}

    </Box>

  )
}

export default UserModule
