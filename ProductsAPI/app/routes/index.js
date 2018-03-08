//Author:   Yalim Erdem
/*Question: Implement a NodeJS server and develop a basic REST API that resolve at least the actions
mentioned above.*/
/*Solution: Product API is used for Simple CRUD process. This API checked on Postman(POST, GET, PUT, DELETE).
            Also, I used mLab(old named MongoLab) for data operations. 
*/
//URL:      https://github.com/Opportumeety.git/ProductsAPI

const productRoutes = require('./product_routes');

module.exports = function(app, db) {
  productRoutes(app, db);
};
