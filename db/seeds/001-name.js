/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("newtable").del();
  await knex("newtable").insert([
    { id: 1, name: "haruki" },
    { id: 2, name: "kevin" },
  ]);
};
