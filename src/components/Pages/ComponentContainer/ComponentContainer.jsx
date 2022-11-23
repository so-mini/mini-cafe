import NavBar from "../../NavBar/NavBar"
import CartWidget from "../../CartWidget/CartWidget"
import ItemListContainer from "../../ItemListContainer/ItemListContainer"


// Container for all components

const ComponentContainer = () => {

    return (
        <div>
            <NavBar />
            <ItemListContainer greeting={'Welcome to Mini Cafe!'} />
        </div>
    )

}

export default ComponentContainer