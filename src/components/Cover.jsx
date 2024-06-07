

const Cover = ({img,title,subTitle}) => {
    return (
        <div>
            <div className="bg-cover relative h-[600px] bg-fixed bg-center bg-no-repeat" style={{backgroundImage:`url(${img})`}}>
                <div className="h-full flex items-center justify-center ">
                    <div className="relative h-[50%] w-[80%]">
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className=" z-10 pt-28 relative">
                            <h2 className="text-center  text-6xl mb-4 font-bold text-white">{title}</h2>
                            <p className="text-center text-white">{subTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;
