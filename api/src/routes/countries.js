const { Router } = require('express');
const { getAllCountries, getCountriesById, getCountriesByName, getPagination, orderCountries, filterCountries } = require('../Controllers/countries')
const router = Router();


router.get('/', getAllCountries );

router.get('/page', getPagination );

router.get('/:id', getCountriesById );

router.get('/name/:name', getCountriesByName );

router.get('/countries/:type/:orderby/:page', orderCountries );

router.post('/filterby/something/filter', filterCountries );


module.exports = router;