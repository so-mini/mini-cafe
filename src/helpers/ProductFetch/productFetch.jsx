let obj = [
    {id: 'hot-americano', name: 'Hot Americano', category: 'Beverages',stock: '50',price: '$3',  photo: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},

    {id: 'iced-americano', name: 'Iced Americano', category: 'Beverages',stock: '50',price: '$5',  photo:'https://images.unsplash.com/photo-1581996323441-538096e854b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80'},

    {id: 'hot-latte', name: 'Hot Latte', category: 'Beverages',stock: '50',price: '$7',  photo:'https://images.unsplash.com/photo-1658465915263-647942aa965a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'},

    {id: 'iced-latte', name: 'Iced Latte', category: 'Beverages',stock: '50',price: '$10',  photo:'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},

    {id: 'caramel-macchiato', name: 'Iced Caramel Macchiato', category: 'Beverages',stock: '50',price: '$10',  photo:'https://images.unsplash.com/photo-1608802833178-56df8d3539c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},

    {id: 'hot-tea', name: 'Hot Tea (Green/Peppermint/Chamomile)', category: 'Beverages',stock: '50',price: '$7',  photo:'https://images.unsplash.com/photo-1576092762793-c0e9395ec4b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},

    {id: 'brownie', name: 'Brownie', category: 'Desserts',stock: '50',price: '$5',  photo:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},

    {id: 'cheesecake', name: 'Cheesecake', category: 'Desserts',stock: '50',price: '$10',  photo:'https://images.unsplash.com/photo-1567171466295-4afa63d45416?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},

    {id: 'cake', name: 'Cake (Chocolate/Vanilla)', category: 'Desserts',stock: '50',price: '$12',  photo:'https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'},

    {id: 'muffin', name: 'Muffin (Banana/Blueberry)', category: 'Desserts',stock: '50',price: '$10',  photo:'https://images.unsplash.com/photo-1557925923-6982bd9650ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'},

    {id: 'bagel', name: 'Bagel (Plain/Blueberry)', category: 'Desserts',stock: '50',price: '$8',  photo:'https://images.unsplash.com/photo-1518562923427-19e694fbd8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'},


]

export const productFetch = (number) => {
    return new Promise( (resolve, reject)=>{
        const condition = true
        if (condition) {    
            setTimeout(()=>{
                resolve(obj)            
            }, 1000)
        } else {
            reject( 'No products are available at the moment.' )        
        }
    } )
}
