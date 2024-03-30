import { products } from "../constants";
import PopularProduct from "../components/PopularProduct";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col gap-6 ">
        <h1 className="text-4xl font-palanquin font-bold">
          Our <span className=" text-coral-red">Popular</span> Products
        </h1>
        <p className="lg:max-w-lg font-montserrat text-slate-gray">
          Versatile and stylish, casual sneakers are designed for everyday wear,
          providing comfort and fashion-forward aesthetics for various
          occasions, from leisurely strolls to casual outings, with a wide range
          of designs to suit personal preferences
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((prodcut, i) => (
          <PopularProduct key={i} prodcut={prodcut} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
