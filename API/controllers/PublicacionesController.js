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
    async savePublicacion(req, res) {
        //[1] EXTRAER claves DE req.body
        const { titulo, descripcion, fotoUrl } = req.body;
        //[2] ASIGNAR CLAVES A OBEJTO DATA
        const publicacion = {
            titulo,
            descripcion,
            fotoUrl,
            creationDate: firestore.FieldValue.serverTimestamp(),
            estado: 'A'
        }
        try {
            //[2] SUBSCRIPCION A QUERY PARA INSERTAR EN  FIREBASE
            firestoreRef
                .collection('publicaciones')
                .add(publicacion)
                .then(function (respuesta) {
                    //[3] SI INSERT OK -> DEVUELVO [2] 
                    console.log("Document written with ID: ", respuesta.id);
                    publicacion._id = respuesta.id;
                    res.status(200).send({ publicacion });
                }).catch(error => {
                    throw error
                });
        }
        catch (error) {
            //[3.1] IMPRIMO MENSAJE DEVUELVO MENSAJE DE ERROR GENERICO
            res.status(500).send({ success: false, error, message: "Ocurrió algo!" });
        }
    }

}



export default new Publicaciones()