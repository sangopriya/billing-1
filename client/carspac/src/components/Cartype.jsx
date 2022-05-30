import { Autocomplete, Box, Card, CardContent, CardMedia, FormControlLabel,TextField, Paper, Radio, RadioGroup, CardHeader } from '@mui/material'
import React from 'react'

const carItems = [
  { cartype: 'Hatch Back', amount: 5000 },
  { cartype: 'sedan', amount: 5200 },
  { cartype: 'suv', amount: 4000 },
  { cartype: 'muv', amount: 4300 },
  { cartype: 'crossover', amount: 3000 },
  { cartype: "Coupe", amount: 1993 },
  ]

export default function Cartype() {
  return (
    <div>
        <Paper align="center"          
          sx={{display:"flex" , justifyContent : "space-around" , margin:"10% 0 0 0" , height:"78vh"}}>
          <Card  sx={{ maxWidth: 445 , height:"60vh"}}>
               <CardHeader
                sx={{fontWeight:"bold",fontSize:"20px"}}
                title={"Car Washing"}/>      
               <CardMedia 
               component="img"
               height="194" 
               width="225"             
               image={require('./images/carwash.jpg')}
               alt="carwash"
               />   
            <CardContent sx={{display:"flex"}}>
                <RadioGroup align="center" defaultValue="Silver Wash">
                    <FormControlLabel value="Silver Wash" label="Silver" control={<Radio />}/>
                    <FormControlLabel value="Gold Wash" label="Gold" control={<Radio/>}/>
                    <FormControlLabel value="Platinum Wash" label="Platinum" control={<Radio/>}/>
                </RadioGroup>
                 
          
          {/* <Box sx={{height:"200px" , width:""}}> */}
          <Autocomplete
                     sx={{margin:"3% 0 0 30%"}}
                     multiple
                     size='small'
                     id="tags-outlined"
                     options={carItems}
                     getOptionLabel={(option) => option.cartype}
                     defaultValue={[carItems[2]]}
                     filterSelectedOptions
                     renderInput={(params) => (
                      <TextField
                        {...params}
                        label="filterSelectedOptions"
                        placeholder="Favorites"
                        id="outlined-size-small"
                        size="small"
                        width="20px"
                      />
                    )}
                    />
             </CardContent> 
    </Card>    
    <Card  sx={{ maxWidth: 445 , height:"60vh"}}>
         <CardHeader
            sx={{fontWeight:"bold",fontSize:"20px"}}
            title={"Car Detailing"}/>
               <CardMedia 
               component="img"
               height="194" 
               width="225"             
               image={require('./images/carwash.jpg')}
               alt="carwash"
               />   
            <CardContent sx={{display:"flex"}}>
                <RadioGroup align="center" defaultValue="Silver Wash">
                    <FormControlLabel value="Silver Wash" label="Silver" control={<Radio />}/>
                    <FormControlLabel value="Gold Wash" label="Gold" control={<Radio/>}/>
                    <FormControlLabel value="Platinum Wash" label="Platinum" control={<Radio/>}/>
                </RadioGroup>
                 
          
          {/* <Box sx={{height:"200px" , width:""}}> */}
          <Autocomplete
                     sx={{margin:"3% 0 0 30%"}}
                     multiple
                     size='small'
                     id="tags-outlined"
                     options={carItems}
                     getOptionLabel={(option) => option.cartype}
                     defaultValue={[carItems[2]]}
                     filterSelectedOptions
                     renderInput={(params) => (
                      <TextField
                        {...params}
                        label="filterSelectedOptions"
                        placeholder="Favorites"
                        id="outlined-size-small"
                        size="small"
                        width="20px"
                      />
                    )}
                    />
             </CardContent> 
    </Card>
    <Card  sx={{ maxWidth: 445, height:"60vh" }}>
    <CardHeader
            sx={{fontWeight:"bold",fontSize:"20px"}}
            title={"Car Detailing"}/>
               <CardMedia 
               component="img"
               height="194" 
               width="225"             
               image={require('./images/carwash.jpg')}
               alt="carwash"
               />   
            <CardContent sx={{display:"flex"}}>
                <RadioGroup align="center" defaultValue="Silver Wash">
                    <FormControlLabel value="Silver Wash" label="Silver" control={<Radio />}/>
                    <FormControlLabel value="Gold Wash" label="Gold" control={<Radio/>}/>
                    <FormControlLabel value="Platinum Wash" label="Platinum" control={<Radio/>}/>
                </RadioGroup>
                 
          
          {/* <Box sx={{height:"200px" , width:""}}> */}
          <Autocomplete
                     sx={{margin:"3% 0 0 30%"}}
                     multiple
                     size='small'
                     id="tags-outlined"
                     options={carItems}
                     getOptionLabel={(option) => option.cartype}
                     defaultValue={[carItems[2]]}
                     filterSelectedOptions
                     renderInput={(params) => (
                      <TextField
                        {...params}
                        label="filterSelectedOptions"
                        placeholder="Favorites"
                        id="outlined-size-small"
                        size="small"
                        width="20px"
                      />
                    )}
                    />
             </CardContent> 
    </Card>
    </Paper>
        
    </div>
  )
}
