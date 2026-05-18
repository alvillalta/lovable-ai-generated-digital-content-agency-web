import Layout from "@/components/Layout";

const CookiePolicy = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">Política de Cookies</h1>
          <p className="text-muted-foreground mb-8">
            Esta página explica qué cookies usamos, por qué y cómo puedes gestionarlas.
          </p>

          <div className="space-y-6 text-sm text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Qué son las cookies</h2>
              <p>Las cookies son archivos pequeños que se almacenan en tu navegador para mejorar tu experiencia.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Cookies que usamos</h2>
              <p>Usamos cookies técnicas para que la web funcione, y cookies analíticas para mejorar el sitio.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Cómo se almacena tu elección</h2>
              <p>
                El consentimiento se guarda en <code className="rounded bg-muted px-1">localStorage</code> como <code className="rounded bg-muted px-1">cookieConsentStatus</code>, y también se registra en una cookie llamada <code className="rounded bg-muted px-1">cookie_consent</code>.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Cómo cambiar la decisión</h2>
              <p>Si quieres cambiar tu elección, borra la cookie o elimina el dato de localStorage y recarga la página.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CookiePolicy;
