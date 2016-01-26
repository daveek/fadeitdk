angular.module('fadeit.toolbox').service('ToolboxService', toolboxService);

toolboxService.$inject = [];
function toolboxService() {
  this.getTechnologies = function getTechnologies(){
    var technologies = [{
      name : 'AngularJS',
      size : 250,
      circles : 3,
      font : 35,
      bold : true
    },
    {
      name : 'Python',
      size : 250,
      circles : 3,
      font : 43,
      bold : true
    },
    {
      name : 'PHP',
      size : 80,
      circles : 1,
      font : 25,
      bold : false
    },
    {
      name : 'CKAN',
      size : 225,
      circles : 2,
      font : 35,
      bold : false
    },
    {
      name : 'Vue.js',
      size : 190,
      circles : 2,
      font : 34,
      bold : false
    },
    {
      name : 'Node.js',
      size : 210,
      circles : 2,
      font : 27,
      bold : false
    },
    {
      name : 'CouchDB',
      size : 150,
      circles : 2,
      font : 28,
      bold : false
    },
    {
      name : 'nginx',
      size : 170,
      circles : 4,
      font : 35,
      bold : false
    },
    {
      name : 'Flask',
      size : 150,
      circles : 2,
      font : 33,
      bold : false
    },
    {
      name : 'Drupal',
      size : 170,
      circles : 2,
      font : 35,
      bold : false
    },
    {
      name : 'JavaScript',
      size : 260,
      circles : 3,
      font : 35,
      bold : true
    },
    {
      name : 'Apache',
      size : 200,
      circles : 1,
      font : 35,
      bold : false
    },
    {
      name : 'Java',
      size : 180,
      circles : 3,
      font : 40,
      bold : true
    },
    {
      name : 'elasticsearch',
      size : 230,
      circles : 2,
      font : 25,
      bold : false
    },
    {
      name : 'Linux',
      size : 240,
      circles : 3,
      font : 45,
      bold : true
    },
    {
      name : 'Git',
      size : 160,
      circles : 4,
      font : 37,
      bold : false
    },
    {
      name : 'Vagrant',
      size : 225,
      circles : 2,
      font : 35,
      bold : false
    },
    {
      name : 'Puppet',
      size : 190,
      circles : 2,
      font : 34,
      bold : false
    },
    {
      name : 'PostgreSQL',
      size : 210,
      circles : 2,
      font : 27,
      bold : false
    },
    {
      name : 'Docker',
      size : 150,
      circles : 2,
      font : 28,
      bold : false
    },
    {
      name : 'MySQL',
      size : 170,
      circles : 4,
      font : 30,
      bold : false
    },
    {
      name : 'React',
      size : 190,
      circles : 2,
      font : 34,
      bold : false
    }];

    return technologies;
  };

  return this;
}