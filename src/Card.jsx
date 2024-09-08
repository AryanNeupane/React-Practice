
import './Card.css'

function Card(props) {
    return (

        <>
            <div class="card">
                <div class="card-header">
                    <h2>{props.title}</h2>
                </div>
                <div class="card-image">
                    <img src="https://via.placeholder.com/300x200" alt="Card image" />
             </div>
                <div class="card-body">
                    <p>
                        This is a simple card component with an image, title, and some text. You can use this for various purposes like showcasing content or products.
                    </p>
                </div>
                <div class="card-footer">
                    <button class="btn-primary">Learn More</button>
                    <button class="btn-secondary">Share</button>
                </div>
            </div>
        </>
    )
}
export default Card