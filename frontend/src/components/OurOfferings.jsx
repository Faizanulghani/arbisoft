import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const OurOfferings = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [selectedOfferIndex, setSelectedOfferIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const servicesOffers = [
    {
      title: "Development & QA",
      details: (
        <>
          <h2 className="lg:text-[40px] text-[22px] text-[#223554] font-semibold">
            Development & QA
          </h2>
          <p className="lg:text-[18px] text-[16px] ">
            Do you know why some software projects don't meet expectations?
            Well! There are two possible reasons:
            <br />
            <br />
            You might be missing important steps in your development and QA
            processes, leading to unreliable software.
            <br />
            <br />
            Or you're doing things right, but others are doing them better.
            <br />
            <br />
            The question is: how can you make sure your tech services are
            strong, scalable, and trustworthy, and that they give users a smooth
            experience?
            <br />
            <br />
            With over 17 years of experience in development and QA services,
            Arbisoft has been building tech services that meet industry
            standards. The problem is, many teams overlook key details, which
            results in software that doesn't perform well. But don't worry; this
            can be avoided if you have a partner who understands every part of
            software development and quality assurance.
            <br />
            <br />
            In our journey, we've developed many applications and created a
            process that's easy to follow. You just need to work with us and
            follow the steps as we guide you.
            <br />
            <br />
            To keep things clear and make the process smooth, we've divided our
            development and QA services into three main sections.
          </p>
          <h3 className="font-semibold mt-16">
            1 – Ensuring Compatibility and Smooth Integration
          </h3>
          <p className="lg:text-[18px] text-[16px] mt-5">
            In this part, we focus on making sure our services work well across
            different systems and environments. This includes handling
            compatibility across platforms, integrating with various APIs, and
            ensuring smooth communication between different parts of the
            software.
          </p>
          <h3 className="font-semibold mt-16">
            2 – Careful Testing and Validation
          </h3>
          <p className="lg:text-[18px] text-[16px] mt-5">
            This section requires close attention to detail. We design our
            testing processes to find and fix any bugs, performance issues, or
            security problems. For example, we perform thorough tests to ensure
            your application isn't just working but working well.
          </p>
          <h3 className="font-semibold mt-16">
            3 – Providing a Smooth User Experience
          </h3>
          <p className="lg:text-[18px] text-[16px] mt-5">
            This part is all about making the user experience better. We use
            design principles to make your software easy to use. We ask
            important questions like: How can we make the application respond
            faster? Do we need new technologies to improve performance and user
            satisfaction?
          </p>

          <p className="mt-18">
            Now, imagine your software project reaching its full potential. To
            save time and resources, we can work on some of these development
            and QA steps at the same time.
          </p>
        </>
      ),
    },
    {
      title: "Mobility & Apps",
      details: (
        <>
          <h2 className="lg:text-[40px] text-[22px] text-[#223554] font-semibold">
            Mobility & Apps
          </h2>
          <p className="lg:text-[18px] text-[16px] ">
            In today's fast-moving digital world, having solid software isn't
            enough. You also need new apps that engage users and drive business
            growth.
          </p>
          <h3 className="font-semibold mt-6">Expanding into Mobility & Apps</h3>
          <p className="lg:text-[18px] text-[16px] mt-5">
            Many businesses struggle to create mobile and web apps that truly
            connect with users. This can happen because:
            <br />
            <br />
            They might not be using the latest technologies, leading to apps
            that don't perform well.
            <br />
            <br />
            Or their apps don't align with their business goals, so they miss
            chances for growth.
            <br />
            <br />
            So, how can you turn your ideas into apps that are both new and easy
            to use?
            <br />
            <br />
            Building on our strong foundation in development and QA, Arbisoft
            offers services in mobility and apps to help you succeed. We
            integrate this into our overall process to ensure a smooth
            experience.
            <br />
            <br />
            We've divided our mobility and app services into three key areas:
          </p>
          <h3 className="font-semibold mt-6">
            1 – Developing Apps That Perform Best on Each Platform
          </h3>
          <p className="lg:text-[18px] text-[16px] mt-5">
            We create Android and iOS apps optimized for each platform. By
            focusing on the unique features of each, we make sure your app runs
            smoothly and provides a great user experience.
          </p>
          <h3 className="font-semibold mt-6">
            2 – Hybrid App Development for Cross-Platform Solutions
          </h3>
          <p className="lg:text-[18px] text-[16px] mt-5">
            Our hybrid app development combines the strengths of different
            platforms. This allows us to deliver cross-platform solutions with
            performance similar to native apps. It helps you reach more users
            without needing separate apps for each platform.
          </p>
          <h3 className="font-semibold mt-6">
            3 – Web App Development and Progressive Web Apps (PWAs)
          </h3>
          <p className="lg:text-[18px] text-[16px] mt-5">
            We make your applications accessible and responsive across all
            devices. Our web app development and Progressive Web App services
            ensure your apps work well on any device with a web browser. This
            increases your app's availability and keeps users engaged.
          </p>

          <p className="mt-8">
            By integrating these services into our overall approach, we provide
            a complete solution that covers all your software needs.
          </p>
        </>
      ),
    },
    {
      title: "IT Operations",
      details: (
        <>
          <h2 className="lg:text-[40px] text-[22px] text-[#223554] font-semibold">
            IT Operations
          </h2>
          <p className="lg:text-[18px] text-[16px] ">
            Building on our expertise, Arbisoft offers IT Operations services to
            help you achieve operational excellence. We integrate these services
            into our overall process to ensure your technology works seamlessly.
          </p>
          <br />
          <p>We've expanded our IT Operations services into four key areas:</p>
          <h3 className="font-semibold mt-6">
            1 – Streamlining Development and Operations with DevOps
          </h3>
          <p className="lg:text-[18px] text-[16px] mt-5">
            We offer DevOps services that streamline your development and
            operations. This helps increase productivity and reduce deployment
            times. By automating processes and improving teamwork between
            developers and operations staff, we make sure your software moves
            smoothly from development to production.
          </p>
          <h3 className="font-semibold mt-6">
            2 – Enhancing Security with Cybersecurity Services
          </h3>
          <p className="lg:text-[18px] text-[16px] mt-5">
            Our cybersecurity services protect your data and systems from
            threats. We help you keep your business secure by identifying
            vulnerabilities and implementing protective measures. This way, your
            operations aren't disrupted by security issues.
          </p>
          <h3 className="font-semibold mt-6">
            3 – Designing Scalable and Reliable Infrastructure
          </h3>
          <p className="lg:text-[18px] text-[16px] mt-5">
            We design infrastructure and create systems that are scalable and
            reliable, customized to your needs. Whether you're a small business
            or growing fast, we build IT systems that can grow with you. This
            means you won't have to worry about outgrowing your technology.
          </p>
          <h3 className="font-semibold mt-6">
            4 – Providing Ongoing Technical Support
          </h3>
          <p className="lg:text-[18px] text-[16px] mt-5">
            We offer technical support to fix any issues right away. Our team is
            ready to help you keep your IT operations running smoothly, so you
            can focus on your core business.
          </p>

          <p className="mt-8">
            By adding these IT services to our overall approach, we offer a
            complete solution that covers all aspects of your technology needs.
          </p>
        </>
      ),
    },
  ];

  const solutionsOffers = [
    {
      title: "Education Technology",
      details: (
        <>
          <h2 className="lg:text-[40px] text-[22px] text-[#223554] font-semibold">
            Education Technology
          </h2>
          <p className="lg:text-[18px] text-[16px] ">
            Arbisoft is your one-stop shop when it comes to your eLearning
            needs. Our Ed-tech services are designed to improve the learning
            experience and simplify educational operations.
            <br />
            <br />
            We offer <b> managed hosting </b> to ensure your eLearning platform
            is always running smoothly. This means less downtime and a better
            experience for teachers and students.
            <br />
            <br />
            Our <b>Open edX LMS installation and custom solutions </b>provide
            eLearning platforms that meet your specific needs. We customize the
            Learning Management System to suit your institution.
            <br />
            <br />
            We also offer
            <b> instructional design and course creation services </b>to help
            you make engaging content. This includes developing interactive
            lessons and assessments that keep learners interested.
            <br />
            <br />
            Our <b>LMS training and support services</b> ensure easy platform
            use. We provide training and ongoing support to help your staff and
            students use the system effectively.
            <br />
            <br />
            We specialize in <b> data migration</b>, making it easy to move from
            your current LMS to new and advanced eLearning solutions without
            losing important data. We also develop <b> custom LMS platforms </b>{" "}
            that fit the unique needs of your institution. How
          </p>
        </>
      ),
    },
    {
      title: "Data, ML & AI",
      details: (
        <>
          <h2 className="lg:text-[40px] text-[22px] text-[#223554] font-semibold">
            Data, ML & AI
          </h2>
          <div class="textMedium">
            <p>
              As we progress into the future, data is becoming more important
              than ever for business growth. Whoever wields it in the best
              possible way secures the leadership position in the market.
            </p>
            <br />
            <p>
              We offer a wide range of data services to meet varying business
              needs including predictive analysis to forecast future trends and
              outcomes, and computer vision solutions to enable machines to
              interpret visual data.
            </p>
            <br />
            <p>
              Our data &amp; AI solutions are designed to unlock data insights
              and improve decision-making capabilities through artificial
              intelligence.
            </p>
            <br />
            <p>
              Our expertise in machine learning and deep learning helps
              businesses implement intelligent systems that learn and improve
              over time. Our business intelligence solutions, on the other hand,
              help you convert raw data into meaningful insights, which then
              help you make well-informed business decisions.
            </p>
            <br />
            <p>
              Our natural language processing solutions (NLPs) can understand
              and respond to human language, which helps in improving
              communication and interaction.
            </p>
            <br />
            <p>
              We also produce solutions based on Generative AI that create new
              content based on existing data.
            </p>
            <br />
            <p>
              At Arbisoft, we equip our clients with all the tools and
              techniques to harness the power of data through machine learning
              and artificial intelligence, to drive innovation and transform
              their businesses.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "E-Commerce",
      details: (
        <>
          <h2 className="lg:text-[40px] text-[22px] text-[#223554] font-semibold">
            E-Commerce
          </h2>
          <p className="lg:text-[18px] text-[16px] ">
            Our E-commerce tech solutions help you improve your online retail
            experience and drive growth.
            <br />
            <br />
            <strong>eCommerce technology solutions</strong> to boost your online
            presence. Our services include We provide the latest{" "}
            <strong>eCommerce development</strong>, where we build strong and
            scalable online stores tailored to your needs. We focus on creating
            user-friendly interfaces and secure payment systems to build
            customer trust.
            <br />
            <br />
            We also offer <strong>voice commerce solutions</strong>, letting
            your customers shop using voice commands. This adds convenience and
            accessibility to the shopping experience.
            <br />
            <br />
            Our <strong>augmented reality shopping (AR Shopping)</strong> brings
            products to life. Customers can see and experience products in their
            own environment before buying, which increases engagement and
            reduces returns.
            <br />
            <br />
            We develop and implement <strong>AI chatbots</strong> to provide
            instant, personalized customer support. This improves customer
            satisfaction by answering questions quickly.
            <br />
            <br />
            Our <strong>customer segmentation services</strong> help you
            understand your audience better. By analyzing customer behavior, we
            enable you to target different groups more effectively.
            <br />
            <br />
            Our <strong>sentiment analysis solutions</strong> give you insights
            into customer opinions and preferences. This lets you tailor your
            offerings and marketing strategies to meet customer needs.
          </p>
        </>
      ),
    },
  ];

  const offers = activeTab === "services" ? servicesOffers : solutionsOffers;
  return (
    <section className="px-4 md:px-10 py-12">
      <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold text-[#223554] mb-6 text-center leading-tight">
        Our<span className="text-[#0A76DB]"> Offerings</span>
      </h2>
      <p className="text-[#0D0D0D] max-w-[1000px] mx-auto text-[20px] text-center mb-10">
        From the initial stages of development to QA processes to robust IT
        operations to AI solutions, we offer a broad range of tech services and
        solutions customized to your requirements.
      </p>

      <div className="flex items-center justify-center mb-4">
        <button
          onClick={() => {
            setActiveTab("services");
            setSelectedOfferIndex(0);
            setExpandedIndex(null);
          }}
          className={`p-[27.5px] text-[22px] transition-all duration-300 border-b-2 ${
            activeTab === "services"
              ? "border-[#0a76db] text-[#0a76db]"
              : "border-[#d9d9d9]"
          }`}
        >
          Our Services
        </button>
        <button
          onClick={() => {
            setActiveTab("solutions");
            setSelectedOfferIndex(0);
            setExpandedIndex(null);
          }}
          className={`p-[27.5px] text-[22px] transition-all duration-300 border-b-2 ${
            activeTab === "solutions"
              ? "border-[#0a76db] text-[#0a76db]"
              : "border-[#d9d9d9]"
          }`}
        >
          Our Solutions
        </button>
      </div>

      <div className="block md:hidden">
        {offers.map((offer, index) => (
          <div key={index} className="border-b border-[#d9d9d9]">
            <button
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
              className={`w-full flex items-center justify-between text-left text-[20px] py-4 font-medium transition-colors duration-300 ${
                expandedIndex === index ? "text-[#0a76db]" : "text-[#223554]"
              }`}
            >
              {offer.title}
              {expandedIndex === index ? (
                <FaChevronUp size={20} className="text-[#0a76db]" />
              ) : (
                <FaChevronDown size={20} className="text-[#223554]" />
              )}
            </button>
            {expandedIndex === index && (
              <div className="bg-[#fafafb] p-4 animate-fadeIn">
                {offer.details}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="hidden md:flex p-6">
        <div className="flex flex-col md:flex-row items-start w-full">
          <div className="flex flex-col space-y-2 w-[25%] min-w-max border-r border-[#d9d9d9]">
            {offers.map((offer, index) => (
              <button
                key={index}
                onClick={() => setSelectedOfferIndex(index)}
                className={`relative text-left text-[24px] pt-[26px] pr-[48px] pb-[26px] pl-[0] text-[#223554] rounded-md transition-all ${
                  index === selectedOfferIndex
                    ? "after:content-[''] after:absolute after:top-1/2 after:right-0 after:h-1/2 after:w-1 after:bg-[#0a76db] after:rounded-l-sm after:transform after:-translate-y-1/2 text-[#0a76db]"
                    : "hover:text-[#0a76db]"
                }`}
              >
                {offer.title}
              </button>
            ))}
          </div>

          <div className="flex-1 animate-fadeIn bg-[#fafafb] py-[72px] px-[32px] ml-3">
            {offers[selectedOfferIndex].details}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOfferings;
