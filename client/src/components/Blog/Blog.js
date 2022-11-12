import React from "react";
import Navbar from "../Navbar/Navbar";
import Card from "./Card";
import anxiety from "../../assets/anxiety.jpg";
import mentalhealth from "../../assets/mental-health.jpeg";

function Blog() {
  return (
    <>
      <Navbar />
      <div className="instances">
        <Card
          img={anxiety}
          title="What Anxiety Feels Like & Why It Happens"
          dataTime="Feb. 14, 2022 - Katie McCallum"
          description="The various situations and events happening in your life greatly affect your overall mood. So when something is causing you to feel stressed or worried, it can impact your entire life — from personal to interpersonal to professional, says Dr. Ali Sawal, primary care practitioner at Houston Methodist.Lumbinī is a Buddhist pilgrimage site in the Rupandehi District of Lumbini Province in Nepal. It is the place where, according to Buddhist tradition, Queen Mahamayadevi gave birth......."
        />
        <Card
          img={mentalhealth}
          title="What Is Mental Health?"
          dataTime="Feb. 14, 2022 - Katie McCallum"
          description="The various situations and events happening in your life greatly affect your overall mood. So when something is causing you to feel stressed or worried, it can impact your entire life — from personal to interpersonal to professional, says Dr. Ali Sawal, primary care practitioner at Houston Methodist.Lumbinī is a Buddhist pilgrimage site in the Rupandehi District of Lumbini Province in Nepal. It is the place where, according to Buddhist tradition, Queen Mahamayadevi gave birth......."
        />
      </div>
    </>
  );
}

export default Blog;
