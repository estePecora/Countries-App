const { Op, Sequelize } = require('sequelize')
const { Country } = require('../db')
const { Activity } = require('../db')
const axios = require('axios')



const getAPICountries = async function getAPICountries (req, res) {
    try{
        const lista = await axios.get('https://restcountries.eu/rest/v2/all')
        lista.data.forEach( async (country) => {
            await Country.findOrCreate({
                where: {
                    id: country.alpha3Code,
                    name: country.name,
                    flagImag: country.flag,
                    capital: country.capital,
                    continent: country.region,
                    subregion: country.subregion,
                    area: country.area,
                    population: country.population
                }
            }) 
        })
        
        return Country.findAll({
            limit: 10,
            }).then(countries => res.status(200).json(countries))
    }
    catch (error) {
        res.send(error)
    }
        
}


const getAllCountries = async function getAllCountries (req, res) {
    try{
        const countryList = await Country.findAll({include: Activity})    
        return res.status(200).json(countryList)
    } catch (error){
        res.send(error)
    }
    
}


const getCountriesById =  async function getCountriesById (req, res) {
    const countryId = req.params.id.toUpperCase()
   
    try {
        countrySelected = await Country.findOne({
            where: { id: countryId}, 
            include: Activity 
            })
        return res.status(200).json(countrySelected)
        
    }
    
    catch(error) {
        res.send(error)
    }
}


const getCountriesByName = async function getCountriesByName (req, res) {
    const countryname = req.params.name
   
    try{
        countryFound = await Country.findAll({
            where: {name: {[Op.iLike]: '%'+countryname+'%'} }})   
        if (countryFound.length !== 0) {
            return res.status(200).json(countryFound)
        } else { 
            return res.status(404).send({message: "Country not found or does not exist"})
        }
        
    }
    catch(error) {
        res.send(error)
    }
   
}


const orderCountries = async function orderCountries (req, res) {
    try{
    const type = req.params.type
    const orderby = req.params.orderby.toUpperCase()
    
        orderedCountries = await Country.findAll({
                order: [[type, orderby]],
            })   
        return res.status(200).json(orderedCountries)
    }
    catch(error) {
        res.send(error)
    }  
}



module.exports = {
    getAPICountries,
    getAllCountries,
    getCountriesById,
    getCountriesByName,
    orderCountries,

}




//----------------- RUTAS PAGINADO Y FILTRADO --------------------------------

// const getPagination = async function getPagination (req, res) {
//     try{
//         let page = parseInt(req.query.page)
//         const limit = 10
//         const offset = page ? page*limit : 0;
    
//         const countryList = await Country.findAll({limit:limit, offset: offset})    
//         return res.json(countryList)
//     } catch (error){
//         res.send(error)
//     }
    
// }

// const filterCountries = async function filterCountries (req, res) {
//     const { continent, activityName } = req.body 
    
//     if (continent && activityName) {
//         try{ 
//             filtered = await Country.findAll({
//                 where: {
//                  continent: continent
//                 },
//                 include: [{
//                     model: Activity,
//                     where: { activityName: activityName }
//                 }]        
//             })   
//             return res.json(filtered)
//         }
//         catch(error) {
//             res.send(error)
//         } 

//     } else if (!activityName) {
//         try{
//             filtered = await Country.findAll({
//                     where: {continent: continent }
//                     })   
//             return res.json(filtered)
//         }
//         catch(error) {
//             res.send(error)
//         } 

//     } else {
//         try {
//             filtered = await Activity.findAll({
//                         where: {activityName: activityName }
//                     })   
//             return res.json(filtered)
//         }
//         catch(error) {
//             res.send(error)
//         } 
        
//     }
        
// };
