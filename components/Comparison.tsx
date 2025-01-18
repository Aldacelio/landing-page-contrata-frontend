import { Check, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

const features = [
  'Verified Professionals',
  'Secure Payments',
  'Real-Time Chat',
  'Geolocation',
  'Loyalty Rewards',
]

export default function Comparison() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Contrata+ vs. GetNinjas</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Features</th>
                <th className="py-3 px-6 text-center">Contrata+</th>
                <th className="py-3 px-6 text-center">GetNinjas</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-4 px-6">{feature}</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="inline-block w-6 h-6 text-green-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    {feature === 'Geolocation' ? (
                      <Check className="inline-block w-6 h-6 text-green-500" />
                    ) : (
                      <X className="inline-block w-6 h-6 text-red-500" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-center">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Ready for a better experience? Join Contrata+ today!
          </Button>
        </div>
      </div>
    </section>
  )
}

