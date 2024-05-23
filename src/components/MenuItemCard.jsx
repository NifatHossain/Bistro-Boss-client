

const MenuItemCard = ({item}) => {
    const {name,image,recipe,price}=item;
    return (
        <div>
            <div className="flex space-x-4 mb-3">
                <img className="w-20 rounded-b-[200px] rounded-r-[200px]" src={image} alt="" />
                <div className="text-gray-400">
                    <p className="text-2xl">{name}-----------</p>
                    <p>{recipe}</p>
                </div>
                <p className="text-yellow-500">${price}</p>
            </div>
        </div>
    );
};

export default MenuItemCard;