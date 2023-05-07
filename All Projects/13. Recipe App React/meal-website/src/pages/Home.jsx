const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-16 pt-36 text-center">
      <h3 className="text-white text-4xl sm:text-5xl md:text-7xl font-light block">
        Discover a World{" "}
        <span className="after:content-['\a'] before:content-['\a'] whitespace-pre after:block before:block leading-3">
          of{" "}
          <span className="text-amber-700 font-semibold">Deliciousness </span>
        </span>
        <span className="">
          <span>with</span> <span className="">Recipe</span>
          <span className="font-semibold text-amber-700">Realm</span>
        </span>
      </h3>
      <p className="max-w-[300px] sm:max-w-[500px] md:max-w-[700px] text-[#fafafac3] text-[16px] pt-10">
        Welcome to RecipeRealm, the ultimate destination for food enthusiasts
        and aspiring chefs. Our website offers a vast collection of
        mouth-watering recipes, ranging from classic dishes to trendy and
        innovative creations. Join us on a journey of culinary exploration and
        satisfaction, and make every meal a masterpiece with RecipeRealm.
      </p>
    </section>
  );
};

export default Home;
