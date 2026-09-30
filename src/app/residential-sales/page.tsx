import ScrollAwake from "@/components/ScrollAwake";
import Link from "next/link";
import { 
  Key,
  Home,
  Building,
  Castle,
  MapPin,
  Trees,
  Warehouse,
  Palmtree
} from "lucide-react";

const residentialSalesProducts = [
  { name: "Luxury Villas", icon: Castle, href: "/residential-sales/villas" },
  { name: "Modern Apartments", icon: Building, href: "/residential-sales/apartments" },
  { name: "Townhouses", icon: Home, href: "/residential-sales/townhouses" },
  { name: "Penthouses", icon: Key, href: "/residential-sales/penthouses" },
  { name: "Plots & Lands", icon: MapPin, href: "/residential-sales/plots" },
  { name: "Farmhouses", icon: Trees, href: "/residential-sales/farmhouses" },
  { name: "Studio Apartments", icon: Warehouse, href: "/residential-sales/studios" },
  { name: "Beachfront Properties", icon: Palmtree, href: "/residential-sales/beachfront" },
];

export default function ResidentialSales() {
  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <h1 className="title text-center">Residential Sales</h1>
      <div className="divider mx-auto"></div>
      <p className="subtitle text-center mx-auto" style={{ maxWidth: '800px', marginBottom: '2rem' }}>
        Discover your dream home with JAC MediaLand's exclusive residential sales portfolio. From ultra-luxury villas to sleek modern apartments, browse our curated collection of premium properties designed to offer the ultimate living experience.
      </p>
      
      <div className="category-grid">
        {residentialSalesProducts.map((product, index) => {
          const IconComponent = product.icon;
          return (
            <ScrollAwake key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Link href={product.href} className="category-card">
                <IconComponent className="category-icon" size={64} strokeWidth={1.5} />
                <div className="category-btn">{product.name}</div>
              </Link>
            </ScrollAwake>
          );
        })}
      </div>
    </div>
  );
}
