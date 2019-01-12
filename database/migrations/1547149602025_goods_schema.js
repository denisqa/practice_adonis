const Schema = use('Schema')

class GoodsSchema extends Schema {
  up () {
    this.create('types', (table) => {
      table.increments();
      table.string('name', 60).notNullable();
    });

    this.create('attributes', (table) => {
      table.increments();
      table.string('name', 60).notNullable();
      table.integer('type_id').notNullable().index();
      table.foreign('type_id').references('id').on('types').onDelete('cascade');
    });

    this.create('goods', (table) => {
      table.increments();
      table.string('name', 60).notNullable();
      table.integer('price').notNullable().default(0);
      table.integer('type_id').notNullable().index();
      table.foreign('type_id').references('id').on('types').onDelete('cascade');
      table.integer('user_id').notNullable().index();
      table.foreign('user_id').references('id').on('users').onDelete('cascade');
      table.timestamp('created_at').default(this.fn.now());
    });

    this.create('parameters', (table) => {
      table.increments();
      table.integer('good_id').notNullable().index();
      table.foreign('good_id').references('id').on('goods').onDelete('cascade');
      table.integer('attribute_id').notNullable().index();
      table.foreign('attribute_id').references('id').on('attributes').onDelete('cascade');
      table.string('value', 60);
    });
  }

  down () {
    this.drop('parameters');
    this.drop('goods');
    this.drop('attributes');
    this.drop('types');
  }
}

module.exports = GoodsSchema