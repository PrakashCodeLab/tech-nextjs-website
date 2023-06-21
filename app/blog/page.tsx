import React from "react";
import Styles from "./blog.module.scss";
import { BlogSec } from "@/components";
import blogImage1 from "public/blog1.jpg";
import blogImage2 from "public/blog2.jpg";
import blogImage3 from "public/blog3.jpg";
import blogImage4 from "public/blog4.jpg";

const Blog = () => {
  return (
    <section className={Styles.blog__section}>
      <BlogSec
        title={"Revolutionizing the Workplace"}
        desc={
          "The Impact of AI-Powered Productivity Software Explore the transformative power of artificial intelligence in productivity software and how it is reshaping the modern workplace, boosting efficiency, and streamlining complex tasks."
        }
        img={blogImage1}
      />
      <BlogSec
        title={"Unlocking the Future"}
        desc={
          "Exploring Blockchain Technology and its ApplicationsDelve into the world of blockchain technology, its potential beyond cryptocurrencies, and discover its real-world applications in industries such as supply chain management, finance, and healthcare."
        }
        img={blogImage2}
      />

      <BlogSec
        title={"The Rise of Cloud Computing"}
        desc={
          "Discover the advantages of cloud computing and how it is revolutionizing the way businesses operate, providing scalable solutions, enhanced data security, and facilitating seamless collaboration in an increasingly digital worldBreaking Barriers: The Promise of Quantum Computing"
        }
        img={blogImage3}
      />

      <BlogSec
        title={"Cybersecurity in the Modern Era"}
        desc={
          "Gain insights into the evolving landscape of cybersecurity, the challenges faced in safeguarding sensitive data, and the cutting-edge technologies and strategies being employed to protect privacy in today's interconnected world."
        }
        img={blogImage4}
      />
    </section>
  );
};

export default Blog;
