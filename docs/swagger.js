import userDocs from "./user.docs.js";

const swaggerDocumention = {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Document API",
    // description: "Sample API",
  },
  servers: [
    {
      url: "http://locahost:5000",
      description: "Sample API",
    },
  ],
  tags: [
    {
      name: "User",
      description: "authorization",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  paths: userDocs,
};
export default swaggerDocumention;
