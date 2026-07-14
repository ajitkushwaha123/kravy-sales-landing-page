import { Star } from "lucide-react"

export const StarRating = ({ rating = 5 }) => {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
                <Star 
                    key={i} 
                    className={`w-4 h-4 ${i <= rating ? "fill-amber-400 text-amber-400" : "text-zinc-200"}`} 
                />
            ))}
        </div>
    )
}
