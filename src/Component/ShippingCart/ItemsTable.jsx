import DetailTable from "./DetailTable"

const ItemsTable =()=>{
    return (
        <>
        <h5>Items in Cart</h5>
				<p>All your items are viewable in the list. You can remove them or duplicate them</p>

                {/* Display Add Items Table */}

                <DetailTable/>

              
        </>
    )
}

export default ItemsTable