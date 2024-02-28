import React from 'react';

const CardComponent = ({ title, description, imageUrl }) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            margin: '16px',
            padding: '16px',
        }}>
            <div style={{
                flexBasis: '60%',
                padding: '16px',
            }}>
                <h2 style={{ marginTop: '0' }}>{title}</h2>
                <hr style={{
                    border: 'none',
                    height: '1px',
                    color: '#ccc',
                    backgroundColor: '#ccc',
                    margin: '16px 0'
                }} />
                <p>{description}</p>
            </div>
            <div style={{
                flexBasis: '40%',
            }}>
                <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    );
}

export default CardComponent;
