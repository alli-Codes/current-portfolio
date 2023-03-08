// Filename: validace.schema.js
import jsonValidace from "json-validace";

// create a validace schema
const messageSchema = new jsonValidace.Schema({
  from_name: {
    type: "string",
    required: [true, "The 'name' field is required!"],
  },
  from_email: {
    type: ["email", "'email' value is not a valid email!"],
    required: [true, "The 'email' field is required!"],
  },
  message: {
    type: "string",
    required: [true, "The 'message' field is required!"],
  },
});

// export loginSchema
export default messageSchema;
