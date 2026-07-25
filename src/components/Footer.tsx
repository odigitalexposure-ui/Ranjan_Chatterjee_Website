import { Link } from "@tanstack/react-router";
// import logo from "@/assets/rc-logo.png.asset.json";
import RC_logo from "@/assets/RC_logo.png"

export function Footer() {
  return (
    <footer className="mt-24 border-t border-gold/20 bg-navy-deep/60">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={RC_logo} alt="RC" className="h-14 w-14 rounded-full ring-1 ring-gold/40" />
            <div>
              <div className="font-display text-2xl gold-text">RC All-In-One-Nexus</div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Valuation • Consultancy • Engineering</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Government registered valuers delivering trusted, precise, multidisciplinary
            valuation and consultancy services across India for over two decades.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
          <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>
              <a href="tel: +91 8240384694"  className="hover:text-gold transition-colors duration-300">
                📞 +91 8240384694
              </a>
            </li>
            <li>
               <a
                href="mailto:ranjanchatterjee1965@gmail.com"
                className="hover:text-gold transition-colors duration-300 break-all">
                ✉ ranjanchatterjee1965@gmail.com</a>
              </li>
            <li>📍 Jadavpur, Kolkata — 700 075</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/10 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} RC All-In-One-Nexus. All rights reserved.
      </div>
    </footer>
  );
}
