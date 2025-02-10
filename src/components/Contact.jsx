import React, { useState } from "react";
import { motion } from "motion/react";
import emailjs from "emailjs-com";
import { CircleCheck, Loader2, Send } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSendingEmail, setIsSendingEmail] = useState(false);

  emailjs.init("bNvbEx6zV5XHwtyw_");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("All fields are required!");
      return false;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Invalid email!");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationSuccess = validateForm();

    if (validationSuccess) {
      setIsSendingEmail(true);
      emailjs.send("service_p101psl", "template_0rfs7ac", formData).then(
        (response) => {
          setIsSendingEmail(false);
          toast.success("Message send successfully!");
          console.log(response);
        },
        (error) => {
          setIsSendingEmail(false);
          toast.error("Failed to send message!");
          console.log(error);
        }
      );
    }
  };

  return (
    <section
      className="container px-8 pt-16 pb-[10rem] flex flex-col gap-12 items-center custom-sm:py-12"
      id="contact"
    >
      <div className="flex flex-col gap-1.5 items-center">
        <h3 className="text-3xl text-primary font-bold capitalize">Contact</h3>
        <p className="text-gray-300 capitalize">Get In Touch</p>
      </div>
      <div className="flex flex-col gap-5 items-start p-12 bg-card rounded-3xl w-[28rem] custom-sm:w-full custom-sm:p-6 custom-sm:rounded-xl">
        <div className="flex flex-col gap-1">
          <motion.h2
            className="text-2xl uppercase text-white font-bold"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            LET'S WORK <span className="text-hover">TOGETHER.</span>
          </motion.h2>
          <motion.p
            className="text-sm text-gray-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Please fill out the form to connect with me.
          </motion.p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start gap-3.5 w-full"
        >
          <motion.input
            type="text"
            className="w-full outline-none px-3 py-2 text-color-02 bg-modal-backdrop rounded-md border-solid border-2 border-hover focus:border-white"
            placeholder="Name *"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <motion.input
            type="email"
            className="w-full outline-none px-3 py-2 text-color-02 bg-modal-backdrop rounded-md border-solid border-2 border-hover focus:border-white"
            placeholder="Email *"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <motion.textarea
            type="text"
            className="w-full outline-none px-3 py-2 text-color-02 bg-modal-backdrop rounded-md border-solid border-2 border-hover focus:border-white resize-none"
            placeholder="Your Message *"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            rows="4"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <motion.button
            type="submit"
            className="flex gap-2.5 items-center px-[1.2rem] py-2 text-primary border-solid border-2 border-hover rounded-full transition duration-200 hover:bg-hover hover:text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {isSendingEmail ? (
              <>
                <span className="capitalize text-[0.9rem]">Sending</span>
                <Loader2 className="size-4 animate-spin" />
              </>
            ) : (
              <>
                <span className="capitalize text-[0.9rem]">Send Message</span>
                <Send className="size-4" />
              </>
            )}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
