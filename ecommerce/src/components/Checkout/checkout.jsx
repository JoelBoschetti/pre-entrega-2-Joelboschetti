import { getFirestore } from "firebase/firestore";
import { useState } from "react";






export default function Checkout(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [orderId, setOrderId] = useState("")
 function crearOrden(){
    const db = getFirestore();
    const order = {
        buyer: {
            name,
            email,
            phone,
        },
    };
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, order).then(result => setOrderId(result.id))
}
if (orderId) {
return <h1> {`Gracias por tu compra, tu id de pedido es ${orderId}`} </h1>
}


    return(
        <form  onSubmit={(e) => e.preventDefault()} style={{display:'flex', flexDirection:"column", gap: "30px" }}>
<label>
Nombre
</label>
<input type="text" value={name} onChange={(event) => setName(event.target.value)} />
<label>
    Email
</label>
<input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />

<label>
    Numero
</label>
<input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />

<button onClick={crearOrden}>Finalizar Compra</button>
        </form>
        
    )


}
