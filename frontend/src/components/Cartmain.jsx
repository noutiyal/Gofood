import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function Cartmain(props) {
    let options = props?.options;
    console.log(options[0], "options");

    let priceoptions = Object.keys(options[0]);

    console.log(priceoptions, "priceoptions");

    return (
        <div>
            <Card className="mt-3">
                <Card.Img
                    variant="top"
                    src={props.imgscr}
                    style={{ height: "260px", objectFit: "fill" }}
                />
                <Card.Body>
                    <Card.Title>{props.foodName}</Card.Title>
                    <Card.Text></Card.Text>
                    <div className="container w-100">
                        <select className="m-2 h-100  bg-success">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                );
                            })}
                        </select>
                        <select className="m-2 h-100 bg-success rounded">
                            {priceoptions?.map((e) => {
                                return (
                                    <>
                                        <option value={e}>{e}</option>
                                    </>
                                );
                            })}
                        </select>
                        <h5 className="d-inline h-100 fs-5">Total price</h5>

                        <h6 variant="primary">Price</h6>
                        <hr />
                        <button className="btn bg-white text-secondary mx-1">
                            Add to Cart
                        </button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
