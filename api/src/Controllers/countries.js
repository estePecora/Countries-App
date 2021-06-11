const { Op } = require('sequelize')
const { Country } = require('../db')
const { Activity } = require('../db')
const axios = require('axios')



const getAllCountries = async function getAllCountries (req, res) {
    try {
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
        
        Country.findAll({
            limit: 10,
            include: Activity
            }).then(countries => res.json(countries))

    }
    catch (error) {
        res.send(error)
    }
        
}

const getPagination = async function getPagination (req, res) {
    const page = parseInt(req.query.page)
    const limit = 10

    countryList = await Country.findAll({limit:limit, offset: page*limit})    
    return res.json(countryList)
}



const getCountriesById =  async function getCountriesById (req, res) {
    const countryId = req.params.id.toUpperCase()
   
    countrySelected = await Country.findOne({where: { id: countryId} })
    return res.json(countrySelected)

  
}

const getCountriesByName = async function getCountriesByName (req, res) {
    const { name } = req.query
   
    countryFound = await Country.findAll({where: {name: {[Op.like]: '%'+name+'%'} }})
    // countryFound = await Country.findAll({where: {name:name} })    
    return res.json(countryFound)
}






module.exports = {
    getAllCountries,
    getCountriesById,
    getCountriesByName,
    getPagination
 
}