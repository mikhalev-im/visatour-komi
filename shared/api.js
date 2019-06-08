import fetch from "unfetch";

export const sendMail = async (phone, name) => {
  console.log("NEW API REQUEST!");
  console.log(`PHONE: ${phone}, NAME: ${name}`);
  // await fetch(
  //   `https://eu-gb.functions.cloud.ibm.com/api/v1/web/c1one@yandex.ru_dev/visatour-komi/mail.json?phone=${phone}&name=${name}`
  // );
};
