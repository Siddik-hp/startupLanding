import IconCard from "../../components/IconCard";
import SmallTitle from "../../components/SmallTitle";
import LongTitle from "../../components/LongTitle";

const Product = () => {
  return (
    <section className="mt-20" id="feature_product">
      <div className="my-5">
        <SmallTitle text="whats the function" />
        <LongTitle text="Meet the fuature of product" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4  mx-auto container mb-5 px-4 lg:px-0">
        <IconCard
          Icon="/icon/energy.png"
          text="Fast Performance"
          desc="Get your blood test devlivary at home contact a smaple form the you blood"
        />
        <IconCard
          Icon="/icon/portfolio.png"
          text="Partnership deal"
          desc="Get your blood test devlivary at home contact a smaple form the you blood"
        />
        <IconCard
          Icon="/icon/crown.png"
          text="Subscriptions"
          desc="Get your blood test devlivary at home contact a smaple form the you blood"
        />
        <IconCard
          Icon="/icon/chat.png"
          text="Customer support"
          desc="Get your blood test devlivary at home contact a smaple form the you blood"
        />
      </div>
    </section>
  );
};

export default Product;
