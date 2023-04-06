import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { GiAppleCore, GiMeditation, GiRemedy } from "react-icons/gi";
import {MdSportsMartialArts} from 'react-icons/md'
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <GiAppleCore className="h-6 w-6" />,
    title: "Pilates",
    description:
      "A low-impact exercise that focuses on building strength, flexibility, and endurance through controlled movements.",
  },
  {
    icon: <GiMeditation className="h-6 w-6" />,
    title: "Meditation ",
    description:
      "Meditation is a mental exercise of mindfulness and relaxation that can be practiced independently of yoga for personal growth.",
  },
  {
    icon: <MdSportsMartialArts className="h-6 w-6" />,
    title: "Tai Chi",
    description:
      "A martial art that emphasizes slow, fluid movements and deep breathing, enhancing balance, coordination, and overall well-being.",
  },
  {
    icon: <GiRemedy className="h-6 w-6" />,
    title: "Ayurveda ",
    description:
      "An ancient Indian system of medicine that emphasizes holistic healing, including diet, lifestyle, and herbal remedies.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST YOGA.</HText>
          <p className="text-md my-5">
            Experience a serene and rejuvenating practice that integrates breath
            and movement, enhancing your mind-body connection and promoting
            inner peace through the timeless art of yoga..
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 text-[17px]">
                Are you tired of the same old boring workout routine? Do you
                crave a physical and mental challenge that will leave you
                feeling energized and centered? Look no further than our Yoga
                Classes! Our classes are designed for all levels, from beginners
                to advanced yogis.
                <br />
                <br />
                Our experienced instructors will guide you through a series of
                postures and breathing exercises that will increase your
                flexibility, strength, and balance. But we don't just stop
                there.
                <br />
                <br />
                Our classes also focus on mindfulness and meditation, helping
                you to find peace and calm in a chaotic world. Plus, our
                community of like-minded individuals will support and motivate
                you every step of the way.
                <br />
                <br />
                So, what are you waiting for? Fill out our subscription form now
                and become a part of our savage yoga tribe!
              </p>
              <p className="mb-5"></p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
