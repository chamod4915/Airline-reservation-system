const AboutUs = () => {
  return (
    <div className="text-color ms-5 me-5 mr-5 mt-3" style={styles.container}>
      <b><h3 style={styles.heading}>About Us</h3></b>
      <p style={styles.paragraph}>
        Welcome to JetSync Airline Reservation System, your premier destination for hassle-free travel booking. Since 2018, we've been committed to simplifying the travel experience for our customers, offering a seamless platform for booking flights, hotels, car rentals, and vacation packages.
      </p>

      <b><h3 style={styles.heading}>Our Mission</h3></b>
      <p style={styles.paragraph}>
        At JetSync Airline Reservation System, our mission is to provide convenient, reliable, and affordable travel solutions while delivering exceptional customer service. We aim to exceed the expectations of our customers by offering innovative technology, personalized assistance, and a commitment to sustainability.
      </p>

      <b><h3 style={styles.heading}>Our Story</h3></b>
      <p style={styles.paragraph}>
        Established in 2018, JetSync Airline Reservation System has quickly become a trusted name in the travel industry. Over the years, we've grown from a small startup to a global leader, earning recognition for our dedication to excellence and customer satisfaction.
      </p>

      <b><h3 style={styles.heading}>Services</h3></b>
      <p style={styles.paragraph}>
        Discover the convenience of booking all your travel needs in one place with JetSync Airline Reservation System. Whether you're planning a business trip or a dream vacation, our platform offers a comprehensive range of services, including flight reservations, hotel bookings, car rentals, and curated vacation packages.
      </p>

      <b><h3 style={styles.heading}>Technology And Innovation</h3></b>
      <p style={styles.paragraph}>
        Powered by cutting-edge technology and driven by a passion for innovation, JetSync Airline Reservation System is constantly evolving to meet the needs of modern travelers. Our intuitive platform, mobile apps, and AI-driven solutions make booking and managing your travel plans easier than ever before.
      </p>

      <b><h3 style={styles.heading}>Passenger Commitment</h3></b>
      <p style={styles.paragraph}>
        At JetSync Airline Reservation System, our customers are our top priority. We're committed to providing exceptional customer service and support at every step of your journey. Our dedicated team is available 24/7 to assist you with any questions or concerns you may have.
      </p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333', // Text color
    margin: '0 5rem',
    marginTop: '3rem',
  },
  heading: {
    color: '#0066cc', // Heading color
    fontSize: '1.5rem',
    marginTop: '1.5rem',
  },
  paragraph: {
    lineHeight: '1.6',
  },
};

export default AboutUs;
