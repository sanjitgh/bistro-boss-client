import { Helmet } from "react-helmet-async";
import BannerCover from "../../shared/BannerCover/BannerCover";
import imgBg from "../../../assets/shop/banner2.jpg"

const OurShop = () => {
    return (
        <>
        <Helmet>
            <title>BistroBoss - Our Shop</title>
        </Helmet>
        <BannerCover 
        title={'our shop'}
        innerContent={'Would you like to try a dish?'}
        bgImg={imgBg}
        ></BannerCover>
        </>
    );
};

export default OurShop;