import { Travel } from "../models/Travel.js";
import { Testimonial } from "../models/Testimonial.js";

const pageStart = async (req, res) => {
  try {
    const [travels, testimonials] = await Promise.all([
      Travel.findAll({ limit: 3 }),
      Testimonial.findAll({ limit: 3 }),
    ]);
    res.render("Start", {
      classHome: "home",
      page: "Start",
      travels,
      testimonials,
    });
  } catch (error) {
    console.log(error);
  }
};

const pageWe = (req, res) => {
  res.render("we", {
    page: "We",
  });
};

const pageTravels = async (req, res) => {
  const travels = await Travel.findAll();
  res.render("travels", {
    page: "Travels",
    travels,
  });
};

const pageDetailsTravel = async (req, res) => {
  const { slug } = req.params;

  try {
    const result = await Travel.findOne({ where: { slug } });

    res.render("travel", {
      page: "Travel Information",
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

const pageTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.findAll();
    res.render("testimonials", {
      page: "Testimonials",
      testimonials,
    });
  } catch (error) {
    console.log(error);
  }
};

export { pageStart, pageWe, pageTravels, pageTestimonials, pageDetailsTravel };
