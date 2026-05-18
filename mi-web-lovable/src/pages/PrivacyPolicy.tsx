import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">Política de Privacidad</h1>
          <p className="text-muted-foreground mb-8">
            En esta página describimos cómo recogemos, tratamos y protegemos tus datos personales.
          </p>

          <div className="space-y-6 text-sm text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">I. Política de privacidad y protección de datos</h2>
              <p>Respetando lo establecido en la legislación vigente, 134 Comunicación (en adelante, también Sitio Web) se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.</p>
              <h3 className="text-lg font-semibold text-foreground mb-2">Leyes que incorpora esta política de privacidad</h3>
              <p>Esta política de privacidad está adaptada a la normativa española y europea vigente en materia de protección de datos personales en internet. En concreto, la misma respeta las siguientes normas:</p>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD).</li>
                <li>La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD).</li>
                <li>El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (RDLOPD).</li>
                <li>La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">II. Finalidad del tratamiento de datos</h2>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Finalidad</h2>
              <p>
                Explica para qué se usan los datos: contacto comercial, envío de newsletters, análisis de visitas, etc.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Base legal y conservación</h2>
              <p>
                Indica la base legal del tratamiento y el tiempo durante el que conservas los datos.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Derechos</h2>
              <p>
                Describe los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
