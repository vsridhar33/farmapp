const {createdetails,viewdetails}=require('./services');
module.exports={
    createdetails:(req,res)=>{
        const data=req.body;
        createdetails(data,(error,result)=>{
            if(error){
                console.log(error);
                return res.status(500).json({
                    message:"internal error"
                });
            }
            return res.status(200).json({
                message:result
            });
        })
    },
   viewdetails:(req,res)=>{
    viewdetails((error,result)=>{
        if(error){
            console.log(error);
            return res.status(500).json({
                message:"internal error"
            });
        }
        return res.status(200).json({
            message:result
        });
    });
   }

}