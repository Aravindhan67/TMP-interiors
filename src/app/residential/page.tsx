import ScrollAwake from "@/components/ScrollAwake";
import Link from "next/link";
import { 
  CookingPot, 
  Armchair, 
  Bed, 
  Flame, 
  BookOpen, 
  Utensils, 
  Bath, 
  Baby, 
  MonitorPlay, 
  Dumbbell, 
  LayoutTemplate, 
  Blinds
} from "lucide-react";

const residentialCategories = [
  { name: "Modular Kitchen", icon: CookingPot, href: "/residential/modular-kitchen" },
  { name: "Living Room", icon: Armchair, href: "/residential/living-room" },
  { name: "Bedroom", icon: Bed, href: "/residential/bedroom" },
  { name: "Pooja Room", icon: Flame, href: "/residential/pooja-room" },
  { name: "Study Room", icon: BookOpen, href: "/residential/study-room" },
  { name: "Dining Room", icon: Utensils, href: "/residential/dining-room" },
  { name: "Restroom", icon: Bath, href: "/residential/restroom" },
  { name: "Kids Room", icon: Baby, href: "/residential/kids-room" },
  { name: "Home Theatre", icon: MonitorPlay, href: "/residential/home-theatre" },
  { name: "Home Gym", icon: Dumbbell, href: "/residential/home-gym" },
  { name: "False Ceiling", icon: LayoutTemplate, href: "/residential/false-ceiling" },
  { name: "Curtains & Wall Papers", icon: Blinds, href: "/residential/curtains-wallpapers" },
];

export default function Residential() {
  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <h1 className="title text-center">Residential Services</h1>
      <div className="divider mx-auto"></div>
      <p className="subtitle text-center mx-auto" style={{ maxWidth: '800px', marginBottom: '2rem' }}>
        Turn your house into a home with our bespoke residential interior design services. Whether you're looking to update a single room or renovate your entire space, we'll work with you to create a design that reflects your personal style and enhances your lifestyle. From cozy living rooms to luxurious bedrooms, our designs are tailored to your individual needs and preferences.
      </p>
      
      <div className="category-grid">
        {residentialCategories.map((category, index) => {
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
