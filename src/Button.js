import React from 'react';

function Button({setBought, idBase, bougtBase}) {

    return (
        <div className="card-button">
            <button className="btn" onClick={() => setBought(idBase)} disabled={bougtBase}>
                {bougtBase ? "Добавлено в корзину" : "Добавить в корзину"}
            </button>
        </div>
    );
}

export default Button;