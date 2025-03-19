import emailjs from "emailjs-com";

export const verificationEmail = ({ name, to_email, verification_link }) => {
  emailjs
    .send(
      "service_8gc0ndp",
      "template_cx9upvf",
      {
        name,
        from_name: "Executive Committee",
        to_email,
        verification_link,
      },
      "user_6IFNMA9CyTtMhVkdTlmFY"
    )

    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};
