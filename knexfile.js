// Update with your config settings.
"use strict";

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/pax8-seo'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/pax8-seo'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
