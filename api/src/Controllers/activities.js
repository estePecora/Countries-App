const { Activity } = require('../db')
const { Country } = require('../db')


const postActivity = async function (req, res) {
    const { activityName, dificulty, duration, season, countries } = req.body
    
    const newActivity = await Activity.findOrCreate({
            where: {
                activityName,
                dificulty,
                duration,
                season
            }
         
            })
    
    for (let i=0; i<countries.length; i++){
            
            let country = await Country.findAll({
                where:{name: countries[i]}
                })
                await newActivity[0].addCountry(country)
        }
            

    res.send("Activity added")

}



module.exports = {
    postActivity,
 
}