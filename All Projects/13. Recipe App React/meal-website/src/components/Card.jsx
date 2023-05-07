const Card = ({ mealName, mealImage, onClick }) => {
  return (
    <div
      className="card group w-64 bg-[#e9ddd2df] shadow-xl cursor-pointer"
      onClick={onClick}
    >
      <figure className="px-5 pt-5 rounded-xl group-hover:scale-110 transition-all duration-300">
        <img src={mealImage} alt="Category Image" />
      </figure>
      <div className="card-body items-center text-center group-hover:text-amber-900 transition-all duration-150">
        <h2 className="card-title">{mealName}</h2>
      </div>
    </div>
  );
};

export default Card;
