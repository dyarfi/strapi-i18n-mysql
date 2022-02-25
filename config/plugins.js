// "use strict";
// const { join } = require("path");

module.exports = {
  //
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 9,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
      // generateArtifacts: true,
      // artifacts: {
      //   schema: join(__dirname, "..", "schema.graphql"),
      //   typegen: join(__dirname, "..", "types.d.ts"),
      // },
    },
  },
};
