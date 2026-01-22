const highlights = [
  { icon: 'bi-gem', title: 'Premium Quality', text: 'Superior results using high-quality materials and advanced techniques.' },
  { icon: 'bi-shield-check', title: 'Durable Finishes', text: 'Long-lasting quality and transparent pricing for every project.' },
  { icon: 'bi-alarm', title: 'Timely Completion', text: 'Punctual project delivery with skilled construction professionals.' },
  { icon: 'bi-house-heart', title: 'Modern Designs', text: 'Stunning modern designs tailored for homes, villas, and flats.' },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-5 why-us-section themed-section">
      <div className="container">
        <div className="text-center mb-5">

          <h2 className="fw-bold">We Build With Integrity</h2>
        </div>
        <div className="row g-4">
          {highlights.map((item) => (
            <div className="col-md-6 col-lg-3" key={item.title}>
              <div className="p-4 rounded-4 shadow-sm h-100 text-center why-card themed-card">
                <div className="icon-circle mx-auto mb-3">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-muted mb-0 themed-card-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


