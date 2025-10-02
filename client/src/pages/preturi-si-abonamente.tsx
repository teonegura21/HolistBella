import { SEO } from "@/components/ui/seo";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function PreturiSiAbonamente() {
  const pricingData = [
    {
      service: "Terapie Bowen",
      individual: "150 RON",
      package5: "700 RON (140 RON/sesiune)",
      package10: "1,300 RON (130 RON/sesiune)"
    },
    {
      service: "Biorezonanță",
      individual: "200 RON",
      package5: "950 RON (190 RON/sesiune)",
      package10: "1,700 RON (170 RON/sesiune)"
    },
    {
      service: "Terapie Healy",
      individual: "180 RON",
      package5: "850 RON (170 RON/sesiune)",
      package10: "1,500 RON (150 RON/sesiune)"
    },
    {
      service: "Apă Kangen",
      individual: "Gratuită (consultație)",
      package5: "N/A",
      package10: "N/A"
    },
    {
      service: "Terapie Andullation",
      individual: "120 RON",
      package5: "550 RON (110 RON/sesiune)",
      package10: "1,000 RON (100 RON/sesiune)"
    },
    {
      service: "Nutriție Celulară",
      individual: "100 RON (consultație)",
      package5: "450 RON (90 RON/sesiune)",
      package10: "800 RON (80 RON/sesiune)"
    }
  ];

  return (
    <>
      <SEO 
        title="Prețuri Terapii Alternative Iași – Bowen, Biorezonanță, Andullation"
        description="Consultă lista de prețuri transparente pentru ședințe individuale și pachete de abonament la Holist Bella Iași. Investește în sănătatea ta."
      />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex mb-4 text-sm">
            <Link href="/" className="mr-2">Acasă</Link>
            <span className="mr-2">›</span>
            <span>Prețuri și Abonamente</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Prețuri și Abonamente
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tarife transparente pentru toate serviciile noastre. Pachetele oferă reduceri semnificative pentru angajamente pe termen lung.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Serviciu</TableHead>
                <TableHead>Ședință Individuală</TableHead>
                <TableHead>Pachet 5 Ședințe</TableHead>
                <TableHead>Pachet 10 Ședințe</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.service}</TableCell>
                  <TableCell>{item.individual}</TableCell>
                  <TableCell>{item.package5}</TableCell>
                  <TableCell>{item.package10}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-4">Note: Prețurile includ TVA. Pachetele sunt valabile 6 luni de la achiziție.</p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/programari">
                Programează o consultație
              </Link>
            </Button>

          </div>
        </div>
      </div>
    </>
  );
}