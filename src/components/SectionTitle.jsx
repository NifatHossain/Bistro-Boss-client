
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="my-4 w-4/12 mx-auto">
            <p className="text-center text-yellow-500 mb-2">---{subHeading}---</p>
            <p className="text-3xl text-center border-y-4 p-3 font-semibold">{heading}</p>
        </div>
    );
};

export default SectionTitle;