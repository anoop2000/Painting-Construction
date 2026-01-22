const services = [
  {
    title: 'Professional Painting',
    description: 'Specializing in interior and exterior painting, texture painting, and wall putty for a spotless, premium finish.',
    image: '/images/service-house-painting.jpeg',
  },
  {
    title: 'Construction & Renovation',
    description: 'Expert residential and commercial construction, new house builds, villa renovations, and modern office designs.',
    image: '/images/service-interior-exterior.jpeg',
  },
  {
    title: 'Waterproofing & Finishing',
    description: 'Durable waterproofing solutions and complete build finishing works to protect and enhance your property.',
    image: '/images/service-waterproofing-renovation (1).jpg',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-5 themed-section">
      <div className="container">
        <div className="text-center mb-5">

          <h2 className="fw-bold">Professional Services</h2>
          <p className="text-muted">Modern craftsmanship powered by detail-oriented experts.</p>
        </div>
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-4" key={service.title}>
              <div className="card service-card h-100 border-0 themed-card">
                <div className="service-image-wrapper">
                  <img
                    src={service.image}
                    className="card-img-top"
                    alt={service.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <p className="card-text text-muted themed-card-muted">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


