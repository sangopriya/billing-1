import React from 'react'
import Paper from '@mui/material/Paper';
import {Box} from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



function DataTable() {
  return (
    <div>
        <Box style={{height:'100%',border:'solid 2px transparent',margin:'2% 2% 4% 2%',display:'flex'}}>
          <Box  style={{width:'85%',border:'solid 1px #242424',height:'100%'}}>
          <TableContainer component={Paper}  sx={{ height:'100%',}} >
            <Table aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{fontSize:'18px !important',fontWeight:'bold'}} colSpan={4}>
                    Details
                  </TableCell>
                  <TableCell align="right" sx={{fontSize:'18px !important',fontWeight:'bold'}}>Price</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{fontSize:'16px !important',fontWeight:'bold'}}>S.No</TableCell>
                  <TableCell sx={{fontSize:'16px !important',fontWeight:'bold'}}>Car Modal</TableCell>
                  <TableCell sx={{fontSize:'16px !important',fontWeight:'bold'}}>Washes</TableCell>
                  <TableCell sx={{fontSize:'16px !important',fontWeight:'bold'}}>CarType</TableCell>
                  <TableCell sx={{fontSize:'16px !important',fontWeight:'bold'}} align="right">Sum</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
                  <TableRow >
                    <TableCell>1</TableCell>
                    <TableCell>aaa</TableCell>
                    <TableCell>aaa</TableCell>
                    <TableCell>aaa</TableCell>
                    <TableCell align="right">57</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>2</TableCell>
                    <TableCell>aaa</TableCell>
                    <TableCell>aaa</TableCell>
                    <TableCell>aaa</TableCell>
                    <TableCell align="right">6565</TableCell>
                  </TableRow>
              

                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell sx={{fontSize:'16px !important',fontWeight:'bold'}} align="right" colSpan={3}>Subtotal</TableCell>
                  <TableCell align="right">4657</TableCell>
                </TableRow>
                
              </TableBody>
            </Table>
          </TableContainer>
          </Box>
          <Box style={{height:'230px',border:'solid 2px transparent',width:'10%',margin:' 0% 0 0 5%'}}>
            <Paper elevation={3} sx={{height:'100%'}}>
              <Button size="small" variant="contained" color="success" sx={{margin:'20% 0 0 28%'}}> Edit </Button> 
              <Button size='medium' variant="contained" color="success" sx={{margin:'20% 0 0 24%'}}> Total </Button> 
              <Button size="large" variant="contained" color="success" sx={{margin:'20% 0 0 20%'}}> Print </Button> 
            </Paper>
          </Box>
        </Box>
    </div>
  )
}

export default DataTable