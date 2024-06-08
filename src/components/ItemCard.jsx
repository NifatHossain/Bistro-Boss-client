import useMenu from "../hooks/useMenu";


const ItemCard = ({requiredItem}) => {
    const [menu]=useMenu()
    console.log(menu.length)
    const reqItems= menu.filter(item=>item.category===requiredItem)
    return (
        <div className="grid grid-cols-3 gap-3">
            {
                reqItems.map(item=><>
                    <div className="card card-compact  bg-base-100 mb-3 shadow-xl">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <p className="bg-black text-white px-3 py-2 absolute top-3 right-4">${item.price}</p>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p>{item.recipe}</p>
                            <div className="card-actions justify-center">
                            <button className="btn text-orange-400 bg-slate-100 border-0 border-b-4 border-orange-400 btn-outline font-semibold">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    </>

                )
            }
        </div>
    );
};

export default ItemCard;