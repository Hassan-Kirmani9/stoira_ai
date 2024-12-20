import { Star } from 'lucide-react'



export function TestimonialCard({ name, role, content, rating }) {
  return (
    <div className="bg-blue-50/80 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-gray-600 mb-4">{role}</p>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    </div>
  )
}

