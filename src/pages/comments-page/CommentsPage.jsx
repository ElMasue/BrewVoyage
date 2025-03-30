import React, { useEffect, useState } from "react";
import { database } from "../../firebase/firebaseConfig";
import { ref, onValue, push, remove, update } from "firebase/database";
import "./CommentsPage.css";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    Name: "",
    Text: "",
    Review: 3,
    Date: new Date().toLocaleDateString()
  });
  const [editingComment, setEditingComment] = useState(null);
  const [filterRating, setFilterRating] = useState(0);
  const [dateFilter, setDateFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    const commentsRef = ref(database, "coment");
    onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const commentsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setComments(commentsArray);
      }
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingComment) {
      setEditingComment(prev => ({
        ...prev,
        [name]: name === "Review" ? parseInt(value) : value
      }));
    } else {
      setNewComment(prev => ({
        ...prev,
        [name]: name === "Review" ? parseInt(value) : value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingComment) {
      // Actualizar comentario existente
      const commentRef = ref(database, `coment/${editingComment.id}`);
      update(commentRef, {
        Name: editingComment.Name,
        Text: editingComment.Text,
        Review: editingComment.Review
      });
      setEditingComment(null);
    } else {
      // Añadir nuevo comentario
      if (!newComment.Name || !newComment.Text) return;
      const commentsRef = ref(database, "coment");
      push(commentsRef, newComment);
      setNewComment({
        Name: "",
        Text: "",
        Review: 3,
        Date: new Date().toLocaleDateString()
      });
    }
  };

  const handleEdit = (comment) => {
    setEditingComment({...comment});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (commentId) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este comentario?")) {
      const commentRef = ref(database, `coment/${commentId}`);
      remove(commentRef);
    }
  };

  const cancelEdit = () => {
    setEditingComment(null);
  };

  const filteredComments = comments.filter(comment => {
    // Filtro por valoración
    const ratingMatch = filterRating === 0 || comment.Review >= filterRating;
    
    // Filtro por fecha
    const commentDate = new Date(comment.Date.split('/').reverse().join('/'));
    const now = new Date();
    let dateMatch = true;
    
    switch(dateFilter) {
      case "today":
        dateMatch = commentDate.toDateString() === now.toDateString();
        break;
      case "week":
        const oneWeekAgo = new Date(now);
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        dateMatch = commentDate >= oneWeekAgo;
        break;
      case "month":
        const oneMonthAgo = new Date(now);
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        dateMatch = commentDate >= oneMonthAgo;
        break;
      default: // "all"
        dateMatch = true;
    }
    
    return ratingMatch && dateMatch;
  });

  // Ordenar comentarios
  const sortedComments = [...filteredComments].sort((a, b) => {
    const dateA = new Date(a.Date.split('/').reverse().join('/'));
    const dateB = new Date(b.Date.split('/').reverse().join('/'));
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

   return (
    <div className="comments-container">
      <h1>Comentarios de Usuarios</h1>
      
      {/* Formulario para añadir/editar comentarios */}
      <div className="add-comment-form">
        <h2>{editingComment ? "Editar comentario" : "Añadir nuevo comentario"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="Name"
              value={editingComment ? editingComment.Name : newComment.Name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Comentario:</label>
            <textarea
              name="Text"
              value={editingComment ? editingComment.Text : newComment.Text}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>Valoración (1-5):</label>
              <select
                name="Review"
                value={editingComment ? editingComment.Review : newComment.Review}
                onChange={handleInputChange}
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Fecha:</label>
              <input
                type="text"
                value={editingComment ? editingComment.Date : newComment.Date}
                readOnly
              />
            </div>
          </div>
          <div className="form-buttons">
            <button type="submit" className="submit-button">
              {editingComment ? "Actualizar" : "Enviar"}
            </button>
            {editingComment && (
              <button type="button" className="cancel-button" onClick={cancelEdit}>
                Cancelar
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Filtros */}
      <div className="filter-section">
        <h3>Filtrar comentarios:</h3>
        
        <div className="filter-group">
          <h4>Por valoración:</h4>
          <div className="filter-options">
            <button 
              className={filterRating === 0 ? "active" : ""}
              onClick={() => setFilterRating(0)}
            >
              Todas
            </button>
            {[1, 2, 3, 4, 5].map(rating => (
              <button
                key={rating}
                className={filterRating === rating ? "active" : ""}
                onClick={() => setFilterRating(rating)}
              >
                {rating}+ ★
              </button>
            ))}
          </div>
        </div>
        
        <div className="filter-group">
          <h4>Por fecha:</h4>
          <div className="filter-options">
            <button
              className={dateFilter === "all" ? "active" : ""}
              onClick={() => setDateFilter("all")}
            >
              Todas
            </button>
            <button
              className={dateFilter === "today" ? "active" : ""}
              onClick={() => setDateFilter("today")}
            >
              Hoy
            </button>
            <button
              className={dateFilter === "week" ? "active" : ""}
              onClick={() => setDateFilter("week")}
            >
              Esta semana
            </button>
            <button
              className={dateFilter === "month" ? "active" : ""}
              onClick={() => setDateFilter("month")}
            >
              Este mes
            </button>
          </div>
        </div>
        
        <div className="filter-group">
          <h4>Ordenar por fecha:</h4>
          <div className="filter-options">
            <button
              className={sortOrder === "newest" ? "active" : ""}
              onClick={() => setSortOrder("newest")}
            >
              Más recientes primero
            </button>
            <button
              className={sortOrder === "oldest" ? "active" : ""}
              onClick={() => setSortOrder("oldest")}
            >
              Más antiguos primero
            </button>
          </div>
        </div>
      </div>

      {/* Lista de comentarios */}
      {sortedComments.length > 0 ? (
        <div className="comments-list">
          {sortedComments.map((comment) => (
            <div key={comment.id} className="comment-card">
              <div className="comment-header">
                <div>
                  <h2>{comment.Name}</h2>
                  <p className="comment-date">{comment.Date}</p>
                </div>
                <div className="comment-actions">
                  <span className="comment-rating">
                    {Array.from({ length: comment.Review }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </span>
                  <div>
                    <button 
                      className="edit-button"
                      onClick={() => handleEdit(comment)}
                    >
                      Editar
                    </button>
                    <button 
                      className="delete-button"
                      onClick={() => handleDelete(comment.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
              <p className="comment-text">{comment.Text}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-comments">No hay comentarios que coincidan con los filtros seleccionados.</p>
      )}
    </div>
  );
}

export default CommentsPage;