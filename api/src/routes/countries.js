const { Router } = require('express');
const { getAllCountries, getCountriesById, getCountriesByName, getPagination } = require('../Controllers/countries')
const router = Router();


router.get('/', getAllCountries );

router.get('/page', getPagination );

router.get('/:id', getCountriesById );

router.get('/name/:name', getCountriesByName );


module.exports = router;