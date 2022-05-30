const collectAmount = require('../Models/carAmtModel')

const addAmount = {
    add : async(req,res)=>{
        try {
             const {carSpecify , carCategory,carType,amount}=req.body
             const cartypeamount  = new collectAmount({ carSpecify,carCategory,carType,amount})
              await cartypeamount.save();
              return res.send("Amount Added")
        } catch (error) {
            res.send(error)
        }
    },
    getamount : async(req,res)=>{
            try {
                const{carType}=req.body                
                const getcaramt = await collectAmount.find({"carType":carType})
                res.status(200).json({getcaramt})
            }
            catch(error){res.status(400).json({msg:error})}
    },
    updateamount : async(req,res)=>{
        try{
            const {carType,carCategory,amount} = req.body  
             const amountUpdate = await collectAmount.findOneAndUpdate({"carType":carType,"carCategory":carCategory},{amount},{new:true})
            
             console.log(amountUpdate)
             if({amountUpdate: "null"}){  res.json({msg:"there is no data like this"})} 
             if(!{amountUpdate: "null"} ){ res.status(200).json({msg:"update Successfully",amountUpdate})}
             //if(!amountUpdate) return res.status(204).json({msg:"There is no Cartpe pls add the data "})
            
        }
        catch(err){
            console.log(err)
        }
    }
}
module.exports = {addAmount}