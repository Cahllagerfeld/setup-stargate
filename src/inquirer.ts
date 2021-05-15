import { InputQuestion } from "inquirer";

const questions: InputQuestion[] = [
  {
    type: "input",
    name: "authUrl",
    message: "Whats the Stargate Auth-URL?",
    default: "http://localhost:8081/v1/auth",
  },
  {
    type: "input",
    name: "namespaceUrl",
    message: "Whats the Stargate Namespace-URL?",
    default: "http://localhost:8082/v2/schemas/namespaces",
  },
  {
    type: "input",
    name: "username",
    message: "Whats the Stargate username?",
    default: "cassandra",
  },
  {
    type: "input",
    name: "password",
    message: "Whats the Stargate password?",
    default: "cassandra",
  },
  {
    type: "input",
    name: "keyspace",
    message: "Keyspace that should be created: ",
  },
];

export { questions };
