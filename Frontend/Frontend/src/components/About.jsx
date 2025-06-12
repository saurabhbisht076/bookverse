import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>

      <div className="about-us-content">
    <ul>
      <li>
        <h2>Introduction</h2>
        <p>Saurabh Bisht and Vivek Bisht, two tech enthusiasts from the beautiful state of Uttarakhand, India. Passionate about leveraging technology to create innovative solutions.</p>
      </li>
      <li>
        <h2>Mission</h2>
        <p>Our mission is to empower businesses and individuals with cutting-edge web solutions built on the MERN stack. We aim to blend creativity with technology to deliver products that exceed expectations.</p>
      </li>
      <li>
        <h2>Expertise</h2>
        <p>Proficient in the MERN stack - MongoDB, Express.js, React.js, and Node.js. Extensive experience in developing robust and scalable web applications. Specialized in crafting custom solutions tailored to our clients' unique requirements.</p>
      </li>
      <li>
        <h2>Commitment to Quality</h2>
        <p>We adhere to industry best practices and follow a rigorous development process to ensure the highest quality standards. Attention to detail and a focus on user experience are at the core of our development philosophy.</p>
      </li>
      <li>
        <h2>Client-Centric Approach</h2>
        <p>We prioritize client satisfaction above all else, striving to exceed expectations at every stage of the project. Our collaborative approach ensures transparent communication and fosters long-term relationships with our clients.</p>
      </li>
      <li>
        <h2>Portfolio</h2>
        <p>Explore our portfolio to see examples of our work across various industries and domains. From dynamic e-commerce platforms to intuitive business management tools, we've successfully delivered a wide range of projects.</p>
      </li>
      <li>
        <h2>Community Engagement</h2>
        <p>Committed to giving back to the community, we actively participate in knowledge sharing and mentorship programs. We believe in the power of education and are dedicated to nurturing the next generation of tech talent.</p>
      </li>
      <li>
        <h2>Get in Touch</h2>
        <p>Interested in working with us or have a project idea in mind? Don't hesitate to reach out! We're always eager to collaborate on exciting new ventures and turn ideas into reality.</p>
      </li>
    </ul>
  </div>
    </div>
  );
}

export default About;
