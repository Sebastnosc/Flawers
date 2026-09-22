/* --- LOGIN INTERACTIVO --- */
.login-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0f1423;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  transition: opacity 0.8s ease, visibility 0.8s ease;
}

.login-card {
  background: #1b2033;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  text-align: center;
  max-width: 340px;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.login-card img {
  width: 100%;
  max-height: 180px;
  object-fit: cover;
  border-radius: 12px;
}

.login-card h2 {
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1.4rem;
  margin: 0;
}

.login-card p {
  color: #a0a5b5;
  font-family: sans-serif;
  font-size: 0.9rem;
  margin: 0;
}

.login-card input {
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #333a52;
  background-color: #2a3045;
  color: #ffffff;
  font-size: 1rem;
  text-align: center;
  outline: none;
  box-sizing: border-box;
}

.login-card button {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: #ff4081;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}

.error-msg {
  color: #ff5252;
  font-size: 0.8rem;
  font-family: sans-serif;
  display: none;
}

.login-overlay.hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

/* --- MENSAJE Y POSDATA --- */
.mensaje-romantico {
  position: absolute;
  top: 6%;
  width: 100%;
  text-align: center;
  z-index: 500;
  font-family: sans-serif;
}

.mensaje-romantico h1 {
  font-size: 2rem;
  color: #ffe600;
  margin: 0;
}

.mensaje-postdata {
  position: fixed;
  bottom: 20px;
  right: 20px;
  max-width: 300px;
  text-align: right;
  z-index: 9999;
  font-family: sans-serif;
  font-size: 1rem;
  color: #ffe600;
  pointer-events: none;
}
