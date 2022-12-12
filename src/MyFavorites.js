import React from "react"
import Card from "./Card"
import CreateData from "./CreateData"

export default function MyFavorites() {
    const [cardData, setCardData] = React.useState([])

    React.useEffect(() => {
        fetch('https://my-json-server.typicode.com/KevinKipkoechMutai/save-my-fav-frontend/my_favorites')
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                return Promise.reject(res)
            }
        })
        .then(data => {
            console.log(data)
            setCardData(data)
        })
      }, [setCardData])
      
    
    function handleAddItem(newItem) {
        setCardData([...cardData, newItem])
    }

    function handleUpdateItem(updatedItem) {
        const updatedItems = cardData.map((item) => {
            if (item.id === updatedItem.id) {
                return updatedItem
            } else {
                return item
            }
        })
        setCardData(updatedItems)
    }

    //console.log(cardData)
    const cardInfo = Array.from(cardData).map((item) => {
        console.log(item)
        return (
            <Card 
                key={item.id}
                {...item}
                cardData = {cardData}
                setCardData = {setCardData}
                handleUpdateItem = {handleUpdateItem}
            />
        )
    })



    return (
        <div className="my-favs">
            <div className="my-favs-header">
                <h1>My Favorites</h1>
                <CreateData 
                    onAddItem= {handleAddItem}
                />
            </div>
            <div className="cards--section">
                    {cardInfo}
            </div>
        </div>
    )
}