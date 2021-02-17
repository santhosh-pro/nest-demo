module.exports = function (plop) {
    plop.setGenerator('crud', {
        description: 'Creates NestJS crud',
        prompts: [{
          type: 'input',
          name: 'name',
          message: 'Enter Usecase Singular name'
        },
        {
          type: 'input',
          name: 'pname',
          message: 'Enter Usecase Plural name'
        }],
        actions: [
          {
            type: 'addMany',
            base: '.templates/crud/',
            destination: process.cwd(),
            templateFiles: '.templates/crud/'
          }
        ]
      });
};
