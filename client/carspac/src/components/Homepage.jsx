import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ContentLayout from './ContentLayout';

export default function ButtonAppBar() {
  return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar  sx={{height:'120px',display: 'flex',justifyContent:'center',top:'0px',position:'fixed',zIndex:'1'}}>
                <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
                <Typography variant="h4" component="div" >
                    Dazzels Carspac
                </Typography>
                <Box sx={{display:'flex',border:'solid 2px transparent',height:'80px',width:'600px',fontSize:'18px !important'}}>
                    <div style={{height:'100%',width:'45%',border:'solid 2px transparent',marginRight:'5%',padding:'0px !important'}}>
                        <span>87/30 periyasayakar street Kosapalayam Arani,T.V malai dt.632301 </span>
                    </div>
                    <div style={{height:'100%',width:'60%',border:'solid 2px transparent'}}>
                        <span>Email : manojragav23@gmail.com</span><br />
                        <span>Phone no : 6369125054</span>
                    </div>
                </Box>
                </Toolbar> 
            </AppBar>
        </Box>
        <ContentLayout />
    </div>
  );
}
