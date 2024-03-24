import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed p-28">
            <SectionTitle
                heading="Check it out"
                subHeading="FROM OUR MENU"
            ></SectionTitle>

            <div className="flex md:flex items-center justify-center py-20 px-36 gap-6 bg-slate-400 bg-opacity-10">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 text-white">
                    <p> <span className="font-bold">March 20, 2023</span> <br />
                        WHERE CAN I GET SOME? <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;