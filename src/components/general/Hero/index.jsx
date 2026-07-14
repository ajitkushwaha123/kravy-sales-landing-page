import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";
import { HERO_CONTENT } from "@/constants/landing-page";
import PayButton from "@/components/general/Payment/PayButton";
import { Star, CheckCircle, Gift, Rocket } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center pt-24 md:pt-36 pb-16 md:pb-24 overflow-hidden flex flex-col items-center bg-white">
      {/* Background Grid Pattern */}
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "absolute inset-0 h-full w-full stroke-emerald-600/10 fill-emerald-600/5 z-0",
          "[mask-image:linear-gradient(to_bottom,white,transparent_80%)]",
        )}
      />
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Trust Badge */}
      <div className="relative z-10 flex justify-center mb-8 animate-in fade-in slide-in-from-top-6 duration-700">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
            ))}
          </div>
          <span>Trusted by 500+ Indian Restaurants</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[1.1] md:leading-[1.05] text-zinc-900 mb-6">
          Supercharge Your <br className="hidden md:block" />
          <span className="text-emerald-500">Restaurant Sales.</span>
        </h1>

        <p className="text-lg md:text-2xl text-zinc-500 font-medium max-w-2xl mb-10 leading-relaxed">
          The ultimate Kravy Billing Bundle - [2 Years]: Everything you need to manage orders, billing, and online delivery.
        </p>

        {/* The Irresistible Offer Card */}
        <div className="w-full max-w-2xl bg-white rounded-3xl border border-zinc-200 shadow-2xl shadow-emerald-500/10 p-6 md:p-8 mb-10 transform transition-all hover:scale-[1.01] hover:shadow-emerald-500/20 duration-500">
          <div className="flex flex-col items-center mb-6">
             <span className="text-sm font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-3">Limited Time Offer</span>
             <div className="flex items-baseline gap-2">
               <span className="text-6xl md:text-7xl font-black text-zinc-900">₹6000</span>
               <span className="text-xl md:text-2xl font-bold text-zinc-400">/ 2 Years</span>
             </div>
             <p className="text-zinc-500 font-medium mt-2">Just pay ₹500 advance, rest on delivery.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-transparent border border-emerald-100 text-left">
              <Gift className="w-8 h-8 text-emerald-500 shrink-0" />
              <div>
                <p className="font-bold text-zinc-900">Free 2" Printer</p>
                <p className="text-sm text-zinc-500">Worth ₹2000</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-orange-50 to-transparent border border-orange-100 text-left">
              <Rocket className="w-8 h-8 text-orange-500 shrink-0" />
              <div>
                <p className="font-bold text-zinc-900">Free Setup</p>
                <p className="text-sm text-zinc-500">Swiggy & Toing</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 w-full max-w-sm mx-auto">
            <PayButton />
          </div>
        </div>

        {/* Feature Checkmarks */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm md:text-base font-semibold text-zinc-600">
          <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500" /> Web POS Included</span>
          <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500" /> Mobile App Access</span>
          <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500" /> 7-Day Support</span>
        </div>
      </div>

      {/* Product Visualization */}
      <div className="relative w-full max-w-6xl mx-auto mt-16 md:mt-24 animate-in fade-in zoom-in-95 duration-1000 delay-500 fill-mode-both">
        <div className="relative group rounded-[2rem] border border-zinc-200/50 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-2 md:p-4 overflow-hidden">
           {/* Inner Dashboard Image */}
           <div className="relative overflow-hidden rounded-[1.5rem] bg-zinc-50 border border-zinc-100">
              <img
                src={HERO_CONTENT.imageSrc}
                alt={HERO_CONTENT.imageAlt}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
           </div>
           
           {/* Floating Printer Visual */}
           <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-12 w-40 md:w-64 transform transition-transform duration-700 group-hover:-translate-y-4 group-hover:-rotate-3 drop-shadow-2xl">
              <img 
                src="/assets/images/printer-placeholder.webp" 
                alt="Free Thermal Printer"
                className="w-full h-auto object-contain rounded-2xl bg-white p-2 border border-zinc-100 shadow-xl"
              />
              <div className="absolute -top-4 -left-4 bg-[#22c55e] text-white font-bold text-xs md:text-sm px-3 py-1 rounded-full shadow-lg rotate-12">
                FREE!
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
