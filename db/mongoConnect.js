const mongoose = require("mongoose");
const { infConect } = require("../config/secret");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${infConect.name}:${infConect.password}@cluster0.p5nuc.mongodb.net/server_project`);
  console.log("mongo atlas conect")
}
