import ScrollAwake from "@/components/ScrollAwake";
import Link from "next/link";
import { 
  Briefcase,
  Building2,
  ShoppingBag,
  Warehouse,
  Factory,
  Store,
  Users,
  Coffee
} from "lucide-react";

const commercialSalesProducts = [
  { name: "Office Buildings", icon: Building2, href: "/commercial-sales/office-buildings" },
  { name: "Retail Spaces", icon: ShoppingBag, href: "/commercial-sales/retail-spaces" },
  { name: "Warehouses", icon: Warehouse, href: "/commercial-sales/warehouses" },
  { name: "Industrial Parks", icon: Factory, href: "/commercial-sales/industrial-parks" },
  { name: "Co-working Spaces", icon: Users, href: "/commercial-sales/coworking" },
  { name: "Showrooms", icon: Store, href: "/commercial-sales/showrooms" },
  { name: "Restaurants & Cafes", icon: Coffee, href: "/commercial-sales/restaurants-cafes" },
  { name: "Corporate Suites", icon: Briefcase, href: "/commercial-sales/corporate-suites" },
];

export default function CommercialSales() {
  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <h1 className="title text-center">Commercial Sales</h1>
      <div className="divider mx-auto"></div>
      <p className="subtitle text-center mx-auto" style={{ maxWidth: '800px', marginBottom: '2rem' }}>
        Elevate your business with JAC MediaLand's premium commercial real estate portfolio. Explore our curated selection of high-end office buildings, retail spaces, and industrial parks strategically located to drive your company's growth and success.
      </p>
      
      <div className="category-grid">
        {commercialSalesProducts.map((product, index) => {
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
