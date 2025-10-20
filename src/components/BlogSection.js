import React from "react";

function BlogSection() {
  const blogs = [
    { title: "Small Group Tour: Summer Places", desc: "Lorem ipsum dolor sit amet", img: "https://via.placeholder.com/200x150" },
    { title: "Small Group Tour: Summer Places", desc: "Lorem ipsum dolor sit amet", img: "https://via.placeholder.com/200x150" },
  ];

  return (
    <section style={{ padding: "50px", textAlign: "center" }}>
      <h2>Latest Blog Posts</h2>
      <p>Stay updated with travel tips, hidden gems, and stories that inspire.</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "30px" }}>
        {blogs.map((blog, i) => (
          <div key={i} style={{ width: "200px" }}>
            <img src={blog.img} alt={blog.title} style={{ width: "100%", borderRadius: "10px" }} />
            <h4>{blog.title}</h4>
            <p>{blog.desc}</p>
            <a href="#">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
