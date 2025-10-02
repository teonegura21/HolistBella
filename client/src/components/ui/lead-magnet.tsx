import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already closed the popup
    const hasClosed = localStorage.getItem('lead-magnet-closed');
    if (!hasClosed) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('lead-magnet-closed', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert("Ghidul PDF a fost trimis pe email!");
        handleClose(); // Close popup after successful submission
      } else {
        alert("Eroare la trimitere. Încearcă din nou.");
      }
    } catch (error) {
      alert("Eroare la trimitere. Încearcă din nou.");
    }
    setLoading(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-32 left-1/2 transform -translate-x-1/2 z-50 bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Închide popup"
      >
        <X className="w-5 h-5" />
      </button>
      <h3 className="text-lg font-bold mb-4">Descarcă Ghidul Gratuit PDF</h3>
      <p className="text-sm text-gray-600 mb-4">5 Tehnici simple de relaxare și management al durerii pe care le poți face acasă</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Introdu emailul tău"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Se trimite..." : "Descarcă Ghidul"}
        </Button>
      </form>
    </div>
  );
}