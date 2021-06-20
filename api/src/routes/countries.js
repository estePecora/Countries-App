const { Router } = require('express');
const { getAPICountries, getAllCountries, getCountriesById, getCountriesByName, orderCountries } = require('../Controllers/countries')
const router = Router();


router.get('/', getAPICountries );

// router.get('/page', getPagination );

router.get('/countries/all', getAllCountries );

router.get('/:id', getCountriesById );

router.get('/name/:name', getCountriesByName );

router.get('/order/:type/:orderby', orderCountries );

// router.post('/filterby/something/filter', filterCountries );


module.exports = router;