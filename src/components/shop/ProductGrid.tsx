
import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price?: number;
  comingSoon?: boolean;
}

interface ProductGridProps {
  products: Product[];
  quantities: { [key: number]: number };
  onQuantityChange: (id: number, value: string) => void;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onAddToCart: (product: Product) => void;
  calculatePrice: (quantity: number, product: Product) => number;
  formatPrice: (price: number) => string;
}

const ProductGrid = ({
  products,
  quantities,
  onQuantityChange,
  onIncrement,
  onDecrement,
  onAddToCart,
  calculatePrice,
  formatPrice
}: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          quantity={quantities[product.id] || 0}
          onQuantityChange={onQuantityChange}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onAddToCart={onAddToCart}
          calculatePrice={calculatePrice}
          formatPrice={formatPrice}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
