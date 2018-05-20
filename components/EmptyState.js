export default () => (
    <article>
            <p className="empty-state">No existen resultados para tu búsqueda</p>
        <style jsx>{`
          .empty-state{
            width: 100%;
            color: #333333;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
    `}</style>
    </article>
)