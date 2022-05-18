import React,{useState} from 'react'
import Paper from '@mui/material/Paper';
import { Container,Box, Grid, TextField, AppBar, Toolbar } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';




function ContentLayout() {
  const [showhide, setShowhide] = useState('');

  const handleshowhide=(event)=>{
    const getdata = event.target.value;
    console.log(getdata);
    setShowhide(getdata);
  }
  
  return (
    <div>
      <form>
        <Paper elevation={3} sx={{height:'150px',margin:'2%'}}>
            <Box sx={{flexGrow: 1 ,height:'150px' , width:"100%"}}>
                <Grid container spacing={0} sx={{padding:"10px",justifyContent:"space-between"}}>
                  <Grid item xs={3} sx={{marginTop: ".5rem",marginBottom: "1rem" }}>
                    <span style={{margin:"10px",fontWeight:'bold'}} >Client Name </span>
                    <TextField id="outlined-size-small" type="text" size="small" sx={{marginBottom:"10px",fontSize:'16px !important'}}></TextField><br/>
                    <span style={{ margin:"10px",fontWeight:'bold'}} >Ph No </span>
                    <TextField id="outlined-size-small" type="number" size="small" sx={{marginLeft:"45px"}} ></TextField>
                  </Grid>
                  <Grid item xs={3} sx={{marginTop: ".5rem",marginBottom: "1rem"}} >
                  <span style={{ margin:"10px",fontWeight:'bold'}} >Bill No </span>
                    <TextField id="outlined-size-small"  size="small" sx={{marginBottom:"10px"}}></TextField><br />
                    <span style={{ margin:"10px",fontWeight:'bold'}} >Date </span>
                    <TextField id="outlined-size-small"  size="small" sx={{marginLeft:"15px"}} ></TextField>
                  </Grid>
                  <Grid item xs={3} sx={{marginTop: ".5rem",marginBottom: "1rem"}}>
                  <span style={{margin:"10px",fontWeight:'bold'}} >Amount</span>
                    <TextField id="outlined-size-small"  size="small" sx={{marginBottom:"10px"}}></TextField><br />
                    <span style={{ margin:"10px",fontWeight:'bold'}} >Time </span>
                    <TextField  id="outlined-size-small"  size="small" sx={{marginLeft:'20px'}}></TextField>
                  </Grid>        
                </Grid>
            </Box>
        </Paper>
        <Paper elevation={5} sx={{height:'300px',margin:'2%'}}>
            <Box sx={{ flexGrow: 1,border:'solid 2px transparent' }}>
              <Grid container spacing={0} sx={{border:'solid 2px transparent',margin:'1% 0 0 0%',display:'flex',justifyContent:'center'}}>
                <Grid item xs={4} sx={{border:'solid 2px transparent',display:'flex',justifyContent:'left',paddingLeft:'20px'}}>
                  <span style={{paddingTop:'2%',fontWeight:'bold',fontSize:'18px !important'}}>Car Name</span>
                  <TextField  size="small" type="text" sx={{marginLeft:'20px',width:'300px',fontSize:'16px !important',marginTop:'2%'}}/>
                </Grid>
                <Grid item xs={4} sx={{border:'solid 2px transparent',display:'flex',justifyContent:'left',paddingLeft:'20px'}}>
                  <span style={{paddingTop:'2%',fontWeight:'bold',fontSize:'18px !important'}}>Car Modal</span>
                  <TextField size="small" type="text" sx={{marginLeft:'20px',width:'300px',fontSize:'16px !important',marginTop:'2%'}}/>
                </Grid>
                <Grid item xs={4} sx={{border:'solid 2px transparent',display:'flex',justifyContent:'left',paddingLeft:'20px'}}>
                  <span style={{paddingTop:'2%',fontWeight:'bold',fontSize:'18px !important'}}>Car Specification</span>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      size="small"
                      onChange={(e)=>(handleshowhide(e))}
                      sx={{marginLeft:'20px',width:'280px',fontSize:'16px !important',marginTop:'2%'}}
                    >
                    <MenuItem value='Car Washing'>Car Washing</MenuItem>
                    <MenuItem value='Car Detailing'>Car Detailing</MenuItem>
                  </Select>
                </Grid>
              </Grid>
              <Box sx={{display:'flex',height:'180px',border:'solid 2px transparent'}}>
                {
                  showhide === 'Car Washing' && (
                    <div style={{border:'solid 2px transparent',height:'100%',width:'33%',margin:'0% 0 0 0%'}}>
                      <FormControl sx={{margin:'4% 0 0 10%'}}>
                        <FormLabel id="demo-radio-buttons-group-label" >Car Washing</FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          
                        >
                          <FormControlLabel value="female" control={<Radio />} label="Female" />
                          <FormControlLabel value="male" control={<Radio />} label="Male" />
                          <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                      </FormControl>
                    </div>

                  )
                }
                {
                  showhide === 'Car Detailing' && (
                    <div style={{border:'solid 2px transparent',height:'100%',width:'33%',margin:'0% 0 0 0%'}}>
                      <FormControl sx={{margin:'4% 0 0 10%'}}>
                        <FormLabel id="demo-radio-buttons-group-label" >Car Detailing</FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="female"
                          name="radio-buttons-group"
                          
                        >
                          <FormControlLabel value="male" control={<Radio />} label="Male" />
                          <FormControlLabel value="male" control={<Radio />} label="Male" />
                          <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                      </FormControl>
                    </div>

                  )
                }
                  <div style={{border:'solid 2px transparent',height:'100%',width:'33%',margin:'0% 0 0 0%'}}>
                    <Grid item xs={4} sx={{border:'solid 2px transparent',display:'flex',justifyContent:'left',paddingLeft:'20px',marginTop:'1.5%'}}>
                      <span style={{paddingTop:'2%',fontWeight:'bold',fontSize:'18px !important',height:'50px',paddingLeft:'2%'}}>Amount</span>
                      <TextField size='small' type="text" sx={{marginLeft:'5%',width:'300px',fontSize:'16px !important',marginTop:'2%'}}/>
                    </Grid>
                    <Grid item xs={4} sx={{border:'solid 2px transparent',display:'flex',justifyContent:'left',paddingLeft:'20px',marginTop:'1.5%'}}>
                      <span style={{paddingTop:'2%',fontWeight:'bold',fontSize:'18px !important',height:'50px',paddingLeft:'6%'}}>Taxes</span>
                      <FormControlLabel
                        sx={{marginLeft:'10%'}}
                        value="start"
                        control={<Switch color="secondary" />}
                        labelPlacement="start"
                      />
                      <Button variant="contained" size="small" sx={{height:'30px',margin:'4% 0 0 10%'}}>Total</Button>
                    </Grid>
                  </div>
                  <div style={{border:'solid 2px transparent',height:'100%',width:'33%',margin:'0% 0 0 0%'}}>
                    <Grid item xs={4} sx={{border:'solid 2px transparent',display:'flex',justifyContent:'start',paddingLeft:'20px',marginTop:'5%'}}>
                    <Button variant="contained" color="success" sx={{marginRight:'5%'}}>Print</Button>
                    <Button variant="contained" component="span" color="secondary" sx={{marginRight:'5%'}}>Backup</Button>
                    </Grid>
                    
                  </div>
              </Box>           
            </Box>
        </Paper>
      </form>
        {/* Footer part */}
        <Box sx={{display:'flex',justifyContent:'center',height:'50px',backgroundColor:'#1976d3',marginTop:'8.5%'}}>
            <span style={{color:"#ffff",margin:'1%'}}>Copyrights@WeekendSolution 2021 -2022</span>
        </Box>     
    </div>
  )
}

