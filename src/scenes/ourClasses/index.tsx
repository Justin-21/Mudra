import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Hatha Yoga",
    description:
      "A gentle form of yoga that focuses on holding postures for a period of time, often incorporating breath work and meditation. This style is great for beginners and those looking for a more slow-paced, relaxing practice.",
    image: image1,
  },
  {
    name: "Vinyasa Yoga",
    description:
      "A dynamic and flowing form of yoga that synchronizes breath with movement. In a typical vinyasa class, you'll move through a series of postures (asanas) with each inhale and exhale. This style is great for building strength, flexibility, and cardiovascular endurance.",
    image: image2,
  },
  {
    name: "Bikram Yoga",
    description:
      "A style of yoga that is practiced in a heated room (typically around 105 degrees Fahrenheit) with a set sequence of 26 postures and two breathing exercises. The heat helps to warm up the muscles and facilitate deeper stretching",
    image: image3,
  },
  {
    name: "Restorative Yoga",
    description:
      "A very gentle form of yoga that focuses on relaxation and restoring the body. In a typical restorative class, you'll use props (such as blankets and bolsters) to support the body in various postures, which are held for an extended period of time.",
    image: image4,
  },
  {
    name: "Ashtanga Yoga",
    description:
      "A physically demanding form of yoga that follows a set sequence of postures (known as the Primary Series) and is practiced at a fast pace with a specific breath pattern. This style is great for building strength, flexibility, and stamina",
    image: image5,
  },
  {
    name: "Iyengar Yoga",
    description:
      "A style of yoga that focuses on precision and alignment in the postures. In a typical Iyengar class, you'll use props to help you achieve proper alignment and hold the postures for a longer period of time. This style is great for building strength and flexibility, as well as improving posture and body awareness.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5 text-[17px]">
              Welcome to our yoga classes! Our classes are designed to help you
              achieve your physical, mental, and spiritual goals through the
              practice of ancient movements and techniques.
              <br />
              <br />
              Our classes focus on breath work, meditation, and a range of
              physical postures that will help you to reduce stress, increase
              flexibility, and build strength.
              <br />
              <br />
              Our classes are suitable for all levels, from beginners to
              experienced practitioners. Our experienced instructors will guide
              you through each class with clear, concise instructions and
              modifications to suit your individual needs.
              <br />
              <br />
              Our classes are held in a welcoming and supportive environment,
              where you can relax and connect with like-minded individuals who
              share your passion for health and wellness.
              <br />
              <br />
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
