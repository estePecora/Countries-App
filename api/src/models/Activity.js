const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {

  sequelize.define('activity', {
 
    activityName: {
      type: DataTypes.STRING
     
    },
    dificulty: {
      type: DataTypes.INTEGER
    
    },
    duration: {
      type: DataTypes.INTEGER
    
    },
    
    season: {
      type: DataTypes.ENUM({
          values: ['summer', 'fall', 'winter', 'spring'] 
      })
    },
  });
};
