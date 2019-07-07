import { firestoreRef, storageRef } from '../firebase/firestore';
import { firestore } from 'firebase';

/*
    titulo
    descripcion
    fotoUrl
    url
    creationDate
*/
class Publicaciones {
    async getPublicaciones(res) {
        try {
            firestoreRef
                .collection('publicaciones')
                .orderBy('creationDate', 'desc')
                .get().then(function (respuesta) {
                    const publicaciones =
                        respuesta.docs.map(item => Object.assign({ _id: item.id }, item.data()));
                    res.status(200).send({ publicaciones });
                }).catch(error => {
                    throw error
                });
        }
        catch (error) {
            console.log(error)
            res.status(500).send({ success: false, error, message: "Ocurrió algo!" });
        }
    }


}



export default new Publicaciones()