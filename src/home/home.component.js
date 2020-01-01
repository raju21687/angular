'use strict';

var angular = require('angular');


function homeController()
{

/*jshint validthis:true*/
var homectrl=this;

homectrl.name='sriniv';


}

homeController.$inject=[];


module.exports = {
    templateUrl: '/src/home/templates/home.html',
    controllerAs: 'homectrl',
    controller: homeController
    
};