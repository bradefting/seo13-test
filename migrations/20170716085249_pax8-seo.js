"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable('pax8-seo', function(table){
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('price', 8,2).notNullable();
    table.string('item_image').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.droptable('pax8-seo');
};
