"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactUsSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type ContactUsSchema = z.infer<typeof ContactUsSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsSchema>({ resolver: zodResolver(ContactUsSchema) });

  const onSubmit = async (value: ContactUsSchema) => {
    console.log(value);
    const formData = new FormData();
    // formData.append("access_key", "71de1af4-31a1-422b-9cfa-6c1a1404a9bd");
    formData.append("name", value.firstName + value.lastName);
    formData.append("email", value.email);
    formData.append("message", value.message);

    // Convert form data to JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div
      id="contact"
      className="bg-[#c8e6e8] 2xl:px-[350px] xl:px-[200px] lg:p-[100px] p-[30px] flex flex-col lg:flex-row justify-between"
    >
      <div className="lg:w-1/2 flex">
        <h1 className="text-white lg:text-[43.3px] text-[25px] mb-10 lg:mb-0 lg:w-[392px] lg:leading-[67px] lg:pl-1 text-center lg:text-start">
          For Any Assistance Required Please Reach Out{" "}
        </h1>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10 justify-center items-center lg:w-[450px] w-full"
        >
          <div className="flex flex-col lg:flex-row gap-10 w-full">
            <div className="flex flex-col w-full ">
              <label className="text-white" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                {...register("firstName")}
                className={`text-white h-[41px] border-b-2 ${
                  errors.firstName ? "border-red-300" : "border-white"
                }  bg-transparent focus:outline-none`}
              />
            </div>
            <div className="flex flex-col ">
              <label className="text-white" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                {...register("lastName")}
                className={`text-white h-[41px] border-b-2 ${
                  errors.lastName ? "border-red-300" : "border-white"
                }  bg-transparent focus:outline-none`}
              />
            </div>{" "}
          </div>
          <div className="flex flex-col w-full  ">
            <label className="text-white" htmlFor="email">
              Email{" "}
            </label>
            <input
              type="email"
              {...register("email")}
              className={`text-white h-[41px] border-b-2 ${
                errors.email ? "border-red-300" : "border-white"
              }  bg-transparent focus:outline-none`}
            />
          </div>
          <div className="flex flex-col w-full ">
            <label className="text-white" htmlFor="message">
              Leave us a message{" "}
            </label>
            <textarea
              {...register("message")}
              className={`text-white h-[98px] border-b-2 ${
                errors.message ? "border-red-300" : "border-white"
              }  bg-transparent focus:outline-none`}
            />
          </div>
          <div className="flex lg:-start lg:items-start justify-center w-full">
            <button className="text-white h-[42px] lg:w-[150px] w-full  border-2 rounded-sm border-white bg-transparent focus:outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
