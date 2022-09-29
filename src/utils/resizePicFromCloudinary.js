import { scale } from "@cloudinary/url-gen/actions/resize";
import cld from "../services/getCloudinaryImages";

const setImageSize = (image) => {
    return cld.image(`main page photos/${image}`).resize(scale().width(0.2)).toURL();
}

export default setImageSize