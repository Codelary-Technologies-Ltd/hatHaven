import React from "react";
import style from "./../sass/pages/aboutUs.module.scss";
import about1Img from "./../assets/png/About1.png";
import about2Img from "./../assets/png/About2.png";
import about3Img from "./../assets/png/About3.png";
const AboutUs = () => {
  return (
    <div className="container">
      <div className={style.aboutUs}>
        <nav>
          <p>Home/ About HatHaven</p>
        </nav>
        <section className={style.aboutUsSection}>
          <img src={about1Img} alt="about-1" />
          <div className={style.aboutUsSectionContent}>
            <h1>ABOUT US</h1>
            <p>
              HAT HAVEN, where we believe that a hat is not just an accessory,
              it’s a statement. We are a team of hat enthusiasts, dedicated to
              providing you with the most stylish and functional hats for any
              occasion. Whether you’re looking for a trendy snapback for a night
              out or a classic fedora for a wedding, we’ve got you covered.
            </p>
          </div>
        </section>
        <section className={style.aboutUsSection}>
          <div className={style.aboutUsSectionContent}>
            <h1>OUR MISSION</h1>
            <p>
              Our mission is to empower our customers with the confidence and
              style they deserve. We believe that a great hat can transform an
              outfit and elevate your entire look. That’s why we are committed
              to sourcing only the highest quality materials and ensuring that
              every hat we sell is crafted with care and attention to detail.
            </p>
          </div>
          <img src={about2Img} alt="about-1" />
        </section>
        <section className={style.aboutUsSection}>
          <img src={about3Img} alt="about-1" />
          <div className={style.aboutUsSectionContent}>
            <h1>OUR COMMUNITY</h1>
            <p>
              We are a community of fashion-forward individuals who share a
              passion for style and self-expression. We believe that fashion
              should be fun and accessible to everyone, regardless of age,
              gender, or background. That’s why we are constantly updating our
              collection with the latest trends and styles, so you can always
              find the perfect hat to match your unique personality.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
