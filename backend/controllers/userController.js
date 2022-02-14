import user from "../models/user.js";

const registerUser = async (req, res) => {
  if (!req.body.name ||
    !req.body.age ||
    !req.body.email ||
    !req.body.whatsapp ||
    !req.body.adress) return res.status(400).send({ message: "Imcomplete data" });

  let schemaUser = new user({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    whatsapp: req.body.whatsapp,
    adress: req.body.adress,
    dbStatus: true,
  });

  let myResult = await schemaUser.save();

  if (!myResult) return res.status(500).send({ message: "Fail to register user" });

  res.status(200).send({ myResult });
};

export default { registerUser };