const { Router } = require('express');
const { getAllCountries, getCountriesById, getCountriesByName, getPagination } = require('../Controllers/countries')
const router = Router();


router.get('/countries', getAllCountries );

router.get('/countries/page', getPagination );

router.get('/:id', getCountriesById );

router.get('/', getCountriesByName );


module.exports = router;