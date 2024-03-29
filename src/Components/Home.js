import { Row, Col } from "react-bootstrap"
import TopNavBar from "./Header"
import VideoBanner from "./VideoBanner"
import OurServices from "./OurServices"
import WideCoverage from "./WideCoverage"
import WhyChooseus from "./WhyChooseUs"
import OurValueBeliefs from "./OurValueBeliefs"
import OurProperties from "./OurProperties"
import Testimonials from "./Testimonials"
import Blog from "./Blog"
import Certificate from "./Certificate"
import ComprehensiveManagements from "./ComprehensiveManagements"
import Footer from "./Footer"

function Home() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <TopNavBar />
                </Col>
                <Col lg={12} className="">
                    <VideoBanner />
                </Col>
                <Col lg={12} className="p-5 text-white pg-1">
                    <ComprehensiveManagements />
                </Col>
                <Col lg={12} className="pg-1">
                    <OurServices />
                </Col>
                <Col lg={12} className="pg-1">
                    <WideCoverage />
                </Col>
                <Col lg={12}>
                    <OurProperties />
                </Col>
                <Col lg={12} className="pg-1">
                    <OurValueBeliefs />
                </Col>
                <Col lg={12} className="pg-1">
                    <WhyChooseus />
                </Col>
                {/* <Col lg={12}>
                    <Certificate />
                </Col> */}
                <Col lg={12}>
                    <Testimonials />
                </Col>
                <Col lg={12}>
                    <Blog />
                </Col>
                <Col lg={12}>
                    <Footer />
                </Col>
            </Row>
        </>
    )
}
export default Home