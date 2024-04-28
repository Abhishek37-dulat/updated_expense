const Sib = require("sib-api-v3-sdk");
const Forgot = require("../models/forgot");
const Signup = require("../models/expense");
const sendotp = async (req, res) => {
  try {
    const o = parseInt(Math.random() * 100000);
    const { email } = req.body;
    const data = await Signup.findOne({ where: { email: email } });
    if (!data) {
      return res.status(403).json({ message: "user don't exists!" });
    }
    const item = await Forgot.findOne({ where: { userEmail: email } });
    if (!item) {
      const client = Sib.ApiClient.instance;
      const apiKey = client.authentications["api-key"];
      apiKey.apiKey = process.env.SENDBLUE;
      const tranEmailApi = new Sib.TransactionalEmailsApi();
      const sender = {
        email: "sendmailm6@gmail.com",
        name: "Abhishek",
      };
      const receivers = [{ email: email }];
      tranEmailApi.sendTransacEmail({
        sender,
        to: receivers,
        subject: "Forgot password",
        textContent: `OTP is {{params.otp}}`,
        params: {
          otp: o,
        },
      });
      const d = await Forgot.create({
        userEmail: email,
        otp: o,
      });
      return res.status(200).json({ data: d });
    } else {
      const client = Sib.ApiClient.instance;
      const apiKey = client.authentications["api-key"];
      apiKey.apiKey = process.env.SENDBLUE;
      const tranEmailApi = new Sib.TransactionalEmailsApi();
      const sender = {
        email: "sendmailm6@gmail.com",
        name: "Abhishek",
      };
      const receivers = [{ email: email }];
      tranEmailApi.sendTransacEmail({
        sender,
        to: receivers,
        subject: "Forgot password",
        textContent: `OTP is {{params.otp}}`,
        params: {
          otp: o,
        },
      });
      const d = await item.update({
        otp: o,
      });
      return res.status(200).json({ data: d });
    }
  } catch (error) {
    res.send(error);
  }
};

const verifyotp = async (req, res) => {
  try {
    const { otp, password } = req.body;
    const otpcon = await Forgot.findOne({
      where: { userEmail: req.user.email },
    });
    if (otp !== otpcon) {
      return res.status(400).json({ message: "Wrong OTP" });
    }
    const salt = 10;
    const tempP = await bcrypt.hash(password, salt);
    const data = await Signup.update({
      password: tempP,
    });
    return res
      .status(200)
      .json({ message: "password changed successfully!", data: data });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { sendotp, verifyotp };
