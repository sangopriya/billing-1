import React,{useEffect, useState} from 'react'
import DataTable from './DataTable';
import Paper from '@mui/material/Paper';
import { Container,Box, Grid, TextField, AppBar, Toolbar } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function ContentLayout() {
   const [disable, setDisable] = useState(true);
   const [showhide, setShowhide] = useState(true);
   const [tableShow,setTableshow] = useState(false);
   const [time,setTime] = useState();

  const handleshowhide=(event)=>{
    const getdata = event.target.value;
    // console.log(getdata);
    if(getdata === "Car Washing"){
      setDisable(false);
      setShowhide(true);
    }
    else if(getdata === 'Car Detailing'){
      setShowhide(false);
      setDisable(true);

    }
    else{
      setDisable(true);
      setShowhide(true);
    }
    
  }

  const table = ()=>{
    setTableshow(true);
  }
 
    // date&time functionality
    const showdate = new Date();
    const displaytodaysdate = showdate.getDate()+ '-' +(showdate.getMonth()+1)+ '-' +showdate.getFullYear()

    useEffect(()=>{
      setInterval(()=>{
        const showtime = new Date();
        setTime(showtime.toLocaleTimeString());
      },1000) 
    },[])
  
  
  return (
    <div>
      <form>
        {/* 1st layer */}
        <Paper elevation={3} sx={{height:'150px',margin:'10% 2% 2% 2%'}}>
            <Box sx={{flexGrow: 1 ,height:'150px' , width:"100%"}}>
                <Grid container spacing={0} sx={{height:'100%',justifyContent:"space-between",border:'solid 2px transparent'}}>
                  <Grid item xs={4} sx={{border:'solid 2px transparent'}}>
                    <Box sx={{border:'solid 2px transparent',height:'50px',margin:'2%',display:'flex'}}>
                      <span style={{fontSize:'16px',fontWeight:'bold',border:'solid 2px transparent',paddingTop:'5%'}}>Client Name</span>
                      <TextField id="outlined-size-small" type="text" size="small" sx={{margin:"10px 0 0 18px",fontSize:'16px !important'}} />
                    </Box>
                    <Box style={{border:'solid 2px transparent',height:'50px',margin:'2%',display:'flex'}}>
                      <span style={{fontSize:'16px',fontWeight:'bold',border:'solid 2px transparent',padding:'5% 0 0 5%'}}>Phone No</span>
                      <TextField id="outlined-size-small" type="number" size="small" sx={{margin:"10px 0 0 15px",fontSize:'16px !important'}} />
                    </Box>
                  </Grid>
                  <Grid item xs={3} sx={{border:'solid 2px transparent'}} >
                    <Box sx={{border:'solid 2px transparent',height:'50px',margin:'2%',display:'flex'}}>
                      <span style={{fontSize:'16px',fontWeight:'bold',border:'solid 2px transparent',paddingTop:'5%'}}>Bill No</span>
                      <p style={{margin:"10px 0 0 15px",fontSize:'16px !important',border:'solid 2px red',width:'200px',padding:'2%'}} >22265</p>
                    </Box>
                    <Box style={{border:'solid 2px transparent',height:'50px',margin:'2%',display:'flex'}}>
                      <span style={{fontSize:'16px',fontWeight:'bold',border:'solid 2px transparent',padding:'5% 0 0 5%'}}>Date</span>
                      <p style={{margin:"10px 0 0 15px",fontSize:'16px !important',border:'solid 2px transparent',width:'200px',padding:'2%'}} >{displaytodaysdate}</p>
                    </Box>
                  </Grid>
                  <Grid item xs={3} sx={{border:'solid 2px transparent'}}>
                    <Box sx={{border:'solid 2px transparent',height:'50px',margin:'2%',display:'flex'}}>
                      <span style={{fontSize:'16px',fontWeight:'bold',border:'solid 2px transparent',paddingTop:'5%'}}>Amount</span>
                      <p style={{margin:"10px 0 0 15px",fontSize:'25px',border:'solid 2px transparent',width:'200px',padding:'1%'}} >$ 22265</p>
                    </Box>
                    <Box style={{border:'solid 2px transparent',height:'50px',margin:'2%',display:'flex'}}>
                      <span style={{fontSize:'16px',fontWeight:'bold',border:'solid 2px transparent',padding:'5% 0 0 5%'}}>Time</span>
                      <p style={{margin:"10px 0 0 15px",fontSize:'16px !important',border:'solid 2px transparent',width:'200px',padding:'2%'}} >{time}</p>
                    </Box>
                  </Grid>        
                </Grid>
            </Box>
        </Paper>
        {/* 2nd layer */}
        <Paper elevation={5} sx={{height:'100%',margin:'3% 2% 2% 2%'}}>
            <Box sx={{ flexGrow: 1,border:'solid 2px transparent',height:'60px' }}>
              <Grid container spacing={0} sx={{border:'solid 2px transparent',margin:'0% 0 0 0%',display:'flex',justifyContent:'center'}}>
                <Grid item xs={4} sx={{border:'solid 2px transparent',display:'flex',justifyContent:'left',paddingLeft:'20px'}}>
                  <span style={{paddingTop:'2%',fontWeight:'bold',fontSize:'18px !important'}}>Car Name</span>
                  <TextField  size="small" type="text" sx={{marginLeft:'20px',width:'300px',fontSize:'16px !important',marginTop:'1%'}}/>
                </Grid>
                <Grid item xs={4} sx={{border:'solid 2px transparent',display:'flex',justifyContent:'left',paddingLeft:'20px'}}>
                  <span style={{paddingTop:'2%',fontWeight:'bold',fontSize:'18px !important'}}>Car Modal</span>
                  <TextField size="small" type="text" sx={{marginLeft:'20px',width:'300px',fontSize:'16px !important',marginTop:'1%'}}/>
                </Grid>
                <Grid item xs={4} sx={{border:'solid 2px transparent',display:'flex',justifyContent:'left',paddingLeft:'20px'}}>
                  <span style={{paddingTop:'2%',fontWeight:'bold',fontSize:'18px !important'}}>Car Specification</span>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      size="small"
                      onChange={(e)=>(handleshowhide(e))}
                      sx={{marginLeft:'20px',width:'280px',fontSize:'16px !important',marginTop:'1%'}}
                    >
                    <MenuItem value='Car Washing' >Car Washing</MenuItem>
                    <MenuItem value='Car Detailing' >Car Detailing</MenuItem>
                    <MenuItem value='Car Additional'>Car Additional</MenuItem>
                  </Select>
                </Grid>
              </Grid>          
            </Box>
        </Paper>
        {/* 3rd layer */}
          <Box sx={{height:'100%',border:'solid 2px transparent',display:'flex',margin:'3% 2% 2% 2%'}}>
            <Paper  elevation={3} sx={{ height: '100%', width: '48%' }}>
              <div  style={{ height: '100%', border: 'solid 2px  transparent', width: '100%' }}>
                <div style={{ fontSize: '18px', margin: '2% 5% 4% 5%', border: 'solid 2px transparent', fontWeight: 'bold',display:'flex',justifyContent:'space-between',height:'30px' }}>
                  <div >Car Washing</div>
                 <Button size="small" variant="contained" color="success" sx={{height:'30px'}} onClick={table}> Add </Button> 
                </div>
                <Accordion disabled={disable} sx={{ backgroundColor: '#1976d3', color: '#ffff', margin: '3%' }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Silver Washes</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#fff', color: '#242424' }}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox  />} label="Hatch Back (400)" />
                    <FormControlLabel control={<Checkbox  />} label="Sedan (450)" />
                    <FormControlLabel control={<Checkbox  />} label="SUV (500)" />
                    <FormControlLabel control={<Checkbox  />} label="Premium (550)" />
                  </FormGroup>
                  </AccordionDetails>
                </Accordion>
                <Accordion disabled={disable} sx={{ backgroundColor: '#1976d3', color: '#ffff', margin: '3%' }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Gold Washes</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#fff', color: '#242424' }}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox  />} label="Hatch Back (400)" />
                    <FormControlLabel control={<Checkbox  />} label="Sedan (450)" />
                    <FormControlLabel control={<Checkbox  />} label="SUV (500)" />
                    <FormControlLabel control={<Checkbox  />} label="Premium (550)" />
                  </FormGroup>
                  </AccordionDetails>
                </Accordion>
                <Accordion disabled={disable} sx={{ backgroundColor: '#1976d3', color: '#ffff', margin: '3%' }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Platinum</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#fff', color: '#242424' }}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox  />} label="Hatch Back (400)" />
                    <FormControlLabel control={<Checkbox  />} label="Sedan (450)" />
                    <FormControlLabel control={<Checkbox  />} label="SUV (500)" />
                    <FormControlLabel control={<Checkbox  />} label="Premium (550)" />
                  </FormGroup>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Paper>
            <Paper elevation={3} sx={{ height: '100%', width: '48%', marginLeft: '5%' }}>
              <div style={{ height: '100%', border: 'solid 2px  transparent', width: '100%', marginLeft: '0%' }}>
                <div style={{ fontSize: '18px', margin: '2% 5% 4% 5%', border: 'solid 2px transparent', fontWeight: 'bold',display:'flex',justifyContent:'space-between',height:'30px' }}>
                  <div >Car Washing</div>
                  <Button size="small" variant="contained" color="success" sx={{height:'30px'}} onClick={table}> Add </Button> 
                </div>
                <Accordion disabled={showhide} sx={{ backgroundColor: '#1976d3', color: '#ffff', margin: '3%' }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Silver Wash</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#fff', color: '#242424' }}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox  />} label="Hatch Back (400)" />
                    <FormControlLabel control={<Checkbox  />} label="Sedan (450)" />
                    <FormControlLabel control={<Checkbox  />} label="SUV (500)" />
                    <FormControlLabel control={<Checkbox  />} label="Premium (550)" />
                  </FormGroup>
                  </AccordionDetails>
                </Accordion>
                <Accordion disabled={showhide} sx={{ backgroundColor: '#1976d3', color: '#ffff', margin: '3%' }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Gold Wash</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#fff', color: '#242424' }}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox  />} label="Hatch Back (400)" />
                    <FormControlLabel control={<Checkbox  />} label="Sedan (450)" />
                    <FormControlLabel control={<Checkbox  />} label="SUV (500)" />
                    <FormControlLabel control={<Checkbox  />} label="Premium (550)" />
                  </FormGroup>
                  </AccordionDetails>
                </Accordion>
                <Accordion disabled={showhide} sx={{ backgroundColor: '#1976d3', color: '#ffff', margin: '3%' }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Platinum</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#fff', color: '#242424' }}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox  />} label="Hatch Back (400)" />
                    <FormControlLabel control={<Checkbox  />} label="Sedan (450)" />
                    <FormControlLabel control={<Checkbox  />} label="SUV (500)" />
                    <FormControlLabel control={<Checkbox  />} label="Premium (550)" />
                  </FormGroup>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Paper>
          </Box>
         
      </form>

      {tableShow ? <DataTable/> : null}
      
        {/* Footer part */}
        <Box sx={{display:'flex',justifyContent:'center',height:'45px',backgroundColor:'#1976d3',position:'fixed',bottom:'0px',width:'100%'}}>
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
                // <FormControl>
                //   <FormLabel id="demo-radio-buttons-group-label">Washing Equipments</FormLabel>
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

            ////coding line

             {/* {
                  showhide === 'Car Washing' && ( */}
                //   <div style={{border:'solid 2px black',height:'100%',width:'30%',margin:'0% 0 0% 0%'}}>
                //   <FormControl sx={{margin:'4% 0 0 10%'}}>
                //     <FormLabel id="demo-radio-buttons-group-label" >Car Washing</FormLabel>
                //     <RadioGroup
                //       aria-labelledby="demo-radio-buttons-group-label"
                //       name="radio-buttons-group"
                      
                //     >
                //       <FormControlLabel value="female" control={<Radio />} label="Female" />
                //       <FormControlLabel value="male" control={<Radio />} label="Male" />
                //       <FormControlLabel value="other" control={<Radio />} label="Other" />
                //     </RadioGroup>
                //   </FormControl>
                // </div>

               {/* )
             } */}
            {/* {
              showhide === 'Car Detailing' && ( */}
                // <div style={{border:'solid 2px blue',height:'100%',width:'28%',margin:'0% 0 0 5%'}}>
                //   <FormControl sx={{margin:'4% 0 0 7%'}}>
                //     <FormLabel id="demo-radio-buttons-group-label" >Car Detailing</FormLabel>
                //     <RadioGroup
                //       aria-labelledby="demo-radio-buttons-group-label"
                //       defaultValue="female"
                //       name="radio-buttons-group"
                      
                //     >
                //       <FormControlLabel value="male" control={<Radio />} label="Male" />
                //       <FormControlLabel value="male" control={<Radio />} label="Male" />
                //       <FormControlLabel value="other" control={<Radio />} label="Other" />
                //     </RadioGroup>
                //   </FormControl>
                // </div>

              {/* )
            } */}
              // <div style={{border:'solid 2px green',height:'100%',width:'30%',margin:'0% 0 0 5%'}}>
              //   <Grid item xs={4} sx={{border:'solid 2px transparent',display:'flex',justifyContent:'left',paddingLeft:'20px',marginTop:'1.5%'}}>
              //     <span style={{paddingTop:'2%',fontWeight:'bold',fontSize:'18px !important',height:'50px',paddingLeft:'2%'}}>Amount</span>
              //     <TextField size='small' type="text" sx={{marginLeft:'5%',width:'300px',fontSize:'16px !important',marginTop:'2%'}}/>
              //   </Grid>
              //   <Grid item xs={4} sx={{border:'solid 2px transparent',display:'flex',justifyContent:'left',paddingLeft:'20px',marginTop:'1.5%'}}>
              //     <span style={{paddingTop:'2%',fontWeight:'bold',fontSize:'18px !important',height:'50px',paddingLeft:'6%'}}>Taxes</span>
              //     <FormControlLabel
              //       sx={{marginLeft:'10%'}}
              //       value="start"
              //       control={<Switch color="secondary" />}
              //       labelPlacement="start"
              //     />
              //     <Button variant="contained" size="small" sx={{height:'30px',margin:'4% 0 0 10%'}}>Total</Button>
              //   </Grid>
              // </div>
              // <div style={{border:'solid 2px yellow',height:'100%',width:'33%',margin:'0% 0 0 0%'}}>
              //   <Grid item xs={4} sx={{border:'solid 2px transparent',display:'flex',justifyContent:'start',paddingLeft:'20px',marginTop:'5%'}}>
              //   <Button variant="contained" color="success" sx={{marginRight:'5%'}}>Print</Button>
              //   <Button variant="contained" component="span" color="secondary" sx={{marginRight:'5%'}}>Backup</Button>
              //   </Grid>
                
              // </div>



          //     <div style={{width:'90%',border:'solid 2px green',height:'100%'}}>
          //     <Paper elevation={3} sx={{height:'100%'}}>
          //       <Box sx={{flexGrow: 1, border:'solid 2px red', height:'100%',display:'flex'}}>
          //           <div style={{height:'100%',width:'38%',border:'solid 2px blue',}}>
                      // <div style={{fontSize:'16px',margin:'1% 0 3% 5%'}}>Car Washing</div>
                      //   <Accordion sx={{backgroundColor:'#1976d3',color:'#ffff'}}>
                      //     <AccordionSummary
                      //       expandIcon={<ExpandMoreIcon sx={{color:'#fff'}}/>}
                      //       aria-controls="panel1a-content"
                      //       id="panel1a-header"
                      //     >
                      //       <Typography>Accordion 1</Typography>
                      //     </AccordionSummary>
                      //     <AccordionDetails  sx={{backgroundColor:'#fff',color:'#242424'}}>
                      //     <FormControl>
                      //         <RadioGroup
                      //           aria-labelledby="demo-radio-buttons-group-label"
                      //           defaultValue="female"
                      //           name="radio-buttons-group"
                      //         >
                      //           <FormControlLabel value="hatchback" control={<Radio />} label="Hatch Back (400)" />
                      //           <FormControlLabel value="sedan" control={<Radio />} label="Sedan (450)" />
                      //           <FormControlLabel value="suv" control={<Radio />} label="SUV (500)" />
                      //           <FormControlLabel value="premium" control={<Radio />} label="Premium (550)" />
                      //         </RadioGroup>
                      //     </FormControl>
                      //     </AccordionDetails>
                      //   </Accordion>

          //               <Accordion sx={{backgroundColor:'#1976d3',color:'#ffff'}}>
          //                 <AccordionSummary
          //                   expandIcon={<ExpandMoreIcon sx={{color:'#fff'}}/>}
          //                   aria-controls="panel1a-content"
          //                   id="panel1a-header"
          //                 >
          //                   <Typography>Accordion 1</Typography>
          //                 </AccordionSummary>
          //                 <AccordionDetails  sx={{backgroundColor:'#fff',color:'#242424'}}>
          //                 <FormControl>
          //                     <RadioGroup
          //                       aria-labelledby="demo-radio-buttons-group-label"
          //                       defaultValue="female"
          //                       name="radio-buttons-group"
          //                     >
          //                       <FormControlLabel value="hatchback" control={<Radio />} label="Hatch Back (400)" />
          //                       <FormControlLabel value="sedan" control={<Radio />} label="Sedan (450)" />
          //                       <FormControlLabel value="suv" control={<Radio />} label="SUV (500)" />
          //                       <FormControlLabel value="premium" control={<Radio />} label="Premium (550)" />
          //                     </RadioGroup>
          //                 </FormControl>
          //                 </AccordionDetails>
          //               </Accordion>

          //               <Accordion sx={{backgroundColor:'#1976d3',color:'#ffff'}}>
          //                 <AccordionSummary
          //                   expandIcon={<ExpandMoreIcon sx={{color:'#fff'}}/>}
          //                   aria-controls="panel1a-content"
          //                   id="panel1a-header"
          //                 >
          //                   <Typography>Accordion 1</Typography>
          //                 </AccordionSummary>
          //                 <AccordionDetails  sx={{backgroundColor:'#fff',color:'#242424'}}>
          //                 <FormControl>
          //                     <RadioGroup
          //                       aria-labelledby="demo-radio-buttons-group-label"
          //                       defaultValue="female"
          //                       name="radio-buttons-group"
          //                     >
          //                       <FormControlLabel value="hatchback" control={<Radio />} label="Hatch Back (400)" />
          //                       <FormControlLabel value="sedan" control={<Radio />} label="Sedan (450)" />
          //                       <FormControlLabel value="suv" control={<Radio />} label="SUV (500)" />
          //                       <FormControlLabel value="premium" control={<Radio />} label="Premium (550)" />
          //                     </RadioGroup>
          //                 </FormControl>
          //                 </AccordionDetails>
          //               </Accordion>
          //           </div>
          //           <div style={{height:'200px',width:'38%',border:'solid 2px blue',marginLeft:'2%'}}></div>
          //           <div style={{height:'200px',width:'38%',border:'solid 2px blue',marginLeft:'2%'}}></div>

          //       </Box>
          //     </Paper>
          // </div>
          // <div style={{width:'10%',border:'solid 2px white',marginLeft:'2%'}}>
          //   <Paper elevation={3} sx={{height:'100%'}}>

          //   </Paper>
          // </div>