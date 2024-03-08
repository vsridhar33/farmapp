const pool=require('./connection');
module.exports={
    createdetails:(data,callback)=>{
        pool.query("insert into Land_Details(Land_Owned_or_Leased, Land_District, Land_Taluk, Village, Total_Extent_in_Ha_and_Acre, Own_Extent_in_Acre_, Classification_of_land, Survey_no, Sub_Division, Patta_No, Current_Land_Type_its_about_empty_land_or_cultivation_or_others, Irrigation_Source, Type_of_Cultivation, Name_of_Crop, Name_of_Inter_Crop, Date_of_Sowing_Crop, Name_of_Canel_or_Water_Resource, Extent_of_Crop_HA_and_Acre)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[data.Land_Owned_or_Leased],[data.Land_District],[data.Land_Taluk],[data.Village],[data.Total_Extent_in_Ha_and_Acre],[data.Own_Extent_in_Acre_],[data.Classification_of_land],[data.Survey_no],[data.Sub_Division],[data.Patta_No],[data.Current_Land_Type_its_about_empty_land_or_cultivation_or_others],[data.Irrigation_Source],[data.Type_of_Cultivation],[data.Name_of_Crop],[data.Name_of_Inter_Crop],[data.Date_of_Sowing_Crop],[data.Name_of_Canel_or_Water_Resource],[data.Extent_of_Crop_HA_and_Acre],(error,result)=>{
            if(error){
                console.log(error);
                return callback(error);
            }return callback("",result);
        });
    },
    viewdetails:(callback)=>{
        pool.query("select * from Land_Details",[],(error,result)=>{
            if(error){
                console.log(error);
                return callback(error);

            }return callback("",result);
        });
    }
}