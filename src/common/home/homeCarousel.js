import React from "react"
import { Carousel } from "antd"
import slide1 from '../../data/img/home/banner4.png'

export default function HomeCarousel() {
    return (
        <Carousel autoplay={true}>
            <div className="slide1">
                <img style={{ width: "100%" }} alt="curousel" src={slide1} />
            </div>
        </Carousel>
    )
} 