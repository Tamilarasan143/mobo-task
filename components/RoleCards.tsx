'use client'

const roles = [
  {
    title: "Ma Si-Hau's Son",
    price: '£360',
    features: [
      'Lorem ipsum dolor sit amet',
      'Consectetur adipiscing elit',
      'Ut enim ad minim veniam',
      'Duis aute irure dolor',
    ],
  },
  {
    title: 'GU er xing',
     price: '£360',
    features: [
      'Sed do eiusmod tempor',
      'Incididunt ut labore et dolore',
      'Magna aliqua',
      'Ut enim ad minim veniam',
    ],
  },
  {
    title: 'The Hornet and the Firefly',
      price: '£360',
    features: [
      'Quis nostrud exercitation ullamco',
      'Laboris nisi ut aliquip',
      'Ex ea commodo consequat',
      'Duis aute irure dolor',
    ],
  },
  {
    title: 'Alias the Scarf',
     price: '£360',
    features: [
      'Nostrud exercitation ullamco laboris',
      'Ut aliquip ex ea commodo consequat',
      'Dolore magna aliqua',
      'Sed do eiusmod tempor',
    ],
  },
  {
    title: 'The Green Hornet',
     price: '£360',
    features: [
      'Magna aliqua',
      'Quis nostrud exercitation',
      'Dolore eu fugiat nulla pariatur',
      'Excepteur sint occaecat cupidatat',
    ],
  },
  {
    title: 'Wei lou chun xiao',
     price: '£360',
    features: [
      'Lorem ipsum dolor sit amet',
      'Incididunt ut labore et dolore',
      'Quis nostrud exercitation ullamco',
      'Excepteur sint occaecat cupidatat',
    ],
  },
]

export default function RoleCards() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Explore Our Roles</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, idx) => {
            const isOdd = idx % 2 === 0
            return (
              <div
                key={idx}
                className={`rounded-2xl p-4 text-left shadow  transition-all hover:shadow-md ${
                  isOdd
                    ? 'bg-[#1c2552] text-white'
                    : 'bg-white text-[#1c2552] border border-gray-200'
                }`}
              >
                <h3 className="text-xl text-center font-semibold mb-2">{role.title}</h3>
                <p className={`font-bold text-lg  text-center mb-4 ${isOdd ? 'text-white' : 'text-[#1c2552]'}`}>
                 From {role.price} *
                </p>

                <ul className={`list-disc pl-5 text-sm space-y-1 ${isOdd ? 'text-white/90' : 'text-gray-700'}`}>
                  {role.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="w-full flex items-center justify-center">

                <button
                  className={`mt-6 py-2 px-4 rounded-full font-medium transition ${
                    isOdd
                      ? 'bg-white text-[#1c2552] hover:bg-gray-100'
                      : 'bg-[#1c2552] text-white hover:bg-[#162043]'
                  }`}
                >
                  Find Out More
                </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
