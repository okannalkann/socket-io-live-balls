app.controller('indexController', ['$scope', 'indexFactory', ($scope, indexFactory) => {
    const connectionsOptions = {
        reconnectionAttemps: 3,
        reconnectionDelay: 600
    };

    indexFactory.connectSocket('http://localhost:3000', connectionsOptions)
    .then((socket) => {
        console.log("baglanti gerceklesti", socket);
    }).catch((error) =>{
        console.log(error);
    });
}])