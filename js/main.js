const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");

about.addEventListener("click", () => {
  var typewriter = new Typewriter(aboutContent, {
    loop: true,
    delay: 5,
  });
  const aboutBox = new WinBox({
    title: "About Me",
    // modal: true,
    width: "400px",
    height: "400px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    html: `${typewriter
      .typeString(
        ` <h2>about-me:$<span class="cursor">|</span></h2>
        <p>My name is Muhammad Zubair and I'm a Web Developer</p>
        <p>
          Some of the Technologies that I like working with includes JavaScript, React,
          Node and others 
        </p> `
      )

      .deleteAll()

      .start()}`,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

contact.addEventListener("click", () => {
  var typewriter = new Typewriter(contactContent, {
    loop: true,
    delay: 50,
  });
  const contactBox = new WinBox({
    title: "Contact Me",
    width: "400px",
    height: "400px",
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    html: `${typewriter
      .typeString(
        ` <h2>contact-me:$<span class="cursor">|</span></h2>
    <p>You can contact me at the email and phone number below</p>
     <ul>
       <li>Phone: 555-555-5555</li>
       <li>Email: zubair@gmail.com</li>
     </ul> `
      )

      .deleteAll()

      .start()}`,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
    mount: contactContent,
  });
});
