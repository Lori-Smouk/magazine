import React from 'react';

function Button({setBought, idBase, boughtBase}) {

    return (
        <div className="card-button">
            <button className="btn" onClick={() => setBought(idBase)} disabled={boughtBase}>
                {boughtBase ? "Добавлено в корзину" : "Добавить в корзину"}
            </button>
        </div>
    );
}

export default Button;