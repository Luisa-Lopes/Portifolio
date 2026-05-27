const Contact = () => {
  return (
    <section className="section contact-section" id="contato">
      <div>
        <p className="eyebrow">Contato</p>
        <h2>
          Vamos conversar sobre projetos, estágio, tecnologia ou colaboração.
        </h2>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/ana-luisa-lopes/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Luisa-Lopes"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:aninhaslopess@gmail.com">aninhaslopess@gmail.com</a>
        </div>
      </div>
      <form className="contact-form">
        <label>
          Nome
          <input type="text" name="name" placeholder="Seu nome" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="seu@email.com" />
        </label>
        <label>
          Mensagem
          <textarea
            name="message"
            rows={5}
            placeholder="Escreva sua mensagem"
          />
        </label>
        <button type="submit">Enviar mensagem</button>
      </form>
    </section>
  );
};

export default Contact;
