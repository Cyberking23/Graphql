// src/database.js

import mongoose from "mongoose";

// Función para conectar a la base de datos
export async function connected() {
    try {
        // Cadena de conexión corregida
        await mongoose.connect('mongodb://localhost/mongodbgraphql', {
            useNewUrlParser: true,
            useUnifiedTopology: true // Se recomienda añadir esto
        });
        console.log(">>> DB is connected");
    } catch  {
        console.log("Something went wrong");
    }
}
