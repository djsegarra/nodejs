
exports.up = function(knex, Promise) {
    let tabla = `CREATE TABLE usuario (
        id BIGINT NOT NULL AUTO_INCREMENT,
        username varchar(100) NOT NULL,
        password varchar(50) NOT NULL,
        CONSTRAINT usuario_pk PRIMARY KEY (id))`;
 return knex.schema.raw (tabla);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('usuario');
};
