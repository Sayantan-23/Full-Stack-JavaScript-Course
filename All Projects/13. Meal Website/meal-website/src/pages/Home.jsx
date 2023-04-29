const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-16 pt-36 text-center">
      <h3 className="text-white text-4xl sm:text-5xl md:text-7xl font-light block">
        Discover a World{" "}
        <span className="after:content-['\a'] before:content-['\a'] whitespace-pre after:block before:block leading-3">
          of{" "}
          <span className="text-amber-700 font-semibold">Deliciousness </span>
          <span>with</span>{" "}
        </span>
        <span className="m-auto flex flex-col justify-center relative">
          <span className="text-amber-700 font-semibold left-1/2 relative md:text-8xl -translate-x-1/2 -top-2">Recipe</span>
          <span className="z-10 absolute left-1/2 -translate-x-1/2 top-6 md:text-9xl">🍔</span>
          <span className="font-semibold md:text-[110px] z-20 absolute left-1/2 -translate-x-1/2 top-[70px]">Realm</span>
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
