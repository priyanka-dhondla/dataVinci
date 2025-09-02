import ProductHero from "./ProductHero";
import ProductDetails from "./ProductDetails";
import ProductGallery from "./ProductGallery";

const ProductPage = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ProductHero />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-8 lg:py-16">
        <ProductGallery />
        <ProductDetails />
      </div>
    </main>
  );
};

export default ProductPage;
