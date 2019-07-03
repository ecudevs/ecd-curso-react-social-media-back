import { firestoreRef, storageRef } from '../firebase/firestore';
import { firestore } from 'firebase';

class Usuarios {
    async getUsuarios(res) {
        try {
            firestoreRef.collection("usuarios").orderBy('creationDate', 'desc')
                .get().then(function (respuesta) {
                    const usuarios = respuesta.docs.map(item => Object.assign({ _id: item.id }, item.data()));
                    res.status(200).send({ usuarios });
                }).catch(function (error) {
                    throw error
                });
        }
        catch (err) {
            console.log(error)
            res.status(500).send({ success: false, error, message: "Ocurrió algo!" });
        }
    }


    async saveUsuarios(req, res) {
        //[1] EXTRAER claves DE req.body
        const { correo, descripcion, fotoUrl, nombres, amigos } = req.body
        //[2] ASIGNAR CLAVES A OBEJTO DATA
        const usuario = {
            correo,
            descripcion,
            fotoUrl,
            nombres,
            amigos: [],
            creationDate: firestore.FieldValue.serverTimestamp()
        };
        try {
            //[2] SUBSCRIPCION A QUERY PARA INSERTAR EN  FIREBASE
            firestoreRef.collection('usuarios').add({ ...usuario })
                .then(function (respuesta) {
                    //[3] SI INSERT OK -> DEVUELVO [2] PARA EVITAR CONSULTAR DE NUEVO POR ID
                    console.log("Document written with ID: ", respuesta.id);
                    res.status(200).send({ usuario });
                }).catch(function (error) {
                    //[3] SI INSERT FAIL -> SALGO AL CATCH PRINCIPAL
                    throw error
                });
        }
        catch (err) {
            //[3.1] IMPRIMO MENSAJE DEVUELVO MENSAJE DE ERROR GENERICO
            console.log(error)
            res.status(500).send({ success: false, error, message: "Ocurrió algo!" });
        }
    }







}


export default new Usuarios();