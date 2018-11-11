
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('usuario').del()
    .then(function () {
      // Inserts seed entries
      return knex('usuario').insert([
        {username: 'test', password: 'test'}   
      ]);
    });
};
