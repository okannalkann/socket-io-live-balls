app.controller('indexController', ['$scope', 'indexFactory', ($scope, indexFactory) => {
    $scope.init = () => {
        const username = prompt('Please enter username');

        if(username)
            initSocket(username);
        else
            return false;
    };

    function initSocket(username) {
        const connectionsOptions = {
            reconnectionAttemps: 3,
            reconnectionDelay: 600
        };
    
        indexFactory.connectSocket('http://localhost:3000', connectionsOptions)
        .then((socket) => {
            socket.emit('newUser', { username})
        }).catch((error) =>{
            console.log(error);
        });

    }
    
}])