

module.exports = (sequelize , DataTypes)=>{
    const Restaurant= sequelize.define('restaurants' , {
        id : {
            type : DataTypes.INTEGER ,
            allowNull : false ,
            primaryKey : true , 
            autoIncrement : true
        } ,
        name : {
            type : DataTypes.STRING , 
            allowNull : false 
        }  ,
        description : {
            type : DataTypes.STRING ,
            allowNull : false 
        }

    })
    return Restaurant
}