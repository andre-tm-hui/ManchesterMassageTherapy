const URL = "https://manchestermassagetherapy.co.uk";
 
export default async function sitemap() { 
  const routes = ["", "/services", "/contact", "/careers", "/faq"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [...routes];
}