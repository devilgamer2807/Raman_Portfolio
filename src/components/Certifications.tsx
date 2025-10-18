import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Code2, TrendingUp } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      type: 'tech',
      title: "Oracle Certified – SQL Foundations",
      issuer: "Oracle",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=YOUR_ORACLE_CERT_ID"
    },
    {
      type: 'tech',
      title: "SQL (Basic & Intermediate)",
      issuer: "Certified",
      link: "https://www.hackerrank.com/certificates/YOUR_CERT_ID"
    },
    {
      type: 'tech',
      title: "NPTEL Certification",
      issuer: "NPTEL",
      link: "https://nptel.ac.in/noc/YOUR_CERT_ID"
    },
    {
      type: 'tech',
      title: "Python Course",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/YOUR_CERT_ID"
    },
    {
      type: 'marketing',
      title: "Fundamentals of Digital Marketing",
      issuer: "Google Digital Garage",
      link: "https://learndigital.withgoogle.com/digitalgarage/validate-certificate-code"
    },
    {
      type: 'marketing',
      title: "Google Analytics Certification",
      issuer: "Google",
      link: "https://skillshop.credential.net/"
    },
    {
      type: 'marketing',
      title: "Social Media Marketing",
      issuer: "HubSpot",
      link: "https://academy.hubspot.com/certificates/YOUR_CERT_ID"
    },
    {
      type: 'marketing',
      title: "Digital Marketing Associate",
      issuer: "Meta",
      link: "https://www.facebookblueprint.com/student/catalog"
    },
    {
      type: 'marketing',
      title: "SEO Crash Course",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/YOUR_CERT_ID"
    },
  ];

  const techCerts = certifications.filter(c => c.type === 'tech');
  const marketingCerts = certifications.filter(c => c.type === 'marketing');

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional certifications and credentials
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Technical Certifications */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full gradient-tech flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Technical</h3>
            </div>
            <div className="space-y-4">
              {techCerts.map((cert, index) => (
                <a 
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card 
                    className="p-6 hover:shadow-lg transition-smooth hover:scale-[1.02] border-l-4 border-l-primary cursor-pointer"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{cert.title}</h4>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {cert.issuer}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Marketing Certifications */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full gradient-marketing flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">Marketing</h3>
            </div>
            <div className="space-y-4">
              {marketingCerts.map((cert, index) => (
                <a 
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card 
                    className="p-6 hover:shadow-lg transition-smooth hover:scale-[1.02] border-l-4 border-l-secondary cursor-pointer"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{cert.title}</h4>
                        <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                          {cert.issuer}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
