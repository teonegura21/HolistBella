import { Heart, UserCheck, Leaf } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Heart,
      title: "Abordare Holistică",
      description: "Tratăm omul ca întreg - trup, minte și suflet, nu doar simptomele fizice.",
      color: "text-primary"
    },
    {
      icon: UserCheck,
      title: "Experiență Dovedită",
      description: "Ani de experiență în medicina alternativă și terapii naturale de vindecare.",
      color: "text-secondary"
    },
    {
      icon: Leaf,
      title: "Metode Naturale",
      description: "Folosim doar tehnici și tratamente naturale, non-invazive pentru sănătatea ta.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 animate-slide-up">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                feature.color === "text-primary" ? "bg-primary/10" :
                feature.color === "text-secondary" ? "bg-secondary/10" : "bg-accent/10"
              }`}>
                <feature.icon className={`text-2xl ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
