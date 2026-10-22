import Link from "next/link";

interface Props {
  categories: string[];
}

export default function CategorySection({ categories }: Props) {
  return (
    <section className="px-8 mt-16">

      <h2 className="text-3xl font-bold mb-8">
        Explore AI Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {categories.map((category) => (

          <Link
            key={category}
            href={`/categories/${category
              .toLowerCase()
              .replaceAll(" ", "-")}`}
          >

            <div className="border rounded-2xl p-6 hover:shadow-xl transition">

              <h3 className="text-xl font-bold">
                {category}
              </h3>

              <p className="mt-3 text-gray-600">
                Explore {category} tools →
              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}

