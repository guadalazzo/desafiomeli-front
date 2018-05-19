export default () => (
  <div className="loading-container">
    <img src="../static/loading.gif" alt="loading-item" />
    <style jsx>{`
      .loading-container {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 7em;
      }
    `}</style>
  </div>
);
