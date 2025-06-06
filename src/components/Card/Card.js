import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function Cards() {
    return (
        // Card component from bootstrap
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="logo512.png" />
                <Card.Body>
                    <Card.Title>Card Titles</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewher</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Cards;
