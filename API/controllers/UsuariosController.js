import { firestoreRef, storageRef } from '../firebase/firestore';

class Usuarios {

    // METODO DE LA CLASE USUARIOS
    async getUsuarios(res) {
        try {
            let registros = [];
            let consulta = firestoreRef.collection("usuarios").orderBy('fechaCreacion', 'desc')
            consulta.get().then(function (respuesta) {
                registros = respuesta.docs;
                registros = registros.map(item => Object.assign({ _id: item.id }, item.data()));
                res.status(200).send({
                    registros: registros
                });
            })
        }
        catch (err) {
            console.log(error)
            res.status(500).send({ success: false, error, message: "Ocurrió algo!" });
        }
    }



}


export default new Usuarios();