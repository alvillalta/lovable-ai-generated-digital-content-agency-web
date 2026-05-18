import Layout from "@/components/Layout";

const LegalNotice = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">Aviso Legal</h1>
          <p className="text-muted-foreground mb-8">
            En esta página detallas la información legal obligatoria de tu sitio web.
          </p>

          <div className="space-y-6 text-sm text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Identidad del titular</h2>
              <p>Nombre de la empresa, NIF/CIF, domicilio, correo electrónico y teléfono de contacto.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Condiciones de uso</h2>
              <p>Explica cómo puede utilizarse el sitio web, responsabilidades y derechos de propiedad intelectual.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Protección de datos</h2>
              <p>Enlaza a la política de privacidad y explica el tratamiento de datos en el sitio.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LegalNotice;
