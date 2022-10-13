const status = {
  200: {
    description: "OK",
  },
  400: {
    description: "auth error",
  },
};
const userDocs = {
  "/api/users/details": {
    get: {
      tags: ["User"],
      // description: "List all of users",
      responses: status,
    },
  },
  "/api/users": {
    post: {
      tags: ["User"],
      // description: "List all of users",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  // description: "desce",
                  example: "tontanh",
                },
              },
            },
          },
        },
      },
      responses: status,
    },
  },
  "/api/param/id": {
    get: {
      tags: ["User"],
      //   description: "List all of users",
      summary: "get user",
      parameters: [
        {
          name: "id",
          in: "query",
          // description: "List all of users",
          type: "string",
          //   example: "1grgsg22gr3",
        },
      ],
      responses: status,
    },
  },
};

export default userDocs;
