import ScrollAwake from "@/components/ScrollAwake";
import Link from "next/link";
import { 
  Building2, 
  Store, 
  Coffee, 
  Hotel, 
  Briefcase, 
  Monitor, 
  Users, 
  Sofa
} from "lucide-react";

const commercialCategories = [
  { name: "Office Workspaces", icon: Building2, href: "/commercial/office" },
  { name: "Retail Stores", icon: Store, href: "/commercial/retail" },
  { name: "Cafes & Restaurants", icon: Coffee, href: "/commercial/cafe-restaurant" },
  { name: "Hotels & Resorts", icon: Hotel, href: "/commercial/hotel" },
  { name: "Corporate Suites", icon: Briefcase, href: "/commercial/corporate" },
  { name: "IT Parks", icon: Monitor, href: "/commercial/it-parks" },
  { name: "Co-working Spaces", icon: Users, href: "/commercial/coworking" },
  { name: "Lounges", icon: Sofa, href: "/commercial/lounges" },
];

export default function Commercial() {
  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <h1 className="title text-center">Commercial Services</h1>
      <div className="divider mx-auto"></div>
      <p className="subtitle text-center mx-auto" style={{ maxWidth: '800px', marginBottom: '2rem' }}>
        Elevate your business environment with our professional commercial interior design solutions. We create spaces that boost productivity and impress clients.
      </p>
      
      <div className="category-grid">
        {commercialCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <ScrollAwake key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Link href={category.href} className="category-card">
                <IconComponent className="category-icon" size={64} strokeWidth={1.5} />
                <div className="category-btn">{category.name}</div>
              </Link>
            </ScrollAwake>
          );
        })}
      </div>
    </div>
  );
}
