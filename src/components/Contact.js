import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2 className="company-name">Flexaboden GmbH</h2>
        <p className="description">
          Wir entwickeln und vertreiben Unterflurverkabelungssysteme. Unsere Produkte sind FlexaKanal, Hohlraumboden, Einbaueinheiten und deren Zubehör. Sie sind kompatibel mit allen handelsüblichen Fabrikaten. Wir beraten und beliefern Sie direkt.
        </p>

        <div className="contact-details">
          <p>
            <strong>Telefon:</strong> +49 (0) 6541 866 9054
          </p>
          <p>
  E-Mail: <a href="mailto:info@flexaboden.de">info@flexaboden.de</a>
</p>
        </div>

        <div className="legal-info">
          <h3>Impressum</h3>
          <p>
            FlexaBoden GmbH <br />
            Im Kreuzgarten 6 <br />
            56843 Burg (Mosel)
          </p>
          <p>
            <strong>Geschäftsführer:</strong> Ba. Sc. Johanna Engelhardt, Dipl. Ing. Andreas Neyen <br />
            Amtsgericht Wittlich, HRB 46656 <br />
            Ust.Id. Nr. DE 244823042
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;