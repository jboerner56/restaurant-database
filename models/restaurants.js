// connect to the database
const db = require('./conn');

// declare the class
class Restaurant{
    
    // constructor for this class to be able to update/change user

    constructor(id, name, address, street, state, phone, menu, picture){
        this.id = id;
        this.name = name;
        this.address = address;
        this.street = street;
        this.state = state;
        this.phone = phone;
        this.menu = menu;
        this.picture = picture;
    }
    static getAll() {
        return db.any(`select * from restaurants`)
            .then ((arrayOfRestaurants) => {
                return arrayOfRestaurants.map((restaurantData) => {
                    const aRestaurant = new restaurant(
                        restaurantData.id,
                        restaurantData.name,
                        restaurantData.address,
                        restaurantData.street,
                        restaurantData.state,
                        restaurantData.phone,
                        restaurantData.menu,
                        restaurantData.picture
                    );
                    return aRestaurant;
                });
            });
    }
}

// export the class
module.exports = Restaurant;