import { Box, Container, FormControlLabel,FormControl,RadioGroup,FormLabel, Grid, MenuItem, Paper, Radio, Select, TextField, ToggleButton, ToggleButtonGroup, Button } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';

export default function EditCarType() {
    const [addCarContent,setAddCarContent]=useState(true);
    const [updateCarContent,setUpdateCarContent]=useState(false);
    const [carSpecify, setCarSpecify]=useState('Car Washing')
    const [carCategory,setCarCategory]=useState('Silver')
    const [carType,setCarType]=useState('')
    const [amount, setamount]=useState('')
    const [updateCarSpecify, setUpdateCarSpecify]=useState('Car Washing')
    const [updateCarCategory,setUpdateCarCategory]=useState('Silver')
    const [updateCarType,setUpdateCarType]=useState('')
    const [updateAmount, setUpdateAmount]=useState('')

    const addcarcontenvisible = () =>{
         setAddCarContent(true)
         setUpdateCarContent(false)
    }
    const updatecarcontenvisible = ()=>{
        setAddCarContent(false)
        setUpdateCarContent(true)
    }
    const Addcaritems= (e) =>{
       axios.post("http://localhost:5000/addamount/added",{
        carSpecify:carSpecify,
        carCategory:carCategory,
        carType:carType,
        amount:amount
    }).then((response)=>{
            alert('successfully added')
    })
    }
  return (
      <div>
        <Container align="center" sx={{width:"80%",margin:"6% 0 0 10%"}}>
            <Box sx={{width:"80vh",height:"70vh",boxShadow: "#fa4299 0px 2px 8px 0px",alignItems: "center",justifyContent: "center"}}>
                <ToggleButtonGroup sx={{color:"white",display:"flex"}}>
                    <ToggleButton sx={{width:"50vh",height:"8vh",border:"2px solid #fa4299"}} onClick={addcarcontenvisible}>Add Car</ToggleButton>                    
                    <ToggleButton sx={{width:"50vh",height:"8vh",border:"2px solid #fa4299"}}onClick={updatecarcontenvisible}>Update Car</ToggleButton>
                </ToggleButtonGroup>            
                { addCarContent && <div><Box sx={{padding:"20px",fontWeight:"bold"}} align="center" >
                    <Grid item xs={4} sx={{padding:"20px"}}>
                        <span style={{paddingTop:'2%'}}>Car Specification</span>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            size="small"
                            value={carSpecify}
                            onChange={(e)=>(setCarSpecify(e.target.value))}
                            sx={{margin:"0 0 0 30px",width:'280px',fontSize:'16px !important',marginTop:'2%'}}
                        >
                            <MenuItem value='Car Washing' >Car Washing</MenuItem>
                            <MenuItem value='Car Detailing'>Car Detailing</MenuItem>
                        </Select>
                     </Grid>
                    <Grid sx={{display:"flex",padding:"20px"}}>
                        <span id="demo-row-radio-buttons-group-label" style={{paddingTop:"2%",marginLeft:"5%"}}>Category</span>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" sx={{margin:"0 0 0 90px"}}  name="row-radio-buttons-group" >
                            <FormControlLabel value={carCategory} checked={carCategory == "Silver"} name="carcategory" onClick={()=>{setCarCategory('Silver')}} control={<Radio />} label="Silver" />
                            <FormControlLabel value={carCategory} checked={carCategory == "Gold"} name="carcategory" onClick={()=>{setCarCategory('Gold')}} control={<Radio />} label="Gold" />
                            <FormControlLabel value={carCategory} checked={carCategory == "Platinum"} name="carcategory" onClick={()=>{setCarCategory('Platinum')}} control={<Radio />} label="Platinum" />
                        </RadioGroup>
                     </Grid>
                     <Grid item xs={4} sx={{padding:"20px"}} >
                        <span >Car Type</span>
                        <TextField size='small'sx={{margin:"0 0 0 90px",width:"57%"}} value={carType} onChange={(e)=>{setCarType(e.target.value)}}/>
                        
                     </Grid>
                     <Grid item xs={4} sx={{padding:"20px"}}>
                        <span >Amount</span>
                        <TextField size='small'sx={{margin:"0 0 0 90px",width:"57%"}} value={amount} onChange={(e)=>{setamount(e.target.value)}}/>
                        
                     </Grid>
                 </Box>
                  <Button sx={{width:"20%",border:"2px solid #fa4299"}} onClick={Addcaritems}>Add</Button>
                  </div>}
                 {updateCarContent && <div><Box sx={{padding:"20px",fontWeight:"bold"}} align="center" >
                    <Grid item xs={4} sx={{padding:"20px"}}>
                        <span style={{paddingTop:'2%'}}>Car Specification</span>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            size="small"
                            value={updateCarSpecify}
                            onChange={(e)=>(setUpdateCarSpecify(e.target.value))}
                            sx={{margin:"0 0 0 30px",width:'280px',fontSize:'16px !important',marginTop:'2%'}}
                        >
                            <MenuItem value='Car Washing' >Car Washing</MenuItem>
                            <MenuItem value='Car Detailing'>Car Detailing</MenuItem>
                        </Select>
                     </Grid>
                    <Grid sx={{display:"flex",padding:"20px"}}>
                        <span id="demo-row-radio-buttons-group-label" style={{paddingTop:"2%",marginLeft:"5%"}}>Category</span>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" sx={{margin:"0 0 0 90px"}}  name="row-radio-buttons-group" >
                            <FormControlLabel value={updateCarCategory} checked={updateCarCategory == "Silver"} name="carcategory" onClick={()=>{setUpdateCarCategory('Silver')}} control={<Radio />} label="Silver" />
                            <FormControlLabel value={updateCarCategory} checked={updateCarCategory == "Gold"} name="carcategory" onClick={()=>{setUpdateCarCategory('Gold')}} control={<Radio />} label="Gold" />
                            <FormControlLabel value={updateCarCategory} checked={updateCarCategory == "Platinum"} name="carcategory" onClick={()=>{setUpdateCarCategory('Platinum')}} control={<Radio />} label="Platinum" />
                        </RadioGroup>
                     </Grid>
                     <Grid item xs={4} sx={{padding:"20px"}} >
                        <span >Car Type</span>
                        <TextField size='small'sx={{margin:"0 0 0 90px",width:"57%"}} value={updateCarType} onChange={(e)=>{setUpdateCarType(e.target.value)}}  />
                        
                     </Grid>
                     <Grid item xs={4} sx={{padding:"20px"}}>
                        <span >Amount</span>
                        <TextField size='small'sx={{margin:"0 0 0 90px",width:"57%"}} value={updateAmount} onChange={(e)=>{setUpdateAmount(e.target.value)}}  />
                        
                     </Grid>
                 </Box>
                  <Button sx={{width:"20%",border:"2px solid #fa4299"}} onClick={Addcaritems}>Update</Button>
                  </div>
                 }                   
            </Box>             
        </Container>
    </div>
  
  )
}

