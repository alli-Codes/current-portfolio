// Filename: validace.schema.js
import jsonValidace from "json-validace";

// create a validace schema
const messageSchema = new jsonValidace.Schema({
  name: {
    type: "string",
    required: [true, "The name field is required"],
  },
  email: {
    type: "email",
    required: [true, "The email field is required"],
  },
  message: {
    type: "string",
    required: true,
  },
});

// export loginSchema
export default messageSchema;
