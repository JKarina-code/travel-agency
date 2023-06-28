import { Testimonial } from "../models/Testimonial.js";

const saveTestimonials = async (req, res) => {
  const { name, email, message } = req.body;

  const errors = [];

  if (!name) {
    errors.push({ message: "Add your name" });
  }
  if (!email) {
    errors.push({ message: "Your email is required" });
  }
  if (!message) {
    errors.push({ message: "The testimonials should not be empty" });
  }

  if (errors.length > 0) {
    const testimonials = await Testimonial.findAll();
    res.render("testimonials", {
      page: "Testimonials",
      errors,
      name,
      email,
      message,
      testimonials,
    });
    console.log(testimonials);
  } else {
    try {
      await Testimonial.create({
        name,
        email,
        message,
      });
      res.redirect("/testimonials");
    } catch (error) {
      console.log(error);
    }
  }
};
export { saveTestimonials };
