import React, { useEffect, useState } from "react";
import { database } from "../../firebase/firebaseConfig"; // Asegúrate de que la ruta sea correcta
import { ref, onValue } from "firebase/database";
import "./CommentsPage.css"; // Archivo de estilos (opcional)

function CommentsPage() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Referencia a la base de datos
    const commentsRef = ref(database, "coment");

    // Escuchar cambios en la base de datos
    onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convertir el objeto de comentarios en un array
        const commentsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setComments(commentsArray);
      }
    });
  }, []);

  return (
    <div className="comments-container">
      <h1>Comentarios de Usuarios</h1>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className="comment-card">
            <h2>{comment.Name}</h2>
            <p className="comment-date">{comment.Date}</p>
            <p className="comment-text">{comment.Text}</p>
            <p className="comment-review">Valoración: {comment.Review}/5</p>
          </div>
        ))
      ) : (
        <p>No hay comentarios disponibles.</p>
      )}
    </div>
  );
}

export default CommentsPage;