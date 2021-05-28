"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint("Drawings", {
      fields: ["Users_Id"],
      type: "foreign key",
      name: "fk_Drawing_User",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("Comments", {
      fields: ["Users_Id"],
      type: "foreign key",
      name: "fk_Comments_User",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("Comments", {
      fields: ["Drawings_id"],
      type: "foreign key",
      name: "fk_Comments_Drawing",
      references: {
        table: "Drawings",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("Likes", {
      fields: ["Users_Id"],
      type: "foreign key",
      name: "fk_Like_User",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("Likes", {
      fields: ["Drawings_id"],
      type: "foreign key",
      name: "fk_Like_Drawing",
      references: {
        table: "Drawings",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("DrawingsTags", {
      fields: ["Tags_id"],
      type: "foreign key",
      name: "fk_DrawingsTag_Tag",
      references: {
        table: "Tags",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("DrawingsTags", {
      fields: ["Drawings_id"],
      type: "foreign key",
      name: "fk_DrawingsTag_Drawing",
      references: {
        table: "Drawings",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint("Drawings", "fk_Drawing_User", {});
    await queryInterface.removeConstraint("Comments", "fk_Comments_User", {});
    await queryInterface.removeConstraint(
      "Comments",
      "fk_Comments_Drawing",
      {}
    );
    await queryInterface.removeConstraint("Likes", "fk_Like_User", {});
    await queryInterface.removeConstraint("Likes", "fk_Like_Drawing", {});
    await queryInterface.removeConstraint(
      "DrawingsTags",
      "fk_DrawingsTag_Tag",
      {}
    );
    await queryInterface.removeConstraint(
      "DrawingsTags",
      "fk_DrawingsTag_Drawing",
      {}
    );
  },
};