export default ContentLayout


  {/* <Grid sx={{height:'120px',border:'solid 2px red',display:'flex',justifyContent:'space-evenly'}}>
                <Box sx={{border:'solid 2px black',width:'30%'}}>
                    <label>Client Name</label>
                    <input name="name" padding="20px"/>
                </Box>
                <Box sx={{border:'solid 2px black',width:'30%'}}>

                </Box>
                <Box sx={{border:'solid 2px black',width:'30%'}}>

                </Box>
            </Grid> */}

            // {
            //   showhide === 'Car Washing' && (
            //     <Grid item xs={4} sx={{border:'solid 2px black',display:'flex',justifyContent:'left',paddingLeft:'20px',marginTop:'1.5%'}}>
            //     <FormControl>
            //       <FormLabel id="demo-radio-buttons-group-label">Washing Equipments</FormLabel>
            //       <RadioGroup
            //         aria-labelledby="demo-radio-buttons-group-label"
            //         defaultValue="female"
            //         name="radio-buttons-group"
            //       >
            //         <FormControlLabel value="female" control={<Radio />} label="Female" />
            //         <FormControlLabel value="male" control={<Radio />} label="Male" />
            //         <FormControlLabel value="other" control={<Radio />} label="Other" />
            //       </RadioGroup>
            //     </FormControl>
            //     </Grid>
            //   )
            // }
            
            // <Grid item xs={4} sx={{border:'solid 2px black',display:'flex',justifyContent:'left',paddingLeft:'20px',marginTop:'1.5%'}}>
            // <FormControl>
            //   <FormLabel id="demo-radio-buttons-group-label">Detailing Equipments</FormLabel>
            //   <RadioGroup
            //     aria-labelledby="demo-radio-buttons-group-label"
            //     defaultValue="female"
            //     name="radio-buttons-group"
            //   >
            //     <FormControlLabel value="female" control={<Radio />} label="Female" />
            //     <FormControlLabel value="male" control={<Radio />} label="Male" />
            //     <FormControlLabel value="other" control={<Radio />} label="Other" />
            //   </RadioGroup>
            // </FormControl>
            // </Grid>
            // <Grid item xs={4} sx={{border:'solid 2px black',display:'flex',justifyContent:'left',paddingLeft:'20px',marginTop:'1.5%'}}>
            //   <span style={{border:'solid 2px blue',paddingTop:'2%',fontWeight:'bold',fontSize:'18px !important',height:'50px'}}>Amount</span>
            //   <TextField type="text" sx={{marginLeft:'19%',width:'290px',fontSize:'16px !important'}}/>
            // </Grid>