const Contact = () => {
    return(
        <div>
  <h1>Contact Us</h1>
  <p>We’d love to hear from you. Please fill out the form below.</p>

  <form>
    <div>
      <label>Full Name</label>
      <input type="text" placeholder="Enter your name" />
    </div>

    <div>
      <label>Email Address</label>
      <input type="email" placeholder="Enter your email" />
    </div>

    <div>
      <label>Message</label>
      <textarea rows="4" placeholder="Write your message here..."></textarea>
    </div>

    <button type="submit">Send Message</button>
  </form>
</div>

    )
}

export default Contact;