import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;
const uri = process.env.URI;

app.use(express.json());

let db, usuariosCollection;

// Conexión a la base de datos
MongoClient.connect(uri)
  .then(client => {
    db = client.db('crudDB'); // Cambia el nombre si deseas
    usuariosCollection = db.collection('usuarios');

    console.log("Conectado a MongoDB sin ORM");

    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  })
  .catch(error => console.error('Error al conectar a MongoDB:', error));

// Rutas
app.get('/', (req, res) => {
  res.send('Bienvenido a mi API CRUD sin Mongoose');
});

// Crear usuario
app.post('/usuarios', async (req, res) => {
  try {
    const result = await usuariosCollection.insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
});

// Obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await usuariosCollection.find().toArray();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

// Obtener usuario por ID
app.get('/usuarios/:id', async (req, res) => {
  try {
    const usuario = await usuariosCollection.findOne({ _id: new ObjectId(req.params.id) });
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    console.error("Error al obtener usuario por ID:", error);
    res.status(500).json({ error: 'Error al obtener usuario' });
  }
});

// Actualizar usuario
app.put('/usuarios/:id', async (req, res) => {
  try {
    const result = await usuariosCollection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const usuarioActualizado = await usuariosCollection.findOne({ _id: new ObjectId(req.params.id) });
    res.status(200).json(usuarioActualizado);
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
});

// Eliminar usuario
app.delete('/usuarios/:id', async (req, res) => {
  try {
    const result = await usuariosCollection.deleteOne({ _id: new ObjectId(req.params.id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
});
