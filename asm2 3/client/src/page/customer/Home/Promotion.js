import { Carousel } from "react-bootstrap";
import logo1 from "../../../Assesst/Lazada-8.jpg";
import logo2  from "../../../Assesst/Lazada-9.jpg"

function Promotion() {
    return (
    <Carousel style={{ height: "100%" }}

        variant="dark">
        <Carousel.Item style={{ height: "100%" }}>
            <img src={logo1}
                    className="d-block w-100" style={{ height: "700px", objectFit: "fill" }}></img>
        </Carousel.Item>
        <Carousel.Item style={{ height: "100%" }}>
            <img src={logo2}
                    className="d-block w-100" style={{ height: "700px", objectFit: "fill" }}></img>
        </Carousel.Item>
    </Carousel> );
}

export default Promotion;